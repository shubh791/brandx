import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { CONTACT_HERO_DATA } from "@/data/contact";
import { ArrowRightIcon } from "@/components/common/Icons";
import { cn } from "@/lib/utils";

export function ContactHero({ data = CONTACT_HERO_DATA, className = "" }) {
  if (!data) return null;

  return (
    <section
      aria-label="Customer Care Hero"
      className={cn(
        "w-full bg-[#f8f7f5] border-b border-[#eceae6] py-9 sm:py-12 lg:py-14 select-none",
        className
      )}
    >
      <Container size="full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          {/* Left Column: Heading & Support Copy */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#737373]">
              {data.eyebrow}
            </span>
            <h1 className="text-[26px] sm:text-3xl lg:text-[36px] font-bold tracking-tight text-[#111111] mt-2">
              {data.heading}
            </h1>
            <p className="mt-2.5 text-sm sm:text-[15px] lg:text-base text-[#555555] leading-relaxed max-w-lg">
              {data.description}
            </p>

            {data.faqHref && (
              <Link
                href={data.faqHref}
                className="mt-4.5 inline-flex items-center gap-2 text-sm sm:text-[14.5px] font-semibold text-[#111111] hover:text-[#e11d48] group transition-colors"
              >
                <span>{data.faqLinkText}</span>
                <ArrowRightIcon className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            )}
          </div>

          {/* Right Column: Packaging Lifestyle Image */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] w-full rounded-[2px] overflow-hidden bg-[#eae8e3] border border-[#e4e2dc]">
              <Image
                src={data.image.src}
                alt={data.image.alt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 500px"
                className="object-cover object-center"
              />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
