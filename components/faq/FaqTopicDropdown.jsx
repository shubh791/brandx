import { FAQ_CATEGORIES } from "@/data/faq";
import { ChevronDownIcon } from "@/components/common/Icons";
import { cn } from "@/lib/utils";

export function FaqTopicDropdown({
  activeCategory = "all",
  onSelectCategory,
  className = "",
}) {
  return (
    <div className={cn("w-full select-none", className)}>
      <label
        htmlFor="mobile-faq-topic-dropdown"
        className="text-xs font-bold uppercase tracking-wider text-[#666666] mb-2 block"
      >
        Browse by topic
      </label>
      <div className="relative">
        <select
          id="mobile-faq-topic-dropdown"
          value={activeCategory}
          onChange={(e) => onSelectCategory(e.target.value)}
          className="w-full h-12 px-4 pr-10 bg-white border border-[#d8d6cf] rounded-[3px] text-base text-[#111111] font-medium appearance-none focus:outline-none focus:border-[#111111] focus:ring-1 focus:ring-black transition-all cursor-pointer shadow-2xs"
        >
          {FAQ_CATEGORIES.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#555555]">
          <ChevronDownIcon className="w-4.5 h-4.5" />
        </div>
      </div>
    </div>
  );
}
