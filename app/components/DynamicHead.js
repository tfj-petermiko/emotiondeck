"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import metadataMap from "../metadataMap.json";

export default function DynamicHead() {
  const pathname = usePathname();
  const meta = metadataMap[pathname] || metadataMap["/"] || {};

  useEffect(() => {
    if (!meta || typeof document === "undefined") return;

    // 💥 Global fix: always enforce full title & meta even after hydration
    const applyMetadata = () => {
      if (meta.title) {
        document.title = meta.title;
        let titleTag = document.querySelector("head > title");
        if (!titleTag) {
          titleTag = document.createElement("title");
          document.head.appendChild(titleTag);
        }
        titleTag.textContent = meta.title;
      }

      // description
      setMeta("description", meta.description);
      setMeta("keywords", meta.keywords);

      // canonical
      if (meta.canonical) {
        let link = document.querySelector("link[rel='canonical']");
        if (!link) {
          link = document.createElement("link");
          link.setAttribute("rel", "canonical");
          document.head.appendChild(link);
        }
        link.setAttribute("href", meta.canonical);
      }

      // Open Graph
      setOG("og:title", meta.og_title);
      setOG("og:description", meta.og_description);
      setOG("og:url", meta.og_url);
      setOG("og:image", meta.og_image);

      // Twitter
      setMeta("twitter:card", meta.twitter_card);
      setMeta("twitter:title", meta.twitter_title);
      setMeta("twitter:description", meta.twitter_description);
      setMeta("twitter:image", meta.twitter_image);
    };

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

    const setOG = (property, content) => {
      if (!content) return;
      let tag = document.querySelector(`meta[property='${property}']`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    // 👇 Force metadata after hydration and whenever title resets
    applyMetadata();

    // Monitor for unwanted DOM rewrites (React hydration / Next.js)
    const observer = new MutationObserver(() => {
      const currentTitle = document.title?.trim();
      if (meta.title && currentTitle !== meta.title) {
        console.warn("⚠️ Title reset detected — reapplying metadata");
        applyMetadata();
      }
    });

    observer.observe(document.head, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
