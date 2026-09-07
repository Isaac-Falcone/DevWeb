import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const projects = [
  {
    title: "Dashboard Financeiro",
    img: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?auto=format&fit=crop&w=800&q=80",
    tag: "React & Tailwind",
  },
  {
    title: "E-commerce Completo",
    img: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&w=800&q=80",
    tag: "Python & Django",
  },
  {
    title: "Clima em Tempo Real",
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    tag: "Vanilla JS & API",
  },
  {
    title: "API Gerenciamento",
    img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
    tag: "Node.js & MongoDB",
  },
  {
    title: "SaaS Analytics",
    img: "https://images.unsplash.com/photo-1505909182942-e2f09aee3e89?auto=format&fit=crop&w=800&q=80",
    tag: "Next.js",
  },
  {
    title: "App Mobile UI",
    img: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=800&q=80",
    tag: "React Native",
  }
];

export function ArcScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // O círculo gigante gira de 55 graus até -55 graus.
  // Isso faz com que no início do scroll o primeiro card (i=0) fique no centro,
  // e no final do scroll o último card (i=5) pare exatamente no centro.
  const rotate = useTransform(scrollYProgress, [0, 1], [55, -55]);

  return (
    <section ref={containerRef} id="portfolio" className="h-[500vh] relative bg-[#050505] text-white overflow-visible border-t border-white/5">
      
      {/* Container Sticky */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        
        {/* Textos de Cabeçalho - Escondido em telas de BAIXA ALTURA (laptops) para priorizar os blocos */}
        <div className="hidden min-[1024px]:block max-h-[750px]:hidden absolute top-16 md:top-24 left-8 md:left-16 max-w-2xl lg:max-w-4xl z-30 pointer-events-none">
            <h2 className="text-[clamp(1.5rem,2.5vw,3rem)] font-bold tracking-tight text-white leading-[1.1]">
              Co-criamos o futuro dos nossos alunos, medimos o impacto e fazemos de novo.
            </h2>
        </div>

        {/* Ponto Central do Círculo Invisível (Escalável para qualquer monitor) */}
        <motion.div 
          style={{ 
            rotate,
            // Desloca o eixo central para baixo na medida exata do raio, garantindo que o topo do círculo toque a tela.
            marginTop: 'max(120vw, 1500px)'
          }}
          className="absolute left-1/2 top-[45vh] min-[1024px]:top-[55vh] max-h-[750px]:!top-[45vh] w-0 h-0 flex items-center justify-center pointer-events-none"
        >
          {projects.map((project, i) => {
             // Curva mais acentuada: espaçamento de 22 graus entre cards
             // 6 projetos -> Ângulos: -55, -33, -11, 11, 33, 55
             const angleDeg = (i - 2.5) * 22; 
             const angleRad = (angleDeg - 90) * (Math.PI / 180);
             
             // Curva perfeitamente responsiva: o raio escala com a largura do monitor (120vw) 
             // mas nunca fica menor que 1500px para não quebrar em telas finas.
             const x = `calc(max(120vw, 1500px) * ${Math.cos(angleRad)})`;
             const y = `calc(max(120vw, 1500px) * ${Math.sin(angleRad)})`;
             
             return (
               <div 
                 key={i}
                 // Tamanho aumentado novamente conforme pedido usando vw/vh misturado para responsividade incrível
                 // O bloco agora pode crescer até 55% da altura da tela (ou 500px)
                 className="absolute w-[clamp(260px,55vh,500px)] h-[clamp(260px,55vh,500px)] rounded-[16px] md:rounded-[24px] overflow-hidden border border-white/10 group bg-[#111] shadow-[0_0_40px_rgba(0,0,0,0.5)] pointer-events-auto"
                 style={{
                   left: x,
                   top: y,
                   transform: `translate(-50%, -50%) rotate(${angleDeg}deg)`,
                 }}
               >
                 <img src={project.img} alt={project.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                 
                 <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full z-10">
                   <h3 className="text-xl md:text-2xl font-bold text-white leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">{project.title}</h3>
                   <span className="text-gray-100 text-[13px] md:text-sm font-semibold mt-2 block drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                     {project.tag}
                   </span>
                 </div>
               </div>
             )
          })}
        </motion.div>

        {/* Efeito de Gradiente Preto nas Bordas Inferiores para suavizar a entrada/saída */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none z-10" />

      </div>
    </section>
  )
}
