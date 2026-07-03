import type { LucideIcon } from "lucide-react";
import { Check, Database, Monitor, Server, Wrench } from "lucide-react";

import { motion } from "motion/react";
import { skills } from "../../data/skills";
import Container from "../common/Container";
import Section from "../common/Section";
import SectionTitle from "../common/SectionTitle";

import { fadeScale, staggerContainer } from "../../animations/hero";

const categoryIcons: Record<
  (typeof skills.categories)[number]["id"],
  LucideIcon
> = {
  frontend: Monitor,
  backend: Server,
  database: Database,
  tools: Wrench,
};

const Skills = () => {
  return (
    <Section id="skills">
      <Container>
        <SectionTitle title={skills.title} subtitle={skills.subtitle} />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="mt-16 grid gap-6 md:grid-cols-2"
        >
          {skills.categories.map((category) => {
            const Icon = categoryIcons[category.id];

            return (
              <motion.div
                variants={fadeScale}
                key={category.id}
                className="border-border bg-card hover:border-primary/40 relative overflow-hidden rounded-2xl border p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Background Accent */}
                <div className="bg-primary/2 absolute inset-0 rounded-2xl" />

                <div className="relative">
                  {/* Header */}
                  <div className="flex items-center gap-3">
                    <Icon size={22} className="text-primary" />

                    <h3 className="text-foreground text-xl font-semibold">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills */}
                  <ul className="mt-6 space-y-3">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <Check size={16} className="text-primary shrink-0" />

                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </Section>
  );
};

export default Skills;
