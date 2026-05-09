
import { Mail } from "lucide-react";

// Ikona węzła obwodu dla list (Nawigacja, Usługi)
const CircuitNodeIcon = () => (
  <svg
    width="24"
    height="12"
    viewBox="0 0 24 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mr-3 text-[#E2B75A] flex-shrink-0 mt-1.5 opacity-80 group-hover:opacity-100 group-hover:drop-shadow-[0_0_5px_rgba(226,183,90,0.8)] transition-all"
  >
    <circle cx="3" cy="6" r="2" stroke="currentColor" strokeWidth="1.2" />
    <path
      d="M5 6 H 12 L 15 9 H 20"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="21" cy="9" r="1.5" fill="currentColor" />
  </svg>
);

// Dekoracyjne linie obwodów drukowanych tła (lewa strona)
const BackgroundCircuitLeft = () => (
  <svg
    className="absolute top-0 left-0 w-[400px] h-full pointer-events-none"
    viewBox="0 0 400 300"
    fill="none"
    preserveAspectRatio="none"
  >
    {/* Główna linia - baza */}
    <path
      d="M 0 50 L 50 50 L 80 80 L 80 200 L 110 230 L 200 230"
      className="circuit-wire"
    />
    {/* Główna linia - elektron */}
    <path
      d="M 0 50 L 50 50 L 80 80 L 80 200 L 110 230 L 200 230"
      pathLength="100"
      className="circuit-electron"
    />

    <circle
      cx="50"
      cy="50"
      r="2.5"
      fill="#00A3FF"
      className="animate-pulse"
      style={{ animationDuration: "2s" }}
    />
    <circle cx="80" cy="80" r="2" fill="#00A3FF" opacity="0.5" />
    <circle
      cx="110"
      cy="230"
      r="2.5"
      fill="#00A3FF"
      className="animate-pulse"
      style={{ animationDuration: "1.5s", animationDelay: "0.5s" }}
    />

    {/* Złota ścieżka (statyczna) */}
    <path
      d="M 0 100 L 30 100 L 60 130 L 60 250"
      stroke="#E2B75A"
      strokeWidth="0.5"
      fill="none"
      opacity="0.3"
    />
    <circle cx="30" cy="100" r="1.5" fill="#E2B75A" opacity="0.5" />

    {/* Druga linia - baza */}
    <path d="M 0 20 L 120 20 L 150 50 L 250 50" className="circuit-wire" />
    {/* Druga linia - elektron (szybszy) */}
    <path
      d="M 0 20 L 120 20 L 150 50 L 250 50"
      pathLength="100"
      className="circuit-electron-fast"
    />
  </svg>
);

