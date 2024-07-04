import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@mui/material";

const SidebarDropdown = ({ item }: any) => {
  const pathname = usePathname();
  const theme = useTheme()

  return (
    <>
      <ul className="my-2 flex flex-col gap-1.5 pl-9">
        {item.map((item: any, index: number) => (
          <li key={index}>
            <Link
              href={item.route}
              className={`relative flex rounded-[7px] px-3.5 py-2 font-medium duration-300 ease-in-out items-center gap-3 ${
                pathname === item.route
                  ? "bg-primary/[.07] dark:bg-white/10 dark:text-white"
                  : "text-dark-4 hover:bg-gray-2 hover:text-dark dark:text-gray-5 dark:hover:bg-white/10 dark:hover:text-white"
              }`}
              style={{ color: pathname === item.route ? theme.palette.primary.main : "black" }}
            >
              { pathname === item.route ? item.active_icon : item.icon }
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SidebarDropdown;
