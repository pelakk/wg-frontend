"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Banknote, Check, Crown, Gem, X } from "lucide-react";
import React, { useState } from "react";
import { plans } from "./plans";
import { PlanType } from "./types";
import PaymentDialog from "./PaymentDialog";

export default function PlansSection() {
  const [selectedPlan, setSelectedPlan] = useState<string>();

  return (
    <div className="space-y-20" id="plans">
      <div className="space-y-6">
        <p className="text-6xl font-medium text-center">
          Zainwestuj w swój sukces
        </p>
        <p className="max-w-4xl text-center text-white/80 mx-auto">
          Pamiętaj: każda wielka zmiana zaczyna się od decyzji. Jaka jest
          różnica między Tobą a osobami, które osiągają sukcesy? Działanie. To,
          co dzisiaj wybierzesz, będzie miało wpływ na Twoje życie przez kolejne
          lata. Nie pozwól sobie na wymówki –{" "}
          <span className="text-primary font-medium">
            inwestycja w wiedzę zwraca się wielokrotnie.
          </span>
        </p>
      </div>
      <div className="w-full md:w-fit flex-col md:flex-row flex gap-12 mx-auto">
        {plans.map((plan, index) => (
          <PlanItem
            key={plan.name}
            primary={index === 1}
            planData={plan}
            setSelectedPlan={setSelectedPlan}
          />
        ))}
      </div>
      <PaymentDialog
        selectedPlan={selectedPlan}
        setSelectedPlan={setSelectedPlan}
      />
    </div>
  );
}

function PlanItem({
  primary,
  planData,
  setSelectedPlan,
}: {
  primary?: boolean;
  planData: PlanType;
  setSelectedPlan: React.Dispatch<React.SetStateAction<string | undefined>>;
}) {
  return (
    <div
      className={cn(
        "border w-full rounded-2xl h-fit",
        primary && "border-[#FFD700] shadow-2xl shadow-[#FFD700]/20 -mt-4"
      )}
    >
      <div className="space-y-2 py-6 pt-8 px-12">
        <div className="flex justify-center">
          {planData.name === "silver" && (
            <Banknote size={40} className="stroke-1 mb-6 text-[#FFD700]/100" />
          )}
          {planData.name === "diamond" && (
            <Gem size={40} className="stroke-1 mb-6 text-[#FFD700]/80" />
          )}
          {planData.name === "platinum" && (
            <Crown size={40} className="stroke-1 mb-6 text-[#FFD700]/100" />
          )}
        </div>
        <p className="text-2xl">
          Pakiet{" "}
          {planData.name.charAt(0).toUpperCase() + planData.name.slice(1)}
        </p>
        <p className="font-medium text-4xl w-[220px]">{planData.price} PLN</p>
      </div>
      <Separator />
      <ul className="space-y-2 list-none py-6 pt-8 px-6 ">
        {planData.features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center gap-x-3 text-sm text-white"
          >
            <div className="size-4">
              {feature.included ? <Check size={16} /> : <X size={16} />}
            </div>{" "}
            <p>
              <span className="text-primary">{feature.name}</span>:{" "}
              {feature.description}
            </p>
          </li>
        ))}
      </ul>
      <p className="font-medium px-6 text-center text-xl mt-4 mb-4">
        Zarabiaj do{" "}
        <span className="text-primary font-medium">
          {planData.possibleEarnings} zł
        </span>{" "}
        miesięcznie!
      </p>
      <Separator />
      <div className="flex justify-center py-6 pb-8 px-12">
        <Button
          className={cn("w-full", primary && "bg-[#FFD700]")}
          onClick={() => setSelectedPlan(planData.name)}
        >
          Zakup
        </Button>
      </div>
    </div>
  );
}
