
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Website created to present completed projects, professional and academic experiences and business partners.",
      tags: ["JavaScript","React", "Vite", "TipeScript"],
      image:"https://github.com/user-attachments/assets/21b237b4-de0a-4f37-9d28-db3093238f0f",
      repoUrl: "https://github.com/JeanMendanhaa/site-jm/tree/main",
      liveUrl: "https://site-jm-five.vercel.app/"
    },
    {
      title: "Pomodoro Site and Todo List",
      description: "Application made to use the Pomodoro study technique, for concentration and focus. Added a To-do-List for monitoring and controlling daily tasks.",
      tags: ["JavaScript","React", "Vite", "TipeScript"],
      image: "https://github.com/user-attachments/assets/25973f8d-b8ac-42c2-906b-9fcbdb415e2e",
      repoUrl: "https://github.com/JeanMendanhaa/todo-pomodoro",
      liveUrl: "https://todo-pomodoro-sigma.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="bg-charcoal section-padding">
      <div className="container mx-auto container-padding">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <p className="text-gray-400 max-w-2xl">A selection of my projects. Each project represents unique challenges and innovative solutions.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#" 
            className="inline-block border border-gray-700 hover:border-white text-gray-300 hover:text-white px-6 py-3 rounded-lg transition-colors duration-300"
          >
            See more projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
