
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { GraduationCap, Award, Medal } from 'lucide-react';

const Especializacoes = () => {
  // Lista de especializações/cursos
  const especializacoes = [
    {
      titulo: "Microsoft Insider Program",
      instituicao: "Microsoft Insider",
      ano: "Partner",
      descricao: "Programa para teste, aprimoramente e correção de erros de novas funcionaliaddes do Windowns e outras ferramentas Microsoft.",
      icon: Medal
    },
    { 
      titulo: "Análise e Desenvolvimento de Sistemas",
      instituicao: "Faculdade SENAI FATESG",
      ano: "2022",
      descricao: "Especialização completa em desenvolvimento front-end e back-end com foco em JavaScript e frameworks (React, Node.js) e banco de dados (SQL).",
      icon: GraduationCap
    }
    /*,
    {
      titulo: "Certificação AWS Developer Associate",
      instituicao: "Amazon Web Services",
      ano: "2021",
      descricao: "Certificação profissional em serviços de nuvem e desenvolvimento de aplicações na plataforma AWS.",
      icon: Medal
    },
    {
      titulo: "Machine Learning e Inteligência Artificial",
      instituicao: "Instituto de Tecnologia",
      ano: "2020",
      descricao: "Curso avançado sobre fundamentos de IA, criação de modelos preditivos e implementação de soluções de machine learning.",
      icon: Award
    },
    {
      titulo: "UI/UX Design",
      instituicao: "Design Academy",
      ano: "2019",
      descricao: "Formação em design de interfaces e experiência do usuário, com foco em usabilidade e acessibilidade.",
      icon: GraduationCap
    }*/
  ];

  return (
    <div className="min-h-screen bg-charcoal text-white">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto container-padding">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Especializações & Formação</h1>
          <p className="text-gray-400 text-lg mb-12 max-w-3xl">
            Minha jornada de aprendizado contínuo e desenvolvimento profissional através de cursos, 
            certificações e especializações na área de tecnologia.
          </p>
          
          <div className="grid gap-8 md:grid-cols-2">
            {especializacoes.map((item, index) => (
              <div 
                key={index} 
                className="bg-darkgray p-6 rounded-xl border border-gray-800 hover:border-gray-600 transition-all card-hover"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-800 rounded-lg">
                    <item.icon size={24} className="text-gray-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{item.titulo}</h3>
                    <p className="text-gray-400 text-sm mb-4">{item.instituicao} • {item.ano}</p>
                    <p className="text-gray-300">{item.descricao}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Seção de habilidades técnicas */}
          <div className="mt-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Habilidades Técnicas</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                "JavaScript/TypeScript", "HTML5", "SQL", "React", "Node.js", 
                , "ReactNative", "Vite"
              ].map((skill, index) => (
                <div key={index} className="bg-darkgray p-4 rounded-lg border border-gray-800">
                  <span className="font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Especializacoes;
