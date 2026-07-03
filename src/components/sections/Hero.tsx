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
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <motion.div
            className="order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left"
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
              className="text-muted-foreground mb-6 text-2xl font-semibold lg:mb-8 lg:text-3xl"
            >
              {hero.designation}
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-muted-foreground mx-auto max-w-lg text-lg leading-8 lg:mx-0"
            >
              {hero.description}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start"
            >
              <LinkButton href={hero.resume} download>
                <Download size={18} />
                Download Resume
              </LinkButton>

              <LinkButton href="#projects" variant="outline">
                View Projects
                <ArrowRight size={18} />
              </LinkButton>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex justify-center gap-4 lg:justify-start"
            >
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

          {/* Profile Image */}
          <motion.div
            className="order-1 mb-2 flex justify-center lg:order-2 lg:mb-0 lg:justify-self-end"
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
                  className="border-border relative z-10 aspect-square w-64 rounded-full border object-cover shadow-xl sm:w-72 md:w-80 lg:w-96"
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
