
const PartnersSection = () => {
  const partners = [
    {
      name: "TechCorp",
      logo: "TC",
      description: "Empresa de tecnologia especializada em soluções de cloud computing",
      url: "#"
    },
    {
      name: "Design Studio",
      logo: "DS",
      description: "Estúdio de design digital focado em UX/UI para aplicações web e mobile",
      url: "#"
    },
    {
      name: "StartupLab",
      logo: "SL",
      description: "Aceleradora de startups com foco em negócios de tecnologia e inovação",
      url: "#"
    },
    {
      name: "DevAcademy",
      logo: "DA",
      description: "Plataforma educacional para desenvolvedores e profissionais de tecnologia",
      url: "#"
    }
  ];

  return (
    <section id="partners" className="bg-charcoal section-padding">
      <div className="container mx-auto container-padding">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Partners</h2>
          <p className="text-gray-400 max-w-2xl">Companies and brands I'm proud to collaborate with on innovative and challenging projects.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <a 
              key={index} 
              href={partner.url}
              className="bg-secondary rounded-xl p-6 hover:bg-muted transition-colors duration-300 card-hover flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4 text-white font-bold text-xl">
                {partner.logo}
              </div>
              <h3 className="text-lg font-bold mb-2">{partner.name}</h3>
              <p className="text-gray-400 text-sm">{partner.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
