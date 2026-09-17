import Link from "next/link";
import { ArrowRightIcon } from "@/components/common/Icons";
import { cn } from "@/lib/utils";

export function RelatedPolicies({ policies = [], className = "" }) {
  if (!policies || policies.length === 0) return null;

  return (
    <div
      aria-label="Related Policies and Support Links"
      className={cn("w-full mt-10 sm:mt-14 pt-8 border-t border-[#eceae6]", className)}
    >
      <div className="mb-4">
        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#737373]">
          Explore More
        </span>
        <h3 className="text-base sm:text-lg font-bold text-[#111111] mt-0.5">
          Related Policies & Customer Guides
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {policies.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="group p-4 sm:p-5 bg-[#fbfaf8] hover:bg-white border border-[#e8e6e1] hover:border-[#111111] rounded-[3px] transition-all flex flex-col justify-between shadow-xs hover:shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between gap-2">
                <h4 className="text-sm sm:text-[14.5px] font-bold text-[#111111] group-hover:text-rose-600 transition-colors">
                  {item.title}
                </h4>
                <ArrowRightIcon className="w-4 h-4 text-[#777777] group-hover:text-rose-600 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
              </div>
              <p className="mt-1.5 text-xs text-[#666666] leading-relaxed">
                {item.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
