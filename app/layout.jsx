import Navigation from "@/components/common/modules/Navigation/Navigation";
import { Providers } from "./providers";
import Footer from "@/components/common/modules/Footer/Footer";

export const metadata = {
  title: "We Grow Together | FINDEB",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navigation />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
