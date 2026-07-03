import { GraduationCap } from "lucide-react";

import { education } from "../../data/education";
import Container from "../common/Container";
import Section from "../common/Section";
import SectionTitle from "../common/SectionTitle";

const Education = () => {
  return (
    <Section id="education">
      <Container>
        <SectionTitle title={education.title} subtitle={education.subtitle} />

        <div className="relative mt-16">
          {/* Timeline */}

          <div className="bg-border absolute top-0 left-5 h-full w-px" />

          <div className="space-y-12">
            {education.items.map((item) => (
              <div key={item.id} className="relative flex gap-8">
                {/* Timeline Icon */}

                <div className="bg-primary text-primary-foreground relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                  <GraduationCap size={18} />
                </div>

                {/* Content */}

                <div className="border-border bg-card hover:border-primary/40 flex-1 rounded-2xl border p-6 shadow-sm transition-all duration-300">
                  <p className="text-primary text-sm font-medium">
                    {item.duration}
                  </p>

                  <h3 className="text-foreground mt-2 text-2xl font-semibold">
                    {item.degree}
                  </h3>

                  <p className="text-muted-foreground mt-2 font-medium">
                    {item.institution}
                  </p>

                  <p className="text-muted-foreground mt-5 leading-8">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Education;
