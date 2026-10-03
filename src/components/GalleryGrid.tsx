import { useState, useMemo } from "react";
import { Search, Eye, ChevronDown } from "lucide-react";
import { galleryItems, GALLERY_CATEGORIES, GalleryItem } from "@/data/galleryData";
import GalleryModal from "./GalleryModal";


interface GalleryGridProps {
  initialLimit?: number;
  showFilters?: boolean;
  showSearch?: boolean;
}

export default function GalleryGrid({
  initialLimit = 16,
  showFilters = true,
  showSearch = true,
}: GalleryGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [displayCount, setDisplayCount] = useState(initialLimit);
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);

  // Filtered list based on category & search query
  const filteredItems = useMemo(() => {
    return galleryItems.filter((item) => {
      const matchesCategory =
        selectedCategory === "all" || item.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.id.toLowerCase().includes(q) ||
        item.diameter.toLowerCase().includes(q) ||
        item.substrate.toLowerCase().includes(q) ||
        item.categoryLabel.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const visibleItems = filteredItems.slice(0, displayCount);
  const hasMore = displayCount < filteredItems.length;

  const handleLoadMore = () => {
    setDisplayCount((prev) => Math.min(prev + 16, filteredItems.length));
  };

  const handleShowAll = () => {
    setDisplayCount(filteredItems.length);
  };

  return (
    <div className="w-full">
      {/* Category Pills & Search Controls */}
      {(showFilters || showSearch) && (
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          {/* Category Tabs */}
          {showFilters && (
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              {GALLERY_CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      setDisplayCount(initialLimit);
                    }}
                    className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 font-geist text-[12.5px] font-semibold transition-all ${
                      isActive
                        ? "bg-brand-500 text-white shadow-sm"
                        : "bg-slate-100 text-ink-700 hover:bg-slate-200 active:scale-95"
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span
                      className={`rounded-full px-1.5 py-0.2 text-[10px] font-bold ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-slate-200 text-ink-500"
                      }`}
                    >
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>
          )}

          {/* Search Box */}
          {showSearch && (
            <div className="relative min-w-[240px] sm:min-w-[280px]">
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
              <input
                type="text"
                placeholder="Search by size (e.g. 75mm, Curd, Printed)..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setDisplayCount(initialLimit);
                }}
                className="w-full rounded-full border border-ink-200 bg-white py-2 pl-9 pr-4 font-geist text-[13px] text-ink-900 placeholder:text-ink-400 focus:border-brand-500 focus:outline-hidden focus:ring-2 focus:ring-brand-100 transition-all shadow-2xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[11px] font-bold text-ink-400 hover:text-ink-700"
                >
                  Clear
                </button>
              )}
            </div>
          )}
        </div>
      )}

      {/* Grid of Product Foil Dies */}
      {visibleItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-ink-200 py-16 text-center">
          <p className="font-geist text-[15px] font-semibold text-ink-700">
            No packaging samples found matching your search.
          </p>
          <p className="mt-1 font-lora text-[13px] text-ink-500">
            Try adjusting your search query or select "All Dies & Samples".
          </p>
          <button
            onClick={() => {
              setSelectedCategory("all");
              setSearchQuery("");
            }}
            className="mt-4 rounded-xl bg-brand-50 px-4 py-2 font-geist text-[13px] font-bold text-brand-700 hover:bg-brand-100"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 xl:gap-6">
          {visibleItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-3 sm:p-4.5 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-lg cursor-pointer"
            >
              {/* Product Canvas */}
              <div className="relative flex aspect-square w-full items-center justify-center rounded-xl bg-radial from-slate-50 to-slate-100/80 p-3 sm:p-4 overflow-hidden">
                {/* Subtle blueprint grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e115_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e115_1px,transparent_1px)] bg-[size:16px_16px]" />

                {/* Foil Sample Image */}
                <img
                  src={item.thumbUrl}
                  alt={item.title}
                  loading={index < 8 ? "eager" : "lazy"}
                  decoding="async"
                  className="relative z-10 max-h-full max-w-full object-contain drop-shadow-[0_8px_16px_rgba(15,23,42,0.18)] transition-transform duration-500 group-hover:scale-108"
                />

                {/* Quick View Pill (Appears on hover) */}
                <div className="absolute bottom-2.5 z-20 hidden sm:flex items-center gap-1 rounded-full bg-ink-900/80 px-2.5 py-1 font-geist text-[10.5px] font-semibold text-white opacity-0 backdrop-blur-xs transition-opacity duration-200 group-hover:opacity-100 shadow-sm">
                  <Eye className="h-3 w-3" />
                  <span>Inspect Die</span>
                </div>

                {/* Size Badge */}
                <div className="absolute top-2 left-2 z-20 rounded-md bg-white/95 px-1.5 py-0.5 font-geist text-[10px] font-bold text-ink-700 shadow-2xs border border-ink-100">
                  {item.diameter}
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="mt-3 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center justify-between gap-1 text-[11px] font-geist text-ink-400">
                    <span className="font-semibold text-brand-600 truncate">{item.categoryLabel}</span>
                    <span className="shrink-0">{item.id}</span>
                  </div>
                  <h3 className="mt-1 font-display text-[13px] sm:text-[14px] font-bold text-ink-900 line-clamp-2 leading-snug group-hover:text-brand-600 transition-colors">
                    {item.title}
                  </h3>
                </div>

                <div className="mt-2.5 pt-2 border-t border-ink-100/70 flex items-center justify-between font-geist text-[11.5px] text-ink-500">
                  <span>{item.substrate}</span>
                  <span className="font-medium text-ink-400">{item.thickness}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination / Load More Controls */}
      {hasMore && (
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={handleLoadMore}
            className="flex items-center gap-2 rounded-xl bg-ink-900 px-6 py-3 font-geist text-[13.5px] font-semibold text-white shadow-sm transition-all hover:bg-ink-800 active:scale-[0.98]"
          >
            <span>Load Next 16 Dies</span>
            <ChevronDown className="h-4 w-4" />
          </button>
          <button
            onClick={handleShowAll}
            className="rounded-xl border border-ink-200 bg-white px-5 py-3 font-geist text-[13.5px] font-semibold text-ink-800 shadow-2xs transition-all hover:bg-slate-50 active:scale-[0.98]"
          >
            Show All ({filteredItems.length} Samples)
          </button>
        </div>
      )}

      {/* Lightbox Modal */}
      <GalleryModal
        item={activeModalItem}
        items={filteredItems}
        onClose={() => setActiveModalItem(null)}
        onSelect={(newItem) => setActiveModalItem(newItem)}
      />
    </div>
  );
}
