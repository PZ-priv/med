import React, { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  User,
  Phone,
  Check,
  X,
  Menu,
  LogOut,
  ChevronRight,
  MapPin,
  Mail,
  ShieldCheck,
  Heart,
  ArrowRight,
  PlusCircle,
  CalendarDays,
  CheckCircle2,
  XCircle,
  AlertCircle,
} from "lucide-react";

// Przykładowe dane początkowe
const initialAppointments = [
  {
    id: 1,
    date: "2026-05-10",
    time: "10:00",
    name: "Jan Kowalski",
    phone: "123456789",
    status: "potwierdzona",
    source: "online",
  },
  {
    id: 2,
    date: "2026-05-10",
    time: "13:00",
    name: "Anna Nowak",
    phone: "987654321",
    status: "oczekująca",
    source: "online",
  },
];

const availableHours = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
];

const services = [
  {
    id: 1,
    name: "Konsultacja wstępna",
    duration: "60 min",
    price: "150 zł",
    desc: "Wywiad, diagnoza problemu i ustalenie planu działania.",
  },
  {
    id: 2,
    name: "Wizyta kontrolna",
    duration: "30 min",
    price: "100 zł",
    desc: "Omówienie postępów i modyfikacja zaleceń.",
  },
  {
    id: 3,
    name: "Terapia właściwa",
    duration: "50 min",
    price: "130 zł",
    desc: "Regularna sesja terapeutyczna dostosowana do potrzeb.",
  },
];

