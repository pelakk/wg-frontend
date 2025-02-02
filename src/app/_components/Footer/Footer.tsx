import {
  SiDiscord,
  SiInstagram,
  SiTiktok,
  SiX,
} from "@icons-pack/react-simple-icons";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="border-t border-input/50 py-4 text-center flex flex-col gap-y-8">
      <div className="space-x-12">
        <Link href="/regulamin">Regulamin</Link>
        <Link href="/polityka-prywatnosci">Polityka prywatności</Link>
      </div>
      <div className="flex gap-3 justify-center text-white">
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
      <p className="text-center font-light text-sm">© 2024 Warsaw Goats</p>
    </div>
  );
}
