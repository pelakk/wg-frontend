import { Dispatch, useEffect, useState } from "react";
import { z } from "zod";
import { plans } from "./plans";
import { useForm, UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  Check,
  Clock,
  CreditCard,
  Loader2,
  Lock,
  MailWarning,
} from "lucide-react";
import img from "./blik.png";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(1, { message: "To pole jest wymagane" }),
  email: z.string().email("To pole jest wymagane"),
  blikToken: z.string().length(6, { message: "Niepoprawny kod BLIK" }),
  agreement: z.boolean().default(false),
});

type FormData = z.infer<typeof formSchema>;

export default function PaymentDialog({
  selectedPlan,
  setSelectedPlan,
}: {
  selectedPlan?: string;
  setSelectedPlan: React.Dispatch<React.SetStateAction<string | undefined>>;
}) {
  const [loading, setLoading] = useState(false);
  const [waitingForConfirmation, setWaitingForConfirmation] = useState(false);
  const [tr, setTr] = useState("");

  const planData = plans.find((plan) => plan.name === selectedPlan);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      blikToken: "",
      agreement: false,
    },
  });

  async function onSubmit(data: FormData) {
    setLoading(true);

    console.log(process.env.NEXT_PUBLIC_BACKEND_URL);

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/payment`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          plan: selectedPlan,
          email: data.email,
          name: data.name,
          blikToken: data.blikToken,
        }),
      }
    );

    const responseData = await response.json();

    if (responseData.error) {
      form.setError("blikToken", {
        type: "manual",
        message: responseData.error,
      });
      setLoading(false);
      return;
    }

    setTr(responseData.tr);
    setWaitingForConfirmation(true);
    setLoading(false);
  }

  function handleClear() {
    setTr("");
    setWaitingForConfirmation(false);
  }

  return (
    <AlertDialog open={!!selectedPlan}>
      <AlertDialogContent className="space-y-10 w-[90%] max-h-[95%] overflow-y-auto rounded-2xl">
        <AlertDialogHeader className="space-y-10">
          <AlertDialogTitle className="text-2xl">
            Zakup Pakietu {planData?.name}
          </AlertDialogTitle>
          {waitingForConfirmation ? (
            <CheckPaymentStatus tr={tr} handleClear={handleClear} />
          ) : (
            <PaymentForm form={form} onSubmit={onSubmit} loading={loading} />
          )}
        </AlertDialogHeader>
        <AlertDialogFooter>
          <Button
            onClick={() => setSelectedPlan(undefined)}
            size="sm"
            variant="outline"
          >
            Anuluj zakup
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

function PaymentForm({
  form,
  onSubmit,
  loading,
}: {
  form: UseFormReturn<FormData>;
  onSubmit: (data: FormData) => void;
  loading: boolean;
}) {
  return (
    <Form {...form}>
      <form
        className="space-y-6"
        onSubmit={form.handleSubmit(async (data) => {
          onSubmit(data);
        })}
      >
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <div className="flex">
                  <FormLabel className="text-white/80">
                    Imię i nazwisko
                  </FormLabel>
                </div>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <div className="flex">
                  <FormLabel className="text-white/80 w-full text-start">
                    Adres email
                  </FormLabel>
                </div>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Separator />

        <div className="grid grid-cols-2 gap-4">
          <div
            className={cn(
              "flex flex-col gap-y-2 py-4 px-6 rounded-xl border w-full cursor-pointer hover:border-input transition-colors border-input text-white"
            )}
          >
            <Image src={img} alt="logo blik" className="h-[24px] w-fit" />
            <p className={cn("font-medium text-start")}>BLIK</p>
          </div>
          <div
            className={cn(
              "flex flex-col gap-y-2 py-4 px-6 rounded-xl border w-full border-input/20 text-white/50"
            )}
          >
            <CreditCard size={24} />
            <p className={cn("text-start")}>Karta płatnicza</p>
          </div>
        </div>

        <div className="space-y-6">
          <p className="text-white/60 text-sm">
            Teraz przejdź do aplikacji swojego banku, wygeneruj kod BLIK i wpisz
            go lub wklej w pole poniżej. Następnie zatwierdź płatność w
            aplikacji banku.
          </p>
          <FormField
            control={form.control}
            name="blikToken"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <div className="flex">
                  <FormLabel className="text-white/80 font-medium text-xl">
                    Kod BLIK
                  </FormLabel>
                </div>
                <FormControl>
                  <Input {...field} className="border-white" maxLength={6} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="agreement"
            render={({ field }) => (
              <FormItem className="inline-flex items-center gap-x-3">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    required
                  />
                </FormControl>
                <p className="text-white/60 text-sm p-0 m-0 text-start">
                  Płacąc potwierdzasz zapoznanie się z regulaminem i obowiązkiem
                  informacyjnym serwisu Tpay{" "}
                  <span className="text-red-600">*</span>
                </p>
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={loading}>
            {loading && <Loader2 className="mr-2 animate-spin" />}
            {loading ? "Przetwarzanie" : "Kontynuuj"}
          </Button>
          <p className="text-xs w-full inline-flex justify-start md:justify-center items-center gap-x-2 text-white/80">
            <Lock className="stroke-1" size={14} /> Bezpieczna transakcja za
            pomocą serwisu Tpay
          </p>
        </div>
      </form>
    </Form>
  );
}

function CheckPaymentStatus({
  tr,
  handleClear,
}: {
  tr: string;
  handleClear(): void;
}) {
  const [status, setStatus] = useState<0 | 1 | 2>(0);

  async function getPaymentStatus() {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/payment-status?tr=${tr}`
    );

    return response.status;
  }

  useEffect(() => {
    const paymentCheckInterval = setInterval(() => {
      void getPaymentStatus().then((status) => {
        if (status === 200) {
          clearInterval(paymentCheckInterval);
          handleClear();
          setStatus(1);
        }
        if (status === 502) {
          clearInterval(paymentCheckInterval);
          handleClear();
          setStatus(2);
        }
      });
    }, 3000);
    return () => clearInterval(paymentCheckInterval);
  }, [tr]);

  return (
    <div className="w-full h-full flex flex-col items-center py-6 gap-8">
      {status === 0 && (
        <>
          <Clock className="size-28 stroke-1" />
          <p className="font-medium text-lg">
            Potwierdź płatność w aplikacji bankowej
          </p>
        </>
      )}
      {status === 1 && (
        <>
          <Check className="size-28 stroke-1" />
          <p className="font-medium text-lg">
            Płatność zakończona pomyślnie. Materiały zostały wysłane na podany
            adres email.
          </p>
        </>
      )}
      {status === 2 && (
        <>
          <MailWarning className="size-28 stroke-1" />
          <p className="font-medium text-lg">
            Płatność zakończona pomyślnie jednak nie udało nam się wysłać
            wiadomości email. Prosimy o kontakt.
          </p>
        </>
      )}
    </div>
  );
}
