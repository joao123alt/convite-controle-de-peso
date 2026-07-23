import { FaAndroid, FaApple } from "react-icons/fa";

export interface Platform {
  id: string;
  icon: React.ReactNode;
  label: string;
  sub: string;
  href: string;
}

export const platforms: Platform[] = [
  { id: "android", icon: <FaAndroid size={24} />, label: "Android", sub: "Google Play", href: "#" },
  { id: "iphone",  icon: <FaApple size={24} />,   label: "iPhone",  sub: "App Store",   href: "#" },
];
