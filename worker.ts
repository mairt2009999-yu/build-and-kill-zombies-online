type Env = { ASSETS: Fetcher };

function clientScheme(request: Request): string {
  const visitor = request.headers.get("cf-visitor");
  if (visitor) {
    try {
      const parsed = JSON.parse(visitor) as { scheme?: string };
      if (parsed.scheme) return String(parsed.scheme).toLowerCase();
    } catch {
      // ignore malformed cf-visitor
    }
  }
  const forwarded = request.headers.get("x-forwarded-proto");
  if (forwarded) return forwarded.split(",")[0].trim().toLowerCase();
  return new URL(request.url).protocol.replace(":", "").toLowerCase();
}

function isFake404Path(pathname: string): boolean {
  const p = pathname.replace(/\/+$/, "") || "/";
  return p === "/404" || p === "/404.html";
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    let needsRedirect = false;
    // www -> 裸域:两个主机名提供同一份内容会被 GSC 当作重复收录
    if (url.hostname.startsWith("www.")) {
      url.hostname = url.hostname.slice(4);
      needsRedirect = true;
    }
    // http -> https(GSC 不分裂 scheme 信号)
    if (clientScheme(request) === "http") {
      url.protocol = "https:";
      needsRedirect = true;
    }
    if (needsRedirect) {
      return Response.redirect(url.toString(), 301);
    }
    // out/404.html is a real asset, so /404/ would otherwise 200 with noindex
    // (GSC "excluded by noindex"). Send Google to the homepage instead.
    if (isFake404Path(url.pathname)) {
      url.pathname = "/";
      url.search = "";
      url.hash = "";
      return Response.redirect(url.toString(), 301);
    }
    const res = await env.ASSETS.fetch(request);
    const headers = new Headers(res.headers);
    headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
    return new Response(res.body, {
      status: res.status,
      statusText: res.statusText,
      headers,
    });
  },
};
