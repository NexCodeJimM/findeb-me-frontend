import { Providers } from "./providers";

import "@/styles/globals.css";

export const metadata = {
  title: {
    default: "Innovative Design, Engineering, and Global Solutions by FINDEB",
    template:
      "%s | Innovative Design, Engineering, and Project Management by FINDEB",
  },
  description:
    "Discover how FINDEB is your partner in innovative design and engineering solutions, transcending boundaries to shape a world of visionary design, cutting-edge architecture, precise engineering, and meticulous project management. As a distinguished business, we provide comprehensive services across diverse industries. Our expertise spans design, architecture, engineering, and technical book development, mechanical and electrical parts consumables, real estate investment, sustainable solutions, and more. With an unwavering commitment to excellence, collaboration, and holistic project realization, we redefine possibilities, leaving an indelible mark on global projects.",
  keywords:
    "Design and Engineering Solutions, Innovative Partnerships, Visionary Architecture, Cutting-edge Design, Precise Engineering, Comprehensive Services, Technical Books, Mechanical and Electrical Parts, Real Estate Investment, Home Decorations, Repairs, Sustainable Solutions, Global Collaboration, Holistic Project Realization, Environmental Well-being, Diverse Industries, Excellence in Design, Engineering Expertise, Global Impact, Innovative Practices, Sustainable Future, Collaborative Approach.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <!-- Google tag (gtag.js) --> */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');`,
          }}
        />
      </head>
      <body suppressHydrationWarning={true}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
