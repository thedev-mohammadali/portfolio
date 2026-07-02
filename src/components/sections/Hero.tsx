import { ArrowRight, Download } from "lucide-react";
import profileImage from "../../assets/images/profile.jpg";
import { socials } from "../../data/socials";
import Container from "../common/Container";
import Section from "../common/Section";
import LinkButton from "../ui/LinkButton";
import SocialButton from "../ui/SocialButton";

import { hero } from "../../data/hero";

const Hero = () => {
  return (
    <Section id="home" className="flex min-h-[calc(100vh-5rem)] items-center">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              {hero.greeting}
            </p>

            <h1 className="mb-4 text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              {hero.name}
            </h1>

            <h2 className="mb-8 text-2xl font-semibold text-muted-foreground lg:text-3xl">
              {hero.designation}
            </h2>

            <p className="max-w-lg text-lg leading-8 text-muted-foreground">
              {hero.description}
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <LinkButton href={hero.resume} download>
                <Download size={18} />
                Download Resume
              </LinkButton>

              <LinkButton href="#projects" variant="outline">
                View Projects
                <ArrowRight size={18} />
              </LinkButton>
            </div>

            {/* Socials */}
            <div className="mt-10 flex gap-4">
              {socials.map((social) => (
                <SocialButton
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  icon={<social.icon size={22} />}
                />
              ))}
            </div>
          </div>

          {/* Right */}

          <div className="flex justify-center lg:justify-self-end">
            <div className="relative w-fit">
              <div className="absolute -inset-10 rounded-full bg-primary/30 blur-[80px]" />

              <img
                src={profileImage}
                alt="Mohammad Ali"
                className="relative z-10 aspect-square w-72 rounded-full border border-border object-cover shadow-xl md:w-96"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
