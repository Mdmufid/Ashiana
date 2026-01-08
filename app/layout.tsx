import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });
import local from "next/font/local";
import MyProvider from "./MyProvider";
import CompanyLogos from "./components/CompanyLogos";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--josefin-400",
});

const tex = local({
  src: [
    {
      path: "../public/fonts/tex-gyre-adventor/texgyreadventor-bold.otf",
      // weight: "800",
    },
  ],
  variable: "--font-tex",
});

const texReg = local({
  src: [
    {
      path: "../public/fonts/tex-gyre-adventor/texgyreadventor-regular.otf",
    },
  ],

  variable: "--font-tex-reg",
});

export const metadata: Metadata = {
  title: "Best Interior Designer in Kolkata | Ashiana Interiors",
  description:
    "Elevate your space with Ashiana Interiors, Kolkata's best interior designer. Discover home interior design, office interior design, modular kitchen & more.",
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="f3BBwdzg0rbqr2r0mMaxwzenpaE5CD26iJgNj7H2Mlc"
        />

        <script
          src="https://static.elfsight.com/platform/platform.js"
          data-use-service-core
          defer
        ></script>

        {/* Google Tag Manager Script */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-823514050"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-823514050');
          `,
          }}
        />
      </head>
      <body
        className={`${roboto.className} ${tex.variable} ${texReg.variable} ${josefin.variable} overflow-y-hidden`}
      >
        <MyProvider>
          <CompanyLogos />
          {children}
        </MyProvider>
      </body>
    </html>
  );
}
