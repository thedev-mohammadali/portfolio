import { ArrowRight, Download } from "lucide-react";
import { motion } from "motion/react";

import { fadeLeft, fadeUp, staggerContainer } from "../../animations/hero";
import profileImage from "../../assets/images/profile1.jpg";
import { hero } from "../../data/hero";
import { socials } from "../../data/socials";

import Container from "../common/Container";
import Section from "../common/Section";
import LinkButton from "../ui/LinkButton";
import SocialButton from "../ui/SocialButton";

const Hero = () => {
  return (
    <Section id="home" className="flex min-h-[calc(100vh-5rem)] items-center">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={fadeUp}
              className="text-primary mb-3 text-sm font-semibold tracking-widest uppercase"
            >
              {hero.greeting}
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="mb-4 text-5xl leading-tight font-black tracking-tight sm:text-6xl lg:text-7xl"
            >
              {hero.name}
            </motion.h1>

            <motion.h2
              variants={fadeUp}
              className="text-muted-foreground mb-8 text-2xl font-semibold lg:text-3xl"
            >
              {hero.designation}
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-muted-foreground max-w-lg text-lg leading-8"
            >
              {hero.description}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
              <LinkButton href={hero.resume} download>
                <Download size={18} />
                Download Resume
              </LinkButton>

              <LinkButton href="#projects" variant="outline">
                View Projects
                <ArrowRight size={18} />
              </LinkButton>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 flex gap-4">
              {socials.map((social) => (
                <motion.div key={social.name} variants={fadeUp}>
                  <SocialButton
                    href={social.href}
                    aria-label={social.name}
                    icon={<social.icon size={22} />}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right */}
          <motion.div
            className="flex justify-center lg:justify-self-end"
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            >
              <div className="relative w-fit">
                <motion.div
                  className="bg-primary/30 absolute -inset-10 rounded-full blur-[80px]"
                  animate={{
                    scale: [1, 1.08, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <motion.img
                  src={profileImage}
                  alt="Mohammad Ali"
                  className="border-border relative z-10 aspect-square w-72 rounded-full border object-cover shadow-xl md:w-96"
                  whileHover={{
                    scale: 1.02,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
