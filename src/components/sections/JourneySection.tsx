import { MotionReveal } from "@/components/MotionReveal";
import { Layout, Globe, Code2, Cpu } from "lucide-react";

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

export function JourneySection() {
  return (
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
                    <div className="flex items-start justify-between mb-8">
                      <div className="relative">
                        <div className="absolute inset-0 bg-[#7C3AED] blur-xl opacity-60 rounded-full translate-y-1 scale-110" />
                        <div className="relative w-14 h-14 rounded-full bg-[#7C3AED] text-white flex items-center justify-center font-bold text-[16px] shadow-md">
                          {item.step}
                        </div>
                      </div>
                      <span className="text-[11px] font-mono text-gray-400 font-medium tracking-tight mt-3">{item.tag}</span>
                    </div>

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
  );
}