export default function App() {
  const [view, setView] = useState("public"); // 'public', 'admin-login', 'admin-dashboard'
  const [appointments, setAppointments] = useState(initialAppointments);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Nawigacja
  const navigateTo = (newView) => {
    setView(newView);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  if (view === "public") {
    return (
      <PublicSite
        navigateTo={navigateTo}
        appointments={appointments}
        setAppointments={setAppointments}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    );
  }

  if (view === "admin-login") {
    return <AdminLogin navigateTo={navigateTo} />;
  }

  if (view === "admin-dashboard") {
    return (
      <AdminDashboard
        navigateTo={navigateTo}
        appointments={appointments}
        setAppointments={setAppointments}
      />
    );
  }

  return null;
}

function PublicSite({
  navigateTo,
  appointments,
  setAppointments,
  mobileMenuOpen,
  setMobileMenuOpen,
}) {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Nawigacja */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div
              className="flex-shrink-0 flex items-center cursor-pointer"
              onClick={() => window.scrollTo(0, 0)}
            >
              <Heart className="h-8 w-8 text-teal-600 mr-2" />
              <span className="font-bold text-2xl tracking-tight text-teal-900">
                Harmonia<span className="text-teal-600">Gabinet</span>
              </span>
            </div>

            {/* Menu Desktop */}
            <div className="hidden md:flex space-x-8 items-center">
              <button
                onClick={() => scrollToSection("o-mnie")}
                className="text-slate-600 hover:text-teal-600 font-medium transition-colors"
              >
                O gabinecie
              </button>
              <button
                onClick={() => scrollToSection("oferta")}
                className="text-slate-600 hover:text-teal-600 font-medium transition-colors"
              >
                Oferta
              </button>
              <button
                onClick={() => scrollToSection("kontakt")}
                className="text-slate-600 hover:text-teal-600 font-medium transition-colors"
              >
                Kontakt
              </button>
              <button
                onClick={() => scrollToSection("rezerwacja")}
                className="bg-teal-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-teal-700 shadow-md shadow-teal-200 transition-all transform hover:-translate-y-0.5"
              >
                Umów wizytę
              </button>
            </div>

            {/* Hamburger Mobile */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-600 p-2"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Menu Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 shadow-lg absolute w-full">
            <div className="px-4 pt-2 pb-6 space-y-1">
              <button
                onClick={() => scrollToSection("o-mnie")}
                className="block w-full text-left px-3 py-4 text-slate-700 font-medium border-b border-slate-50"
              >
                O gabinecie
              </button>
              <button
                onClick={() => scrollToSection("oferta")}
                className="block w-full text-left px-3 py-4 text-slate-700 font-medium border-b border-slate-50"
              >
                Oferta
              </button>
              <button
                onClick={() => scrollToSection("kontakt")}
                className="block w-full text-left px-3 py-4 text-slate-700 font-medium border-b border-slate-50"
              >
                Kontakt
              </button>
              <button
                onClick={() => scrollToSection("rezerwacja")}
                className="block w-full text-center mt-4 bg-teal-600 text-white px-3 py-3 rounded-xl font-medium shadow-sm"
              >
                Umów wizytę
              </button>
            </div>
          </div>
        )}
      </nav>

      <main className="pt-20">
        {}
        <section className="relative bg-teal-900 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <svg
              className="h-full w-full"
              preserveAspectRatio="xMidYMid slice"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 1463 318"
            >
              <path
                fill="currentColor"
                d="M-164 329L0 164.5 -164 0h328l164 164.5L164 329H-164z"
              />
              <path
                fill="currentColor"
                d="M492 329L656 164.5 492 0h328l164 164.5L820 329H492z"
              />
              <path
                fill="currentColor"
                d="M1148 329l164-164.5L1148 0h328l164 164.5L1476 329h-328z"
              />
            </svg>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
            <div className="md:w-2/3">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
                Profesjonalna pomoc w{" "}
                <span className="text-teal-400">spokojnej atmosferze</span>.
              </h1>
              <p className="text-lg md:text-xl text-teal-100 mb-10 max-w-2xl leading-relaxed">
                Zadbaj o swoje zdrowie z doświadczonym specjalistą. Oferujemy
                indywidualne podejście i nowoczesne metody terapii. Umów wizytę
                online w kilku prostych krokach.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection("rezerwacja")}
                  className="bg-white text-teal-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-teal-50 transition-colors shadow-lg flex items-center justify-center"
                >
                  Umów wizytę <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button
                  onClick={() => scrollToSection("oferta")}
                  className="border-2 border-teal-400/50 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-teal-800 transition-colors flex items-center justify-center"
                >
                  Poznaj ofertę
                </button>
              </div>
            </div>
          </div>
        </section>

        {}
        <section id="o-mnie" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <div className="aspect-square md:aspect-auto md:h-[500px] bg-slate-200 rounded-3xl overflow-hidden relative shadow-xl">
                  {/* Placeholder na zdjęcie */}
                  <img
                    src="https://placehold.co/600x800/e2e8f0/475569?text=Zdjecie+Specjalisty"
                    alt="Specjalista"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg">
                    <p className="font-bold text-lg text-slate-800">
                      mgr Anna Nowakowska
                    </p>
                    <p className="text-teal-600 font-medium">
                      Certyfikowany Specjalista
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 space-y-6">
                <h2 className="text-3xl font-bold text-slate-900">
                  Witaj w Gabinecie Harmonia
                </h2>
                <div className="w-20 h-1.5 bg-teal-500 rounded-full"></div>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Od ponad 10 lat pomagam pacjentom odzyskać równowagę i
                  zdrowie. Wierzę w holistyczne podejście do każdego problemu. W
                  moim gabinecie znajdziesz bezpieczną przestrzeń, pełne
                  zrozumienie i profesjonalną wiedzę popartą wieloma
                  szkoleniami.
                </p>
                <ul className="space-y-4 pt-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-teal-500 mr-3 flex-shrink-0" />
                    <span className="text-slate-700">
                      Wieloletnie doświadczenie kliniczne
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-teal-500 mr-3 flex-shrink-0" />
                    <span className="text-slate-700">
                      Indywidualnie dobrane metody pracy
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-teal-500 mr-3 flex-shrink-0" />
                    <span className="text-slate-700">
                      Ciągłe podnoszenie kwalifikacji i certyfikacje
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {}
        <section id="oferta" className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Zakres Usług
              </h2>
              <div className="w-20 h-1.5 bg-teal-500 rounded-full mx-auto mb-6"></div>
              <p className="text-lg text-slate-600">
                Dobieramy plan działania do Twoich indywidualnych potrzeb.
                Sprawdź, jak możemy Ci pomóc.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-lg transition-shadow relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {service.name}
                  </h3>
                  <div className="flex items-center text-sm font-medium text-teal-600 mb-4 space-x-4">
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" /> {service.duration}
                    </span>
                    <span className="text-slate-300">|</span>
                    <span>{service.price}</span>
                  </div>
                  <p className="text-slate-600 mb-8">{service.desc}</p>
                  <button
                    onClick={() => scrollToSection("rezerwacja")}
                    className="text-teal-600 font-bold flex items-center group-hover:text-teal-700"
                  >
                    Wybierz termin{" "}
                    <ChevronRight className="h-5 w-5 ml-1 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {}
        <section id="rezerwacja" className="py-24 bg-white relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-[2rem] shadow-2xl border border-slate-100 overflow-hidden">
              <div className="bg-teal-600 p-8 text-center text-white">
                <h2 className="text-3xl font-bold mb-2">Zarezerwuj Wizytę</h2>
                <p className="text-teal-100">
                  Wybierz dogodny termin i wypełnij krótki formularz.
                </p>
              </div>
              <div className="p-8 md:p-12">
                <BookingWidget
                  appointments={appointments}
                  setAppointments={setAppointments}
                />
              </div>
            </div>
          </div>
        </section>

        {}
        <section id="kontakt" className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Skontaktuj się z nami
                </h2>
                <p className="text-slate-400 mb-8 max-w-md">
                  Masz pytania przed umówieniem wizyty? Zapraszamy do kontaktu
                  telefonicznego lub mailowego.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="bg-slate-800 p-3 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-teal-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 font-medium">
                        Telefon
                      </p>
                      <p className="text-lg font-bold">+48 500 600 700</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-slate-800 p-3 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-teal-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 font-medium">
                        E-mail
                      </p>
                      <p className="text-lg font-bold">
                        kontakt@harmoniagabinet.pl
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-slate-800 p-3 rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-teal-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 font-medium">
                        Adres
                      </p>
                      <p className="text-lg font-bold">
                        ul. Spokojna 15/2, 60-101 Poznań
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800 rounded-3xl p-8 flex flex-col justify-center">
                <h3 className="text-xl font-bold mb-6 text-white border-b border-slate-700 pb-4">
                  Godziny otwarcia
                </h3>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center">
                    <span className="text-slate-300">Poniedziałek - Środa</span>{" "}
                    <span className="font-bold text-teal-400">
                      09:00 - 17:00
                    </span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-slate-300">Czwartek</span>{" "}
                    <span className="font-bold text-teal-400">
                      10:00 - 18:00
                    </span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-slate-300">Piątek</span>{" "}
                    <span className="font-bold text-teal-400">
                      09:00 - 15:00
                    </span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-slate-300">Sobota - Niedziela</span>{" "}
                    <span className="font-bold text-slate-500">Zamknięte</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      {}
      <footer className="bg-slate-950 text-slate-400 py-8 text-center border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2026 Harmonia Gabinet. Wszelkie prawa zastrzeżone.</p>
          <div className="mt-4 md:mt-0 space-x-6 text-sm">
            <button className="hover:text-white transition-colors">
              Polityka Prywatności
            </button>
            <button className="hover:text-white transition-colors">
              Regulamin
            </button>
            <button
              onClick={() => navigateTo("admin-login")}
              className="hover:text-teal-400 transition-colors flex items-center inline-flex"
            >
              <ShieldCheck className="h-4 w-4 mr-1" /> Panel Admina
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

