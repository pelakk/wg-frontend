import {
  Bot,
  Handshake,
  PenLine,
  Settings,
  Smartphone,
  Wallet,
} from "lucide-react";
import React from "react";

export default function BenefitsSection() {
  return (
    <div className="flex flex-col gap-16">
      <p className="text-6xl font-medium">Czego sie nauczysz</p>
      <div className="flex flex-col md:grid md:grid-cols-3 gap-6">
        <div className="flex flex-col gap-3 px-5 py-3 border border-[#FFD700]/50 rounded-lg hover:bg-[#FFD700]/30 transition-colors">
          <div className="flex gap-4 items-end">
            <Wallet size={44} className="stroke-1" />
            <p className="font-medium text-lg">Ecommerce</p>
          </div>
          <p className="text-white/80 text-sm">
            Dowiedz się, jak zbudować sklep internetowy, który zarabia, nawet
            kiedy śpisz. Od wyboru produktów po skalowanie wyników.
          </p>
        </div>

        <div className="flex flex-col gap-3 px-5 py-3 border border-[#FFD700]/50 rounded-lg hover:bg-[#FFD700]/30 transition-colors">
          <div className="flex gap-4 items-end">
            <Handshake size={44} className="stroke-1" />
            <p className="font-medium text-lg">Programy afiliacyjne</p>
          </div>
          <p className="text-white/80 text-sm">
            Nie musisz tworzyć własnych produktów, aby zacząć działać. Naucz się
            promować usługi i produkty firm, które płacą za efekty.
          </p>
        </div>

        <div className="flex flex-col gap-3 px-5 py-3 border border-[#FFD700]/50 rounded-lg hover:bg-[#FFD700]/30 transition-colors">
          <div className="flex gap-4 items-end">
            <Bot size={44} className="stroke-1" />
            <p className="font-medium text-lg">AI prompting</p>
          </div>
          <p className="text-white/80 text-sm">
            Wykorzystaj sztuszną inteligencję, która pomoże Ci oszczędzać czas i
            działać efektywniej niż kiedykolwiek.
          </p>
        </div>

        <div className="flex flex-col gap-3 px-5 py-3 border border-[#FFD700]/50 rounded-lg hover:bg-[#FFD700]/30 transition-colors">
          <div className="flex gap-4 items-end">
            <PenLine size={44} className="stroke-1" />
            <p className="font-medium text-lg">Copywriting</p>
          </div>
          <p className="text-white/80 text-sm">
            Odkryj tajniki słów, które sprzedają. Naucz się pisać teksty, które
            generują sprzedaż na najwyższym poziomie.
          </p>
        </div>

        <div className="flex flex-col gap-3 px-5 py-3 border border-[#FFD700]/50 rounded-lg hover:bg-[#FFD700]/30 transition-colors">
          <div className="flex gap-4 items-end">
            <Settings size={44} className="stroke-1" />
            <p className="font-medium text-lg">AI marketing</p>
          </div>
          <p className="text-white/80 text-sm">
            Automatyzuj procesy i skaluj swoje wyniki dzięki najnowszym
            narzędziom marketingowym opartym na AI.
          </p>
        </div>

        <div className="flex flex-col gap-3 px-5 py-3 border border-[#FFD700]/50 rounded-lg hover:bg-[#FFD700]/30 transition-colors">
          <div className="flex gap-4 items-end">
            <Smartphone size={44} className="stroke-1" />
            <p
              className="font-medium text-lg max-w-[250px]"
              style={{ lineHeight: "1.3" }}
            >
              Automatyzacja programu partnerskiego Tiktok
            </p>
          </div>
          <p className="text-white/80 text-sm">
            Nie musisz być influencerem, żeby zarabiać na TikToku. Naucz się,
            jak dzięki automatyzacji czerpać zyski z oglądalności Twoich treści.
          </p>
        </div>
      </div>
    </div>
  );
}
