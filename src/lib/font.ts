import localFont from "next/font/local";

export const satoshi = localFont({
  variable: "--font-satoshi",
  src: [
    {
      path: "./fonts/Satoshi-Regular.otf",
      weight: "400",
      style: "normal"
    },
    {
      path: "./fonts/Satoshi-Bold.otf",
      weight: "700",
      style: "normal"
    }
  ]
});
