"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useEffect, useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import SocialIcons from "@/src/components/SocialIcons";

export const Footer = ({ locale }: { locale?: string }) => {
  const { t, i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);
  const [isBlogsPage, setIsBlogsPage] = useState(false);
  const [currentLocale, setCurrentLocale] = useState(locale);
  
  const pathname = usePathname() ?? "/";

  // Check if current page is blogs page
  useEffect(() => {
    const isBlogs = pathname.includes('/blogs');
    setIsBlogsPage(isBlogs);
    
    // On blogs page, force locale to 'en' for display
    if (isBlogs) {
      setCurrentLocale('en');
    } else {
      setCurrentLocale(locale);
    }
  }, [pathname, locale]);

  // Custom text getter that returns English on blogs page
  const getText = useCallback((key: string, fallback: string) => {
    if (isBlogsPage) {
      return fallback; // Always return English fallback on blogs page
    }
    const translated = t(key);
    return translated === key ? fallback : translated;
  }, [isBlogsPage, t]);

  useEffect(() => {
    if (currentLocale && i18n.language !== currentLocale && i18n.isInitialized) {
      i18n.changeLanguage(currentLocale);
    }
    setMounted(true);
  }, [currentLocale, i18n]);

  if (!mounted) {
    return (
      <footer className="bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-2">
              <span className="text-2xl mb-6 block font-georgia text-brown">
                <img src="/images/logo.png" alt="Nexus Clinic Logo" className="w-[250px] h-auto"/>
              </span>
              <div className="h-20 bg-gray-100 animate-pulse rounded" />
            </div>
          </div>
        </div>
      </footer>
    );
  }

  const getNavHref = (path: string) => {
    // If it's the blogs link, always go to /blogs without locale prefix
    if (path === '/blogs') {
      return '/blogs';
    }
    
    // For other paths, add locale prefix if not English
    if (!currentLocale || currentLocale === "en") return path;
    return `/${currentLocale}${path}`;
  };

  const quickLinks = [
    { label: getText("footer.aboutUs", "About Us"), href: "/about-us" },
    { label: getText("footer.services", "Doctors"), href: "/doctors" },
    { label: getText("footer.treatments", "Gallery"), href: "/gallery" },
    { label: getText("footer.blog", "Blog"), href: "/blogs" },
    { label: getText("footer.contact", "Contact"), href: "/contact-us" },
  ];

  const legalLinks = [
    { label: getText("footer.privacyPolicy", "Privacy Policy"), href: "/privacy-policy" },
    { label: getText("footer.termsOfUse", "Terms of Use"), href: "/terms-of-use" },
  ];

  return (
    <footer className="bg-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <span className="text-2xl mb-6 block font-georgia text-brown">
              <img src="/images/logo.png" alt="Nexus Clinic Logo" className="w-[250px] h-auto"/>
            </span>
            <p className="max-w-md mb-6 text-taupe">
              {getText("footer.description", "Advanced aesthetic and medical weight loss clinic in Kuala Lumpur. Where science meets artistry for your natural beauty.")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6 text-brown">{getText("footer.quickLinks", "Quick Links")}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <motion.a
                    href={getNavHref(link.href)}
                    whileHover={{ x: 5 }}
                    className="inline-block text-taupe hover:text-wine transition-colors"
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-6 text-brown">{getText("footer.contactTitle", "Contact")}</h4>
            <ul className="space-y-3 text-taupe">
              <li>{getText("footer.address", "LG 10, Lower Ground Floor, Wisma UOA II, Jalan Pinang, 50450 Kuala Lumpur, Malaysia.")}</li>
              <li>
                <a 
                  href={`tel:${getText("footer.phone", "+016-774 5699").replace(/\s/g, '')}`} 
                  className="hover:text-wine transition-colors"
                >
                  {getText("footer.phone", "+016‑774 5699")}
                </a>
              </li>
              <li>
                <a 
                  href={`mailto:${getText("footer.email", "contact@nexus-clinic.com")}`} 
                  className="hover:text-wine transition-colors"
                >
                  {getText("footer.email", "contact@nexus-clinic.com")}
                </a>
              </li>
            </ul>
            <SocialIcons variant="light" iconSize={18} />
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-taupe/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-taupe">
            {getText("footer.copyright", "© 2026 Aesthetics & Skin Care Clinic Near Me | Mozard Simforni Sdn Bhd | Powered by ")}
            <a href="http://daikimedia.com/"  target="_blank" >  <strong className="italic text-wine">  Daikimedia</strong></a>
          </p>

          <div className="flex gap-6">
            {legalLinks.map((link) => (
              <a
                key={link.href}
                href={getNavHref(link.href)}
                className="text-sm text-taupe hover:text-wine transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};