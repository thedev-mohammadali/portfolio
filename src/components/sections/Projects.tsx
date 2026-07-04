import { ArrowRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

import { useState } from "react";
import { projects } from "../../data/projects";
import Container from "../common/Container";
import Section from "../common/Section";
import SectionTitle from "../common/SectionTitle";
import LinkButton from "../ui/LinkButton";
import Button from "../ui/MyButton";
import ProjectModal from "./projects/ProjectModal";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const homeProjects = projects.items.slice(0, 3);

  return (
    <Section id="projects">
      <Container>
        <SectionTitle title={projects.title} subtitle={projects.subtitle} />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {homeProjects.map((project) => (
            <article
              key={project.id}
              className="group border-border bg-card flex h-full flex-col overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Preview */}
              <div className="border-border from-muted/60 to-muted relative flex aspect-video items-center justify-center overflow-hidden border-b bg-linear-to-br">
                <div className="text-muted-foreground text-sm opacity-70 transition group-hover:opacity-100">
                  Preview Coming Soon
                </div>

                {/* subtle glow effect */}
                <div className="bg-primary/5 absolute inset-0 opacity-0 transition group-hover:opacity-100" />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-foreground group-hover:text-primary text-xl font-semibold tracking-tight transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mt-3 text-sm leading-6">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="border-border bg-background/60 text-muted-foreground hover:border-primary/40 hover:text-primary rounded-full border px-2.5 py-1 text-xs backdrop-blur-sm transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="border-border/60 mt-auto flex items-center justify-between border-t pt-6">
                  <div className="flex gap-3">
                    <LinkButton
                      href={project.github}
                      variant="outline"
                      aria-label="GitHub Repository"
                      className="hover:border-primary/40 transition"
                    >
                      <FaGithub size={18} />
                    </LinkButton>

                    <LinkButton
                      href={project.live}
                      variant="outline"
                      aria-label="Live Demo"
                      className="hover:border-primary/40 transition"
                    >
                      <ExternalLink size={18} />
                    </LinkButton>
                  </div>

                  <Button
                    onClick={() => setSelectedProject(project)}
                    className="group/btn"
                  >
                    <span>Details</span>
                    <ArrowRight
                      size={18}
                      className="transition-transform group-hover/btn:translate-x-1"
                    />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All */}

        <div className="mt-14 flex justify-center">
          <LinkButton href="/projects" variant="outline">
            View All Projects
            <ArrowRight size={18} />
          </LinkButton>
        </div>
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </Container>
    </Section>
  );
};

export default Projects;
