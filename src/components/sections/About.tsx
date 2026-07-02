import profileImage from "../../assets/images/profile.jpg";
import { about } from "../../data/about";
import Container from "../common/Container";
import Section from "../common/Section";
import SectionTitle from "../common/SectionTitle";

const About = () => {
  return (
    <Section id="about">
      <Container>
        <SectionTitle title={about.title} subtitle="Get to know me better" />

        <div className="mt-16 grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="bg-primary/20 absolute -inset-4 rounded-3xl blur-2xl" />

              <img
                src={profileImage}
                alt="Mohammad Ali"
                className="border-border relative aspect-square w-72 rounded-2xl border object-cover shadow-xl md:w-96"
              />
            </div>
          </div>

          {/* Right */}
          <div>
            <div className="space-y-7">
              {about.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-muted-foreground text-lg leading-8"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {about.facts.map((fact) => (
                <div
                  key={fact.label}
                  className="border-border bg-card rounded-xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <p className="text-muted-foreground text-xs font-semibold tracking-wider uppercase">
                    {fact.label}
                  </p>

                  <p className="text-foreground text-lg font-semibold">
                    {fact.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default About;
