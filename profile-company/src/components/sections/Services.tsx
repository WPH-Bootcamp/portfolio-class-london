"use client";

import {
  Monitor,
  Smartphone,
  PenTool,
  Cloud,
  Code2,
  Cpu,
  Shield,
  Sparkles,
  Headphones,
} from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Web Development",
    desc: "We build fast, secure, and user-friendly websites to boost your online presence.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "We create smooth, feature-rich mobile apps optimized for user experience.",
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    desc: "We craft beautiful and user-friendly interfaces to enhance customer experience.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    desc: "Optimize efficiency with flexible and cost-effective cloud solutions.",
  },
  {
    icon: Code2,
    title: "Software Development",
    desc: "We develop innovative, scalable, and tailored software solutions.",
  },
  {
    icon: Cpu,
    title: "IT Infrastructure",
    desc: "Improve system performance with DevOps, CI/CD, and optimized infrastructure.",
  },
  {
    icon: Shield,
    title: "Cybersecurity Services",
    desc: "Reliable security solutions to safeguard your systems and data.",
  },
  {
    icon: Sparkles,
    title: "AI Solutions",
    desc: "Leverage AI and big data to drive business growth and insights.",
  },
  {
    icon: Headphones,
    title: "IT Consulting & Support",
    desc: "Strategic consulting and reliable technical support for your business.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white">
            Innovative IT Solutions for Your Business Growth
          </h2>

          <p className="mt-4 text-lg text-zinc-400">
            We provide tailored, high-performance technology solutions to
            streamline operations, enhance security, and drive success.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-2xl border border-white/10 bg-transparent p-8 text-center transition-all duration-300 hover:border-cyan-500/40 hover:bg-white/[0.02]"
              >
                {/* Icon */}
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500 shadow-[0_0_25px_rgba(6,182,212,0.45)]">
                  <Icon className="h-6 w-6 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
