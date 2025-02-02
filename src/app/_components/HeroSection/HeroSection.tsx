import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import img from "./book.png";

export default function HeroSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 ">
      <div className="space-y-10 pt-4">
        <div className="space-y-4">
          <p
            className="text-4xl md:text-5xl font-medium max-w-4xl text-left"
            style={{ lineHeight: "1.2" }}
          >
            <span className="text-primary">Twoje życie, Twoje zasady</span>.
            Naucz się, jak przestać pracować na cudze cele.
          </p>
          <p className="max-w-4xl md:text-lg text-white/80">
            Nie pozwól, aby Twoje życie wyglądało tak samo za rok. Nadszedł
            czas, by zbudować życie, o którym myślisz każdego ranka w drodze do
            pracy.
          </p>
        </div>
        <div className="md:block flex justify-between md:space-x-6">
          <Button asChild>
            <Link href="#plans">Wykup dostęp</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="#about-us">Zobacz więcej</Link>
          </Button>
        </div>
      </div>
      <div className="flex justify-center">
        <Image src={img} alt="ksiazka" />
      </div>
    </div>
  );
}
