"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "../components/ui/navbar-menu";
import Image from "next/image";
import Button from "./button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
export function Navbar() {
  const { userId } = useAuth();
  const router = useRouter();
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className="fixed top-10 inset-x-0 mx-auto z-50 xl:px-[120px] lg:px-[100px] md:px-[50px] sm:px-[20px]">
      <Menu setActive={setActive}>
        <HoveredLink href="/">
          <div className="relative w-[100px] h-[70px]">
            <Image src="/logo.webp" alt="my logo" fill />
          </div>
        </HoveredLink>
        <div className="flex">
          <div className="px-3">
            <MenuItem setActive={setActive} active={active} item="Products">
              <div className="  text-sm grid grid-cols-2 gap-10 p-4">
                <ProductItem
                  title="Algochurn"
                  href="https://algochurn.com"
                  src="/p1.png"
                  description="Prepare for tech interviews like never before."
                />
                <ProductItem
                  title="Tailwind Master Kit"
                  href="https://tailwindmasterkit.com"
                  src="/p2.png"
                  description="Production ready Tailwind css components for your next project"
                />
                <ProductItem
                  title="Moonbeam"
                  href="https://gomoonbeam.com"
                  src="/p3.png"
                  description="Never write from scratch again. Go from idea to blog in minutes."
                />
                <ProductItem
                  title="Rogue"
                  href="https://userogue.com"
                  src="/p4.png"
                  description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                />
              </div>
            </MenuItem>
          </div>
          <div className="px-3">
            <HoveredLink href="/">
              <span>Pricing</span>
            </HoveredLink>
          </div>
          <div className="px-3">
            <HoveredLink href="/">
              <span>Clients</span>
            </HoveredLink>
          </div>
          <div className="px-3">
            <MenuItem setActive={setActive} active={active} item="Resources">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/web-dev">Web Development</HoveredLink>
                <HoveredLink href="/interface-design">
                  Interface Design
                </HoveredLink>
                <HoveredLink href="/seo">
                  Search Engine Optimization
                </HoveredLink>
                <HoveredLink href="/branding">Branding</HoveredLink>
              </div>
            </MenuItem>
          </div>
          <div className="px-3">
            <HoveredLink href="/">
              <span>Documentation</span>
            </HoveredLink>
          </div>
          <div className="px-3">
            <MenuItem setActive={setActive} active={active} item="Enterprise">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/hobby">Hobby</HoveredLink>
                <HoveredLink href="/individual">Individual</HoveredLink>
                <HoveredLink href="/team">Team</HoveredLink>
                <HoveredLink href="/enterprise">Enterprise</HoveredLink>
              </div>
            </MenuItem>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {!userId ? (
            <>
              <Link href="/sign-up">
                <Button name="SignUp" classNameprops="dark:text-white" />
              </Link>
              <Link href="/sign-in">
                <Button name="Login" classNameprops="dark:text-white" />
              </Link>
            </>
          ) : (
            <>
              <Link href="/dashboard">
                <Button name="Dashboard" classNameprops="dark:text-white" />
              </Link>
            </>
          )}
        </div>
      </Menu>
    </div>
  );
}
