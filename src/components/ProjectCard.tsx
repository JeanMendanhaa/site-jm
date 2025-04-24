
import { ArrowUpRight, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  liveUrl?: string;
  repoUrl?: string;
}

const ProjectCard = ({ title, description, tags, image, liveUrl, repoUrl }: ProjectCardProps) => {
  return (
    <div className="bg-secondary rounded-xl overflow-hidden shadow-lg card-hover">
      <div className="h-48 bg-darkgray relative">
        {/* Project Image or Placeholder */}
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-darkgray to-midgray">
            <span className="text-gray-500 text-lg font-medium">{title[0]}</span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="bg-muted text-gray-300 text-xs px-2 py-1 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4 pt-3 border-t border-gray-800">
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-1"
            >
              <Github size={16} />
              <span className="text-xs">Código</span>
            </a>
          )}
          
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-1"
            >
              <ArrowUpRight size={16} />
              <span className="text-xs">Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
