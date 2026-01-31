"use client";

import React from "react";
import { motion } from "framer-motion";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const socialLinks = [
    { icon: <SiGithub />, url: "https://github.com", label: "GitHub" },
    { icon: <SiLinkedin />, url: "https://linkedin.com", label: "LinkedIn" },
    { icon: <FaXTwitter />, url: "https://twitter.com", label: "Twitter" },
    { icon: <MdEmail />, url: "mailto:contact@example.com", label: "Email" },
  ];

  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 py-16 px-4 md:px-8 lg:px-12 mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Braulio Flores
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Full Stack Developer creating exceptional web experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
              Links
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { name: "Projects", href: "#" },
                { name: "About", href: "#" },
                { name: "Contact", href: "#" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
              Contact
            </h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              Available for projects and collaborations.
            </p>
            <a
              href="mailto:contact@example.com"
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Send Email
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mb-12"
        >
          {socialLinks.map((social, idx) => (
            <motion.a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -2 }}
              className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-all"
              title={social.label}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Braulio Flores. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
