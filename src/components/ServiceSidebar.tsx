import React from "react";
import Link from "next/link";
import { services } from "@/app/services/serviceList";

interface Service {
  name: string;
  icon: string;
  link: string;
}

export default function ServiceSidebar() {
  return (
    <aside
      className="sidebar-scrollbar sticky top-20 z-20 h-[calc(100vh-80px)] w-72 bg-white shadow-lg flex flex-col overflow-y-auto"
      style={{ minWidth: 260, maxWidth: 320 }}
    >
      <div className="p-6 border-b bg-primary sticky top-0 z-30">
        <h2 className="text-xl text-center font-bold text-white">Our Services</h2>
      </div>
      <nav className="flex-1 px-4 py-2">
        <ul className="space-y-2">
          {services.map((service: Service) => (
            <li key={service.name}>
              <Link
                href={service.link}
                className="flex items-center gap-2 rounded-xl border border-gray-200 shadow-sm bg-white transition-all duration-200 group hover:bg-[var(--primary)] hover:text-white hover:border-[var(--primary)] focus:bg-[var(--primary)] focus:text-white focus:border-[var(--primary)] w-full overflow-hidden"
                style={{ boxShadow: '0 2px 8px 0 rgba(0,0,0,0.05)' }}
              >
                <img
                  src={service.icon}
                  alt={service.name}
                  className="w-4 h-4 ml-2 object-contain group-hover:filter group-hover:brightness-0 group-hover:invert"
                />
                <span className="font-medium text-base truncate group-hover:text-white transition-colors duration-200">
                  {service.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
} 