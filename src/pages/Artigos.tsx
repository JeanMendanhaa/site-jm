
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, User, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Artigos = () => {
  // Lista de artigos
  const artigos = [
    {
      titulo: "Como Construir uma API RESTful com Node.js e Express",
      data: "12 Mar, 2023",
      autor: "Dev Name",
      resumo: "Neste artigo, exploramos os fundamentos da construção de APIs RESTful robustas utilizando Node.js e Express, com exemplos práticos e melhores práticas.",
      imagem: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
      link: "#"
    },
    {
      titulo: "Otimização de Performance em Aplicações React",
      data: "24 Jan, 2023",
      autor: "Dev Name",
      resumo: "Estratégias avançadas para melhorar a performance de aplicações React, incluindo memoização, lazy loading e otimização de renderização.",
      imagem: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?auto=format&fit=crop&w=800&q=80",
      link: "#"
    },
    {
      titulo: "Introdução à Arquitetura de Microsserviços",
      data: "05 Nov, 2022",
      autor: "Dev Name",
      resumo: "Uma visão geral sobre a arquitetura de microsserviços, seus benefícios, desafios e como implementar em projetos reais.",
      imagem: "https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?auto=format&fit=crop&w=800&q=80",
      link: "#"
    }
  ];

  // Lista de palestras/apresentações
  const palestras = [
    {
      titulo: "O Futuro do Desenvolvimento Front-end",
      evento: "TechConf 2023",
      data: "Julho 2023",
      local: "São Paulo, Brasil",
      descricao: "Apresentação sobre as tendências emergentes em desenvolvimento front-end e como preparar-se para o futuro da web."
    },
    {
      titulo: "Construindo Aplicações Serverless",
      evento: "Cloud Summit",
      data: "Março 2023",
      local: "Rio de Janeiro, Brasil",
      descricao: "Workshop prático sobre como desenvolver e implementar aplicações serverless com AWS Lambda e Firebase."
    }
  ];

  return (
    <div className="min-h-screen bg-charcoal text-white">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto container-padding">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Artigos & Palestras</h1>
          <p className="text-gray-400 text-lg mb-12 max-w-3xl">
            Compartilhando conhecimento através de artigos técnicos e apresentações em eventos de tecnologia.
          </p>
          
          {/* Seção de Artigos */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Artigos Recentes</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {artigos.map((artigo, index) => (
                <div key={index} className="bg-darkgray rounded-xl overflow-hidden border border-gray-800 hover:border-gray-600 transition-all card-hover">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={artigo.imagem} 
                      alt={artigo.titulo} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{artigo.data}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User size={14} />
                        <span>{artigo.autor}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{artigo.titulo}</h3>
                    <p className="text-gray-300 mb-4">{artigo.resumo}</p>
                    <Link 
                      to={artigo.link} 
                      className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      Ler mais <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          {/* Seção de Palestras */}
          <section className="mt-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Palestras & Apresentações</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {palestras.map((palestra, index) => (
                <div key={index} className="bg-darkgray p-6 rounded-xl border border-gray-800 hover:border-gray-600 transition-all card-hover">
                  <h3 className="text-xl font-bold mb-2">{palestra.titulo}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                    <span>{palestra.evento}</span>
                    <span>•</span>
                    <span>{palestra.data}</span>
                    <span>•</span>
                    <span>{palestra.local}</span>
                  </div>
                  <p className="text-gray-300">{palestra.descricao}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Artigos;
