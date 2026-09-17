import { Container } from "@/components/ui/Container";
import { ShieldCheckIcon } from "@/components/common/Icons";
import { cn } from "@/lib/utils";

export function PaymentSupportNote({ className = "" }) {
  return (
    <section
      aria-label="Payment Support Note"
      className={cn("w-full bg-[#f8f7f5] border-t border-[#eceae6] py-7 select-none", className)}
    >
      <Container size="full">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3.5 sm:gap-4 p-4.5 sm:p-5 rounded-[2px] bg-white border border-[#e8e6e1]">
          <div className="w-9 h-9 rounded-full bg-[#f4f3ef] flex items-center justify-center flex-shrink-0 text-[#111111]">
            <ShieldCheckIcon className="w-5 h-5 text-[#111111]" />
          </div>

          <div className="flex flex-col">
            <h4 className="text-sm sm:text-[14.5px] font-bold text-[#111111]">
              Payment issue?
            </h4>
            <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mt-0.5">
              If a payment is deducted but your order status is unclear, contact us with your order or payment reference so the issue can be checked.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