function BookingWidget({ appointments, setAppointments }) {
  const [step, setStep] = useState(1); // 1: Data, 2: Formularz, 3: Sukces
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    consentData: false,
    consentSMS: false,
  });
  const [error, setError] = useState("");

  // Generowanie najbliższych 14 dni
  const nextDays = Array.from({ length: 14 })
    .map((_, i) => {
      const d = new Date(2026, 4, 10); // Mock dzisiejszej daty: 10 maja 2026
      d.setDate(d.getDate() + i);
      // Pomijamy weekendy w tym prostym mocku
      if (d.getDay() === 0 || d.getDay() === 6) return null;
      return d.toISOString().split("T")[0];
    })
    .filter(Boolean)
    .slice(0, 7); // Bierzemy 7 najbliższych dni roboczych

  // Filtrowanie dostępnych godzin dla wybranej daty
  const getAvailableSlots = (date) => {
    // Pobierz wizyty z wybranego dnia, które NIE SĄ odrzucone (czyli zajmują termin)
    const bookedAppointments = appointments.filter(
      (a) =>
        a.date === date && a.status !== "odrzucona" && a.status !== "odwołana",
    );
    const bookedTimes = bookedAppointments.map((a) => a.time);

    return availableHours.filter((time) => !bookedTimes.includes(time));
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setSelectedTime(null);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setStep(2);
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setError("Proszę wypełnić wszystkie pola formularza.");
      return;
    }
    if (!formData.consentData) {
      setError("Zgoda na przetwarzanie danych jest wymagana.");
      return;
    }

    // Podwójne sprawdzenie współbieżności (symulacja)
    const stillAvailable =
      getAvailableSlots(selectedDate).includes(selectedTime);
    if (!stillAvailable) {
      setError(
        "Przepraszamy, ten termin został właśnie zarezerwowany przez kogoś innego. Wybierz inny.",
      );
      setStep(1);
      setSelectedTime(null);
      return;
    }

    const newAppointment = {
      id: Date.now(),
      date: selectedDate,
      time: selectedTime,
      name: formData.name,
      phone: formData.phone,
      status: "oczekująca", // Kluczowe wg specyfikacji
      source: "online",
    };

    setAppointments([...appointments, newAppointment]);
    setStep(3);
  };

  const resetBooking = () => {
    setStep(1);
    setSelectedDate(null);
    setSelectedTime(null);
    setFormData({ name: "", phone: "", consentData: false, consentSMS: false });
  };

  const formatDisplayDate = (dateStr) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString("pl-PL", {
      weekday: "long",
      day: "numeric",
      month: "long",
    });
  };

  const formatShortDate = (dateStr) => {
    const d = new Date(dateStr);
    return {
      dayStr: d.toLocaleDateString("pl-PL", { weekday: "short" }),
      dayNum: d.getDate(),
    };
  };

  if (step === 3) {
    return (
      <div className="text-center py-8">
        <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="h-10 w-10 text-teal-600" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-4">
          Dziękujemy. Prośba wysłana!
        </h3>
        <p className="text-slate-600 mb-6 text-lg">
          Twój wybrany termin to <br />
          <strong className="text-slate-900">
            {formatDisplayDate(selectedDate)} o godzinie {selectedTime}
          </strong>
          .
        </p>
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 mb-8 inline-block text-left">
          <p className="text-sm text-slate-500 mb-1 flex items-center">
            <AlertCircle className="h-4 w-4 mr-2 text-teal-500" /> Status
            rezerwacji: Oczekująca na akceptację
          </p>
          <p className="text-sm text-slate-500">
            Gdy gabinet potwierdzi wizytę, otrzymasz powiadomienie SMS.
          </p>
        </div>
        <div>
          <button
            onClick={resetBooking}
            className="text-teal-600 font-bold hover:text-teal-800 transition-colors"
          >
            Wróć do początku
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Pasek postępu */}
      <div className="flex items-center justify-center mb-8">
        <div
          className={`flex flex-col items-center ${step >= 1 ? "text-teal-600" : "text-slate-400"}`}
        >
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center font-bold mb-2 border-2 ${step >= 1 ? "border-teal-600 bg-teal-50" : "border-slate-300"}`}
          >
            1
          </div>
          <span className="text-sm font-medium">Termin</span>
        </div>
        <div
          className={`w-16 h-0.5 mx-2 ${step >= 2 ? "bg-teal-600" : "bg-slate-200"}`}
        ></div>
        <div
          className={`flex flex-col items-center ${step >= 2 ? "text-teal-600" : "text-slate-400"}`}
        >
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center font-bold mb-2 border-2 ${step >= 2 ? "border-teal-600 bg-teal-50" : "border-slate-300"}`}
          >
            2
          </div>
          <span className="text-sm font-medium">Dane</span>
        </div>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-xl border border-red-100 flex items-start">
          <XCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
          <p className="text-sm font-medium">{error}</p>
        </div>
      )}

      {/* KROK 1: Wybór daty i czasu */}
      {step === 1 && (
        <div>
          <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
            <CalendarDays className="h-5 w-5 mr-2 text-teal-600" /> Wybierz
            dzień
          </h3>

          <div className="flex overflow-x-auto pb-4 gap-3 snap-x scrollbar-hide">
            {nextDays.map((date) => {
              const isSelected = selectedDate === date;
              const { dayStr, dayNum } = formatShortDate(date);
              return (
                <button
                  key={date}
                  onClick={() => handleDateSelect(date)}
                  className={`snap-start flex-shrink-0 w-20 h-24 rounded-2xl border-2 flex flex-col items-center justify-center transition-all ${
                    isSelected
                      ? "border-teal-600 bg-teal-600 text-white shadow-md shadow-teal-200"
                      : "border-slate-200 bg-white text-slate-600 hover:border-teal-300 hover:bg-teal-50"
                  }`}
                >
                  <span
                    className={`text-xs uppercase font-bold tracking-wider mb-1 ${isSelected ? "text-teal-100" : "text-slate-400"}`}
                  >
                    {dayStr}
                  </span>
                  <span className="text-2xl font-black">{dayNum}</span>
                </button>
              );
            })}
          </div>

          {selectedDate && (
            <div className="mt-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                <Clock className="h-5 w-5 mr-2 text-teal-600" /> Wybierz godzinę
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                {getAvailableSlots(selectedDate).length > 0 ? (
                  getAvailableSlots(selectedDate).map((time) => (
                    <button
                      key={time}
                      onClick={() => handleTimeSelect(time)}
                      className="py-3 px-4 rounded-xl border border-slate-200 font-medium text-slate-700 bg-white hover:border-teal-600 hover:text-teal-700 hover:bg-teal-50 transition-colors text-center"
                    >
                      {time}
                    </button>
                  ))
                ) : (
                  <div className="col-span-full py-6 text-center text-slate-500 bg-slate-50 rounded-xl">
                    Brak wolnych terminów w tym dniu. Proszę wybrać inny.
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {/* KROK 2: Formularz danych */}
      {step === 2 && (
        <div className="animate-in fade-in duration-300">
          <div className="bg-teal-50 rounded-xl p-4 mb-6 flex justify-between items-center">
            <div>
              <p className="text-sm text-teal-800 font-medium">
                Wybrany termin:
              </p>
              <p className="font-bold text-teal-900">
                {formatDisplayDate(selectedDate)}, {selectedTime}
              </p>
            </div>
            <button
              onClick={() => setStep(1)}
              className="text-teal-600 text-sm font-bold hover:underline"
            >
              Zmień
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                Imię i nazwisko
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="pl-10 w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all outline-none"
                  placeholder="np. Anna Kowalska"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                Numer telefonu
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="pl-10 w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all outline-none"
                  placeholder="np. 500 600 700"
                />
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <label className="flex items-start">
                <input
                  type="checkbox"
                  checked={formData.consentData}
                  onChange={(e) =>
                    setFormData({ ...formData, consentData: e.target.checked })
                  }
                  className="mt-1 mr-3 w-5 h-5 text-teal-600 rounded border-slate-300 focus:ring-teal-500"
                />
                <span className="text-sm text-slate-600 leading-tight">
                  * Wyrażam zgodę na przetwarzanie podanych danych osobowych w
                  celu obsługi rezerwacji wizyty zgodnie z{" "}
                  <a href="#" className="text-teal-600 underline">
                    Polityką Prywatności
                  </a>
                  . (Wymagane)
                </span>
              </label>
              <label className="flex items-start">
                <input
                  type="checkbox"
                  checked={formData.consentSMS}
                  onChange={(e) =>
                    setFormData({ ...formData, consentSMS: e.target.checked })
                  }
                  className="mt-1 mr-3 w-5 h-5 text-teal-600 rounded border-slate-300 focus:ring-teal-500"
                />
                <span className="text-sm text-slate-600 leading-tight">
                  Wyrażam zgodę na otrzymywanie powiadomień SMS przypominających
                  o wizycie. (Opcjonalne)
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-teal-600 text-white font-bold py-4 rounded-xl hover:bg-teal-700 transition-colors shadow-lg shadow-teal-200 text-lg flex justify-center items-center"
            >
              Wyślij prośbę o rezerwację
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

function AdminLogin({ navigateTo }) {
  const handleLogin = (e) => {
    e.preventDefault();
    // Pomięcie weryfikacji hasła dla potrzeb prototypu
    navigateTo("admin-dashboard");
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <Heart className="h-12 w-12 text-teal-600 mx-auto mb-4" />
        <h2 className="text-3xl font-extrabold text-slate-900">
          Panel Zarządzania
        </h2>
        <p className="mt-2 text-sm text-slate-600">Gabinet Harmonia</p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-xl sm:rounded-2xl sm:px-10 border border-slate-100">
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label className="block text-sm font-medium text-slate-700">
                Email administratora
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  defaultValue="admin@gabinet.pl"
                  className="appearance-none block w-full px-3 py-3 border border-slate-300 rounded-xl shadow-sm placeholder-slate-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">
                Hasło
              </label>
              <div className="mt-1">
                <input
                  type="password"
                  defaultValue="password123"
                  className="appearance-none block w-full px-3 py-3 border border-slate-300 rounded-xl shadow-sm placeholder-slate-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="bg-teal-50 p-4 rounded-xl text-sm text-teal-800 border border-teal-100">
              To jest prototyp. Kliknij "Zaloguj się", aby wejść do panelu.
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900"
              >
                Zaloguj się
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => navigateTo("public")}
              className="text-sm text-slate-500 hover:text-slate-900 font-medium"
            >
              &larr; Wróć na stronę główną
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function AdminDashboard({ navigateTo, appointments, setAppointments }) {
  const [activeTab, setActiveTab] = useState("lista"); // 'lista', 'kalendarz'
  const [showAddForm, setShowAddForm] = useState(false);

  const updateStatus = (id, newStatus) => {
    setAppointments(
      appointments.map((app) =>
        app.id === id ? { ...app, status: newStatus } : app,
      ),
    );

    // W prawdziwej aplikacji tu byłoby wywołanie API do wysyłki SMS:
    if (newStatus === "potwierdzona") {
      console.log(
        `[System Mock] Wysłano SMS do pacjenta o potwierdzeniu wizyty.`,
      );
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "oczekująca":
        return (
          <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-bold border border-amber-200">
            Oczekująca
          </span>
        );
      case "potwierdzona":
        return (
          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-bold border border-green-200">
            Potwierdzona
          </span>
        );
      case "odrzucona":
        return (
          <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-bold border border-red-200">
            Odrzucona
          </span>
        );
      case "odwołana":
        return (
          <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold border border-slate-200">
            Odwołana
          </span>
        );
      case "zrealizowana":
        return (
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-bold border border-blue-200">
            Zrealizowana
          </span>
        );
      default:
        return null;
    }
  };

  // Sortowanie wizyt: najpierw nowsze/oczekujące, potem wg daty
  const sortedAppointments = [...appointments].sort((a, b) => {
    if (a.status === "oczekująca" && b.status !== "oczekująca") return -1;
    if (a.status !== "oczekująca" && b.status === "oczekująca") return 1;
    return new Date(a.date) - new Date(b.date);
  });

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Admin Navbar */}
      <nav className="bg-slate-900 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <ShieldCheck className="h-6 w-6 text-teal-400 mr-2" />
              <span className="font-bold text-lg">Panel Administratora</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-slate-400 text-sm hidden sm:block">
                Zalogowano jako: admin@gabinet.pl
              </span>
              <button
                onClick={() => navigateTo("public")}
                className="flex items-center text-sm font-medium bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg transition-colors"
              >
                <LogOut className="h-4 w-4 mr-2" /> Wyloguj / Powrót
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header & Actions */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              Zarządzanie wizytami
            </h1>
            <p className="text-slate-500 mt-1">
              Przeglądaj i akceptuj rezerwacje online.
            </p>
          </div>

          <div className="flex space-x-3 w-full md:w-auto">
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="flex-1 md:flex-none flex items-center justify-center bg-teal-600 text-white px-5 py-2.5 rounded-xl font-medium hover:bg-teal-700 transition-colors shadow-sm"
            >
              <PlusCircle className="h-5 w-5 mr-2" /> Dodaj wizytę ręcznie
            </button>
          </div>
        </div>

        {}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider"
                  >
                    Data i Czas
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider"
                  >
                    Pacjent
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider"
                  >
                    Kontakt
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider"
                  >
                    Źródło
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-right text-xs font-bold text-slate-500 uppercase tracking-wider"
                  >
                    Akcje
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-100">
                {sortedAppointments.map((app) => (
                  <tr
                    key={app.id}
                    className={`hover:bg-slate-50 transition-colors ${app.status === "oczekująca" ? "bg-amber-50/30" : ""}`}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-bold text-slate-900">{app.date}</div>
                      <div className="text-sm text-slate-500 flex items-center mt-1">
                        <Clock className="h-3 w-3 mr-1" /> {app.time}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium text-slate-900 flex items-center">
                        <User className="h-4 w-4 text-slate-400 mr-2" />
                        {app.name}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                      {app.phone}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getStatusBadge(app.status)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                      {app.source === "online" ? "Internet" : "Ręcznie"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      {app.status === "oczekująca" && (
                        <div className="flex justify-end space-x-2">
                          <button
                            onClick={() => updateStatus(app.id, "potwierdzona")}
                            className="text-green-600 hover:text-green-900 bg-green-50 p-2 rounded-lg"
                            title="Zatwierdź"
                          >
                            <Check className="h-5 w-5" />
                          </button>
                          <button
                            onClick={() => updateStatus(app.id, "odrzucona")}
                            className="text-red-600 hover:text-red-900 bg-red-50 p-2 rounded-lg"
                            title="Odrzuć"
                          >
                            <X className="h-5 w-5" />
                          </button>
                        </div>
                      )}
                      {app.status === "potwierdzona" && (
                        <div className="flex justify-end space-x-2">
                          <button
                            onClick={() => updateStatus(app.id, "zrealizowana")}
                            className="text-blue-600 hover:text-blue-900 text-xs bg-blue-50 px-3 py-2 rounded-lg font-bold"
                          >
                            Oznacz zrealizowaną
                          </button>
                          <button
                            onClick={() => updateStatus(app.id, "odwołana")}
                            className="text-slate-400 hover:text-red-600 px-2 py-2"
                            title="Odwołaj"
                          >
                            <X className="h-5 w-5" />
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
                {appointments.length === 0 && (
                  <tr>
                    <td
                      colSpan="6"
                      className="px-6 py-12 text-center text-slate-500"
                    >
                      Brak wizyt w systemie.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Modal / Formularz dodawania ręcznego - mock uproszczony do panelu info */}
        {showAddForm && (
          <div className="mt-8 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="text-lg font-bold mb-4 border-b pb-2">
              Ręczne dodanie wizyty (Moduł w przygotowaniu)
            </h3>
            <p className="text-slate-600 text-sm mb-4">
              W pełnej wersji pojawi się tutaj formularz pozwalający na dodanie
              pacjenta, który zadzwonił telefonicznie, z ominięciem walidacji na
              stronie publicznej.
            </p>
            <button
              onClick={() => setShowAddForm(false)}
              className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg text-sm font-bold"
            >
              Zamknij
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
