import { MotionReveal } from "@/components/MotionReveal";
import { Layers, Clock, ArrowRight } from "lucide-react";

export function FeaturesSection() {
  return (
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
                {/* Solid Gradient Backgrounds */}
                <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-r from-[#FF5A5F] via-[#E11D48] to-white z-0" />
                <div className="absolute top-0 left-0 bottom-0 w-16 bg-gradient-to-b from-[#FF5A5F] via-[#E11D48] to-[#9333EA] z-0" />

                {/* Inner White Container */}
                <div className="relative z-10 flex-1 bg-white mt-[20px] ml-[20px] rounded-tl-[20px] flex flex-col items-center justify-center p-6 shadow-[-4px_-4px_10px_rgba(0,0,0,0.02)]">
                  {/* Dotted Grid Pattern */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0.06)_1px,transparent_1px)] bg-[size:12px_12px] opacity-100 pointer-events-none rounded-tl-[20px] z-0" style={{ WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 60%)' }} />

                  {/* S-Curves */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M 65 24 C 80 32, 20 36, 35 48" stroke="#D1D5DB" strokeWidth="0.4" strokeDasharray="3 3" fill="none" vectorEffect="non-scaling-stroke" />
                    <path d="M 35 54 C 20 62, 15 67, 25 74" stroke="#D1D5DB" strokeWidth="0.4" strokeDasharray="3 3" fill="none" vectorEffect="non-scaling-stroke" />
                  </svg>

                  {/* Mock Elements */}
                  <div className="relative z-10 w-full h-full flex flex-col items-center justify-between py-6">
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

                    <div className="bg-gradient-to-r from-[#FF5A5F] via-[#E11D48] to-[#9333EA] p-[1px] rounded-full shadow-sm relative z-10 mt-2 mb-2">
                      <div className="bg-white rounded-full px-4 py-1.5 text-[10px] font-semibold text-gray-700">
                        Automated AI Response
                      </div>
                    </div>

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
              <div className="flex-1 relative overflow-hidden flex flex-col bg-gray-50/50">
                <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-r from-[#A855F7] via-[#EC4899] to-[#F97316] z-0" />
                <div className="absolute top-0 left-0 bottom-0 w-16 bg-gradient-to-b from-[#A855F7] to-white z-0" />
                <div className="absolute top-0 right-0 bottom-0 w-16 bg-gradient-to-b from-[#F97316] to-white z-0" />

                <div className="relative z-10 flex-1 bg-white mt-[20px] mx-[20px] rounded-t-[20px] flex flex-col items-center justify-center p-6 shadow-[0px_-4px_10px_rgba(0,0,0,0.02)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0.06)_1px,transparent_1px)] bg-[size:12px_12px] opacity-100 pointer-events-none rounded-t-[20px] z-0" style={{ WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 60%)' }} />

                  <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M 60 25 C 75 32, 70 42, 65 48" stroke="#D1D5DB" strokeWidth="0.4" strokeDasharray="3 3" fill="none" vectorEffect="non-scaling-stroke" />
                    <path d="M 35 54 C 15 62, 15 67, 25 74" stroke="#D1D5DB" strokeWidth="0.4" strokeDasharray="3 3" fill="none" vectorEffect="non-scaling-stroke" />
                  </svg>

                  <div className="relative z-10 w-full h-full flex flex-col items-center justify-between py-6">
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

                    <div className="bg-gradient-to-r from-[#FF5A5F] via-[#E11D48] to-[#9333EA] p-[1px] rounded-full shadow-sm relative z-10 mt-2 mb-2">
                      <div className="bg-white rounded-full px-4 py-1.5 text-[10px] font-semibold text-gray-700">
                        Real time Guide
                      </div>
                    </div>

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

              <div className="px-6 py-6 bg-[#FAFAFA] mt-auto border-t border-gray-50 relative z-20">
                <h3 className="text-sm font-bold text-gray-900 mb-1 tracking-tight">JavaScript</h3>
                <p className="text-[11px] text-gray-500 leading-relaxed font-medium">Lógica e interatividade. Transforme páginas estáticas em aplicações reais e dinâmicas.</p>
              </div>
            </div>
          </MotionReveal>

          {/* CARD 3 */}
          <MotionReveal delay={300} direction="up" className="h-full">
            <div className="bg-white border border-gray-100 rounded-[24px] shadow-sm hover:shadow-md transition-shadow duration-300 h-[480px] flex flex-col overflow-hidden">
              <div className="flex-1 relative overflow-hidden flex flex-col bg-gray-50/50">
                <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-l from-[#F97316] via-[#EC4899] to-white z-0" />
                <div className="absolute top-0 right-0 bottom-0 w-16 bg-gradient-to-b from-[#F97316] via-[#EC4899] to-[#8B5CF6] z-0" />

                <div className="relative z-10 flex-1 bg-white mt-[20px] mr-[20px] rounded-tr-[20px] flex flex-col items-center justify-center p-6 shadow-[4px_-4px_10px_rgba(0,0,0,0.02)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0.06)_1px,transparent_1px)] bg-[size:12px_12px] opacity-100 pointer-events-none rounded-tr-[20px] z-0" style={{ WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 60%)' }} />

                  <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M 35 20 C 50 18, 55 24, 65 22" stroke="#D1D5DB" strokeWidth="0.4" strokeDasharray="3 3" fill="none" vectorEffect="non-scaling-stroke" />
                    <path d="M 75 28 C 80 34, 75 42, 65 48" stroke="#D1D5DB" strokeWidth="0.4" strokeDasharray="3 3" fill="none" vectorEffect="non-scaling-stroke" />
                    <path d="M 35 54 C 15 62, 15 67, 25 74" stroke="#D1D5DB" strokeWidth="0.4" strokeDasharray="3 3" fill="none" vectorEffect="non-scaling-stroke" />
                  </svg>

                  <div className="relative z-10 w-full h-full flex flex-col items-center justify-between py-6">
                    <div className="flex justify-between w-[85%] items-start relative z-10">
                      <div className="bg-[#111827] text-white rounded-full shadow-md px-3 py-1.5 text-[9px] font-medium flex items-center gap-1.5 border border-gray-800">
                        <svg className="w-2.5 h-2.5 text-white animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" />
                        </svg>
                        Auto-Reply
                      </div>
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

                    <div className="bg-gradient-to-r from-[#FF5A5F] via-[#E11D48] to-[#9333EA] p-[1px] rounded-full shadow-sm relative z-10 mt-2 mb-2">
                      <div className="bg-white rounded-full px-4 py-1.5 text-[10px] font-semibold text-gray-700">
                        Schedule a reply
                      </div>
                    </div>

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

              <div className="px-6 py-6 bg-[#FAFAFA] mt-auto border-t border-gray-50 relative z-20">
                <h3 className="text-sm font-bold text-gray-900 mb-1 tracking-tight">Python</h3>
                <p className="text-[11px] text-gray-500 leading-relaxed font-medium">Scripts, dados e backend. O poder da automação e lógica de ponta ao seu favor.</p>
              </div>
            </div>
          </MotionReveal>
        </MotionReveal>
      </div>
    </section>
  );
}
