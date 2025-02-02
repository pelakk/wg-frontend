import React from "react";
import Navbar from "../_components/navbar/Navbar";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function page() {
  return (
    <div className="space-y-10">
      <Navbar />
      <Link href="/" className="block">
        <p className="inline-flex items-center gap-x-2">
          <ChevronLeft /> Powrót do strony głównej
        </p>
      </Link>
      <div className="space-y-6">
        <h1 className="text-5xl font-medium">Polityka prywatności</h1>

        <p>
          Administratorem Twoich danych osobowych jest IEO Agency Dawid
          Matuszyński (prowadząca działalność jako WarsawGoats), z siedzibą pod
          adresem: ul. Raciborska 52, 44-350 Gorzyczki, NIP: 6472605423, REGON:
          527016444, e-mail: warsawgoats@proton.me.
        </p>

        <p>
          Twoja prywatność i bezpieczeństwo danych osobowych są dla nas
          priorytetem. Niniejsza Polityka Prywatności wyjaśnia, jakie dane
          zbieramy, w jaki sposób je przetwarzamy oraz jakie masz prawa w
          związku z korzystaniem z naszej strony internetowej sprzedającej
          e-booki.
        </p>

        <div className="space-y-3">
          <p className="text-xl">Par. 1 Zakres zbieranych danych osobowych</p>
          <p>
            W związku z korzystaniem z naszej strony internetowej możemy
            przetwarzać następujące dane:
          </p>
          <ul>
            <li>
              Dane przekazywane przez Ciebie w ramach realizacji zamówienia:
              adres e-mail.
            </li>
            <li>
              Dane zbierane automatycznie: pliki cookies i anonimowe dane
              analityczne przetwarzane za pomocą narzędzia Google Analytics.
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <p className="text-xl">Par. 2 Cel i podstawy przetwarzania danych </p>
          <p>
            Twoje dane osobowe przetwarzamy wyłącznie w następujących celach:
          </p>
          <ul>
            <li>
              Realizacja zamówienia e-booka – podanie adresu e-mail jest
              konieczne do wysłania zakupionego produktu (podstawa prawna: art.
              6 ust. 1 lit. b RODO – wykonanie umowy).
            </li>
            <li>
              Analiza ruchu na stronie – używamy narzędzia Google Analytics,
              które zbiera anonimowe dane dotyczące sposobu korzystania z naszej
              strony (podstawa prawna: art. 6 ust. 1 lit. f RODO – prawnie
              uzasadniony interes administratora, jakim jest analiza i
              optymalizacja strony).
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <p className="text-xl">
            Par. 3 Przetwarzanie danych w ramach płatności
          </p>
          <p>
            Płatności za e-booki realizowane są wyłącznie za pomocą systemu
            Tpay, obsługującego metodę BLIK. Dane dotyczące płatności
            przetwarzane są bezpośrednio przez Tpay, a my nie mamy do nich
            dostępu ani ich nie przechowujemy.
          </p>
        </div>
        <div className="space-y-3">
          <p className="text-xl">Par. 4 Odbiorcy danych osobowych</p>
          <p>
            Nie udostępniamy Twoich danych osobowych żadnym podmiotom trzecim, z
            wyjątkiem:
          </p>
          <p>
            Google LLC w ramach korzystania z narzędzia Google Analytics
            (anonimowe dane). Google Analytics może przechowywać dane poza
            Europejskim Obszarem Gospodarczym, jednak stosowane są odpowiednie
            zabezpieczenia zgodne z przepisami RODO.
          </p>
        </div>
        <div className="space-y-3">
          <p className="text-xl">Par. 5 Pliki cookies</p>
          <p>Nasza strona korzysta z plików cookies w celu:</p>
          <ul>
            <li>zapewnienia prawidłowego działania strony,</li>
            <li>
              zbierania anonimowych danych statystycznych za pomocą Google
              Analytics. Możesz zarządzać plikami cookies w ustawieniach swojej
              przeglądarki internetowej.
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <p className="text-xl">Par. 6 Twoje prawa</p>
          <p>Masz prawo do:</p>
          <ul>
            <li>dostępu do swoich danych osobowych,</li>
            <li>ich sprostowania,</li>
            <li>usunięcia (prawo do bycia zapomnianym),</li>
            <li>ograniczenia przetwarzania,</li>
            <li>przenoszenia danych,</li>
            <li>wniesienia sprzeciwu wobec przetwarzania,</li>
            <li>
              wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych
              (PUODO).
            </li>
          </ul>
          <p>
            W celu realizacji swoich praw skontaktuj się z nami pod adresem
            e-mail: warsawgoats@proton.me.
          </p>
        </div>
        <div className="space-y-3">
          <p className="text-xl">Par. 7 Okres przechowywania danych</p>
          <p>
            Twoje dane osobowe przechowujemy przez okres niezbędny do realizacji
            zamówienia oraz spełnienia wymogów prawnych (np. księgowych).
          </p>
        </div>
        <div className="space-y-3">
          <p className="text-xl">Par. 8 Zmiany w Polityce Prywatności</p>
          <p>
            Zastrzegamy sobie prawo do wprowadzania zmian w niniejszej Polityce
            Prywatności. O każdej istotnej zmianie poinformujemy Cię za
            pośrednictwem naszej strony internetowej. Jeśli masz pytania
            dotyczące ochrony danych osobowych, napisz do nas na
            warsawgoats@proton.me.
          </p>
        </div>
      </div>
    </div>
  );
}
