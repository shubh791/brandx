"use client";

import { useState, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { PolicyHero } from "./PolicyHero";
import { PolicySidebar } from "./PolicySidebar";
import { PolicyMobileNav } from "./PolicyMobileNav";
import { PolicySection } from "./PolicySection";
import { RelatedPolicies } from "./RelatedPolicies";
import { PolicySupportCTA } from "./PolicySupportCTA";

export function PolicyView({ policyData, customTopElement }) {
  const [activeSection, setActiveSection] = useState(
    policyData?.sections?.[0]?.id || ""
  );

  useEffect(() => {
    if (!policyData?.sections || policyData.sections.length === 0) return;

    const handleScroll = () => {
      // 160px header height + 30px offset buffer
      const scrollPosition = window.scrollY + 190;

      for (let i = policyData.sections.length - 1; i >= 0; i--) {
        const section = policyData.sections[i];
        const el = document.getElementById(section.id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [policyData]);

  if (!policyData) return null;

  return (
    <div className="w-full flex flex-col min-h-screen bg-white">
      {/* 1. Policy Hero */}
      <PolicyHero
        title={policyData.title}
        eyebrow={policyData.eyebrow}
        subtitle={policyData.subtitle}
        lastUpdated={policyData.lastUpdated}
        breadcrumbs={policyData.breadcrumbs}
      />

      {/* 2. Main Policy Content Layout */}
      <main className="w-full py-8 sm:py-12 lg:py-14 flex-1">
        <Container size="full">
          {/* Optional Visual Workflow (e.g. Order Journey or Return Steps) */}
          {customTopElement && (
            <div className="w-full">{customTopElement}</div>
          )}

          {/* Mobile "Jump to section" Dropdown (Hidden on Desktop) */}
          <PolicyMobileNav
            sections={policyData.sections}
            activeSection={activeSection}
            onSelectSection={setActiveSection}
          />

          {/* Grid Layout: Desktop Sidebar TOC + Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-[270px_minmax(0,1fr)] gap-8 lg:gap-12 xl:gap-14 items-start">
            {/* Left Sticky Sidebar (Desktop only, sticks below the 160px header) */}
            <div className="hidden lg:block sticky top-[180px] self-start h-fit z-20">
              <PolicySidebar
                sections={policyData.sections}
                activeSection={activeSection}
                onSelectSection={setActiveSection}
              />
            </div>

            {/* Right Main Policy Content */}
            <div className="min-w-0 flex flex-col">
              <div className="bg-white border border-[#eae8e3] rounded-[4px] p-6 sm:p-8 lg:p-10 shadow-xs">
                {policyData.sections.map((sec, idx) => (
                  <PolicySection
                    key={sec.id}
                    id={sec.id}
                    index={idx}
                    title={sec.title}
                    content={sec.content}
                    highlight={sec.highlight}
                  />
                ))}
              </div>

              {/* Related Policies Navigation */}
              <RelatedPolicies policies={policyData.relatedPolicies} />
            </div>
          </div>
        </Container>
      </main>

      {/* 3. Customer Care Callout Banner */}
      <PolicySupportCTA />
    </div>
  );
}
