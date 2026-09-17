import { PolicyView, ReturnProcess } from "@/components/policy";
import { RETURNS_POLICY_DATA } from "@/data/policies";

export const metadata = {
  title: "Returns & Exchange Policy | BrandX Customer Care",
  description:
    "Learn about BrandX hassle-free returns, size exchanges, item eligibility conditions, inspection, and refund timelines.",
};

export default function ReturnsPolicyPage() {
  return (
    <PolicyView
      policyData={RETURNS_POLICY_DATA}
      customTopElement={
        <ReturnProcess steps={RETURNS_POLICY_DATA.processSteps} />
      }
    />
  );
}