// Dekoracyjne linie obwodów drukowanych tła (prawa strona)
const BackgroundCircuitRight = () => (
  <svg
    className="absolute top-0 right-0 w-[400px] h-full pointer-events-none transform scale-x-[-1]"
    viewBox="0 0 400 300"
    fill="none"
    preserveAspectRatio="none"
  >
    {/* Główna linia - baza */}
    <path
      d="M 0 30 L 60 30 L 100 70 L 100 180 L 140 220 L 280 220"
      className="circuit-wire"
    />
    {/* Główna linia - elektron */}
    <path
      d="M 0 30 L 60 30 L 100 70 L 100 180 L 140 220 L 280 220"
      pathLength="100"
      className="circuit-electron"
      style={{ animationDelay: "1s" }}
    />

    <circle
      cx="60"
      cy="30"
      r="2.5"
      fill="#00A3FF"
      className="animate-pulse"
      style={{ animationDuration: "2.5s" }}
    />
    <circle cx="100" cy="70" r="2" fill="#00A3FF" opacity="0.5" />
    <circle
      cx="140"
      cy="220"
      r="2.5"
      fill="#00A3FF"
      className="animate-pulse"
      style={{ animationDuration: "1.2s", animationDelay: "0.8s" }}
    />

    {/* Złota ścieżka (statyczna) */}
    <path
      d="M 0 150 L 40 150 L 80 190 L 80 280"
      stroke="#E2B75A"
      strokeWidth="0.5"
      fill="none"
      opacity="0.3"
    />
    <circle cx="40" cy="150" r="1.5" fill="#E2B75A" opacity="0.5" />

    {/* Dodatkowy boczny przewód - baza */}
    <path d="M 0 250 L 50 250 L 80 280 L 200 280" className="circuit-wire" />
    {/* Dodatkowy boczny przewód - elektron */}
    <path
      d="M 0 250 L 50 250 L 80 280 L 200 280"
      pathLength="100"
      className="circuit-electron-fast"
      style={{ animationDelay: "0.3s" }}
    />
  </svg>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center p-4 sm:p-8 font-sans selection:bg-[#E2B75A] selection:text-black">
      {/* Deklaracja globalnych animacji przepływu dla SVG */}
      <style>{`
        @keyframes electron-flow {
          0% { stroke-dashoffset: 100; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes electron-flow-reverse {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: 100; }
        }
        .circuit-wire {
          stroke: rgba(0, 163, 255, 0.15);
          stroke-width: 1;
        }
        .circuit-electron {
          stroke: #00A3FF;
          stroke-width: 1.5;
          stroke-dasharray: 10 90;
          animation: electron-flow 2.5s linear infinite;
          filter: drop-shadow(0 0 3px rgba(0,163,255,0.8));
        }
        .circuit-electron-fast {
          stroke: #00A3FF;
          stroke-width: 1.5;
          stroke-dasharray: 5 95;
          animation: electron-flow-reverse 1.8s linear infinite;
          filter: drop-shadow(0 0 4px rgba(0,163,255,0.9));
        }
        @keyframes energy-pulse {
          0%, 100% { opacity: 0.05; transform: scale(0.95); }
          50% { opacity: 0.15; transform: scale(1.05); }
        }
        .animate-energy-pulse {
          animation: energy-pulse 6s ease-in-out infinite;
        }
        .animate-energy-pulse-delayed {
          animation: energy-pulse 7s ease-in-out infinite 2s;
        }
      `}</style>

      {/* Główny kontener stopki/sekcji */}
      <footer className="relative w-full max-w-7xl border-y border-[#1a1a1a] bg-[#020202] overflow-hidden rounded-sm">
        {/* EFEKTY ŚWIETLNE (GLOWS) */}
        {/* Górna złota linia */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#E2B75A] to-transparent opacity-70 shadow-[0_0_15px_#E2B75A]" />
        {/* Dolna niebieska linia */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00A3FF] to-transparent opacity-50 shadow-[0_0_15px_#00A3FF]" />

        {/* Niebieskie flary pulsujące w tle */}
        <div className="absolute top-0 left-[10%] w-64 h-64 bg-[#00A3FF] rounded-full mix-blend-screen filter blur-[100px] pointer-events-none animate-energy-pulse" />
        <div className="absolute bottom-0 right-[5%] w-80 h-80 bg-[#00A3FF] rounded-full mix-blend-screen filter blur-[120px] pointer-events-none animate-energy-pulse-delayed" />

        {/* Złota flara (centrum) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-32 bg-[#E2B75A] rounded-full mix-blend-screen filter blur-[100px] opacity-[0.05] pointer-events-none" />

        {/* Linie obwodów (Tło z animowanym przepływem prądu) */}
        <BackgroundCircuitLeft />
        <BackgroundCircuitRight />

        {/* ZAWARTOŚĆ GŁÓWNA */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 px-8 py-16 lg:px-16 lg:py-20">
          {/* Kolumna 1: Marka / O firmie */}
          <div className="flex flex-col space-y-4">
            <h2 className="text-3xl font-bold tracking-wide text-[#E2B75A] drop-shadow-[0_0_8px_rgba(226,183,90,0.4)]">
              PZ — Twoja Firma
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed tracking-wide">
              Fullstack Developer • Automatyzacje • Aplikacje webowe
            </p>
            <p className="text-gray-500 text-xs mt-4 max-w-xs">
              Tworzymy dedykowane rozwiązania cyfrowe, które skalują Twój biznes
              i automatyzują procesy.
            </p>
          </div>

          {/* Kolumna 2: Nawigacja */}
          <div className="flex flex-col space-y-6 lg:pl-8">
            <h3 className="text-[#E2B75A] font-semibold tracking-widest text-sm uppercase">
              Nawigacja
            </h3>
            <ul className="space-y-4">
              {["Start", "O nas", "Portfolio", "Kontakt"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="group flex items-center text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    <CircuitNodeIcon />
                    <span className="text-sm tracking-wide">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolumna 3: Usługi */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-[#E2B75A] font-semibold tracking-widest text-sm uppercase">
              Usługi
            </h3>
            <ul className="space-y-4">
              {[
                "Strony internetowe",
                "Aplikacje webowe",
                "Automatyzacje",
                "Wsparcie IT",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="group flex items-center text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    <CircuitNodeIcon />
                    <span className="text-sm tracking-wide">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolumna 4: Kontakt i CTA */}
          <div className="flex flex-col space-y-8">
            <h3 className="text-[#E2B75A] font-semibold tracking-widest text-sm uppercase">
              Kontakt
            </h3>

            <div className="space-y-5">
              {/* Email */}
              <div className="flex items-start space-x-4 group cursor-pointer">
                <div className="p-2 border border-[#E2B75A]/30 rounded-md group-hover:border-[#E2B75A] group-hover:shadow-[0_0_10px_rgba(226,183,90,0.3)] transition-all">
                  <Mail size={18} className="text-[#E2B75A]" />
                </div>
                <div>
                  <p className="text-[#E2B75A] text-xs font-semibold tracking-widest uppercase mb-1">
                    E-mail
                  </p>
                  <p className="text-gray-300 text-sm group-hover:text-white transition-colors">
                    kontakt@twojafirma.pl
                  </p>
                </div>
              </div>

              {/* GitHub */}
              <div className="flex items-start space-x-4 group cursor-pointer">
                <div className="p-2 border border-[#E2B75A]/30 rounded-md group-hover:border-[#E2B75A] group-hover:shadow-[0_0_10px_rgba(226,183,90,0.3)] transition-all">
                 
                </div>
                <div>
                  <p className="text-[#E2B75A] text-xs font-semibold tracking-widest uppercase mb-1">
                    Github
                  </p>
                  <p className="text-gray-300 text-sm group-hover:text-white transition-colors">
                    github.com/twojprofil
                  </p>
                </div>
              </div>
              {/* LinkedIn */}
              <div className="flex items-start space-x-4 group cursor-pointer">
                <div className="p-2 border border-[#E2B75A]/30 rounded-md group-hover:border-[#E2B75A] group-hover:shadow-[0_0_10px_rgba(226,183,90,0.3)] transition-all">
                </div>
                <div>
                  <p className="text-[#E2B75A] text-xs font-semibold tracking-widest uppercase mb-1">
                    Linkedin
                  </p>
                  <p className="text-gray-300 text-sm group-hover:text-white transition-colors">
                    linkedin.com/in/twojprofil
                  </p>
                </div>
              </div>
            </div>

            {/* Przycisk CTA */}
            <button className="group relative w-full sm:w-auto mt-4 px-6 py-4 bg-transparent border border-[#E2B75A]/50 rounded-sm flex items-center justify-center space-x-3 overflow-hidden transition-all duration-300 hover:border-[#E2B75A] shadow-[0_0_15px_rgba(226,183,90,0.1)] hover:shadow-[0_0_25px_rgba(226,183,90,0.3)]">
              {/* Efekt skanowania tła na hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E2B75A]/10 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />

              <span className="relative z-10 text-[#E2B75A] font-bold tracking-[0.2em] text-sm uppercase group-hover:drop-shadow-[0_0_8px_rgba(226,183,90,0.8)]">
                Umów rozmowę
              </span>
     
            </button>
          </div>
        </div>

        {/* Pasek Copyright */}
        <div className="relative z-10 border-t border-[#1a1a1a]/50 py-6 text-center">
          <p className="text-gray-500 text-xs tracking-wider">
            © 2026 Twoja Firma. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </footer>
    </div>
  );
}
