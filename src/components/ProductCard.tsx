import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "@/lib/router";
import { getCategory, type Product } from "@/data/products";
import { Img } from "./ui";

export default function ProductCard({ product }: { product: Product }) {
  const category = getCategory(product.category);

  return (
    <Link
      to={`/products/${product.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink-100/90 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-[0_20px_40px_-20px_rgba(11,99,206,0.2)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100/80 p-5 flex items-center justify-center">
        <Img
          src={product.image}
          alt={`${product.name} manufactured by S A Packaging`}
          width={400}
          height={300}
          className="h-full w-full object-contain drop-shadow-[0_8px_18px_rgba(0,0,0,0.12)] transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 rounded-full border border-ink-100/60 bg-white/95 px-2.5 py-1 font-geist text-[10.5px] font-semibold tracking-wide text-ink-800 shadow-xs backdrop-blur-md">
          {category.short}
        </span>
        <span className="absolute top-3 right-3 grid h-8 w-8 place-items-center rounded-full border border-ink-100/60 bg-white/90 text-ink-600 opacity-0 shadow-xs backdrop-blur-md transition-all duration-300 group-hover:bg-brand-500 group-hover:text-white group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="font-display text-[15px] font-bold leading-snug text-ink-900 transition-colors group-hover:text-brand-600 sm:text-[16px]">
          {product.name}
        </h3>

        <dl className="mt-3.5 space-y-2 text-[12.5px] font-geist">
          <div className="flex items-center justify-between border-b border-ink-50 pb-1.5">
            <dt className="text-ink-400">Size</dt>
            <dd className="font-semibold text-ink-800">{product.size}</dd>
          </div>
          <div className="flex items-center justify-between border-b border-ink-50 pb-1.5">
            <dt className="text-ink-400">Thickness</dt>
            <dd className="font-semibold text-ink-800">{product.thickness}</dd>
          </div>
          <div className="flex items-center justify-between pb-0.5">
            <dt className="text-ink-400">Seal layer</dt>
            <dd className="font-semibold text-brand-700">{product.seal}</dd>
          </div>
        </dl>

        <div className="mt-4 flex items-center justify-between gap-3 border-t border-ink-100/80 pt-3.5 font-geist">
          <span className="rounded-md bg-ink-50 px-2 py-0.5 text-[11px] font-medium text-ink-600">
            {product.finish}
          </span>
          <span className="inline-flex items-center gap-1 text-[12.5px] font-semibold text-brand-600 transition-colors group-hover:text-brand-700">
            Details
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}
