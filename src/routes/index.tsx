import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Braces,
  ChevronRight,
  Clock,
  Code2,
  Cpu,
  Flame,
  Globe,
  Layers,
  Layout,
  Play,
  Sparkles,
  Terminal,
  Trophy,
  Lock,
  Mail,
  MessageSquare,
  Phone,
  Send,
  Loader2,
  MapPin,
  Menu,
  X,
} from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

import heroAbstract from "@/assets/hero-abstract.jpg";
import heroChatBg from "@/assets/hero-chat-bg.jpg";
import lesson1 from "@/assets/lesson-1.jpg";
import lesson2 from "@/assets/lesson-2.jpg";
import lesson3 from "@/assets/lesson-3.jpg";
import { RadialProgress } from "@/components/RadialProgress";
import { MotionReveal } from "@/components/MotionReveal";
import { FloatingElement } from "@/components/FloatingElement";
import { ArcScroll } from "@/components/ArcScroll";
import { AnimatedNumber } from "@/components/AnimatedNumber";
import { useAuth } from "@/contexts/AuthContext";
import { AuthModal } from "@/components/auth/AuthModal";

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

const journey = [
  {
    step: "01",
    tag: "<html/>",
    title: "Aprender HTML",
    text: "Conheça a base estrutural da web, criando a marcação semântica das suas páginas.",
    icon: <Layout className="h-6 w-6 text-neon-blue" />,
  },
  {
    step: "02",
    tag: ".css{}",
    title: "Estudar CSS",
    text: "Domine o design, layout e estilo para transformar telas simples em experiências visuais completas.",
    icon: <Globe className="h-6 w-6 text-magenta" />,
  },
  {
    step: "03",
    tag: "js()",
    title: "Trabalhar com JavaScript",
    text: "Adicione interatividade, lógica e dinamismo criando aplicações web reais e modernas.",
    icon: <Code2 className="h-6 w-6 text-amber" />,
  },
  {
    step: "04",
    tag: "deploy",
    title: "Desenvolver projetos web",
    text: "Integre as tecnologias aprendidas e construa projetos práticos incríveis para o seu portfólio.",
    icon: <Cpu className="h-6 w-6 text-primary" />,
  },
];

const courses = [
  {
    code: "HTML",
    level: "Iniciante",
    hours: "20h",
    modules: 12,
    accent: "violet" as const,
    text: "Marcação semântica, formulários, mídia e a base de toda a web.",
  },
  {
    code: "CSS",
    level: "Intermediário",
    hours: "30h",
    modules: 18,
    accent: "peach" as const,
    text: "Flexbox, grid, animações, variáveis e design systems na prática.",
  },
  {
    code: "JavaScript",
    level: "Avançado",
    hours: "50h",
    modules: 26,
    accent: "violet" as const,
    text: "DOM, assincronia, arquitetura de componentes e consumo de APIs.",
  },
  {
    code: "Python",
    level: "Lógico/Backend",
    hours: "40h",
    modules: 22,
    accent: "peach" as const,
    text: "Algoritmos, estruturas de dados, automação e serviços de backend.",
  },
];

const lessons = [
  {
    img: lesson1,
    title: "Clonando um layout premium com Grid",
    course: "CSS · Módulo 12",
    time: "18:42",
  },
  {
    img: lesson2,
    title: "Componentes reutilizáveis do zero",
    course: "JavaScript · Módulo 07",
    time: "24:10",
  },
  {
    img: lesson3,
    title: "Automatizando dados com Python",
    course: "Python · Módulo 15",
    time: "31:05",
  },
];

const challenges = [
  { name: "Landing page assimétrica", course: "CSS", progress: 82 },
  { name: "Mini API de tarefas", course: "Python", progress: 64 },
  { name: "Carrossel sem bibliotecas", course: "JavaScript", progress: 45 },
  { name: "Formulário acessível", course: "HTML", progress: 100 },
];

