"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Badge } from "./ui/badge";
import { Menu } from "lucide-react";

const Header = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b sticky top-0 z-50 border-gray-100 bg-white w-full">
      <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between border-gray-100 border-l border-r">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-sm">layouts.chetanverma.com</span>
          <Badge variant="outline">Beta</Badge>
        </div>
        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-4">
          <Button
            onClick={() => router.push("https://ui.chetanverma.com")}
            variant="ghost"
            size="sm"
          >
            UI Components
          </Button>
          <Button
            onClick={() => router.push("https://chetanverma.com")}
            variant="ghost"
            size="sm"
          >
            chetanverma.com
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              router.push("https://calendly.com/webmakers-studio/30min")
            }
          >
            <img
              className="size-5 rounded-full overflow-hidden"
              src="/profile.png"
            />{" "}
            Work with me
          </Button>
        </div>
        {/* Mobile nav */}
        <div className="sm:hidden flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen(!open)}
            aria-label="Open menu"
          >
            <Menu size={20} />
          </Button>
        </div>
      </div>
      {/* Mobile dropdown */}
      {open && (
        <div className="sm:hidden border-t border-gray-100 bg-white px-4 py-2">
          <Button
            className="w-full mb-2"
            onClick={() => {
              router.push("https://ui.chetanverma.com");
              setOpen(false);
            }}
            variant="ghost"
            size="sm"
          >
            UI Components
          </Button>
          <Button
            className="w-full mb-2"
            variant="ghost"
            size="sm"
            onClick={() => setOpen(false)}
          >
            Share
          </Button>
          <Button
            className="w-full"
            variant="outline"
            size="sm"
            onClick={() => setOpen(false)}
          >
            chetanverma.com
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
