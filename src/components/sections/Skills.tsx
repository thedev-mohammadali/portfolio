import { skills } from "../../data/skills";
import Container from "../common/Container";
import Section from "../common/Section";
import SectionTitle from "../common/SectionTitle";

const Skills = () => {
  return (
    <Section id="skills">
      <Container>
        <SectionTitle title={skills.title} subtitle={skills.subtitle} />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {skills.categories.map((category) => (
            <div
              key={category.title}
              className="border-border bg-card rounded-2xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-foreground text-xl font-semibold">
                {category.title}
              </h3>

              <div className="mt-6 flex flex-wrap gap-3">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="border-border bg-background text-muted-foreground rounded-full border px-4 py-2 text-sm font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Skills;
