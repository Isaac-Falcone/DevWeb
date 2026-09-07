import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { Sparkles, Menu, X } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { AuthModal } from "@/components/auth/AuthModal";
import { ArcScroll } from "@/components/ArcScroll";

// Import Sections
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { JourneySection } from "@/components/sections/JourneySection";
import { CoursesSection } from "@/components/sections/CoursesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";

const TITLE = "DevWeb — A Elite do Ensino de Programação";
const DESCRIPTION =
  "Plataforma imersiva de ensino em programação: roadmap gamificado, cursos de HTML, CSS, JavaScript e Python com qualidade de produção Awwwards.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: Index,
});

/**
 * Componente Principal (Home/Landing Page)
 * Responsável por orquestrar a renderização das seções da página
 * e gerenciar o estado global do Header (Navegação + Autenticação).
 */
function Index() {
  const [isDarkBg, setIsDarkBg] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, signOut } = useAuth();

  // Função centralizada para checkout (usada no Header)
  const handleCheckout = async (courseId: string) => {
    if (!user) return;
    try {
      toast.loading("Iniciando ambiente de pagamento seguro...", { id: "checkout" });
      
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${user.id}`
        },
        body: JSON.stringify({ courseId }),
      });
      
      const data = await res.json();
      
      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error(data.error || "Falha ao criar sessão de pagamento");
      }
    } catch (err: any) {
      toast.error(err.message || "Erro de conexão", { id: "checkout" });
    }
  };

  // Efeito de rolagem para alterar o estilo do Header baseado na seção ativa (Intersection simulado)
  useEffect(() => {
    const handleScroll = () => {
      const threshold = 100;
      const checkSection = (id: string) => {
        const el = document.getElementById(id);
        if (!el) return null;
        return el.getBoundingClientRect().top;
      };

      const featuresTop = checkSection("features");
      const portfolioTop = checkSection("portfolio"); // Pertence ao ArcScroll
      const cursosTop = checkSection("cursos");
      const voiceTop = checkSection("voice");
      const trustedTop = checkSection("trusted");
      const contatoTop = checkSection("contato");

      let isDark = true;

      if (featuresTop !== null && featuresTop <= threshold) isDark = false;
      if (portfolioTop !== null && portfolioTop <= threshold) isDark = true;
      if (cursosTop !== null && cursosTop <= threshold) isDark = false;
      if (voiceTop !== null && voiceTop <= threshold) isDark = true;
      if (trustedTop !== null && trustedTop <= threshold) isDark = false;
      if (contatoTop !== null && contatoTop <= threshold) isDark = true;

      setIsDarkBg(isDark);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="bg-background text-foreground min-h-screen">
      {/* ================= HEADER ================= */}
      <div className="fixed top-6 inset-x-0 z-50 px-6 transition-all duration-300">
        <header className={cn(
          "max-w-6xl mx-auto flex items-center justify-between px-8 py-3 rounded-full shadow-lg border transition-all duration-500",
          isDarkBg
            ? "bg-white/5 backdrop-blur-md border-white/10 text-white"
            : "bg-white/75 backdrop-blur-xl border-black/10 text-black shadow-md"
        )}>
          <a href="#top" className="flex items-center gap-2 font-bold tracking-tight z-10 group">
            <Sparkles className={cn("h-4 w-4 transition-colors duration-500", isDarkBg ? "text-white" : "text-black")} strokeWidth={2} />
            <span className={cn("text-base font-semibold transition-colors duration-500", isDarkBg ? "text-white" : "text-black")}>Dev<span className="font-light">Web</span></span>
          </a>

          <nav className={cn(
            "hidden items-center gap-8 text-[13px] font-medium transition-colors duration-500 md:flex",
            isDarkBg ? "text-gray-300" : "text-gray-800"
          )}>
            <a className="transition-colors hover:text-primary" href="#top">Início</a>
            <a className="transition-colors hover:text-primary" href="#features">Sobre</a>
            <a className="transition-colors hover:text-primary" href="#cursos">Cursos</a>
            <a className="transition-colors hover:text-primary" href="#voice">Competências</a>
            <a className="transition-colors hover:text-primary" href="#contato">Contato</a>
          </nav>

          <div className="flex items-center gap-5 z-10">
            {user ? (
              <div className="flex items-center gap-4">
                <span className={cn(
                  "text-[13px] font-medium hidden sm:block transition-colors duration-500",
                  isDarkBg ? "text-white" : "text-black"
                )}>
                  Olá, {user.user_metadata?.['full_name']?.split(' ')[0] || 'Aluno'}
                </span>
                <button
                  onClick={signOut}
                  className={cn(
                    "text-[13px] font-medium transition-colors duration-500 hidden sm:block",
                    isDarkBg ? "text-gray-300 hover:text-white" : "text-gray-800 hover:text-black"
                  )}
                >
                  Sair
                </button>
                <button
                  onClick={() => handleCheckout("curso_devweb_completo")}
                  className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-4 py-2 rounded-full text-xs font-semibold transition-colors hidden sm:inline-flex shadow-[0_0_15px_rgba(124,58,237,0.3)] cursor-pointer"
                >
                  Assinar Plataforma
                </button>
              </div>
            ) : (
              <>
                <AuthModal
                  defaultMode="login"
                  trigger={
                    <button className={cn(
                      "text-[13px] font-medium transition-colors duration-500 hidden sm:block cursor-pointer",
                      isDarkBg ? "text-gray-300 hover:text-white" : "text-gray-800 hover:text-black"
                    )}>
                      Sign in
                    </button>
                  }
                />
                <AuthModal
                  defaultMode="register"
                  trigger={
                    <button className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-4 py-2 rounded-full text-xs font-semibold transition-colors hidden sm:inline-flex shadow-[0_0_15px_rgba(124,58,237,0.3)] cursor-pointer">
                      Começar Agora
                    </button>
                  }
                />
              </>
            )}

            {/* Hamburger Button (Mobile) */}
            <button 
              className={cn("md:hidden p-2 rounded-md transition-colors", isDarkBg ? "text-white hover:bg-white/10" : "text-black hover:bg-black/5")}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </header>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="absolute top-[calc(100%+10px)] left-0 right-0 bg-[#050505]/95 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-2xl flex flex-col gap-6 md:hidden z-50 animate-in fade-in slide-in-from-top-4">
            <nav className="flex flex-col gap-4 text-white text-lg font-medium">
              <a href="#top" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors">Início</a>
              <a href="#features" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors">Sobre</a>
              <a href="#cursos" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors">Cursos</a>
              <a href="#voice" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors">Competências</a>
              <a href="#contato" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors">Contato</a>
            </nav>
            <hr className="border-white/10" />
            <div className="flex flex-col gap-4">
              {user ? (
                <>
                  <div className="text-white text-sm">Olá, {user.user_metadata?.['full_name'] || 'Aluno'}</div>
                  <button onClick={() => { signOut(); setIsMobileMenuOpen(false); }} className="text-left text-gray-400 hover:text-white transition-colors">Sair da conta</button>
                  <button onClick={() => { handleCheckout("curso_devweb_completo"); setIsMobileMenuOpen(false); }} className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white py-3 rounded-xl font-bold w-full">Assinar Plataforma</button>
                </>
              ) : (
                <>
                  <AuthModal
                    defaultMode="login"
                    trigger={<button className="text-white border border-white/20 py-3 rounded-xl font-medium w-full">Sign in</button>}
                  />
                  <AuthModal
                    defaultMode="register"
                    trigger={<button className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white py-3 rounded-xl font-bold w-full">Começar Agora</button>}
                  />
                </>
              )}
            </div>
          </div>
        )}
      </div>

      {/* ================= SEÇÕES EXTRAÍDAS (CLEAN CODE) ================= */}
      <HeroSection />
      <FeaturesSection />
      <JourneySection />
      <ArcScroll />
      <CoursesSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
