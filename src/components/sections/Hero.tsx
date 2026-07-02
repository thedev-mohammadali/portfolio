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
            <p className="mb-4 text-lg text-primary">{hero.greeting}</p>

            <h1 className="mb-4 text-5xl font-extrabold tracking-tight lg:text-7xl">
              {hero.name}
            </h1>

            <h2 className="mb-6 text-2xl font-semibold text-muted-foreground lg:text-3xl">
              {hero.designation}
            </h2>

            <p className="max-w-xl leading-8 text-muted-foreground">
              {hero.description}
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <LinkButton href={hero.resume}>Download Resume</LinkButton>

              <LinkButton href="#projects" variant="outline">
                View Projects
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

          <div className="flex justify-center">
            <img
              src={profileImage}
              alt="Mohammad Ali"
              className="aspect-square w-80 rounded-full object-cover border border-border shadow-2xl"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
