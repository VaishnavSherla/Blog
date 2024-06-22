export enum ContactType {
  github = 'github',
  linkedin = 'linkedin',
  twitter = 'twitter',
  youtube = 'youtube',
  email = 'email',
}

export interface Contact {
  twitter: string;
  site: string;
  calendly?: string;
  links: Record<ContactType, string>;
}

export const contact: Contact = {
  twitter: '@VaishnavSherla',
  site: 'vaishnavsherla.github.io',
  calendly: '',
  links: {
    github: 'https://github.com/VaishnavSherla',
    linkedin: 'https://linkedin.com/in/VaishnavSherla',
    twitter: 'https://twitter.com/VaishnavSherla',
    youtube: 'https://www.youtube.com/@VaishnavSherla',
    email: 'mailto:vaishnavsherla@gmail.com',
  },
};
