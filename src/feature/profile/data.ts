import { SEO } from "@/config";

export const PROFILE_DATA = {
  name: "Mitsuhiro Hibino",
  handle: "nasustim",
  location: "Tokyo, Japan",
  role: "Software Developer",
  summary: SEO.description,
  education: {
    college: "Studied information engineering at a technical college.",
    graduateSchool: {
      name: "IAMAS",
      fullName: "Institute of Advanced Media Arts and Sciences",
      degree: "Master of Arts in Media Creation",
      degreeShort: "MA in Media Creation",
      ariaLabel:
        "Institute of Advanced Media Arts and Sciences (Master of Arts)",
      url: "https://www.iamas.ac.jp/en/",
    },
  },
  about: {
    passion:
      "Having passion for building web apps while focusing on users' desires and needs.",
    personal: "Loving my wife and visiting oversea countries.",
  },
  links: {
    github: {
      label: "GitHub",
      url: "https://github.com/nasustim",
      ariaLabel: "My GitHub account (nasustim)",
    },
    linkedin: {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/mitsuhibino/",
      ariaLabel: "My Linked In account",
    },
    keybase: {
      label: "Keybase",
      url: "https://keybase.io/nasustim",
      ariaLabel: "My Keybase account (nasustim)",
    },
    blog: {
      label: "Blog",
      url: "https://blog.nasustim.com/",
      ariaLabel: "My blog",
    },
  },
} as const;
