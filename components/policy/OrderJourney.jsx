import {
  ShoppingBagIcon,
  PackageIcon,
  TruckIcon,
  CheckIcon,
} from "@/components/common/Icons";
import { cn } from "@/lib/utils";

const STEP_ICONS = [
  ShoppingBagIcon,
  PackageIcon,
  TruckIcon,
  CheckIcon,
];

export function OrderJourney({ steps = [], className = "" }) {
  if (!steps || steps.length === 0) return null;

  return (
    <div
      aria-label="Order Journey and Delivery Process"
      className={cn(
        "w-full bg-[#faf9f6] border border-[#eceae6] rounded-[4px] p-5 sm:p-7 mb-8 sm:mb-10 select-none",
        className
      )}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-[#eceae6]">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#737373]">
            Delivery Lifecycle
          </span>
          <h3 className="text-base sm:text-lg font-bold text-[#111111] mt-0.5">
            How Your Order Travels to You
          </h3>
        </div>
        <span className="text-xs text-[#666666]">
          4-Stage Transparent Fulfillment
        </span>
      </div>

      {/* Grid of Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 relative">
        {steps.map((item, idx) => {
          const Icon = STEP_ICONS[idx] || CheckIcon;
          const isLast = idx === steps.length - 1;

          return (
            <div
              key={item.step}
              className="relative bg-white border border-[#e8e6e1] rounded-[3px] p-4 flex flex-col justify-between shadow-xs transition-shadow hover:shadow-sm"
            >
              <div>
                {/* Step Header: Number, Icon & Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-[2px] bg-[#111111] text-white flex items-center justify-center text-xs font-bold font-mono">
                      {item.step}
                    </div>
                    <Icon className="w-4 h-4 text-[#555555]" />
                  </div>
                  {item.badge && (
                    <span className="text-[10.5px] font-medium px-2 py-0.5 bg-[#f5f4f0] text-[#555555] rounded-[2px]">
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Step Title */}
                <h4 className="text-sm font-bold text-[#111111] leading-snug">
                  {item.title}
                </h4>

                {/* Step Description */}
                <p className="mt-1.5 text-xs sm:text-[13px] text-[#555555] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {!isLast && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-2 h-2 rounded-full bg-[#111111] ring-4 ring-white" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
