
import { ArrowUp, Github, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/JeanMendanhaa", label: "GitHub" },
    { icon: Twitter, href: "https://x.com/jeanmendanhaa", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com/JeanMendanha", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/jeanmendanha/", label: "LinkedIn" },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto container-padding">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-white text-xl font-bold">Jean<span className="text-gray-400">MENDANHA</span></a>
            <p className="text-gray-500 mt-2 text-sm">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            {socialLinks.map((social) => (
              <a 
                key={social.label}
                href={social.href}
                className="text-gray-500 hover:text-white transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
          
          <button 
            onClick={scrollToTop}
            className="p-2 rounded-full bg-muted hover:bg-gray-700 transition-colors duration-300"
            aria-label="Voltar ao topo"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
