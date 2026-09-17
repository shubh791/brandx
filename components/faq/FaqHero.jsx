import { Container } from "@/components/ui/Container";
import { SearchIcon, XIcon } from "@/components/common/Icons";
import { FAQ_HERO_DATA } from "@/data/faq";
import { cn } from "@/lib/utils";

export function FaqHero({
  searchQuery = "",
  onSearchChange,
  className = "",
}) {
  return (
    <section
      aria-label="FAQ Search and Hero"
      className={cn(
        "w-full bg-[#f8f7f5] border-b border-[#eceae6] py-9 sm:py-12 md:py-14 select-none",
        className
      )}
    >
      <Container size="full">
        <div className="max-w-2xl mx-auto text-center flex flex-col items-center">
          
          {/* Eyebrow */}
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#737373]">
            {FAQ_HERO_DATA.eyebrow}
          </span>

          {/* Heading */}
          <h1 className="text-[26px] sm:text-3xl md:text-[36px] font-bold tracking-tight text-[#111111] mt-2">
            {FAQ_HERO_DATA.heading}
          </h1>

          {/* Supporting Text */}
          <p className="mt-2.5 text-sm sm:text-[15px] md:text-base text-[#555555] leading-relaxed max-w-lg">
            {FAQ_HERO_DATA.description}
          </p>

          {/* Search Bar Input */}
          <div className="w-full mt-6 sm:mt-7 relative">
            <label htmlFor="faq-search-input" className="sr-only">
              Search FAQ questions and answers
            </label>
            <div className="relative flex items-center">
              <input
                id="faq-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder={FAQ_HERO_DATA.searchPlaceholder}
                className="w-full h-12 sm:h-13 pl-4 pr-12 bg-white border border-[#d8d6cf] rounded-[3px] text-base text-[#111111] placeholder:text-[#888888] shadow-xs focus:border-[#111111] focus:ring-1 focus:ring-black focus:outline-none transition-all"
              />

              {/* Clear button or Search Icon */}
              <div className="absolute right-3.5 flex items-center gap-1.5">
                {searchQuery ? (
                  <button
                    type="button"
                    onClick={() => onSearchChange("")}
                    aria-label="Clear search"
                    className="p-1.5 text-[#666666] hover:text-black transition-colors cursor-pointer"
                  >
                    <XIcon className="w-4.5 h-4.5" />
                  </button>
                ) : (
                  <SearchIcon className="w-5 h-5 text-[#777777] pointer-events-none" />
                )}
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
