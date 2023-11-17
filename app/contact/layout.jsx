import NavigationComponent from "@/components/common/modules/NavigationComponent/NavigationComponent";
import { GoogleProvider } from "./providers";

export const metadata = {
  title: "Contact Us | Get in Touch with FINDEB",
  description:
    "Connect with FINDEB for all your design, engineering, and project management needs. Our contact information is provided for your convenience. Reach out to us to discuss your projects, inquire about our services, or collaborate on innovative solutions. We're here to provide expert guidance and comprehensive support.",
  keywords:
    "Contact FINDEB, Design Services, Engineering Solutions, Project Management, Get in Touch, Contact Information, Collaborate, Expert Guidance, Comprehensive Support, Design, Engineering, Innovative Solutions, Inquiry, Project Discussion.",
};
export default function ContactLayout({ children }) {
  return (
    <>
      <GoogleProvider>
        <NavigationComponent>{children}</NavigationComponent>
      </GoogleProvider>
    </>
  );
}
