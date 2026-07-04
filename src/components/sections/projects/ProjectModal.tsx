import { ExternalLink, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect } from "react";
import { FaGithub } from "react-icons/fa6";

type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  live: string;
  challenges?: string;
  improvements?: string;
};

type Props = {
  project: Project | null;
  onClose: () => void;
};

const ProjectModal = ({ project, onClose }: Props) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);
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
            className="bg-card border-border relative z-10 w-full max-w-2xl rounded-2xl border p-6 shadow-xl"
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
            <div className="mt-6 space-y-5">
              <p className="text-muted-foreground leading-7">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div>
                <h3 className="mb-2 text-sm font-semibold">Tech Stack</h3>

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

              {/* Challenges */}
              {project.challenges && (
                <div>
                  <h3 className="mb-2 text-sm font-semibold">Challenges</h3>
                  <p className="text-muted-foreground leading-7">
                    {project.challenges}
                  </p>
                </div>
              )}

              {/* Improvements */}
              {project.improvements && (
                <div>
                  <h3 className="mb-2 text-sm font-semibold">
                    Future Improvements
                  </h3>
                  <p className="text-muted-foreground leading-7">
                    {project.improvements}
                  </p>
                </div>
              )}

              {/* Links */}
              <div className="flex gap-3 pt-2">
                <a
                  href={project.github}
                  target="_blank"
                  className="hover:text-primary inline-flex items-center gap-2 text-sm transition"
                >
                  <FaGithub size={16} /> GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  className="hover:text-primary inline-flex items-center gap-2 text-sm transition"
                >
                  <ExternalLink size={16} /> Live Demo
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
