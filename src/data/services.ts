export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceItem {
  slug: string;
  title: string;
  shortDescription: string;
  heroText: string;
  detailedDescription: string;
  heroImage: string;
  image: string;
  href: string;
  tag?: string;
  badge?: string;
  highlights?: string[];
  sections?: Array<{
    heading?: string;
    text?: string;
    image?: string;
    bullets?: string[];
    subsections?: Array<{
      subheading: string;
      text: string;
    }>;
  }>;
  faq?: FAQItem[];
  iconName?: string;
  features?: string[];
  seoTitle?: string;
  seoDescription?: string;
}

export const services: ServiceItem[] = [
  {
    slug: 'invandigt-maleri',
    title: 'Invändigt Måleri',
    shortDescription: 'Noggrann målning av väggar, tak, lister och dörrar samt underarbete med spackling och slipning för en perfekt och slät yta.',
    heroText: 'Skapa trivsel och nytt liv i hemmet med professionellt inomhusmåleri i Dalarna med omnejd.',
    detailedDescription: `Vill du förnya vardagsrummet, sovrummet eller hela bostaden med nya kulörer? LiDe Måleri AB utför alla typer av invändiga måleriarbeten med stor noggrannhet och yrkesstolthet.

Vi lägger största vikt vid ett gediget underarbete – spackling, slipning och grundmålning – vilket är hemligheten bakom en jämn och hållbar slutfinish. Som privatperson nyttjar du 30 % ROT-avdrag direkt på fakturan.`,
    heroImage: '/gallery/gallery-2.jpg',
    image: '/gallery/gallery-2.jpg',
    href: '/tjanster#invandigt-maleri',
    tag: 'Invändigt Måleri',
    badge: 'ROT-avdrag 30%',
    highlights: [
      'Målning av väggar och tak',
      'Målning av lister, dörrfoder och fönster',
      'Spackling, bredspackling och slipning',
      'Färgrådgivning och personliga kulörval',
    ],
    faq: [
      {
        question: 'Hur lång tid tar ett invändigt måleriprojekt?',
        answer: 'Ett enskilt rum tar oftast 2–4 arbetsdagar inklusive torktider för spackel och färg. Vid målning av en hel villa eller lägenhet gör vi en tydlig tidsplan tillsammans.',
      },
      {
        question: 'Flyttar och täcker ni möbler innan målning?',
        answer: 'Ja, vi skyddar golv och möbler noggrant med täckpapp och plast innan arbetet påbörjas för att säkerställa ett rent och skadefritt resultat.',
      },
    ],
  },
  {
    slug: 'fasadmalning',
    title: 'Utvändigt Måleri & Fasad',
    shortDescription: 'Hållbar fasadmålning, fönstermålning och trävård som skyddar din fastighet mot det nordiska klimatet i många år framöver.',
    heroText: 'Ge huset ett långvarigt skydd och ett vackert lyft med professionell fasadmålning i Dalarna.',
    detailedDescription: `En väl underhållen fasad skyddar fastigheten mot fukt, röta och väderpåverkan. LiDe Måleri AB utför kompletta utvändiga måleriarbeten på villor, fritidshus, garage och kommersiella fastigheter i Dalarna.

Vi börjar alltid med noggrann fasadtvätt, skrapning av lös färg och grundoljning innan fasaden färdigstryks med premiumfärg anpassad för vårt klimat.`,
    heroImage: '/gallery/gallery-1.jpg',
    image: '/gallery/gallery-1.jpg',
    href: '/tjanster#fasadmalning',
    tag: 'Utvändigt Måleri',
    badge: 'Kvalitetsfärg',
    highlights: [
      'Fasadmålning av träfasad och puts',
      'Fönstermålning och renovering av vindskivor',
      'Fasadtvätt, algbehandling och skrapning',
      'Målning av garage, attefallshus och staket',
    ],
    faq: [
      {
        question: 'När på året är det bäst att måla fasaden utomhus?',
        answer: 'Den bästa perioden för fasadmålning i Sverige är från maj till september när dygnet är torrt och temperaturen är över 8–10 grader.',
      },
      {
        question: 'Hur ofta behöver en träfasad målas om?',
        answer: 'Beroende på husets läge, väderstreck och färgtyp håller en fackmannamässigt målad fasad vanligtvis mellan 10 och 15 år.',
      },
    ],
  },
  {
    slug: 'tapetsering',
    title: 'Tapetsering & Spackling',
    shortDescription: 'Skickligt hantverk med perfekt mönsterpassning, skarvfria väggar och armeringsduk för både klassiska och moderna designtapeter.',
    heroText: 'Sätt personlig prägel på dina rum med exakt tapetsering och högklassig ytfinish i Dalarna.',
    detailedDescription: `Att tapetsera kräver noggrannhet och rätt teknik för att skarvar och mönster ska stämma perfekt. LiDe Måleri AB har lång erfarenhet av att sätta upp allt från mönstrade designtapeter och fototapeter till armeringsduk och renoveringstapeter.

Vi säkerställer att underlaget är fullständigt slätt innan tapetsering så att slutresultatet blir helt felfritt.`,
    heroImage: '/gallery/gallery-4.jpg',
    image: '/gallery/gallery-4.jpg',
    href: '/tjanster#tapetsering',
    tag: 'Tapetsering',
    badge: 'Hög Precision',
    highlights: [
      'Mönsterpassad tapetsering och fondväggar',
      'Uppsättning av armeringsduk och easy cover',
      'Bredspackling och grundbehandling',
      'Rådgivning kring materialval och limtyp',
    ],
    faq: [
      {
        question: 'Måste gamla tapeter tas bort före omtapetsering?',
        answer: 'Om den gamla tapeten sitter fast ordentligt räcker det oftast med att skära bort lösa skarvar och spackla slätt. Sitter den löst rekommenderar vi att riva eller bredspackla med armeringsduk.',
      },
    ],
  },
  {
    slug: 'totalentreprenad',
    title: 'Totalentreprenad Måleri',
    shortDescription: 'Ett samlat helhetsansvar för större måleriprojekt vid nybyggnationer, renoveringar och uppdrag för bostadsrättsföreningar.',
    heroText: 'Bekymmersfritt måleri – en enda kontaktperson för alla dina måleribehov i Dalarna.',
    detailedDescription: `Vid större ombyggnader, nyproduktion eller renovering av flerbostadshus tar LiDe Måleri AB det fulla ansvaret för målerientreprenaden.

Du får en dedikerad personlig kontaktperson genom hela projektet. Vi säkerställer tydliga tidsplaner, fasta priser och löpande avstämningar så att du kan känna dig helt trygg.`,
    heroImage: '/gallery/gallery-6.jpg',
    image: '/gallery/gallery-6.jpg',
    href: '/tjanster#totalentreprenad',
    tag: 'Totalentreprenad',
    badge: '100% Trygghet',
    highlights: [
      'En dedikerad kontaktperson & projektledare',
      'Måleri vid nybyggnation och tillbyggnad',
      'Större projekt för BRF och fastighetsägare',
      'Tydlig tidsplan och fast offert',
    ],
    faq: [
      {
        question: 'Vad innebär totalentreprenad inom måleri?',
        answer: 'Vi tar helhetsansvaret för planering, materialleveranser, underarbete och slutbehandling så att du slipper samordna olika delmoment själv.',
      },
      {
        question: 'Utför ni måleriarbeten åt företag och bostadsrättsföreningar?',
        answer: 'Ja, vi utför regelbundet uppdrag för företag, BRF:er och fastighetsägare i Falun, Borlänge och övriga Dalarna.',
      },
    ],
  },
];

export default services;
