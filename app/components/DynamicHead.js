"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import metadataMap from "../metadataMap.json";

export default function DynamicHead() {
  const pathname = usePathname();

  // Find matching metadata or fallback to root
  const meta = metadataMap[pathname] || metadataMap["/"] || {};

  useEffect(() => {
    if (typeof document === "undefined") return;
    if (!meta || !meta.title) return;

    // 🕐 Run after hydration to avoid Next HeadManager overwrite
    const timer = setTimeout(() => applyMeta(meta), 200);
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}

// --- Apply all metadata dynamically ---
function applyMeta(meta) {
  const head = document.head;
  if (!head) return;

  // ✅ TITLE
  let titleTag = head.querySelector("title");
  if (!titleTag) {
    titleTag = document.createElement("title");
    head.appendChild(titleTag);
  }
  titleTag.textContent = meta.title.trim();
  document.title = meta.title.trim();

  // ✅ DESCRIPTION
  setMeta("description", meta.description);
  setMeta("keywords", meta.keywords);

  // ✅ CANONICAL
  if (meta.canonical) {
    let link = head.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      head.appendChild(link);
    }
    link.setAttribute("href", meta.canonical.trim());
  }

  // ✅ OPEN GRAPH
  setOG("og:title", meta.og_title);
  setOG("og:description", meta.og_description);
  setOG("og:url", meta.og_url);
  setOG("og:image", meta.og_image);

  // ✅ TWITTER
  setMeta("twitter:card", meta.twitter_card);
  setMeta("twitter:title", meta.twitter_title);
  setMeta("twitter:description", meta.twitter_description);
  setMeta("twitter:image", meta.twitter_image);

  console.log("✅ Dynamic meta applied for:", document.title);
}

// --- Helpers ---
function setMeta(name, content) {
  if (!content) return;
  const head = document.head;
  let tag = head.querySelector(`meta[name='${name}']`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    head.appendChild(tag);
  }
  tag.setAttribute("content", content.trim());
}

function setOG(property, content) {
  if (!content) return;
  const head = document.head;
  let tag = head.querySelector(`meta[property='${property}']`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    head.appendChild(tag);
  }
  tag.setAttribute("content", content.trim());
}
