import {
  RotateCcwIcon,
  TruckIcon,
  ShieldCheckIcon,
  CheckIcon,
} from "@/components/common/Icons";
import { cn } from "@/lib/utils";

const STEP_ICONS = {
  "rotate-ccw": RotateCcwIcon,
  truck: TruckIcon,
  "shield-check": ShieldCheckIcon,
};

export function ReturnProcess({ steps = [], className = "" }) {
  if (!steps || steps.length === 0) return null;

  return (
    <div
      aria-label="3-Step Returns and Exchange Workflow"
      className={cn(
        "w-full bg-[#faf9f6] border border-[#eceae6] rounded-[4px] p-5 sm:p-7 mb-8 sm:mb-10 select-none",
        className
      )}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-[#eceae6]">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#737373]">
            Simple 3-Step Process
          </span>
          <h3 className="text-base sm:text-lg font-bold text-[#111111] mt-0.5">
            How Returns & Exchanges Work
          </h3>
        </div>
        <span className="text-xs text-[#666666]">
          Doorstep Pickup & Quality Verified
        </span>
      </div>

      {/* Grid of 3 Process Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
        {steps.map((item) => {
          const Icon = STEP_ICONS[item.icon] || CheckIcon;

          return (
            <div
              key={item.step}
              className="bg-white border border-[#e8e6e1] rounded-[3px] p-5 flex flex-col justify-between shadow-xs transition-shadow hover:shadow-sm"
            >
              <div>
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="w-8 h-8 rounded-[2px] bg-[#111111] text-white flex items-center justify-center text-xs font-bold font-mono">
                    {item.step}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#f8f7f5] flex items-center justify-center text-[#444444]">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Step Title */}
                <h4 className="text-sm sm:text-[15px] font-bold text-[#111111]">
                  {item.title}
                </h4>

                {/* Step Description */}
                <p className="mt-2 text-xs sm:text-[13.5px] text-[#555555] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
