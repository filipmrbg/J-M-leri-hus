import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const LOGO_ABSOLUTE_URL = 'https://media.fastdl.app/get?__sig=yZ5cy3oL9B-W22OrOvHRGA&__expires=1789300022&uri=https%3A%2F%2Fscontent.cdninstagram.com%2Fv%2Ft51.82787-19%2F588618765_17854509519579359_8698885052892276767_n.jpg%3F_nc_cat%3D105%26ccb%3D7-5%26_nc_sid%3Dbf7eb4%26efg%3DeyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy45NTguQzMifQ%253D%253D%26_nc_ohc%3Dc8574OWW004Q7kNvwH2fAxD%26_nc_oc%3DAdrEfKYIwxMKyMQVO-OSRXiho18alnC2xOSlXVs1fLvD5Hhfz3xpDlAuoGK4WauYPSQ%26_nc_zt%3D24%26_nc_ht%3Dscontent.cdninstagram.com%26_nc_gid%3DUJcRhg3colxYc8r3Mc-Cxw%26_nc_ss%3D7a2a8%26oh%3D00_AQIzPYryTk8d-St147_O2djExJ4bblv7bI4lq9wqQQyzfA%26oe%3D6AAC3F0D&filename=588618765_17854509519579359_8698885052892276767_n.jpg';

export function usePageTitle(title: string, description?: string) {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // 2. Update Description
    const defaultDesc = "J Måleri Åhus utför allt inom invändigt och utvändigt måleri, tapetsering, spackling och fasadmålning i Åhus och Skåne med omnejd för privatpersoner och företag. Kontakta oss för fri offert!";
    const activeDesc = description || defaultDesc;
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', activeDesc);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', activeDesc);
      document.head.appendChild(metaDescription);
    }

    // 3. Update Open Graph Title & Description
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute('content', activeDesc);

    // 4. Update Twitter Title & Description
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', title);

    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) twitterDescription.setAttribute('content', activeDesc);

    // 5. Update Canonical Link & Absolute URL
    const origin = typeof window !== 'undefined' && window.location.origin.startsWith('http')
      ? window.location.origin
      : 'https://jmaleri.se';
    const absoluteUrl = `${origin}${pathname === '/' ? '' : pathname}`;

    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', absoluteUrl);
    } else {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      canonical.setAttribute('href', absoluteUrl);
      document.head.appendChild(canonical);
    }

    // 6. Update Open Graph URL & Image
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', absoluteUrl);

    let ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute('content', LOGO_ABSOLUTE_URL);
    } else {
      ogImage = document.createElement('meta');
      ogImage.setAttribute('property', 'og:image');
      ogImage.setAttribute('content', LOGO_ABSOLUTE_URL);
      document.head.appendChild(ogImage);
    }
    let twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage) {
      twitterImage.setAttribute('content', LOGO_ABSOLUTE_URL);
    }

  }, [title, description, pathname]);
}
