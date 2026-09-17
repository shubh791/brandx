import { PolicyView, OrderJourney } from "@/components/policy";
import { SHIPPING_POLICY_DATA } from "@/data/policies";

export const metadata = {
  title: "Shipping Policy | BrandX Customer Care",
  description:
    "Learn about BrandX order processing, dispatch, delivery coverage across India, shipping charges, and real-time order tracking.",
};

export default function ShippingPolicyPage() {
  return (
    <PolicyView
      policyData={SHIPPING_POLICY_DATA}
      customTopElement={
        <OrderJourney steps={SHIPPING_POLICY_DATA.journeySteps} />
      }
    />
  );
}
