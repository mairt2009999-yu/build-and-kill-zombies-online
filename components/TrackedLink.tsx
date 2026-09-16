"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { trackEvent } from "@/lib/track";

/**
 * 会在点击时向 GA4 发送自定义事件的 Link。
 * 用法:<TrackedLink href="..." event="walkthrough_nav" params={{direction:"next"}}>...</TrackedLink>
 */
export default function TrackedLink({
  event,
  params,
  children,
  ...props
}: ComponentProps<typeof Link> & { event: string; params?: Record<string, unknown> }) {
  return (
    <Link {...props} onClick={() => trackEvent(event, params)}>
      {children}
    </Link>
  );
}
