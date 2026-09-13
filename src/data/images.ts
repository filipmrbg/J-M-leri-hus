/**
 * CENTRALIZED IMAGE CONFIGURATION
 *
 * All images used across the template are defined here.
 */

export interface ImageSlot {
  url: string;
  alt: string;
}

export interface SiteImages {
  logo: ImageSlot;
  logoDark?: ImageSlot;
  hero: {
    background: ImageSlot;
  };
  services: {
    [key: string]: ImageSlot | undefined;
  };
  gallery: ImageSlot[];
  cta: {
    banner: ImageSlot;
    midSection: ImageSlot;
  };
  about: {
    hero: ImageSlot;
    teamMember: ImageSlot;
  };
  whyChooseUs: ImageSlot;
  ideaToResult: ImageSlot;
  portfolio: {
    image: ImageSlot;
    title: string;
    category: string;
  }[];
}

const images: SiteImages = {
  logo: {
    url: '/logo.png',
    alt: 'J Måleri Åhus',
  },
  logoDark: {
    url: '/logo-dark.png',
    alt: 'J Måleri Åhus',
  },

  hero: {
    background: {
      url: '/hero-main.webp',
      alt: 'J Måleri Åhus måleriarbeten i Åhus och Skåne med omnejd',
    },
  },

  services: {
    'invandigt-maleri': {
      url: '/gallery/gallery-2.jpg',
      alt: 'Invändigt måleri och tapetsering i Åhus',
    },
    'fasadmalning': {
      url: '/gallery/gallery-1.jpg',
      alt: 'Utvändigt måleri och fasadrenovering i Åhus',
    },
    'tapetsering': {
      url: '/gallery/gallery-4.jpg',
      alt: 'Tapetsering, spackling och ytfinish',
    },
    'totalentreprenad': {
      url: '/gallery/gallery-6.jpg',
      alt: 'Totalentreprenad måleri för villa och fastighet',
    },
  },

  gallery: [
    {
      url: '/gallery/gallery-1.jpg',
      alt: 'J Måleri Åhus fasadmålning och utvändigt måleriarbete',
    },
    {
      url: '/gallery/gallery-2.jpg',
      alt: 'J Måleri Åhus invändig målning och väggfinish',
    },
    {
      url: '/gallery/gallery-3.jpg',
      alt: 'J Måleri Åhus tak och snickerimålning',
    },
    {
      url: '/gallery/gallery-4.jpg',
      alt: 'J Måleri Åhus mönstertapetsering och fondvägg',
    },
    {
      url: '/gallery/gallery-5.jpg',
      alt: 'J Måleri Åhus detaljarbete och snickerifinish',
    },
    {
      url: '/gallery/gallery-6.jpg',
      alt: 'J Måleri Åhus färdigställt måleriprojekt',
    },
  ],

  cta: {
    banner: {
      url: '/hero-main.webp',
      alt: 'J Måleri Åhus måleriprojekt',
    },
    midSection: {
      url: '/hero-main.webp',
      alt: 'J Måleri arbetsplats Åhus',
    },
  },

  about: {
    hero: {
      url: '/about-us.jpg',
      alt: 'J Måleri Åhus verksamhet och måleriarbete i Åhus',
    },
    teamMember: {
      url: '/logo.png',
      alt: 'Teammedlem J Måleri Åhus',
    },
  },

  whyChooseUs: {
    url: '/why-choose-us.webp',
    alt: 'Noggrant måleriarbete i detalj',
  },

  ideaToResult: {
    url: '/idea-to-result.webp',
    alt: 'Från planering till perfekt målat resultat',
  },

  portfolio: [
    {
      image: {
        url: '/gallery/gallery-1.jpg',
        alt: 'Fasadmålning villa i Åhus',
      },
      title: 'Fasadmålning & Träskydd Villa',
      category: 'Fasadmålning',
    },
    {
      image: {
        url: '/gallery/gallery-2.jpg',
        alt: 'Invändigt måleri och rumsförnyelse',
      },
      title: 'Invändig Målning & Kulörbyte',
      category: 'Inomhusmåleri',
    },
    {
      image: {
        url: '/gallery/gallery-3.jpg',
        alt: 'Tak- och väggmålning Åhus',
      },
      title: 'Tak, Väggar & Snickerier',
      category: 'Måleri',
    },
    {
      image: {
        url: '/gallery/gallery-4.jpg',
        alt: 'Ytfinish och väggmålning',
      },
      title: 'Spackling & Ytfinish',
      category: 'Inomhusmåleri',
    },
    {
      image: {
        url: '/gallery/gallery-5.jpg',
        alt: 'Snickerimålning och detaljarbete',
      },
      title: 'Dörr- & Fönstermålning',
      category: 'Snickerimåleri',
    },
    {
      image: {
        url: '/gallery/gallery-6.jpg',
        alt: 'Helhetsentreprenad måleri Skåne',
      },
      title: 'Totalrenovering Måleri',
      category: 'Helhetsmåleri',
    },
  ],
};

export default images;
