"use client";
import { motion } from "framer-motion";
import { Facebook, Instagram, MessageCircle } from "lucide-react";

interface SocialIconsProps {
  className?: string;
  iconSize?: number;
  variant?: "light" | "dark" | "colored";
  showTooltip?: boolean;
}

const socialLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/NexusClinic/",
    color: "#1877F2",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/nexusclinic/?hl=en",
    color: "#E4405F",
  },
  {
    name: "TikTok",
    icon: MessageCircle,
    href: "https://www.tiktok.com/@nexusclinicklmy",
    color: "#000000",
  },
];

export default function SocialIcons({ 
  className = "", 
  iconSize = 18,
  variant = "light",
  showTooltip = true,
}: SocialIconsProps) {
  
  const getVariantStyles = () => {
    switch (variant) {
      case "dark":
        return "bg-brown text-cream hover:bg-wine";
      case "colored":
        return "bg-cream text-brown hover:text-white";
      default:
        return "bg-cream text-brown hover:bg-wine hover:text-light";
    }
  };

  const getIconColor = (iconName: string, originalColor: string) => {
    if (variant === "colored") {
      return originalColor;
    }
    return "currentColor";
  };

  return (
    <div className={`flex items-center mt-4 gap-3 ${className}`}>
      {socialLinks.map((social) => (
        <motion.a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className={`relative group rounded-full p-2.5 transition-all duration-300 ${getVariantStyles()}`}
          aria-label={`Follow us on ${social.name}`}
        >
          <social.icon 
            size={iconSize} 
            style={variant === "colored" ? { color: social.color } : undefined}
          />
          
          {/* Tooltip */}
          {showTooltip && (
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-brown text-cream text-xs px-2 py-1 rounded whitespace-nowrap pointer-events-none z-10">
              {social.name}
            </span>
          )}
        </motion.a>
      ))}
    </div>
  );
}