function Index() {
  const [isDarkBg, setIsDarkBg] = useState(true);
  const { user, signOut } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.", { icon: "🚀" });
      const target = e.target as HTMLFormElement;
      target.reset();
    }, 1500);
  };

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
        // Redireciona o usuário para a tela oficial de pagamento do Stripe!
        window.location.href = data.url;
      } else {
        throw new Error(data.error || "Falha ao criar sessão de pagamento");
      }
    } catch (err: any) {
      toast.error(err.message || "Erro de conexão segura", { id: "checkout" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 100; // Trigger when section top is 100px from viewport top (where navbar is)

      const checkSection = (id: string) => {
        const el = document.getElementById(id);
        if (!el) return null;
        return el.getBoundingClientRect().top;
      };

      const featuresTop = checkSection("features");
      const portfolioTop = checkSection("portfolio");
      const cursosTop = checkSection("cursos");
      const voiceTop = checkSection("voice");
      const trustedTop = checkSection("trusted");
      const contatoTop = checkSection("contato");

      let isDark = true; // Hero section (default) is dark

      // As the user scrolls down, sections move up (their top becomes smaller/negative).
      // If a section's top is less than or equal to the threshold, it means it's under the navbar.
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

            {/* Hamburger Button (Mobile Only) */}
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

      {/* ================= HERO SECTION (DARK) ================= */}
      <section id="top" className="relative pt-36 pb-0 overflow-visible flex flex-col items-center text-center bg-[#050505]">

        {/* Background CSS Glows Container (Perfect Replication of Image) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          
          {/* Glow 1: Vibrant Purple (Top-Left Edge) */}
          <div className="absolute top-[0%] -left-[150px] w-[350px] md:w-[450px] h-[500px] md:h-[700px] bg-[#9333EA] blur-[140px] opacity-[0.65] rounded-full mix-blend-screen" />
          
          {/* Glow 2: Amber/Gold (Top Center-Left) */}
          <div className="absolute top-[-80px] left-[15%] md:left-[20%] w-[300px] h-[150px] bg-[#F59E0B] blur-[90px] opacity-[0.55] rounded-full mix-blend-screen" />

          {/* Glow 3: Warm Orange (Top-Right Edge) */}
          <div className="absolute top-[-100px] -right-[100px] w-[400px] md:w-[500px] h-[400px] md:h-[500px] bg-[#EA580C] blur-[150px] opacity-[0.45] rounded-full mix-blend-screen" />

          {/* Glow 4: Intense Red/Rose (Bottom-Right Corner) */}
          <div className="absolute bottom-[-150px] md:bottom-[-200px] -right-[150px] md:-right-[200px] w-[500px] md:w-[700px] h-[500px] md:h-[700px] bg-[#E11D48] blur-[160px] md:blur-[200px] opacity-[0.65] rounded-full mix-blend-screen" />
        </div>

        {/* Matte Black Noise Texture for the granular feel (Placed after glows to apply over them) */}
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none z-[1]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

        <div className="relative z-10 max-w-4xl px-6">
          <MotionReveal direction="up" duration={0.8}>
            <h1 className="text-4xl md:text-5xl lg:text-[68px] font-bold tracking-tight leading-[1.1] text-white">
              Bem-vindo ao <br />
              DevWeb!
            </h1>
          </MotionReveal>

          <MotionReveal delay={200} direction="up" className="mt-5 flex flex-col items-center">
            <p className="text-gray-300 text-[17px] max-w-2xl text-center leading-relaxed font-medium mt-4">
              O DevWeb é um site criado para ajudar você a conhecer mais sobre tecnologia, desenvolvimento web e as melhores práticas de programação.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="#sobre" className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-6 py-3.5 rounded-full text-sm font-semibold transition-colors shadow-[0_0_20px_rgba(124,58,237,0.4)]">
                Saiba mais sobre o DevWeb!
              </a>
              <a href="#cursos" className="bg-white text-black hover:bg-gray-100 px-6 py-3.5 rounded-full text-sm font-semibold transition-colors">
                Ver Cursos
              </a>
            </div>
          </MotionReveal>
        </div>

        {/* Hero Interactive Chat Window (Overlaps exactly 50% into next section) */}
        <MotionReveal delay={400} direction="up" duration={1} className="relative w-full max-w-[1000px] px-6 mt-10 z-20" style={{ marginBottom: "-260px" }}>
          <div className="w-full rounded-[24px] shadow-2xl border border-white/20 overflow-hidden relative" style={{ height: "520px" }}>
            {/* Real 3D Wavy Abstract Background */}
            <img src={heroChatBg} alt="Chat Background" className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-90" />

            {/* Chat Content */}
            <div className="relative z-10 w-full h-full p-6 md:p-8 flex flex-col justify-between">

              {/* White Glass Block containing the conversation */}
              <div className="bg-white/80 backdrop-blur-md rounded-[20px] p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-white/50 flex-1 mb-4 flex flex-col justify-between">
                <div className="space-y-4">
                  {/* User Message (Right) */}
                  <div className="flex justify-end gap-3">
                    <div className="bg-white rounded-2xl rounded-tr-sm p-4 text-[13px] shadow-[0_2px_8px_rgba(0,0,0,0.04)] max-w-[60%] border border-gray-100 relative">
                      <p className="text-gray-700 leading-relaxed">Professor, eu estava tentando centralizar os cards no projeto final do módulo de CSS, mas o flexbox quebra quando testo no celular.</p>
                      <p className="text-[10px] text-gray-400 mt-2 text-right">Lucas Silva • 14:30</p>
                    </div>
                    <div className="w-7 h-7 rounded-full shrink-0 overflow-hidden border border-gray-200">
                      <img src="https://i.pravatar.cc/100?img=11" alt="Avatar" className="w-full h-full object-cover" />
                    </div>
                  </div>

                  {/* Teacher Message (Left) */}
                  <div className="flex gap-3">
                    <div className="w-7 h-7 rounded-full bg-black shrink-0 flex items-center justify-center text-white">
                      <Sparkles className="w-3.5 h-3.5" />
                    </div>
                    <div className="bg-white rounded-2xl rounded-tl-sm p-4 text-[13px] shadow-[0_2px_8px_rgba(0,0,0,0.04)] max-w-[70%] border border-gray-100">
                      <p className="text-gray-700 leading-relaxed">Olá, Lucas! Ótima dúvida. Em layouts responsivos, lembre-se de usar <code className="bg-gray-100 px-1 py-0.5 rounded text-gray-800 text-[11px] font-mono">flex-col</code> no mobile e <code className="bg-gray-100 px-1 py-0.5 rounded text-gray-800 text-[11px] font-mono">md:flex-row</code>. Aqui na DevWeb o nosso foco é exatamente te preparar para resolver esses desafios reais de front-end. Tenta aplicar isso!</p>
                    </div>
                  </div>

                  {/* User Message (Right) */}
                  <div className="flex justify-end gap-3">
                    <div className="bg-white rounded-2xl rounded-tr-sm p-4 text-[13px] shadow-[0_2px_8px_rgba(0,0,0,0.04)] max-w-[60%] border border-gray-100">
                      <p className="text-gray-700 leading-relaxed">Caramba, era exatamente isso! O layout encaixou perfeitamente. Muito obrigado pela didática!</p>
                    </div>
                    <div className="w-7 h-7 rounded-full shrink-0 overflow-hidden border border-gray-200">
                      <img src="https://i.pravatar.cc/100?img=11" alt="Avatar" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Generating Bar - Ultra Glassmorphism Effect, full width */}
              <div className="bg-white/20 backdrop-blur-3xl border border-white/40 p-3.5 rounded-full flex items-center gap-3 w-full shadow-[0_8px_32px_rgba(31,38,135,0.1)] ring-1 ring-white/20 relative overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent pointer-events-none" />
                <Sparkles className="w-4 h-4 text-[#F97316] ml-2 relative z-10" />
                <span className="text-[13px] font-semibold bg-gradient-to-r from-[#F97316] via-[#E11D48] to-[#9333EA] text-transparent bg-clip-text relative z-10">Digitando resposta...</span>
              </div>
            </div>
          </div>
        </MotionReveal>
      </section>

      {/* ================= WORK SMARTER (ENNAI 3 CARDS) ================= */}
      <section id="features" className="pt-[340px] lg:pt-[380px] pb-24 lg:pb-32 relative bg-[#FAFAFA] overflow-hidden border-b border-gray-100 z-10">
        <div className="max-w-6xl mx-auto px-6">
          <MotionReveal direction="up" className="text-center mb-16 lg:mb-24">
            <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] font-bold tracking-tight text-[#111827] leading-[1.1]">
              Principais Tecnologias
            </h2>
            <p className="text-gray-500 mt-6 max-w-xl mx-auto text-[15px] leading-relaxed">
              Domine as linguagens fundamentais do desenvolvimento web: HTML, CSS, JavaScript e Python.
            </p>
          </MotionReveal>

          <MotionReveal direction="up" className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* CARD 1 */}
            <MotionReveal delay={100} direction="up" className="h-full">
              <div className="bg-white border border-gray-100 rounded-[24px] shadow-sm hover:shadow-md transition-shadow duration-300 h-[480px] flex flex-col overflow-hidden">
                {/* Visual Area Parent */}
                <div className="flex-1 relative overflow-hidden flex flex-col bg-gray-50/50">
                  {/* Solid Gradient Backgrounds (visible in the margins) */}
                  <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-r from-[#FF5A5F] via-[#E11D48] to-white z-0" />
                  <div className="absolute top-0 left-0 bottom-0 w-16 bg-gradient-to-b from-[#FF5A5F] via-[#E11D48] to-[#9333EA] z-0" />

                  {/* Inner White Container */}
                  <div className="relative z-10 flex-1 bg-white mt-[20px] ml-[20px] rounded-tl-[20px] flex flex-col items-center justify-center p-6 shadow-[-4px_-4px_10px_rgba(0,0,0,0.02)]">

                    {/* Dotted Grid Pattern covering the top half */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0.06)_1px,transparent_1px)] bg-[size:12px_12px] opacity-100 pointer-events-none rounded-tl-[20px] z-0" style={{ WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 60%)' }} />

                    {/* S-Curves */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <path d="M 65 24 C 80 32, 20 36, 35 48" stroke="#D1D5DB" strokeWidth="0.4" strokeDasharray="3 3" fill="none" vectorEffect="non-scaling-stroke" />
                      <path d="M 35 54 C 20 62, 15 67, 25 74" stroke="#D1D5DB" strokeWidth="0.4" strokeDasharray="3 3" fill="none" vectorEffect="non-scaling-stroke" />
                    </svg>

                    {/* Mock Elements */}
                    <div className="relative z-10 w-full h-full flex flex-col items-center justify-between py-6">

                      {/* Header Info Card */}
                      <div className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-50 p-2 text-[9px] text-gray-500 w-[75%] relative z-10 flex flex-col gap-1">
                        <div className="flex justify-between border-b border-gray-50 pb-1 mb-1 font-medium text-gray-500">
                          <span className="flex items-center gap-1"><Layers className="w-3 h-3 text-[#9333EA]" /> Support Tier 1</span>
                          <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-gray-300" /> SU-2132</span>
                        </div>
                        <div className="flex items-center justify-center gap-2 text-gray-700 font-medium">
                          <span className="flex items-center gap-0.5"><span className="text-[10px]">🎯</span> 1</span>
                          <span className="text-green-500 text-[8px] font-bold tracking-wide">VIP</span>
                          <span className="text-gray-300 text-[10px]">+</span>
                        </div>
                      </div>

                      {/* Middle Button */}
                      <div className="bg-gradient-to-r from-[#FF5A5F] via-[#E11D48] to-[#9333EA] p-[1px] rounded-full shadow-sm relative z-10 mt-2 mb-2">
                        <div className="bg-white rounded-full px-4 py-1.5 text-[10px] font-semibold text-gray-700">
                          Automated AI Response
                        </div>
                      </div>

                      {/* Bottom 80% Box */}
                      <div className="bg-[#7C3AED] rounded-xl p-2.5 text-white flex items-center justify-center gap-3 w-[75%] shadow-lg shadow-purple-500/20 relative z-10">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-extrabold tracking-tight">80%</span>
                          <div className="w-[1px] h-5 bg-white/20" />
                        </div>
                        <span className="text-[8px] leading-tight font-medium text-left">Cut Helpdesk<br />workload</span>
                      </div>

                    </div>
                  </div>
                </div>

                {/* Text Area */}
                <div className="px-6 py-6 bg-[#FAFAFA] mt-auto border-t border-gray-50 relative z-20">
                  <h3 className="text-sm font-bold text-gray-900 mb-1 tracking-tight">HTML & CSS</h3>
                  <p className="text-[11px] text-gray-500 leading-relaxed font-medium">A base visual e estrutural da web. Construa layouts fluidos e acessíveis.</p>
                </div>

              </div>
            </MotionReveal>

            {/* CARD 2 */}
            <MotionReveal delay={200} direction="up" className="h-full">
              <div className="bg-white border border-gray-100 rounded-[24px] shadow-sm hover:shadow-md transition-shadow duration-300 h-[480px] flex flex-col overflow-hidden">
                {/* Visual Area Parent */}
                <div className="flex-1 relative overflow-hidden flex flex-col bg-gray-50/50">
                  {/* Solid Gradient Backgrounds (visible in the margins) */}
                  <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-r from-[#A855F7] via-[#EC4899] to-[#F97316] z-0" />
                  <div className="absolute top-0 left-0 bottom-0 w-16 bg-gradient-to-b from-[#A855F7] to-white z-0" />
                  <div className="absolute top-0 right-0 bottom-0 w-16 bg-gradient-to-b from-[#F97316] to-white z-0" />

                  {/* Inner White Container */}
                  <div className="relative z-10 flex-1 bg-white mt-[20px] mx-[20px] rounded-t-[20px] flex flex-col items-center justify-center p-6 shadow-[0px_-4px_10px_rgba(0,0,0,0.02)]">

                    {/* Dotted Grid Pattern */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0.06)_1px,transparent_1px)] bg-[size:12px_12px] opacity-100 pointer-events-none rounded-t-[20px] z-0" style={{ WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 60%)' }} />

                    {/* S-Curves */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <path d="M 60 25 C 75 32, 70 42, 65 48" stroke="#D1D5DB" strokeWidth="0.4" strokeDasharray="3 3" fill="none" vectorEffect="non-scaling-stroke" />
                      <path d="M 35 54 C 15 62, 15 67, 25 74" stroke="#D1D5DB" strokeWidth="0.4" strokeDasharray="3 3" fill="none" vectorEffect="non-scaling-stroke" />
                    </svg>

                    {/* Mock Elements */}
                    <div className="relative z-10 w-full h-full flex flex-col items-center justify-between py-6">

                      {/* Meta & Slack Connected Icons */}
                      <div className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-50 p-1.5 px-3 flex items-center justify-center gap-2 relative z-10 w-fit mx-auto">
                        <div className="w-6 h-6 bg-[#0066FF] rounded-lg flex items-center justify-center shadow-inner">
                          <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 100 8c2 0 4-1.33 6-4zm0 0c2 2.67 4 4 6 4a4 4 0 100-8c-2 0-4 1.33-6 4z" />
                          </svg>
                        </div>
                        <span className="w-4 h-4 rounded-full bg-blue-600 border border-white -ml-3 flex items-center justify-center z-10">
                          <span className="text-[8px] text-white font-bold">+</span>
                        </span>
                        <div className="w-6 h-6 bg-[#111827] rounded-lg flex items-center justify-center shadow-inner -ml-1">
                          <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M4 9h16M4 15h16M9 4v16M15 4v16" />
                          </svg>
                        </div>
                      </div>

                      {/* Middle Button */}
                      <div className="bg-gradient-to-r from-[#FF5A5F] via-[#E11D48] to-[#9333EA] p-[1px] rounded-full shadow-sm relative z-10 mt-2 mb-2">
                        <div className="bg-white rounded-full px-4 py-1.5 text-[10px] font-semibold text-gray-700">
                          Real time Guide
                        </div>
                      </div>

                      {/* Bottom Box */}
                      <div className="bg-[#7C3AED] rounded-xl p-2.5 text-white flex justify-between items-center w-[75%] shadow-lg shadow-purple-500/20 relative z-10">
                        <div className="flex flex-col text-left px-1">
                          <span className="text-[8px] font-medium opacity-90">Get a boost</span>
                          <span className="text-[10px] font-bold tracking-tight">Conversion Rates</span>
                        </div>
                        <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center shadow-inner">
                          <ArrowRight className="w-3.5 h-3.5 text-white rotate-[-45deg]" />
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                {/* Text Area */}
                <div className="px-6 py-6 bg-[#FAFAFA] mt-auto border-t border-gray-50 relative z-20">
                  <h3 className="text-sm font-bold text-gray-900 mb-1 tracking-tight">JavaScript</h3>
                  <p className="text-[11px] text-gray-500 leading-relaxed font-medium">Lógica e interatividade. Transforme páginas estáticas em aplicações reais e dinâmicas.</p>
                </div>

              </div>
            </MotionReveal>

            {/* CARD 3 */}
            <MotionReveal delay={300} direction="up" className="h-full">
              <div className="bg-white border border-gray-100 rounded-[24px] shadow-sm hover:shadow-md transition-shadow duration-300 h-[480px] flex flex-col overflow-hidden">
                {/* Visual Area Parent */}
                <div className="flex-1 relative overflow-hidden flex flex-col bg-gray-50/50">
                  {/* Solid Gradient Backgrounds (visible in the margins) */}
                  <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-l from-[#F97316] via-[#EC4899] to-white z-0" />
                  <div className="absolute top-0 right-0 bottom-0 w-16 bg-gradient-to-b from-[#F97316] via-[#EC4899] to-[#8B5CF6] z-0" />

                  {/* Inner White Container */}
                  <div className="relative z-10 flex-1 bg-white mt-[20px] mr-[20px] rounded-tr-[20px] flex flex-col items-center justify-center p-6 shadow-[4px_-4px_10px_rgba(0,0,0,0.02)]">

                    {/* Dotted Grid Pattern */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0.06)_1px,transparent_1px)] bg-[size:12px_12px] opacity-100 pointer-events-none rounded-tr-[20px] z-0" style={{ WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 60%)' }} />

                    {/* S-Curves */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <path d="M 35 20 C 50 18, 55 24, 65 22" stroke="#D1D5DB" strokeWidth="0.4" strokeDasharray="3 3" fill="none" vectorEffect="non-scaling-stroke" />
                      <path d="M 75 28 C 80 34, 75 42, 65 48" stroke="#D1D5DB" strokeWidth="0.4" strokeDasharray="3 3" fill="none" vectorEffect="non-scaling-stroke" />
                      <path d="M 35 54 C 15 62, 15 67, 25 74" stroke="#D1D5DB" strokeWidth="0.4" strokeDasharray="3 3" fill="none" vectorEffect="non-scaling-stroke" />
                    </svg>

                    {/* Mock Elements */}
                    <div className="relative z-10 w-full h-full flex flex-col items-center justify-between py-6">
                      <div className="flex justify-between w-[85%] items-start relative z-10">

                        {/* Dark Chat Icon Auto-Reply Pill */}
                        <div className="bg-[#111827] text-white rounded-full shadow-md px-3 py-1.5 text-[9px] font-medium flex items-center gap-1.5 border border-gray-800">
                          <svg className="w-2.5 h-2.5 text-white animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" />
                          </svg>
                          Auto-Reply
                        </div>

                        {/* White Card Timeline */}
                        <div className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-50 p-2 px-3 text-[8px] text-gray-500 w-[110px] flex flex-col gap-1.5 mt-2">
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-2.5 h-2.5 text-gray-400" />
                            <div className="h-0.5 bg-gray-100 rounded-full flex-1 relative overflow-hidden">
                              <div className="absolute left-0 top-0 bottom-0 w-2/3 bg-purple-500 rounded-full" />
                            </div>
                          </div>
                          <span className="block font-bold text-gray-700 text-left">July 5 at 1:00pm</span>
                        </div>

                      </div>

                      {/* Middle Button */}
                      <div className="bg-gradient-to-r from-[#FF5A5F] via-[#E11D48] to-[#9333EA] p-[1px] rounded-full shadow-sm relative z-10 mt-2 mb-2">
                        <div className="bg-white rounded-full px-4 py-1.5 text-[10px] font-semibold text-gray-700">
                          Schedule a reply
                        </div>
                      </div>

                      {/* Bottom Purple Card */}
                      <div className="bg-[#7C3AED] rounded-xl p-2.5 text-white flex items-center gap-3 w-[75%] shadow-lg shadow-purple-500/20 relative z-10">
                        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 shadow-inner">
                          <Clock className="w-3.5 h-3.5 text-white" />
                        </div>
                        <div className="flex flex-col text-left">
                          <span className="text-[10px] font-bold">Save hours Daily</span>
                          <span className="text-[8px] font-medium opacity-85">Free team for high value work</span>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                {/* Text Area */}
                <div className="px-6 py-6 bg-[#FAFAFA] mt-auto border-t border-gray-50 relative z-20">
                  <h3 className="text-sm font-bold text-gray-900 mb-1 tracking-tight">Python</h3>
                  <p className="text-[11px] text-gray-500 leading-relaxed font-medium">Scripts, dados e backend. O poder da automação e lógica de ponta ao seu favor.</p>
                </div>

              </div>
            </MotionReveal>
          </MotionReveal>
        </div>
      </section>

      {/* ================= ETAPAS DE APRENDIZADO ================= */}
      <section id="jornada" className="py-24 lg:py-32 relative bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <MotionReveal direction="up" className="mb-20">
            <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] font-bold tracking-tight text-gray-900 leading-[1.1]">
              Etapas de Aprendizado <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9333EA] to-[#EC4899]">Passo a Passo</span>
            </h2>
          </MotionReveal>

          <div className="relative mt-12">
            {/* SVG S-Curve Dashed Line in the background */}
            <div className="absolute top-[15%] left-[-5%] w-[110%] h-[250px] z-0 hidden md:block pointer-events-none">
              <svg width="100%" height="100%" viewBox="0 0 1000 200" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="s-curve-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#7C3AED" />   {/* Purple */}
                    <stop offset="35%" stopColor="#C026D3" />   {/* Fuchsia */}
                    <stop offset="70%" stopColor="#E11D48" />   {/* Rose/Red */}
                    <stop offset="100%" stopColor="#F97316" />  {/* Orange */}
                  </linearGradient>
                </defs>
                <path
                  d="M 0 120 Q 125 60, 250 110 Q 375 160, 500 100 Q 625 40, 750 90 Q 875 140, 1000 110"
                  fill="none"
                  stroke="url(#s-curve-gradient)"
                  strokeWidth="2"
                  strokeDasharray="6, 8"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start relative z-10">
              {journey.map((item, index) => {
                // Vertical offsets to make the cards follow the S-curve
                const yOffsets = [
                  'lg:translate-y-[-10px]',
                  'lg:translate-y-[60px]',
                  'lg:translate-y-[-30px]',
                  'lg:translate-y-[40px]'
                ];

                return (
                  <MotionReveal
                    key={item.step}
                    delay={index * 150}
                    direction="up"
                    className={`h-full ${yOffsets[index]}`}
                  >
                    <div className="h-full min-h-[300px] p-8 flex flex-col bg-white rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 relative z-10 hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] transition-shadow duration-300">

                      {/* Header: Circle with number & plain tag */}
                      <div className="flex items-start justify-between mb-8">
                        <div className="relative">
                          {/* Glowing shadow behind the circle */}
                          <div className="absolute inset-0 bg-[#7C3AED] blur-xl opacity-60 rounded-full translate-y-1 scale-110" />
                          <div className="relative w-14 h-14 rounded-full bg-[#7C3AED] text-white flex items-center justify-center font-bold text-[16px] shadow-md">
                            {item.step}
                          </div>
                        </div>
                        <span className="text-[11px] font-mono text-gray-400 font-medium tracking-tight mt-3">{item.tag}</span>
                      </div>

                      {/* Content (Text directly below header, not pushed to bottom) */}
                      <div>
                        <h3 className="text-xl font-bold mb-4 text-gray-900 leading-tight">{item.title}</h3>
                        <p className="text-[13px] text-gray-500 leading-relaxed font-medium">{item.text}</p>
                      </div>

                    </div>
                  </MotionReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROJETOS (ARC SCROLL) ================= */}
      <ArcScroll />

      {/* ================= CURSOS (TABELA) ================= */}
      <section id="cursos" className="py-24 lg:py-32 relative bg-gray-50 overflow-hidden border-y border-gray-200">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0.06)_1px,transparent_1px)] bg-[size:16px_16px] opacity-50" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 glow-orb-magenta opacity-10 pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <MotionReveal direction="up" className="text-center mb-16">
            <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] font-bold tracking-tight leading-[1.1] text-foreground">
              Tabela de Cursos
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto text-[15px] leading-relaxed font-medium">
              Explore nossos treinamentos focados e práticos.
            </p>
          </MotionReveal>

          <MotionReveal direction="up" delay={200}>
            <div className="bg-white rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.04)] border border-gray-200 overflow-hidden">
              <div className="grid grid-cols-12 gap-4 p-6 bg-gray-50 border-b border-gray-200 text-sm font-bold text-gray-500 uppercase tracking-wider">
                <div className="col-span-6">Curso</div>
                <div className="col-span-3 text-center">Nível</div>
                <div className="col-span-3 text-right">Duração</div>
              </div>

              <div className="divide-y divide-gray-100">
                {[
                  {
                    course: 'HTML5 Básico',
                    level: 'Iniciante',
                    duration: '4h',
                    icon: (
                      <svg viewBox="0 0 384 512" className="w-5 h-5 fill-[#E34F26]">
                        <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z" />
                      </svg>
                    ),
                    lessons: [
                      "Introdução à Web e Estrutura Básica",
                      "Semântica e SEO: Muito além das DIVs",
                      "Formulários Avançados e Validação",
                      "Imagens, Áudio, Vídeo e Acessibilidade",
                      "Projeto Prático: Currículo Digital"
                    ]
                  },
                  {
                    course: 'CSS3 Completo',
                    level: 'Intermediário',
                    duration: '6h',
                    icon: (
                      <svg viewBox="0 0 384 512" className="w-5 h-5 fill-[#1572B6]">
                        <path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z" />
                      </svg>
                    ),
                    lessons: [
                      "Seletores, Cascata e Especificidade",
                      "Box Model e Posicionamento Moderno",
                      "Flexbox: O Guia Definitivo",
                      "CSS Grid: Layouts Bidimensionais",
                      "Animações, Keyframes e Transições"
                    ]
                  },
                  {
                    course: 'JavaScript Moderno',
                    level: 'Intermediário',
                    duration: '10h',
                    icon: (
                      <svg viewBox="0 0 448 512" className="w-5 h-5 fill-[#F7DF1E]">
                        <path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z" />
                      </svg>
                    ),
                    lessons: [
                      "Variáveis, Tipos e Operadores",
                      "Estruturas de Repetição e Condicionais",
                      "Funções, Callbacks e Closures",
                      "Manipulação Avançada de Arrays e Objetos",
                      "DOM: Manipulando a página na vida real"
                    ]
                  },
                ].map((c, i) => (
                  <Drawer key={i}>
                    <DrawerTrigger asChild>
                      <div className="grid grid-cols-12 gap-4 p-6 items-center hover:bg-gray-50/50 transition-colors group cursor-pointer relative overflow-hidden">
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />

                        <div className="col-span-6 flex items-center gap-4 relative z-10">
                          <div className="w-10 h-10 rounded-full bg-[#111111] shadow-[0_4px_12px_rgba(0,0,0,0.04)] border border-gray-100/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                            {c.icon}
                          </div>
                          <span className="font-semibold text-[17px] text-gray-900 group-hover:text-[#7C3AED] transition-colors">{c.course}</span>
                        </div>
                        <div className="col-span-3 flex justify-center relative z-10">
                          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-[12px] font-bold tracking-tight border border-gray-200 shadow-sm">
                            {c.level}
                          </span>
                        </div>
                        <div className="col-span-3 flex justify-end items-center gap-3 relative z-10">
                          <span className="font-extrabold tracking-tight text-gray-900 text-xl group-hover:text-[#7C3AED] transition-colors">{c.duration}</span>
                          <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#7C3AED] transition-colors" />
                        </div>
                      </div>
                    </DrawerTrigger>

                    <DrawerContent className="bg-white border-t border-gray-200 text-gray-900 max-h-[85vh] flex flex-col">
                      <div className="max-w-2xl mx-auto w-full flex flex-col overflow-hidden h-full">
                        <DrawerHeader className="pb-2 shrink-0">
                          <DrawerTitle className="text-2xl font-bold flex items-center gap-3">
                            <div className="w-8 h-8 flex items-center justify-center">
                              {c.icon}
                            </div>
                            {c.course}
                          </DrawerTitle>
                          <DrawerDescription className="text-gray-500 font-medium text-[15px]">
                            Conteúdo exclusivo para assinantes. Faça upgrade para desbloquear.
                          </DrawerDescription>
                        </DrawerHeader>

                        <div className="p-4 overflow-y-auto flex-1 min-h-0">
                          <div className="space-y-3">
                            {c.lessons.map((lesson, index) => (
                              <div key={index} className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 opacity-70 hover:opacity-100 transition-opacity">
                                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                                  <Lock className="w-5 h-5 text-gray-500" />
                                </div>
                                <div className="flex-1">
                                  <span className="text-xs font-bold text-[#7C3AED] uppercase tracking-wider block mb-1">
                                    Aula {index + 1}
                                  </span>
                                  <span className="text-[15px] font-semibold text-gray-900">
                                    {lesson}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <DrawerFooter className="pt-2 border-t border-gray-100 mt-4 shrink-0 pb-6">
                          {!user ? (
                            <AuthModal
                              defaultMode="register"
                              trigger={
                                <Button className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold h-12 rounded-full text-[15px]">
                                  Assinar DevWeb.Ai PRO
                                </Button>
                              }
                            />
                          ) : (
                            <Button
                              onClick={() => handleCheckout("curso_devweb_completo")}
                              className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold h-12 rounded-full text-[15px]"
                            >
                              Assinar DevWeb.Ai PRO
                            </Button>
                          )}
                          <DrawerClose asChild>
                            <Button variant="outline" className="w-full h-12 rounded-full font-bold text-gray-600 border-gray-300">
                              Fechar
                            </Button>
                          </DrawerClose>
                        </DrawerFooter>
                      </div>
                    </DrawerContent>
                  </Drawer>
                ))}
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>



      {/* ================= VOICE SUPPORT SECTION (DARK) ================= */}
      <section id="voice" className="py-24 lg:py-32 relative bg-[#050505] overflow-hidden text-white border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-16 relative">
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight text-white mb-6 leading-tight">
              O código perfeito está ao seu alcance,<br />e o aprendizado ficou mais inteligente
            </h2>
            <p className="text-gray-400 text-[15px] font-medium max-w-2xl mx-auto leading-relaxed">
              Domine as ferramentas mais demandadas do mercado com nossa metodologia<br />focada em projetos práticos e suporte dedicado.
            </p>
          </div>

          {/* Main Hero Card */}
          <div className="relative rounded-[32px] border border-white/10 bg-[#111111] overflow-hidden flex flex-col lg:flex-row shadow-2xl min-h-[450px]">
            {/* Background Glows */}
            <div className="absolute top-0 left-0 w-[500px] h-full bg-[#A855F7] blur-[140px] opacity-25 rounded-full -translate-x-1/2 pointer-events-none" />
            <div className="absolute top-0 right-0 w-[500px] h-full bg-[#F97316] blur-[140px] opacity-25 rounded-full translate-x-1/2 pointer-events-none" />

            {/* Left Side (Logo) */}
            <div className="flex-1 p-10 flex items-center justify-center relative z-10">
              <div className="flex items-center gap-2">
                <span className="font-bold text-3xl tracking-tight text-white">DevWeb.Ai <span className="bg-white text-black px-2.5 py-0.5 rounded-lg inline-block -ml-1 text-[26px]">PRO</span></span>
              </div>
            </div>

            {/* Center (Phone Mockup) */}
            <div className="flex-1 relative z-10 flex flex-col items-center justify-end pt-12 lg:pt-0">
              {/* Particle Globe Background */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[80%] w-64 h-64 bg-[radial-gradient(circle,rgba(255,255,255,0.4)_1.5px,transparent_1.5px)] bg-[size:10px_10px] rounded-full pointer-events-none" style={{ WebkitMaskImage: 'radial-gradient(circle, black 30%, transparent 70%)' }} />

              {/* Phone Body */}
              <MotionReveal direction="up" delay={200} className="w-full max-w-[300px]">
                <div className="relative w-[300px] h-[360px] bg-[#0A0A0A] rounded-t-[48px] border-[8px] border-[#1A1A1A] border-b-0 shadow-2xl flex flex-col items-center pt-8 px-5">
                  {/* Voice Call Pill */}
                  <div className="w-full bg-[#1F1F1F] rounded-full py-3 px-4 flex items-center justify-between border border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                        <Sparkles className="w-4 h-4 text-black" />
                      </div>
                      <span className="text-[13px] font-semibold text-gray-200">Mentor de Bolso 24/7</span>
                    </div>
                    <span className="text-[12px] font-bold text-green-500">ONLINE</span>
                  </div>

                  {/* Unmute Button */}
                  <div className="mt-auto mb-10 w-36 bg-white/10 hover:bg-white/20 rounded-full py-3 px-5 flex items-center justify-center gap-2 border border-white/10 cursor-pointer transition-colors shadow-lg backdrop-blur-md">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C10.34 2 9 3.34 9 5v7c0 1.66 1.34 3 3 3s3-1.34 3-3V5c0-1.66-1.34-3-3-3zm5.3 10c0 3-2.54 5.1-5.3 5.1S6.7 15 6.7 12H5c0 3.41 2.72 6.23 6 6.72V22h2v-3.28c3.28-.49 6-3.31 6-6.72h-1.7z" /></svg>
                    <span className="text-[10px] font-bold text-gray-200 tracking-widest">PEDIR AJUDA</span>
                  </div>
                </div>
              </MotionReveal>
            </div>

            {/* Right Side (Quote) */}
            <div className="flex-1 p-10 relative z-10 flex items-center justify-center">
              <div className="border border-white/10 rounded-2xl p-8 bg-white/[0.03] backdrop-blur-md max-w-[340px] shadow-2xl">
                <p className="text-[14px] text-gray-300 leading-relaxed mb-8 font-medium">
                  "A didática da plataforma mudou a minha vida. Consegui minha primeira vaga como Desenvolvedor Front-end em menos de 4 meses graças ao suporte rápido e aos desafios práticos semanais."
                </p>
                <div className="flex flex-col">
                  <span className="text-[13px] font-semibold text-white">João Silva</span>
                  <span className="text-[10px] font-bold text-gray-500 tracking-wider uppercase mt-1.5 leading-tight">
                    Desenvolvedor Front-end<br />Junior
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid (4 Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-4 mt-8 border-t border-white/5 relative">
            {/* Glowing Divider Line (Between col 2 and 3) */}
            <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-[#A855F7]/30 via-[#F97316]/80 to-transparent hidden md:block" />
            <div className="absolute top-0 bottom-0 left-1/2 w-[3px] bg-gradient-to-b from-[#A855F7]/20 via-[#F97316]/50 to-transparent hidden md:block blur-[2px]" />

            <div className="p-8 md:border-r border-white/5">
              <h4 className="text-[15px] font-bold text-white mb-3">Trilha Personalizada</h4>
              <p className="text-[13px] text-gray-500 leading-relaxed font-medium">
                Aprenda no seu próprio ritmo com módulos que se adaptam ao seu nível de conhecimento atual.
              </p>
            </div>

            <div className="p-8 md:border-r border-white/5 relative">
              <h4 className="text-[15px] font-bold text-white mb-3">Projetos Reais</h4>
              <p className="text-[13px] text-gray-500 leading-relaxed font-medium">
                Construa um portfólio de peso desenvolvendo aplicações completas do zero ao deploy.
              </p>
            </div>

            <div className="p-8 md:border-r border-white/5 relative">
              <h4 className="text-[15px] font-bold text-white mb-3">Comunidade Ativa</h4>
              <p className="text-[13px] text-gray-500 leading-relaxed font-medium">
                Conecte-se com milhares de outros desenvolvedores para tirar dúvidas e fazer networking.
              </p>
            </div>

            <div className="p-8">
              <h4 className="text-[15px] font-bold text-white mb-3">Acesso Vitalício</h4>
              <p className="text-[13px] text-gray-500 leading-relaxed font-medium">
                Estude quando e onde quiser. Todas as futuras atualizações dos cursos já estão inclusas.
              </p>
            </div>
          </div>

          {/* Bottom Badge Area */}
          <div className="mt-16 flex flex-col items-center">
            {/* Horizontal Line with glowing center */}
            <div className="w-full h-px relative flex items-center justify-center bg-gradient-to-r from-transparent via-white/10 to-transparent">
              <div className="absolute w-[500px] h-[2px] bg-gradient-to-r from-transparent via-[#F97316]/80 to-transparent blur-[2px]" />
              <span className="absolute w-[250px] h-[1px] bg-gradient-to-r from-transparent via-[#F97316] to-transparent" />
              <div className="absolute w-2 h-2 rounded-full bg-[#F97316] blur-[2px]" />

              {/* Badge */}
              <div className="bg-[#1A1A1A] border border-[#F97316]/40 rounded-full px-6 py-2.5 text-[12px] font-semibold text-gray-200 absolute -top-5 shadow-[0_0_20px_rgba(249,115,22,0.2)] z-10 whitespace-nowrap">
                Melhor Plataforma de Ensino Dev
              </div>
            </div>

            {/* G2 Badges CSS Authentic Replica */}
            <div className="flex gap-4 mt-20 flex-wrap justify-center">
              {[
                { title1: "Top", title2: "Plataforma", ribbonText: "ALUNOS", bottomText1: "", bottomText2: "2024", color: "bg-[#FF492C]" },
                { title1: "Melhor", title2: "Didática", ribbonText: "Iniciantes", bottomText1: "ALUNOS", bottomText2: "2024", color: "bg-[#0EA5E9]" },
                { title1: "Mais", title2: "Completo", ribbonText: "Fullstack", bottomText1: "ALUNOS", bottomText2: "2024", color: "bg-[#EAB308]" },
                { title1: "Suporte", title2: "Ágil", ribbonText: "Comunidade", bottomText1: "ALUNOS", bottomText2: "2024", color: "bg-[#10B981]" },
                { title1: "Top 1", title2: "Mercado", ribbonText: "ALUNOS", bottomText1: "", bottomText2: "2024", color: "bg-[#FF492C]" },
              ].map((badge, i) => (
                <MotionReveal key={i} direction="down" delay={i * 150}>
                  <div className="relative w-[96px] h-[144px] flex flex-col items-center mt-2 drop-shadow-xl">

                    {/* The White Shield Base (with vertical 3D crease) */}
                    <div className="absolute inset-0 [clip-path:polygon(0_0,100%_0,100%_88%,50%_100%,0_88%)] rounded-t-sm z-0 flex">
                      <div className="flex-1 bg-white" />
                      <div className="flex-1 bg-[#F3F4F6]" />
                    </div>

                    {/* G2 Red Logo Shield */}
                    <div className="absolute top-0 w-[30px] h-[36px] flex overflow-hidden [clip-path:polygon(0_0,100%_0,100%_80%,50%_100%,0_80%)] z-10">
                      <div className="absolute inset-0 flex">
                        <div className="flex-1 bg-[#FF492C]" />
                        <div className="flex-1 bg-[#FF492C] brightness-90" />
                      </div>
                      <span className="relative z-10 w-full h-full flex items-center justify-center font-bold text-[16px] text-white tracking-tighter pb-1">
                        G<span className="text-[9px] mt-1 ml-[0.5px]">2</span>
                      </span>
                    </div>

                    {/* Badge Title */}
                    <div className="absolute top-[40px] flex flex-col items-center justify-center w-[90%] z-10 text-[10.5px] font-bold text-gray-800 leading-[1.15] text-center">
                      {badge.title1 && <span>{badge.title1}</span>}
                      <span>{badge.title2}</span>
                    </div>

                    {/* Horizontal Colored Ribbon (Extends outside edges) */}
                    <div className="absolute top-[80px] w-[108px] h-[18px] left-1/2 -translate-x-1/2 z-20 flex items-center justify-center [clip-path:polygon(4px_0,calc(100%-4px)_0,100%_50%,calc(100%-4px)_100%,4px_100%,0_50%)] overflow-hidden drop-shadow-md">
                      <div className="absolute inset-0 flex">
                        <div className={`flex-1 ${badge.color}`} />
                        <div className={`flex-1 ${badge.color} brightness-90`} />
                      </div>
                      <span className="relative z-10 text-white text-[7.5px] font-extrabold uppercase tracking-[0.05em]">{badge.ribbonText}</span>
                    </div>

                    {/* Bottom Text (Year) */}
                    <div className="absolute top-[106px] w-full flex flex-col items-center z-10">
                      {badge.bottomText1 && <span className="text-[7.5px] font-bold text-gray-500 leading-none mb-1">{badge.bottomText1}</span>}
                      <span className="text-[13px] font-black text-gray-800 leading-none">{badge.bottomText2}</span>
                    </div>

                  </div>
                </MotionReveal>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* ================= TRUSTED TEAMS SECTION (LIGHT) ================= */}
      <section id="trusted" className="py-24 lg:py-32 relative bg-white overflow-hidden text-[#111]">
        <div className="max-w-[1100px] mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[42px] lg:text-[48px] font-bold tracking-tight text-[#111] leading-[1.15] max-w-2xl mx-auto">
              Mais de 9.000 alunos transformaram<br />suas carreiras desenvolvendo com nossa plataforma
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

            {/* Top Row */}
            {/* Card 1: Enterprise (Photo) */}
            <div className="relative col-span-1 h-[280px] rounded-[24px] overflow-hidden group shadow-sm">
              <img src="https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?auto=format&fit=crop&w=600&q=80" alt="Enterprise" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/20" />
              <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                <div className="flex items-center gap-2 text-white">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L9 9 1 12l8 3 3 8 3-8 8-3-8-3z" /></svg>
                  <span className="font-bold text-[13px] tracking-wide">Empregabilidade</span>
                </div>
                <div>
                  <span className="block text-[11px] font-semibold text-gray-300 mb-1">alunos contratados em até 6 meses</span>
                  <span className="block text-[42px] font-bold text-white tracking-tighter leading-none"><AnimatedNumber value={95} suffix="%" /></span>
                </div>
              </div>
            </div>

            {/* Card 2: Institute (Quote) */}
            <div className="relative col-span-1 md:col-span-2 h-[280px] rounded-[24px] bg-[#0A0A0A] overflow-hidden p-8 flex flex-col border border-gray-800 group shadow-sm">
              <div className="absolute bottom-[-20%] right-[-10%] w-[350px] h-[250px] bg-[#9333EA] blur-[100px] opacity-40 group-hover:opacity-50 transition-opacity" />
              <div className="absolute bottom-[-10%] left-[20%] w-[250px] h-[200px] bg-[#EF4444] blur-[100px] opacity-30 group-hover:opacity-40 transition-opacity" />

              <div className="relative z-10 flex items-center gap-2 text-white mb-auto">
                <div className="w-[15px] h-[15px] rounded-full border-[3px] border-white border-l-transparent" style={{ transform: 'rotate(-45deg)' }} />
                <span className="font-bold text-[13px] tracking-wide">Tech Recruiter</span>
              </div>

              <div className="relative z-10 w-full md:w-[90%]">
                <p className="text-[14px] md:text-[15px] text-gray-200 leading-[1.6] font-medium">
                  "O mercado precisa urgentemente de desenvolvedores bem preparados. O currículo prático da plataforma foca exatamente no que as grandes empresas utilizam no dia a dia."
                </p>
              </div>
            </div>

            {/* Card 3: MongoDB (Photo) */}
            <div className="relative col-span-1 h-[280px] rounded-[24px] overflow-hidden group shadow-sm">
              <img src="https://images.unsplash.com/photo-1542224566-6e85f2e6772f?auto=format&fit=crop&w=600&q=80" alt="MongoDB" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/20" />
              <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                <div className="flex items-center gap-2 text-white">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C7 2 4 6 4 12c0 5 4 10 8 10s8-5 8-10C20 6 17 2 12 2zm0 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" /></svg>
                  <span className="font-bold text-[13px] tracking-wide">Portfólio</span>
                </div>
                <div>
                  <span className="block text-[11px] font-semibold text-gray-300 mb-1">projetos práticos completos</span>
                  <span className="block text-[42px] font-bold text-white tracking-tighter leading-none"><AnimatedNumber value={40} suffix="+" /></span>
                </div>
              </div>
            </div>

            {/* Bottom Row */}
            {/* Card 4: Company (Solid Purple) */}
            <div className="relative col-span-1 h-[220px] rounded-[24px] bg-[#8B5CF6] p-6 flex flex-col justify-between text-white shadow-sm">
              <div className="flex items-center gap-2">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /></svg>
                <span className="font-bold text-[13px] tracking-wide">Horas Práticas</span>
              </div>
              <div>
                <span className="block text-[11px] font-semibold text-purple-200 mb-1">de puro código e mão na massa</span>
                <span className="block text-[42px] font-bold tracking-tighter leading-none"><AnimatedNumber value={300} suffix="h+" /></span>
              </div>
            </div>

            {/* Card 5: Agency (Photo) */}
            <div className="relative col-span-1 h-[220px] rounded-[24px] overflow-hidden group shadow-sm">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80" alt="Agency" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/30" />
              <div className="absolute inset-0 p-6 flex flex-col justify-between z-10 text-white">
                <div className="flex items-center gap-2">
                  <div className="w-[14px] h-[14px] border-[2.5px] border-white rounded-full" />
                  <span className="font-bold text-[13px] tracking-wide">Certificados</span>
                </div>
                <div>
                  <span className="block text-[11px] font-semibold text-gray-300 mb-1">emitidos e reconhecidos pelo mercado</span>
                  <span className="block text-[42px] font-bold tracking-tighter leading-none"><AnimatedNumber value={15} suffix="k+" /></span>
                </div>
              </div>
            </div>

            {/* Card 6: Startup (Light) */}
            <div className="relative col-span-1 h-[220px] rounded-[24px] bg-white border border-gray-100 p-6 flex flex-col justify-between overflow-hidden group shadow-sm">
              <div className="absolute bottom-[-20%] right-[-20%] w-[150px] h-[150px] bg-[#EC4899] blur-[50px] opacity-15 group-hover:opacity-25 transition-opacity" />
              <div className="relative z-10 flex items-center gap-2 text-[#111]">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="7 7 17 7 17 17"></polyline><line x1="7" y1="17" x2="17" y2="7"></line></svg>
                <span className="font-bold text-[13px] tracking-wide">Comunidade</span>
              </div>
              <div className="relative z-10">
                <span className="block text-[11px] font-semibold text-gray-500 mb-1">membros ativos no Discord</span>
                <span className="block text-[42px] font-bold text-[#111] tracking-tighter leading-none"><AnimatedNumber value={10} suffix="k+" /></span>
              </div>
            </div>

            {/* Card 7: Institute (Dark Solid) */}
            <div className="relative col-span-1 h-[220px] rounded-[24px] bg-[#52525B] p-6 flex flex-col justify-between text-white border border-[#3F3F46] shadow-sm">
              <div className="flex items-center gap-2">
                <div className="w-[15px] h-[15px] rounded-full border-[3px] border-white border-l-transparent" style={{ transform: 'rotate(-45deg)' }} />
                <span className="font-bold text-[13px] tracking-wide">Avaliação</span>
              </div>
              <div>
                <span className="block text-[11px] font-semibold text-gray-300 mb-1">Satisfação (NPS)</span>
                <span className="block text-[42px] font-bold tracking-tighter leading-none"><AnimatedNumber value={98} suffix="%" /></span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CONTATO & FOOTER (UNIFIED SECTION) ================= */}
      <div className="relative bg-[#050505] overflow-hidden text-white border-t border-white/5">
        
        {/* Background CSS Glows Container (Perfect Replication of Image) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          
          {/* Glow 1: Vibrant Purple (Top-Left Edge) */}
          <div className="absolute top-[0%] -left-[150px] w-[350px] md:w-[450px] h-[500px] md:h-[700px] bg-[#9333EA] blur-[140px] opacity-[0.65] rounded-full mix-blend-screen" />
          
          {/* Glow 2: Amber/Gold (Top Center-Left) */}
          <div className="absolute top-[-80px] left-[15%] md:left-[20%] w-[300px] h-[150px] bg-[#F59E0B] blur-[90px] opacity-[0.55] rounded-full mix-blend-screen" />

          {/* Glow 3: Warm Orange (Top-Right Edge) */}
          <div className="absolute top-[-100px] -right-[100px] w-[400px] md:w-[500px] h-[400px] md:h-[500px] bg-[#EA580C] blur-[150px] opacity-[0.45] rounded-full mix-blend-screen" />

          {/* Glow 4: Intense Red/Rose (Bottom-Right Corner) */}
          <div className="absolute bottom-[-150px] md:bottom-[-200px] -right-[150px] md:-right-[200px] w-[500px] md:w-[700px] h-[500px] md:h-[700px] bg-[#E11D48] blur-[160px] md:blur-[200px] opacity-[0.65] rounded-full mix-blend-screen" />
        </div>
        
        {/* Matte Black Noise Texture (Placed after glows) */}
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none z-[1]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 z-[2]" />

        <section id="contato" className="pt-24 lg:pt-32 pb-12 relative z-10">

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Lado Esquerdo: Informações */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                  Ficou com alguma dúvida?<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Estamos aqui para ajudar.</span>
                </h2>
                <p className="text-gray-400 text-[16px] leading-relaxed mb-10 max-w-md">
                  Nossa equipe está pronta para tirar suas dúvidas sobre a plataforma, planos, parcerias ou qualquer outro assunto.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/10 transition-all">
                      <svg className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.728L12 16.64l-6.545-4.912v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 8.414l8.073-4.921c1.618-1.214 3.927-.059 3.927 1.964Z" fill="#EA4335" />
                        <path d="M16.909 21h5.455A1.636 1.636 0 0 0 24 19.364V5.457c0-.256-.051-.512-.148-.752L16.909 11.728V21Z" fill="#C5221F" />
                        <path d="M7.091 21H1.636A1.636 1.636 0 0 1 0 19.364V5.457c0-.256.051-.512.148-.752L7.091 11.728V21Z" fill="#FABB05" />
                        <path d="M16.909 11.727v9.273H7.091v-9.273L12 15.41l4.909-3.683Z" fill="#4285F4" />
                        <path d="M0 5.457c0 .24.051.496.148.752L7.091 11.728V4.704L3.927 2.336C2.691 1.411 0 2.296 0 4.148v1.309Z" fill="#34A853" />
                        <path d="M24 5.457c0 .24-.051.496-.148.752L16.909 11.728V4.704l3.164-2.368c1.236-.925 3.927-.04 3.927 1.812v1.309Z" fill="#EA4335" />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">E-mail</span>
                      <a href="mailto:contato@devweb.ai" className="text-[15px] font-semibold text-white hover:text-primary transition-colors">contato@devweb.ai</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/10 transition-all">
                      <svg className="w-6 h-6 opacity-70 group-hover:opacity-100 transition-opacity" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#5865F2" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1,105.25,105.25,0,0,0,32.19-16.14c0,0,.04-.06.05-.09A71.09,71.09,0,0,0,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.31,60,73.31,53s5-12.74,11.43-12.74S96.2,46,96.12,53,91.08,65.69,84.69,65.69Z" />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">Discord da Comunidade</span>
                      <a href="#" className="text-[15px] font-semibold text-white hover:text-primary transition-colors">discord.gg/devweb</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lado Direito: Formulário */}
              <MotionReveal direction="left" delay={200} className="w-full">
                <div className="bg-[#111] border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent rounded-3xl pointer-events-none" />

                  <form onSubmit={handleContactSubmit} className="space-y-5 relative z-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label htmlFor="name" className="text-[13px] font-semibold text-gray-300">Nome</label>
                        <input
                          type="text"
                          id="name"
                          required
                          placeholder="Seu nome"
                          className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-[14px] text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="phone" className="text-[13px] font-semibold text-gray-300">Telefone <span className="text-gray-600 font-normal">(Opcional)</span></label>
                        <input
                          type="tel"
                          id="phone"
                          placeholder="(00) 00000-0000"
                          className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-[14px] text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-[13px] font-semibold text-gray-300">E-mail</label>
                      <input
                        type="email"
                        id="email"
                        required
                        placeholder="seu@email.com"
                        className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-[14px] text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="message" className="text-[13px] font-semibold text-gray-300">Como podemos ajudar?</label>
                      <textarea
                        id="message"
                        required
                        placeholder="Escreva sua dúvida aqui..."
                        rows={4}
                        className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-[14px] text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-12 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold rounded-xl text-[15px] flex items-center justify-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          Enviar Mensagem
                          <Send className="w-4 h-4 ml-1" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </MotionReveal>

            </div>
          </div>
        </section>

        {/* ================= FOOTER ================= */}
        <footer className="relative z-10">

          <div className="max-w-7xl mx-auto px-6 pt-12 pb-20 relative z-10">
            <div className="grid gap-12 md:grid-cols-4 lg:grid-cols-5">
              <div className="lg:col-span-2">
                <a href="#top" className="flex items-center gap-3 font-bold tracking-tight">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-ink-dark border border-white/10">
                    <Braces className="h-5 w-5 text-primary" strokeWidth={2.4} />
                  </span>
                  <span className="text-xl text-white">
                    Dev<span className="text-gradient-brand">Web</span>
                  </span>
                </a>
                <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink-soft">
                  Uma plataforma imersiva construída com design de ponta para ensino em programação e desenvolvimento moderno.
                </p>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-ink-soft mb-6">Plataforma</h4>
                <ul className="space-y-4 text-sm font-medium">
                  <li><a href="#" className="text-white hover:text-primary transition-colors">Início</a></li>
                  <li><a href="#" className="text-white hover:text-primary transition-colors">Cursos e Trilhas</a></li>
                  <li><a href="#" className="text-white hover:text-primary transition-colors">Comunidade</a></li>
                  <li><a href="#" className="text-white hover:text-primary transition-colors">Projetos Práticos</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-ink-soft mb-6">Recursos</h4>
                <ul className="space-y-4 text-sm font-medium">
                  <li><a href="#" className="text-white hover:text-primary transition-colors">Blog DevWeb</a></li>
                  <li><a href="#" className="text-white hover:text-primary transition-colors">Desafios Semanais</a></li>
                  <li><a href="#" className="text-white hover:text-primary transition-colors">Guia de Entrevistas</a></li>
                  <li><a href="#" className="text-white hover:text-primary transition-colors">Vagas Parceiras</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-ink-soft mb-6">Soluções</h4>
                <ul className="space-y-4 text-sm font-medium">
                  <li><a href="#" className="text-white hover:text-primary transition-colors">Para Iniciantes</a></li>
                  <li><a href="#" className="text-white hover:text-primary transition-colors">Para Transição de Carreira</a></li>
                  <li><a href="#" className="text-white hover:text-primary transition-colors">Empresas (B2B)</a></li>
                </ul>
              </div>
            </div>

            <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-ink-soft">
              <p>© {new Date().getFullYear()} DevWeb. Todos os direitos reservados.</p>
              <div className="flex items-center gap-6">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
