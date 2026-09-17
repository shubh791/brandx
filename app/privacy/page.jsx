import { PolicyView } from "@/components/policy";
import { PRIVACY_POLICY_DATA } from "@/data/policies";

export const metadata = {
  title: "Privacy Policy | BrandX",
  description:
    "Review how BrandX collects, protects, utilizes, and manages your personal data, payments, and browsing information.",
};

export default function PrivacyPolicyPage() {
  return <PolicyView policyData={PRIVACY_POLICY_DATA} />;
}
