"use client";

import { useState, useMemo } from "react";
import { Container } from "@/components/ui/Container";
import { FaqHero } from "./FaqHero";
import { FaqTopicDropdown } from "./FaqTopicDropdown";
import { FaqAccordionList } from "./FaqAccordionList";
import { FaqStillNeedHelp } from "./FaqStillNeedHelp";
import { FAQ_ITEMS } from "@/data/faq";

export function FaqClientView() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  // Immediate frontend search & category filter logic
  const filteredItems = useMemo(() => {
    let result = FAQ_ITEMS;

    // Filter by search query if user is typing
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      return result.filter(
        (item) =>
          item.question.toLowerCase().includes(q) ||
          item.answer.toLowerCase().includes(q) ||
          item.categoryLabel.toLowerCase().includes(q) ||
          item.keywords?.some((k) => k.toLowerCase().includes(q))
      );
    }

    // Filter by selected category when not searching
    if (activeCategory !== "all") {
      result = result.filter((item) => item.categoryId === activeCategory);
    }

    return result;
  }, [activeCategory, searchQuery]);

  return (
    <div className="w-full flex flex-col min-h-screen bg-white">
      {/* 1. Hero Search Area */}
      <FaqHero
        searchQuery={searchQuery}
        onSearchChange={(query) => {
          setSearchQuery(query);
        }}
      />

      {/* 2. Main FAQ Content Area */}
      <section
        aria-label="Frequently Asked Questions by Category"
        className="w-full bg-white py-8 sm:py-10 lg:py-14 select-none flex-1"
      >
        <Container size="full">
          {/* Mobile-Only Topic Dropdown */}
          <div className="block lg:hidden mb-6">
            <FaqTopicDropdown
              activeCategory={activeCategory}
              onSelectCategory={(catId) => {
                setActiveCategory(catId);
                if (searchQuery) setSearchQuery("");
              }}
            />
          </div>

          {/* Desktop Two-Column Layout / Mobile Stacked Layout */}
          <FaqAccordionList
            items={filteredItems}
            activeCategory={activeCategory}
            onSelectCategory={(catId) => {
              setActiveCategory(catId);
              if (searchQuery) setSearchQuery("");
            }}
            searchQuery={searchQuery}
          />
        </Container>
      </section>

      {/* 3. "Still Need Help?" Support Callout */}
      <FaqStillNeedHelp />
    </div>
  );
}
