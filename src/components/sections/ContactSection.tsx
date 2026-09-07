import { useState } from "react";
import { MotionReveal } from "@/components/MotionReveal";
import { Loader2, Send, Braces } from "lucide-react";
import { toast } from "sonner";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  return (
    <div className="relative bg-[#050505] overflow-hidden text-white border-t border-white/5">
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[0%] -left-[150px] w-[350px] md:w-[450px] h-[500px] md:h-[700px] bg-[#9333EA] blur-[140px] opacity-[0.65] rounded-full mix-blend-screen" />
        <div className="absolute top-[-80px] left-[15%] md:left-[20%] w-[300px] h-[150px] bg-[#F59E0B] blur-[90px] opacity-[0.55] rounded-full mix-blend-screen" />
        <div className="absolute top-[-100px] -right-[100px] w-[400px] md:w-[500px] h-[400px] md:h-[500px] bg-[#EA580C] blur-[150px] opacity-[0.45] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-150px] md:bottom-[-200px] -right-[150px] md:-right-[200px] w-[500px] md:w-[700px] h-[500px] md:h-[700px] bg-[#E11D48] blur-[160px] md:blur-[200px] opacity-[0.65] rounded-full mix-blend-screen" />
      </div>
      
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none z-[1]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 z-[2]" />

      <section id="contato" className="pt-24 lg:pt-32 pb-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
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
  );
}
