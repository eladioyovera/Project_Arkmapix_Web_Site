
export type Lang = "en" | "es";

export interface LegalTranslations {
  nav: {
    back_home: string;
    language_toggle: string;
  };
  privacy: {
    meta_title: string;
    meta_description: string;
    badge: string;
    title: string;
    subtitle: string;
    last_updated: string;
    sections: {
      id: string;
      title: string;
      content: string[];
    }[];
  };
  terms: {
    meta_title: string;
    meta_description: string;
    badge: string;
    title: string;
    subtitle: string;
    last_updated: string;
    sections: {
      id: string;
      title: string;
      content: string[];
    }[];
  };
  contact_block: {
    title: string;
    description: string;
    email_label: string;
    back_cta: string;
  };
}
