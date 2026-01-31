"use client";

import React from "react";
import { motion } from "framer-motion";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { MdEmail } from "react-icons/md";

const ContactSection = () => {
  const contactMethods = [
    {
      icon: <MdEmail className="w-8 h-8" />,
      label: "Email",
      description: "Send me a message",
      href: "mailto:bfloresl1400@outlook.com",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
    },
    {
      icon: <SiLinkedin className="w-8 h-8" />,
      label: "LinkedIn",
      description: "Let's connect professionally",
      href: "https://www.linkedin.com/in/braulio-flores-74a25b200/",
      color: "from-blue-600 to-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
    },
    {
      icon: <SiGithub className="w-8 h-8" />,
      label: "GitHub",
      description: "Check out my code",
      href: "https://github.com/braulio-flores",
      color: "from-gray-700 to-gray-900",
      bgColor: "bg-gray-50 dark:bg-gray-950/20",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="contact"
      className="w-full py-20 px-4 md:px-8 lg:px-12 relative"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 dark:text-white">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
            I'd love to hear from you. Whether you have a question or just want
            to chat, feel free to reach out!
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {contactMethods.map((method, idx) => (
            <motion.a
              key={idx}
              href={method.href}
              target={method.href.startsWith("mailto") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div
                className={`relative h-full rounded-lg border border-gray-200 dark:border-gray-800 ${method.bgColor} p-8 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300`}
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-5`}
                  />
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-br ${method.color} p-4 text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {method.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 group-hover:bg-clip-text transition-all">
                    {method.label}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow">
                    {method.description}
                  </p>

                  <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium group-hover:gap-3 transition-all">
                    <span>Connect</span>
                    <motion.span
                      animate={{
                        x: [0, 4, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                      }}
                    >
                      →
                    </motion.span>
                  </div>
                </div>

                {/* Border gradient on hover */}
                <div className="absolute inset-0 rounded-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div
                    className={`absolute inset-0 rounded-lg bg-gradient-to-br ${method.color} opacity-10 blur-lg`}
                  />
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 text-base mb-4">
            I'm based in Mexico 🇲🇽 and open to remote opportunities worldwide
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            Response time: 24-48 hours
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
