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
    alt: 'LiDe Måleri AB',
  },
  logoDark: {
    url: '/logo-dark.png',
    alt: 'LiDe Måleri AB',
  },

  hero: {
    background: {
      url: '/hero-main.webp',
      alt: 'LiDe Måleri AB måleriarbeten i Dalarna med omnejd',
    },
  },

  services: {
    'invandigt-maleri': {
      url: '/gallery/gallery-2.jpg',
      alt: 'Invändigt måleri och tapetsering i Dalarna',
    },
    'fasadmalning': {
      url: '/gallery/gallery-1.jpg',
      alt: 'Utvändigt måleri och fasadrenovering i Dalarna',
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
      alt: 'LiDe Måleri AB fasadmålning och utvändigt måleriarbete',
    },
    {
      url: '/gallery/gallery-2.jpg',
      alt: 'LiDe Måleri AB invändig målning och väggfinish',
    },
    {
      url: '/gallery/gallery-3.jpg',
      alt: 'LiDe Måleri AB tak och snickerimålning',
    },
    {
      url: '/gallery/gallery-4.jpg',
      alt: 'LiDe Måleri AB mönstertapetsering och fondvägg',
    },
    {
      url: '/gallery/gallery-5.jpg',
      alt: 'LiDe Måleri AB detaljarbete och snickerifinish',
    },
    {
      url: '/gallery/gallery-6.jpg',
      alt: 'LiDe Måleri AB färdigställt måleriprojekt',
    },
  ],

  cta: {
    banner: {
      url: '/hero-main.webp',
      alt: 'LiDe Måleri AB måleriprojekt',
    },
    midSection: {
      url: '/hero-main.webp',
      alt: 'LiDe Måleri arbetsplats Dalarna',
    },
  },

  about: {
    hero: {
      url: '/about-us.jpg',
      alt: 'LiDe Måleri AB verksamhet och måleriarbete i Dalarna',
    },
    teamMember: {
      url: '/logo.png',
      alt: 'Teammedlem LiDe Måleri AB',
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
        alt: 'Fasadmålning villa i Dalarna',
      },
      title: 'Fasadmålning & Träskydd Villa',
      category: 'Fasad',
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
        alt: 'Tak- och väggmålning Dalarna',
      },
      title: 'Tak, Väggar & Snickerier',
      category: 'Måleri',
    },
    {
      image: {
        url: '/gallery/gallery-4.jpg',
        alt: 'Mönstertapetsering och spackling',
      },
      title: 'Mönsterpassad Tapetsering',
      category: 'Tapetsering',
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
        alt: 'Helhetsentreprenad måleri Dalarna',
      },
      title: 'Totalentreprenad Måleri',
      category: 'Helhetsprojekt',
    },
  ],
};

export default images;
