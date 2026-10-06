import { useCallback, useEffect, useState, type ReactNode } from "react";
import { cn } from "@/utils/cn";

/**
 * Minimal hash-based router. Hash routing keeps the build a single static
 * artefact that works on any host (including file:// and plain object
 * storage) with no server rewrite rules.
 */

export type Route = { path: string; param?: string };

function parse(): Route {
  const raw = window.location.hash.replace(/^#/, "") || "/";
  const clean = raw.split("?")[0];
  const parts = clean.split("/").filter(Boolean);
  if (parts.length === 0) return { path: "/" };
  if (parts[0] === "products" && parts[1])
    return { path: "/products", param: parts[1] };
  return { path: `/${parts[0]}` };
}

export function useRoute() {
  const [route, setRoute] = useState<Route>(() =>
    typeof window === "undefined" ? { path: "/" } : parse(),
  );

  useEffect(() => {
    const onChange = () => {
      setRoute(parse());
      window.scrollTo({ top: 0, behavior: "auto" });
    };
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  return route;
}

export function navigate(to: string) {
  window.location.hash = to;
}

export function useNavigate() {
  return useCallback((to: string) => navigate(to), []);
}

export function Link({
  to,
  children,
  className,
  activeClassName,
  onClick,
  ...rest
}: {
  to: string;
  children: ReactNode;
  className?: string;
  activeClassName?: string;
  onClick?: () => void;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "onClick">) {
  const route = useRoute();
  const isActive = route.path === to;

  const handleClick = (_e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick();
  };

  return (
    <a
      href={`#${to}`}
      onClick={handleClick}
      aria-current={isActive ? "page" : undefined}
      className={cn(className, isActive && activeClassName)}
      {...rest}
    >
      {children}
    </a>
  );
}

const TITLES: Record<string, { title: string; description: string }> = {
  "/": {
    title:
      "S A Packaging | Aluminium Foil Lids Manufacturer in Mumbai | safoillids.com",
    description:
      "S A Packaging (safoillids.com) — aluminium foil lids manufacturer & supplier in Mumbai. Heat-seal foil lids for dairy, curd, yoghurt, beverage & pharma cups. Sizes 5 mm–400 mm. Bulk supply. Call +91 81698 00610.",
  },
  "/about": {
    title: "About S A Packaging | Foil Lids Manufacturer Mumbai | safoillids.com",
    description:
      "SA Packaging has 12+ years of aluminium foil lid manufacturing experience from Sakinaka, Mumbai. Capacity 2 crore pieces/month. Sizes 5–400 mm, 25–40 micron. GSTIN 27BFQPD7974E1Z0.",
  },
  "/products": {
    title: "Aluminium Foil Lids Products | SA Packaging Mumbai | safoillids.com",
    description:
      "All aluminium foil lids by SA Packaging — Poly PP foil lids, printed foil lids, HIPS dessert lids, PP lacquer roll stock, blister lidding and PET jar seals. Bulk & industrial supply.",
  },
  "/gallery": {
    title: "Foil Lid Die Catalog & Samples | S A Packaging | safoillids.com",
    description:
      "77+ live production foil lid dies, custom printed foil samples, embossed foils & roll stock from SA Packaging, Sakinaka Mumbai. All sizes from 5 mm to 400 mm.",
  },
  "/customization": {
    title: "Custom Aluminium Foil Lids | SA Packaging Mumbai | safoillids.com",
    description:
      "Custom-diameter, custom-printed heat-seal foil lids engineered to your container. Prototype testing and bulk production by SA Packaging, Sakinaka Mumbai.",
  },
  "/contact": {
    title: "Contact SA Packaging | Foil Lids Supplier Mumbai | safoillids.com",
    description:
      "Enquire about foil lids from SA Packaging (safoillids.com) — send diameter, print, polymer & monthly quantity. Sakinaka, Mumbai. +91 81698 00610. Bulk & industrial supply only.",
  },
};

function updateMetaTag(attributeName: string, attributeValue: string, content: string) {
  let element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attributeName, attributeValue);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

export function useDocumentMeta(route: Route, productName?: string) {
  useEffect(() => {
    const base = TITLES[route.path] ?? TITLES["/"];
    const pageTitle = productName
      ? `${productName} | S A Packaging`
      : base.title;

    const pageDescription = productName
      ? `${productName} — specifications, seal type, size and supply form from S A Packaging, aluminium foil packaging manufacturer in Mumbai. Bulk supply only.`
      : base.description;

    document.title = pageTitle;
    updateMetaTag("name", "description", pageDescription);
    updateMetaTag("property", "og:title", pageTitle);
    updateMetaTag("property", "og:description", pageDescription);
    updateMetaTag("name", "twitter:title", pageTitle);
    updateMetaTag("name", "twitter:description", pageDescription);

    const canonicalUrl = route.path === "/"
      ? "https://www.safoillids.com/"
      : `https://www.safoillids.com/#${route.path}${route.param ? `/${route.param}` : ""}`;
    updateMetaTag("property", "og:url", canonicalUrl);

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute("href", canonicalUrl);
    }
  }, [route.path, route.param, productName]);
}
