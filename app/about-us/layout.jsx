import NavigationComponent from "@/components/common/modules/NavigationComponent/NavigationComponent";

export const metadata = {
  title: "About Us",
  description:
    "Discover who we are at FINDEB, a specialized and respected business corporation offering design, architecture, engineering, and project management services. Our extensive projects span diverse industries, from health to housing. Embracing environmental sustainability, we innovate with concepts like ravine treatment and renewable energy. Explore our mission to elevate project performance and our vision of excellence in comprehensive project delivery.",
  keywords:
    "Design Services, Engineering Solutions, Project Management, Specialized Corporation, Diverse Industries, Environmental Sustainability, Innovative Concepts, Renewable Energy, Project Performance, Excellence in Delivery, Multifaceted Functions, Collaborative Partnerships, Europe and Africa Projects, Entrepreneurial Environment, Talent Cultivation, Global Network, Project Management Expertise, Comprehensive Project Delivery.",
};
export default function AboutLayout({ children }) {
  return (
    <>
      <NavigationComponent>{children}</NavigationComponent>
    </>
  );
}
