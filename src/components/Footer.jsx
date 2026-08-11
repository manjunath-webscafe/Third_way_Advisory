import { Link } from "react-router-dom";
import { footer, nav } from "../data/content";
import logo from "../assets/logo-white.png";

import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/",
      label: "Instagram",
    },
    {
      icon: FaTwitter,
      href: "https://twitter.com/",
      label: "Twitter",
    },
    {
      icon: FaFacebookF,
      href: "https://www.facebook.com/",
      label: "Facebook",
    },
    {
      icon: FaLinkedinIn,
      href: "https://www.linkedin.com/",
      label: "LinkedIn",
    },
    {
      icon: FaEnvelope,
      href: "mailto:advisory@thirdway.com",
      label: "Email",
    },
  ];

  return (
    <footer className="bg-navy-700 bg-[#06111F] text-white/60 pt-16 pb-8">
      <div className="container">
        <div className="grid md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Logo & About */}
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="Third Way Advisory"
                className="h-36 w-auto"
              />
            </Link>

            <p className="mt-5 text-sm leading-relaxed max-w-xs">
              {footer.tagline}
            </p>

            <p className="mt-4 text-xs uppercase tracking-wide text-white/35">
              {footer.city}
            </p>

            {/* Social Media */}
            <div className="flex items-center gap-5 mt-7">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto:") ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="text-white/50 hover:text-gold-400 transition-all duration-300 hover:-translate-y-1"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigate */}
          <div className="md:col-span-3 md:col-start-7">
            <h4 className="text-[11px] uppercase tracking-widest2 text-white/40 mb-5">
              Navigate
            </h4>

            <ul className="space-y-3">
              {nav.slice(0, 3).map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm hover:text-gold-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Advisory House */}
          <div className="md:col-span-3">
            <h4 className="text-[11px] uppercase tracking-widest2 text-white/40 mb-5">
              Advisory House
            </h4>

            <ul className="space-y-3">
              {nav.slice(3).map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm hover:text-gold-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

              <li>
                <a
                  href="mailto:advisory@thirdway.com"
                  className="text-sm hover:text-gold-400 transition-colors"
                >
                  advisory@thirdway.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/35">
          <p>
            &copy; {year} {footer.name}. All rights reserved.
          </p>

          <p>Institutional Advisory &middot; Karnataka, India</p>
        </div>
      </div>
    </footer>
  );
}
