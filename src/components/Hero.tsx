
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react';

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/JeanMendanhaa", label: "GitHub" },
    { icon: Twitter, href: "https://x.com/jeanmendanhaa", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com/JeanMendanha", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/jeanmendanha/", label: "LinkedIn" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-charcoal pt-20 relative overflow-hidden">
      {/* Background image of MacBook with code */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img 
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2000&q=80" 
          alt="MacBook with code"
          className="w-full h-full object-cover opacity-10" 
        />
      </div>
      
      <div className="absolute w-full h-full">
        <div className="w-[500px] h-[500px] rounded-full bg-gradient-to-r from-gray-800 to-transparent opacity-20 blur-3xl absolute -top-64 -right-64"></div>
        <div className="w-[400px] h-[400px] rounded-full bg-gradient-to-r from-gray-800 to-transparent opacity-20 blur-3xl absolute -bottom-40 -left-40"></div>
      </div>
      
      <div className="container mx-auto relative z-10 container-padding">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Developer<br />JS FullStack.
            </h1>
            <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-lg">
              Transforming ideas into excepcional digital experiences. FullStack JS Developer, content creator and technology enthusiast.
            </p>
            
            <div className="flex space-x-6">
              {socialLinks.map((social) => (
                <a 
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
