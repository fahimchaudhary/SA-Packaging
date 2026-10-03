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

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
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
      "S.A Packaging | Heat-Seal Aluminium Foil Lids Manufacturer, Mumbai",
    description:
      "S.A Packaging, Sakinaka Mumbai — manufacturer of heat-seal aluminium foil lids for dairy, beverage, PET jar, HIPS dessert and blister packs. 5 mm to 400 mm, 2 crore pieces per month. Bulk supply only.",
  },
  "/about": {
    title: "About S.A Packaging | Foil Lid Manufacturer since 2014, Mumbai",
    description:
      "12 years of foil lid manufacturing from Sakinaka, Mumbai. Capacity 2 crore pieces per month, sizes 5 mm to 400 mm, 25 to 40 micron, die-cut or roll supply. GSTIN 27BFQPD7974E1Z0.",
  },
  "/products": {
    title: "Foil Lid Products | Poly PP, Printed, HIPS, PET & Blister Lids",
    description:
      "Browse heat-seal aluminium foil lids by category — Poly PP, printed brand lids, HIPS dessert cup lids, PP lacquer roll stock, blister lidding foil and PET jar seals. Specifications on every product.",
  },
  "/gallery": {
    title: "Die Inventory & Samples Catalog | 77+ Packaging Dies | S.A Packaging",
    description:
      "Inspect 77+ live production foil lid dies, custom printed lids, embossed foils, and roll stock samples from S.A Packaging, Sakinaka, Mumbai.",
  },
  "/customization": {
    title: "Custom & Private Label Foil Lids | S.A Packaging",
    description:
      "Custom diameter, print and seal chemistry made to your cup. Share your cup, lock the seal layer, approve the print proof, then bulk manufacture at Sakinaka, Mumbai.",
  },
  "/contact": {
    title: "Contact S.A Packaging | Bulk Foil Lid Enquiry, Mumbai",
    description:
      "Send your foil lid enquiry — polymer, diameter, print and monthly quantity. Sakinaka, Mumbai. Monday to Saturday, 9:30 am to 6:30 pm IST. Bulk and industrial supply only.",
  },
};

export function useDocumentMeta(route: Route, productName?: string) {
  useEffect(() => {
    const base = TITLES[route.path] ?? TITLES["/"];
    document.title = productName
      ? `${productName} | S.A Packaging`
      : base.title;

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute(
      "content",
      productName
        ? `${productName} — specification, seal type, size and supply form from S.A Packaging, heat-seal aluminium foil lid manufacturer in Mumbai. Bulk enquiry only.`
        : base.description,
    );
  }, [route.path, route.param, productName]);
}
