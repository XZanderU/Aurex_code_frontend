"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { RiMenu3Line } from "react-icons/ri";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/constants"; 
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-[100] transition-all duration-500 border-b",
        scrolled
          ? "bg-emerald-950/60 backdrop-blur-xl backdrop-saturate-150 border-white/10 py-4 shadow-lg"
          : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* LOGO */}
        <Link href="#hero" className="relative z-50 flex items-center gap-2 group">
          <Image
            src="/Aurexcode1.1.png" 
            alt="Aurex Code"
            width={150}
            height={36}
            className="h-9 w-auto transition-transform duration-300 group-hover:scale-105"
            priority
          />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-12">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group relative text-xs font-bold uppercase tracking-[0.25em] text-orange-50/80 hover:text-orange-50 transition-colors py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-orange-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          
          <Link href="#contact">
            <Button 
              variant="outline" 
              className="ml-4 border-orange-500/30 px-6 rounded-full text-xs font-bold uppercase tracking-widest text-orange-500 hover:bg-orange-500 hover:text-emerald-950 transition-all duration-300 bg-transparent"
            >
              Hablemos
            </Button>
          </Link>
        </div>

        {/* MOBILE MENU */}
        <div className="md:hidden relative z-50">
          <Sheet>
            <SheetTrigger asChild>
              <button className="text-orange-50 text-3xl focus:outline-none hover:text-orange-500 transition-colors">
                <RiMenu3Line />
              </button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="w-full bg-emerald-950 border-none p-0 flex flex-col items-center justify-center gap-8"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 blur-[150px] rounded-full pointer-events-none" />
              
              {NAV_LINKS.map((link) => (
                <SheetClose asChild key={link.name}>
                  <Link
                    href={link.href}
                    className="text-4xl font-bold uppercase tracking-tighter text-transparent hover:text-yellow-500 transition-all duration-300"
                    style={{ WebkitTextStroke: "1px #fff7ed" }}
                  >
                    {link.name}
                  </Link>
                </SheetClose>
              ))}
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;