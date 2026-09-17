import { Container } from "@/components/ui/Container";
import { TRUST_SECTION_DATA } from "@/data/trust-items";
import {
  TruckIcon,
  RotateCcwIcon,
  ShieldCheckIcon,
  HeadsetIcon,
} from "@/components/common/Icons";
import { cn } from "@/lib/utils";

const ICON_COMPONENTS = {
  truck: TruckIcon,
  "rotate-ccw": RotateCcwIcon,
  "shield-check": ShieldCheckIcon,
  headset: HeadsetIcon,
};

export function WhyShopBrandX({
  data = TRUST_SECTION_DATA,
  className = "",
}) {
  if (!data || !data.items || data.items.length === 0) return null;

  return (
    <section
      aria-label="Why Shop BrandX"
      className={cn(
        "w-full bg-[#f8f7f5] border-y border-[#eceae6] py-10 sm:py-12 md:py-14 select-none",
        className
      )}
    >
      <Container size="full">
        {/* Section Header */}
        <div className="mb-6 sm:mb-8 text-left">
          <h2 className="text-xl sm:text-2xl lg:text-[26px] font-bold tracking-tight text-[#111111]">
            {data.heading}
          </h2>
          {data.subheading && (
            <p className="mt-1 text-xs sm:text-sm text-[#666666]">
              {data.subheading}
            </p>
          )}
        </div>

        {/* 4-Item Grid: 2x2 on Mobile/Tablet -> 4 cols on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-0 lg:divide-x lg:divide-[#e4e2dc]">
          {data.items.map((item) => {
            const IconComponent = ICON_COMPONENTS[item.icon] || TruckIcon;

            return (
              <div
                key={item.id}
                className="flex flex-col items-start p-3 sm:p-4 lg:px-6 lg:py-2"
              >
                {/* Outline Icon */}
                <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-white text-[#111111] border border-[#e8e6e1] shadow-2xs mb-3">
                  <IconComponent className="h-5 w-5 sm:h-5.5 sm:w-5.5 text-[#111111]" />
                </div>

                {/* Title */}
                <h3 className="text-xs sm:text-[13.5px] font-semibold text-[#111111] tracking-tight">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-1 text-[11.5px] sm:text-[12.5px] text-[#666666] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
