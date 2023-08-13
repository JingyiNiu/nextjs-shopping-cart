import { Inter, Roboto_Mono, Roboto, Poppins } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});
export const poppins = Poppins({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
  subsets: ["latin"],
  display: "swap",
});

export const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ["latin"],
  display: "swap",
});

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});
