import { MotionReveal } from "@/components/MotionReveal";
import { ChevronRight, Lock } from "lucide-react";
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
import { AuthModal } from "@/components/auth/AuthModal";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

export function CoursesSection() {
  const { user } = useAuth();

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
      toast.error(err.message || "Erro de conexão segura", { id: "checkout" });
    }
  };

  return (
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
  );
}
