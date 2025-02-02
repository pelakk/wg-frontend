import React from "react";
import img from "./us.jpg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutUsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16" id="about-us">
      <div className="size-full relative md:order-1 order-2">
        <div className="absolute -top-3 -left-3 size-full border border-[#FFD700]/50 -z-10" />
        <Image
          src={img}
          alt="About us section"
          className="object-cover aspect-square z-10"
        />
      </div>
      <div className="space-y-16 order-1 md:order-2">
        <div className="space-y-6">
          <p className="text-6xl font-medium">
            O <span className="text-[#FFD700]">Warsaw Goats</span>
          </p>
          <div className="space-y-6">
            <p className="text-white/80">
              Warsaw Goats to społeczność ambitnych ludzi, którzy zmieniają
              swoje życie dzięki wiedzy o zarabianiu w internecie. Nie jesteśmy
              kolejnym 'kursem', ale społecznością, która buduje prawdziwe
              wyniki. Przez ostatnie lata wypracowaliśmy miliony złotych,
              pomagając setkom osób osiągnąć sukces. Teraz Twoja kolej, aby
              dołączyć do tej elitarnej grupy i wykorzystać swój potencjał w
              100%.
            </p>
            <p className="text-white/80">
              Warsaw Goats to społeczność ambitnych ludzi, którzy zmieniają
              swoje życie dzięki wiedzy o zarabianiu w internecie. Nie jesteśmy
              kolejnym 'kursem', ale społecznością, która buduje prawdziwe
              wyniki. Przez ostatnie lata wypracowaliśmy miliony złotych,
              pomagając setkom osób osiągnąć sukces. Teraz Twoja kolej, aby
              dołączyć do tej elitarnej grupy i wykorzystać swój potencjał w
              100%.
            </p>
          </div>
        </div>
        <Button asChild>
          <Link href="#plans">Dołącz do nas</Link>
        </Button>
      </div>
    </div>
  );
}
