"use client";
import { menuOptions } from "@/lib/constant";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../shadecn/ui/tooltip";
import {
  DatabaseZap,
  GitBranch,
  MoonIcon,
  MousePointerClick,
  SunIcon,
} from "lucide-react";
import { useTheme } from "next-themes";
import { Separator } from "../shadecn/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../shadecn/ui/dropdown-menu";
import { Button } from "../shadecn/ui/button";
const Sidebar = () => {
  const pathname = usePathname();
  const { setTheme } = useTheme();
  return (
    <div className="flex flex-col items-center justify-between px-2 dark:bg-neutral-900 h-screen">
      <div>
        <div className="relative w-[50px] h-[50px]">
          <Link href={"/"}>
            <Image src="/small-logo.webp" alt="logo" fill />
          </Link>
        </div>
        <br />
        <TooltipProvider delayDuration={0}>
          <ul className="flex flex-col items-center gap-8">
            {menuOptions.map((items, index) => (
              <Tooltip>
                <TooltipTrigger asChild>
                  <li key={index}>
                    <Link
                      href={items.href}
                      className={clsx(
                        "group h-8 w-8 flex items-center justify-center scale-[1.5] rounded-lg p-[3px] cursor-pointer",
                        {
                          "dark:bg-neutral-950 bg-slate-300":
                            pathname === items.href,
                        }
                      )}
                    >
                      <items.Component selected={pathname === items.href} />
                    </Link>
                  </li>
                </TooltipTrigger>
                <TooltipContent side="right" sideOffset={12}>
                  <p>{items.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </ul>
        </TooltipProvider>
        <Separator className="my-10" />
        <div className="flex flex-col gap-9 items-center rounded-full dark:bg-[#353346]/30 py-4 px-2 h-56 overflow-scroll bottom-[1px] hide-scrollbar">
          <div className="relative dark:bg-[#353346]/70 p-2 rounded-full drak:border-t-[2px] border-[1px] dark:border-t-[#353346]">
            <MousePointerClick size={18} className="dark:text-white" />
            <div className="border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]"></div>
          </div>
          <div className="relative dark:bg-[#353346]/70 p-2 rounded-full drak:border-t-[2px] border-[1px] dark:border-t-[#353346]">
            <GitBranch size={18} className="dark:text-white" />
            <div className="border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]"></div>
          </div>
          <div className="relative dark:bg-[#353346]/70 p-2 rounded-full drak:border-t-[2px] border-[1px] dark:border-t-[#353346]">
            <DatabaseZap size={18} className="dark:text-white" />
            <div className="border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]"></div>
          </div>
          <div className="relative dark:bg-[#353346]/70 p-2 rounded-full drak:border-t-[2px] border-[1px] dark:border-t-[#353346]">
            <GitBranch size={18} className="dark:text-white" />
            <div className="border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]"></div>
          </div>
        </div>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("light")}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Sidebar;
