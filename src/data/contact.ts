type ContactSocialId = "github" | "linkedin";

type ContactSocial = {
  id: ContactSocialId;
  name: string;
  href: string;
};

export const contact: {
  title: string;
  subtitle: string;
  description: string;
  phone: string;
  email: string;
  location: string;
  socials: ContactSocial[];
} = {
  title: "Contact",
  subtitle: "Let's Work Together",

  description:
    "I'm always interested in discussing software engineering, backend development, and full-stack opportunities. Whether you have a project in mind or just want to connect, feel free to reach out.",

  phone: "+88 01323-834097",

  email: "mohammadali@example.com",

  location: "Rajshahi, Bangladesh",

  socials: [
    {
      id: "github",
      name: "GitHub",
      href: "#",
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      href: "#",
    },
  ],
};
