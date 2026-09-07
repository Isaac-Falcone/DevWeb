import { Sparkles } from "lucide-react";
import { MotionReveal } from "@/components/MotionReveal";
import heroChatBg from "@/assets/hero-chat-bg.jpg";

export function HeroSection() {
  return (
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

      {/* Matte Black Noise Texture for the granular feel */}
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
  );
}
