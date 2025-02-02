import {
  SiDiscord,
  SiInstagram,
  SiTiktok,
  SiX,
} from "@icons-pack/react-simple-icons";
import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center pb-4 pt-8">
      <div className="flex gap-3 text-white">
        <Link href="https://www.instagram.com/warsawgoats/" target="_blank">
          <SiInstagram size={20} />
        </Link>
        <Link href="https://www.tiktok.com/@warsawgoats" target="_blank">
          <SiTiktok size={20} />
        </Link>
        <Link href="https://x.com/warsawgoats" target="_blank">
          <SiX size={20} />
        </Link>
        <Link href="https://discord.gg/P9HPcCjCAr" target="_blank">
          <SiDiscord size={20} />
        </Link>
      </div>
    </nav>
  );
}
