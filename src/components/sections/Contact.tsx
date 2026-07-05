import { Mail, MapPin, Phone, Send } from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa6";

import { contact } from "../../data/contact";
import Container from "../common/Container";
import Section from "../common/Section";
import SectionTitle from "../common/SectionTitle";
import LinkButton from "../ui/LinkButton";

const socialIcons = {
  github: FaGithub,
  linkedin: FaLinkedin,
} as const;

const Contact = () => {
  return (
    <Section id="contact">
      <Container>
        <SectionTitle title={contact.title} subtitle={contact.subtitle} />

        <div className="mx-auto mt-12 max-w-3xl text-center">
          <p className="text-muted-foreground text-lg leading-8">
            {contact.description}
          </p>

          <div className="border-border bg-card mt-12 space-y-6 rounded-2xl border p-8">
            <div className="flex items-center justify-center gap-3">
              <Mail size={20} className="text-primary" />

              <a
                href={`mailto:${contact.email}`}
                className="hover:text-primary transition-colors"
              >
                {contact.email}
              </a>
            </div>

            <div className="flex items-center justify-center gap-3">
              <Phone size={20} className="text-primary" />

              <a
                href={`tel:${contact.phone}`}
                className="hover:text-primary transition-colors"
              >
                {contact.phone}
              </a>
            </div>

            <div className="flex items-center justify-center gap-3">
              <MapPin size={20} className="text-primary" />

              <span className="text-foreground">{contact.location}</span>
            </div>

            <div className="flex justify-center gap-6 pt-2">
              {contact.socials.map((social) => {
                const Icon = socialIcons[social.id];

                return (
                  <LinkButton
                    target="_blank"
                    key={social.id}
                    href={social.href}
                    variant="outline"
                    aria-label={social.name}
                  >
                    <Icon size={18} />
                    {social.name}
                  </LinkButton>
                );
              })}
            </div>
          </div>

          <div className="mt-10">
            <LinkButton href={`mailto:${contact.email}`}>
              <Send size={18} />
              Send Me an Email
            </LinkButton>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Contact;
