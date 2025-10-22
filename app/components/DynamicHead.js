"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import metadataMap from "@/app/metadataMap.json";

export default function DynamicHead() {
  const pathname = usePathname();

  useEffect(() => {
    const pathKey = pathname.replace(/^\/|\/$/g, "");
    const meta =
      metadataMap[pathKey] ||
      Object.entries(metadataMap).find(([k]) => pathKey.includes(k))?.[1] ||
      metadataMap["home"] ||
      {};

    if (meta.title) document.title = meta.title;

    const setMeta = (name, content) => {
      if (!content) return;
      let tag = document.querySelector(`meta[name='${name}']`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    setMeta("description", meta.description);
    setMeta("keywords", meta.keywords);
    setMeta("og:title", meta.og_title || meta.title);
    setMeta("og:description", meta.og_description || meta.description);
    setMeta("og:image", meta.og_image);
    setMeta("og:url", meta.og_url);
    setMeta("twitter:card", meta.twitter_card || "summary_large_image");
    setMeta("twitter:title", meta.twitter_title || meta.title);
    setMeta("twitter:description", meta.twitter_description || meta.description);
    setMeta("twitter:image", meta.twitter_image);
    setMeta("google-site-verification", meta.google_verification);
  }, [pathname]);

  return null;
}
