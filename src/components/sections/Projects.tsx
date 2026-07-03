import { ArrowRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

import { projects } from "../../data/projects";
import Container from "../common/Container";
import Section from "../common/Section";
import SectionTitle from "../common/SectionTitle";
import Button from "../ui/Button";
import LinkButton from "../ui/LinkButton";

const Projects = () => {
  const homeProjects = projects.items.slice(0, 3);

  return (
    <Section id="projects">
      <Container>
        <SectionTitle title={projects.title} subtitle={projects.subtitle} />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {homeProjects.map((project) => (
            <article
              key={project.id}
              className="border-border bg-card overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Preview */}

              <div className="border-border bg-muted flex aspect-video items-center justify-center border-b">
                <span className="text-muted-foreground">Project Preview</span>
              </div>

              {/* Content */}

              <div className="flex h-full flex-col p-6">
                <h3 className="text-foreground text-2xl font-semibold">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mt-4 leading-7">
                  {project.description}
                </p>

                {/* Technologies */}

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="border-border bg-background text-muted-foreground rounded-full border px-3 py-1 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}

                <div className="mt-8 flex items-center justify-between">
                  <div className="flex gap-3">
                    <LinkButton
                      href={project.github}
                      variant="outline"
                      aria-label="GitHub Repository"
                    >
                      <FaGithub size={18} />
                    </LinkButton>

                    <LinkButton
                      href={project.live}
                      variant="outline"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={18} />
                    </LinkButton>
                  </div>

                  <Button>
                    Details
                    <ArrowRight size={18} />
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
      </Container>
    </Section>
  );
};

export default Projects;
