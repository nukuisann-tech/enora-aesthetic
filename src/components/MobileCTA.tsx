"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function MobileCTA() {
  const pathname = usePathname();
  if (pathname === "/consultation") return null;

  return (
    <div
      className="no-print fixed inset-x-0 bottom-0 z-40 grid h-[54px] grid-cols-2 border-t rule bg-base/95 backdrop-blur-md lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <Link
        href="/concerns"
        className="flex items-center justify-center border-r rule text-[12.5px] tracking-wide text-ink/70"
      >
        悩みから探す
      </Link>
      <Link
        href="/consultation"
        className="flex items-center justify-center bg-dark text-[12.5px] tracking-wide text-base"
      >
        相談予約
      </Link>
    </div>
  );
}
