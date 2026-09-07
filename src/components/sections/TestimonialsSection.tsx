import { MotionReveal } from "@/components/MotionReveal";
import { AnimatedNumber } from "@/components/AnimatedNumber";
import { Sparkles } from "lucide-react";

export function TestimonialsSection() {
  return (
    <>
      {/* ================= VOICE SUPPORT SECTION (DARK) ================= */}
      <section id="voice" className="py-24 lg:py-32 relative bg-[#050505] overflow-hidden text-white border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 relative">
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight text-white mb-6 leading-tight">
              O código perfeito está ao seu alcance,<br />e o aprendizado ficou mais inteligente
            </h2>
            <p className="text-gray-400 text-[15px] font-medium max-w-2xl mx-auto leading-relaxed">
              Domine as ferramentas mais demandadas do mercado com nossa metodologia<br />focada em projetos práticos e suporte dedicado.
            </p>
          </div>

          <div className="relative rounded-[32px] border border-white/10 bg-[#111111] overflow-hidden flex flex-col lg:flex-row shadow-2xl min-h-[450px]">
            <div className="absolute top-0 left-0 w-[500px] h-full bg-[#A855F7] blur-[140px] opacity-25 rounded-full -translate-x-1/2 pointer-events-none" />
            <div className="absolute top-0 right-0 w-[500px] h-full bg-[#F97316] blur-[140px] opacity-25 rounded-full translate-x-1/2 pointer-events-none" />

            <div className="flex-1 p-10 flex items-center justify-center relative z-10">
              <div className="flex items-center gap-2">
                <span className="font-bold text-3xl tracking-tight text-white">DevWeb.Ai <span className="bg-white text-black px-2.5 py-0.5 rounded-lg inline-block -ml-1 text-[26px]">PRO</span></span>
              </div>
            </div>

            <div className="flex-1 relative z-10 flex flex-col items-center justify-end pt-12 lg:pt-0">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[80%] w-64 h-64 bg-[radial-gradient(circle,rgba(255,255,255,0.4)_1.5px,transparent_1.5px)] bg-[size:10px_10px] rounded-full pointer-events-none" style={{ WebkitMaskImage: 'radial-gradient(circle, black 30%, transparent 70%)' }} />

              <MotionReveal direction="up" delay={200} className="w-full max-w-[300px]">
                <div className="relative w-[300px] h-[360px] bg-[#0A0A0A] rounded-t-[48px] border-[8px] border-[#1A1A1A] border-b-0 shadow-2xl flex flex-col items-center pt-8 px-5">
                  <div className="w-full bg-[#1F1F1F] rounded-full py-3 px-4 flex items-center justify-between border border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                        <Sparkles className="w-4 h-4 text-black" />
                      </div>
                      <span className="text-[13px] font-semibold text-gray-200">Mentor de Bolso 24/7</span>
                    </div>
                    <span className="text-[12px] font-bold text-green-500">ONLINE</span>
                  </div>

                  <div className="mt-auto mb-10 w-36 bg-white/10 hover:bg-white/20 rounded-full py-3 px-5 flex items-center justify-center gap-2 border border-white/10 cursor-pointer transition-colors shadow-lg backdrop-blur-md">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C10.34 2 9 3.34 9 5v7c0 1.66 1.34 3 3 3s3-1.34 3-3V5c0-1.66-1.34-3-3-3zm5.3 10c0 3-2.54 5.1-5.3 5.1S6.7 15 6.7 12H5c0 3.41 2.72 6.23 6 6.72V22h2v-3.28c3.28-.49 6-3.31 6-6.72h-1.7z" /></svg>
                    <span className="text-[10px] font-bold text-gray-200 tracking-widest">PEDIR AJUDA</span>
                  </div>
                </div>
              </MotionReveal>
            </div>

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

          <div className="grid grid-cols-1 md:grid-cols-4 mt-8 border-t border-white/5 relative">
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

          <div className="mt-16 flex flex-col items-center">
            <div className="w-full h-px relative flex items-center justify-center bg-gradient-to-r from-transparent via-white/10 to-transparent">
              <div className="absolute w-[500px] h-[2px] bg-gradient-to-r from-transparent via-[#F97316]/80 to-transparent blur-[2px]" />
              <span className="absolute w-[250px] h-[1px] bg-gradient-to-r from-transparent via-[#F97316] to-transparent" />
              <div className="absolute w-2 h-2 rounded-full bg-[#F97316] blur-[2px]" />

              <div className="bg-[#1A1A1A] border border-[#F97316]/40 rounded-full px-6 py-2.5 text-[12px] font-semibold text-gray-200 absolute -top-5 shadow-[0_0_20px_rgba(249,115,22,0.2)] z-10 whitespace-nowrap">
                Melhor Plataforma de Ensino Dev
              </div>
            </div>

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
                    <div className="absolute inset-0 [clip-path:polygon(0_0,100%_0,100%_88%,50%_100%,0_88%)] rounded-t-sm z-0 flex">
                      <div className="flex-1 bg-white" />
                      <div className="flex-1 bg-[#F3F4F6]" />
                    </div>

                    <div className="absolute top-0 w-[30px] h-[36px] flex overflow-hidden [clip-path:polygon(0_0,100%_0,100%_80%,50%_100%,0_80%)] z-10">
                      <div className="absolute inset-0 flex">
                        <div className="flex-1 bg-[#FF492C]" />
                        <div className="flex-1 bg-[#FF492C] brightness-90" />
                      </div>
                      <span className="relative z-10 w-full h-full flex items-center justify-center font-bold text-[16px] text-white tracking-tighter pb-1">
                        G<span className="text-[9px] mt-1 ml-[0.5px]">2</span>
                      </span>
                    </div>

                    <div className="absolute top-[40px] flex flex-col items-center justify-center w-[90%] z-10 text-[10.5px] font-bold text-gray-800 leading-[1.15] text-center">
                      {badge.title1 && <span>{badge.title1}</span>}
                      <span>{badge.title2}</span>
                    </div>

                    <div className="absolute top-[80px] w-[108px] h-[18px] left-1/2 -translate-x-1/2 z-20 flex items-center justify-center [clip-path:polygon(4px_0,calc(100%-4px)_0,100%_50%,calc(100%-4px)_100%,4px_100%,0_50%)] overflow-hidden drop-shadow-md">
                      <div className="absolute inset-0 flex">
                        <div className={`flex-1 ${badge.color}`} />
                        <div className={`flex-1 ${badge.color} brightness-90`} />
                      </div>
                      <span className="relative z-10 text-white text-[7.5px] font-extrabold uppercase tracking-[0.05em]">{badge.ribbonText}</span>
                    </div>

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
    </>
  );
}
