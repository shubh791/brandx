import { Container } from "@/components/ui/Container";
import {
  ContactHero,
  QuickHelp,
  ContactForm,
  SupportShortcuts,
  PaymentSupportNote,
} from "@/components/contact";

export const metadata = {
  title: "Contact Us — BrandX Customer Care",
  description:
    "Get in touch with BrandX customer support for inquiries regarding orders, delivery, returns, exchanges, and assistance.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      {/* 1. Contact Hero */}
      <ContactHero />

      {/* 2. Quick Help Shortcuts */}
      <QuickHelp />

      {/* 3. Main Two-Column Contact & Self-Service Section */}
      <section
        aria-label="Contact Form and Assistance"
        className="w-full bg-white pb-12 sm:pb-16 lg:pb-20 select-none"
      >
        <Container size="full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Right: "Before You Send" & Direct Support */}
            <div className="lg:col-span-5">
              <SupportShortcuts />
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Payment Issue Guidance Note */}
      <PaymentSupportNote />
    </main>
  );
}
