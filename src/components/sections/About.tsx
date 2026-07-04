import { motion } from "motion/react";
import {
  fadeDown,
  fadeLeft,
  fadeUp,
  staggerContainer,
} from "../../animations/hero";
import aboutImage from "../../assets/images/about_1.jpg";
import { about } from "../../data/about";
import Container from "../common/Container";
import Section from "../common/Section";
import SectionTitle from "../common/SectionTitle";

const About = () => {
  return (
    <Section id="about">
      <Container>
        <SectionTitle title={about.title} subtitle="Get to know me better" />

        <motion.div
          className="mt-16 grid items-center gap-16 lg:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >
          {/* Left */}
          <motion.div variants={fadeLeft} className="flex justify-center">
            <div className="relative">
              <motion.div className="bg-primary/20 absolute -inset-4 rounded-3xl blur-2xl" />

              <img
                src={aboutImage}
                alt="Mohammad Ali"
                className="border-border relative z-10 aspect-square w-72 rounded-2xl border object-cover object-[center_35%] shadow-xl md:w-96"
              />
            </div>
          </motion.div>

          {/* Right */}
          <div className="space-y-10">
            <motion.div variants={fadeUp} className="space-y-7">
              {about.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-muted-foreground text-lg leading-8"
                >
                  {paragraph}
                </p>
              ))}
            </motion.div>

            <motion.div
              variants={fadeDown}
              className="grid gap-4 sm:grid-cols-2"
            >
              {about.facts.map((fact) => (
                <div
                  key={fact.label}
                  className="border-border bg-card rounded-xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <p className="text-muted-foreground text-xs font-semibold tracking-wider uppercase">
                    {fact.label}
                  </p>

                  <p className="text-foreground mt-2 text-lg font-semibold">
                    {fact.value}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default About;
