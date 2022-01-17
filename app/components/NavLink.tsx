import React from "react";
import { Link, LinkProps, useLocation } from "remix";

interface NavLinkProps extends LinkProps {
  active?: boolean;
  children: React.ReactNode;
}

export function NavLink({ active, children, to, ...props }: NavLinkProps) {
  let location = useLocation();
  active ||= location.pathname === to;

  return (
    <Link className="relative block group" to={to} {...props}>
      <div className="absolute flex items-center h-full -left-3">
        <div
          className={`${
            active
              ? "h-10"
              : "h-5 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100"
          } w-1 transition-all duration-200 origin-left bg-white rounded-r`}
        ></div>
      </div>
      <div className="group-active:translate-y-px">
        <div
          className={`${
            active
              ? "rounded-2xl bg-brand text-white"
              : "text-gray-100 group-hover:rounded-2xl group-hover:bg-brand group-hover:text-white bg-gray-700 rounded-3xl"
          } flex items-center justify-center w-12 h-12 transition-all duration-200 overflow-hidden`}
        >
          {children}
        </div>
      </div>
    </Link>
  );
}
