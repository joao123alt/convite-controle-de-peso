import { FaAndroid, FaApple } from "react-icons/fa";

export interface Platform {
  id: string;
  icon: React.ReactNode;
  label: string;
  sub: string;
  href: string;
}

export const platforms: Platform[] = [
  { 
    id: "android", 
    icon: <FaAndroid size={24} />, 
    label: "Android", 
    sub: "Google Play", 
    href: "https://play.google.com/apps/testing/com.vidavem.controlepeso" 
  },
  { 
    id: "iphone",  
    icon: <FaApple size={24} />,   
    label: "iPhone",  
    sub: "App Store",   
    href: "https://apps.apple.com/br/app/controle-de-peso-vidavem/id6757395665?l=en-GB" 
  },
];
