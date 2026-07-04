import LinkButton from "@/components/ui/LinkButton";
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
            className="bg-card border-border relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border shadow-xl"
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            {/* Header */}
            <div className="bg-card/10 border-border sticky top-0 z-10 flex items-center justify-between border-b px-6 py-4 backdrop-blur-md">
              <h2 className="text-xl font-semibold">{project.title}</h2>

              <button
                onClick={onClose}
                className="text-muted-foreground hover:text-foreground rounded-md p-1 transition"
                aria-label="Close project details"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="space-y-6 p-6 pb-0">
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
              <div className="bg-card/90 border-border sticky bottom-0 flex flex-wrap justify-end gap-3 border-t px-6 py-4 backdrop-blur-md">
                <LinkButton
                  href={project.github}
                  target="_blank"
                  variant="outline"
                >
                  <FaGithub size={16} />
                  GitHub
                </LinkButton>

                <LinkButton href={project.live} target="_blank">
                  <ExternalLink size={16} />
                  Live Demo
                </LinkButton>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
