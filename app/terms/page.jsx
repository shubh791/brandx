import { PolicyView } from "@/components/policy";
import { TERMS_POLICY_DATA } from "@/data/policies";

export const metadata = {
  title: "Terms & Conditions | BrandX",
  description:
    "Read the terms, rules, and conditions governing the use of the BrandX website, purchases, orders, payments, and account services.",
};

export default function TermsPolicyPage() {
  return <PolicyView policyData={TERMS_POLICY_DATA} />;
}
