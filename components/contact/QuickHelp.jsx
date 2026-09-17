import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { QUICK_HELP_ITEMS } from "@/data/contact";
import {
  SearchIcon,
  TruckIcon,
  RotateCcwIcon,
  HelpCircleIcon,
  ArrowRightIcon,
} from "@/components/common/Icons";
import { cn } from "@/lib/utils";

const ICONS_MAP = {
  search: SearchIcon,
  truck: TruckIcon,
  "rotate-ccw": RotateCcwIcon,
  "help-circle": HelpCircleIcon,
};

export function QuickHelp({ items = QUICK_HELP_ITEMS, className = "" }) {
  if (!items || items.length === 0) return null;

  return (
    <section
      aria-label="Quick Support Options"
      className={cn("w-full bg-white py-8 sm:py-10 lg:py-12 select-none", className)}
    >
      <Container size="full">
        {/* Section Heading */}
        <div className="mb-5 sm:mb-6">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111111]">
            Need help with something?
          </h2>
          <p className="text-sm sm:text-[14.5px] text-[#666666] mt-1">
            Quick links to our most requested services.
          </p>
        </div>

        {/* 4 Support Options (4 Cols Desktop, 2x2 Mobile) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
          {items.map((item) => {
            const Icon = ICONS_MAP[item.icon] || HelpCircleIcon;

            return (
              <Link
                key={item.id}
                href={item.href}
                className="group flex flex-col justify-between p-4 sm:p-5 rounded-[2px] border border-[#e8e6e1] bg-[#faf9f7] hover:bg-white hover:border-[#111111] hover:shadow-xs transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
              >
                <div>
                  {/* Outline Icon */}
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-[#e5e3de] flex items-center justify-center text-[#111111] group-hover:bg-[#111111] group-hover:text-white group-hover:border-[#111111] transition-colors mb-3.5">
                    <Icon className="w-4.5 h-4.5" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xs sm:text-[13px] font-bold tracking-wider uppercase text-[#111111]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-[13.5px] text-[#555555] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Arrow Action Indicator */}
                <div className="mt-4 pt-2.5 border-t border-[#eeebe5] flex items-center justify-between text-xs sm:text-[12.5px] font-semibold text-[#111111] group-hover:text-black">
                  <span>Open</span>
                  <ArrowRightIcon className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
