import { ExternalLink, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect } from "react";
import { FaGithub } from "react-icons/fa6";

type ProjectStatus = "Completed" | "In Progress";

type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
  features: string[];
  challenges: string[];
  futureImprovements: string[];
  status: ProjectStatus;
};

type Props = {
  project: Project | null;
  onClose: () => void;
};

const ProjectModal = ({ project, onClose }: Props) => {
  useEffect(() => {
    if (!project) return;

    document.body.classList.add("overflow-hidden");

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("overflow-hidden");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);
  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Overlay */}
          <motion.div
            className="absolute inset-0 bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="bg-card border-border relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border p-6 shadow-xl"
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">{project.title}</h2>

              <button
                onClick={onClose}
                className="text-muted-foreground hover:text-foreground transition"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            {/* Content */}
            <div className="mt-6 space-y-6">
              {/* Overview */}
              <div>
                <h3 className="mb-2 text-sm font-semibold">Overview</h3>

                <p className="text-muted-foreground leading-7">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div>
                <h3 className="mb-2 text-sm font-semibold">Technology Stack</h3>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-background border-border text-muted-foreground rounded-full border px-3 py-1 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 className="mb-2 text-sm font-semibold">Key Features</h3>

                <ul className="text-muted-foreground list-disc space-y-2 pl-5">
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>

              {/* Challenges */}
              <div>
                <h3 className="mb-2 text-sm font-semibold">Challenges Faced</h3>

                <ul className="text-muted-foreground list-disc space-y-2 pl-5">
                  {project.challenges.map((challenge) => (
                    <li key={challenge}>{challenge}</li>
                  ))}
                </ul>
              </div>

              {/* Future Improvements */}
              <div>
                <h3 className="mb-2 text-sm font-semibold">
                  Future Improvements
                </h3>

                <ul className="text-muted-foreground list-disc space-y-2 pl-5">
                  {project.futureImprovements.map((improvement) => (
                    <li key={improvement}>{improvement}</li>
                  ))}
                </ul>
              </div>

              {/* Links */}
              <div className="border-border flex flex-wrap gap-4 border-t pt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary inline-flex items-center gap-2 text-sm transition"
                >
                  <FaGithub size={16} />
                  GitHub Repository
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary inline-flex items-center gap-2 text-sm transition"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
