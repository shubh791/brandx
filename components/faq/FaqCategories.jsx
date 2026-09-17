import { FAQ_CATEGORIES } from "@/data/faq";
import {
  SearchIcon,
  TruckIcon,
  RotateCcwIcon,
  ShieldCheckIcon,
  SparklesIcon,
  UserIcon,
  HelpCircleIcon,
} from "@/components/common/Icons";
import { cn } from "@/lib/utils";

const ICONS_MAP = {
  search: SearchIcon,
  truck: TruckIcon,
  "rotate-ccw": RotateCcwIcon,
  "shield-check": ShieldCheckIcon,
  sparkles: SparklesIcon,
  user: UserIcon,
  "help-circle": HelpCircleIcon,
};

export function FaqCategories({
  activeCategory = "all",
  onSelectCategory,
  className = "",
}) {
  return (
    <div
      aria-label="FAQ Category Selector"
      className={cn(
        "w-full overflow-x-auto no-scrollbar py-2 sm:py-3 flex items-center gap-2 select-none",
        className
      )}
    >
      {FAQ_CATEGORIES.map((category) => {
        const Icon = ICONS_MAP[category.icon] || HelpCircleIcon;
        const isActive = activeCategory === category.id;

        return (
          <button
            key={category.id}
            type="button"
            onClick={() => onSelectCategory(category.id)}
            className={cn(
              "inline-flex items-center gap-2 px-3.5 py-2 rounded-[2px] text-xs font-semibold whitespace-nowrap transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black",
              isActive
                ? "bg-[#111111] text-white shadow-xs"
                : "bg-white text-[#333333] border border-[#e5e3de] hover:border-[#111111] hover:text-black"
            )}
          >
            <Icon
              className={cn(
                "w-3.5 h-3.5",
                isActive ? "text-white" : "text-[#555555]"
              )}
            />
            <span>{category.label}</span>
          </button>
        );
      })}
    </div>
  );
}
