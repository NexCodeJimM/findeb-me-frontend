import NavigationComponent from "@/components/common/modules/NavigationComponent/NavigationComponent";

export const metadata = {
  title: "Privacy Policy | Your Data Protection Matters to FINDEB",
  description:
    "At FINDEB, we prioritize the security and confidentiality of your data. Our Privacy Policy outlines how we collect, use, and protect your information. Rest assured that your privacy is paramount to us. Explore our policy to understand how we ensure the safety of your personal data.",
  keywords:
    "Privacy Policy, Data Protection, Confidentiality, Data Security, Information Privacy, User Data, Personal Data, Data Collection, Data Usage, Data Protection Measures, Privacy Assurance.",
};
export default function PrivacyLayout({ children }) {
  return (
    <>
      <NavigationComponent>{children}</NavigationComponent>
    </>
  );
}
