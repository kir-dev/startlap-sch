import { Link as linkEntity } from "backend/src/links/entities/link.entity";

export const DummyLink: linkEntity = {
  id: "asdasd",
  url: "https://kir-dev.hu",
  title: "Kir-Dev",
  slug: "example-link",
  description:
    "A Schönherz kollégium webfejlesztő körének, azaz a Kir-Dev kör blog és portfolió weboldala.",
  iconUrl: "https://kir-dev.hu/favicon.png",
  keywords: ["example", "link"],
};
export const DummyLink2: linkEntity = {
  id: "asdasd",
  url: "https://google.com",
  title: "Google",
  slug: "example-link",
  description:
    "A Google amerikai, tőzsdén bejegyzett részvénytársaság, aminek a nevéhez fűződik a Google keresőmotor kifejlesztése és üzemeltetése.",
  iconUrl: "https://www.google.com/favicon.ico",
  keywords: ["example", "link"],
};

export const DummyLinks: linkEntity[] = [
  {
    id: "asdasd",
    url: "https://kir-dev.hu",
    title: "Kir-Dev",
    slug: "example-link",
    description: "A kollégium webfejlesztő köre.",
    iconUrl: "https://kir-dev.hu/favicon.png",
    keywords: ["example", "link"],
  },
  {
    id: "asdasd",
    url: "https://vik.hk",
    title: "VIK Hallgatói Képviselet",
    slug: "example-link",
    description: "A kar hallgatói képviselete.",
    iconUrl:
      "https://vik.hk/wp-content/uploads/2022/07/cropped-cropped-cropped-BMEVIK_HK_logo-new.png",
    keywords: ["example", "link"],
  },
  {
    id: "asdasd",
    url: "https://tanulo.sch.bme.hu",
    title: "TanuloSCH",
    slug: "example-link",
    description: "Foglalj magadnak tanulószobát!",
    iconUrl: "https://tanulo.sch.bme.hu/images/favicon.png",
    keywords: ["example", "link"],
  },
  {
    id: "asdasd",
    url: "https://schpincer.sch.bme.hu",
    title: "SCHPincér",
    slug: "example-link",
    description: "Rendelj kaját kolisként!",
    iconUrl: "https://schpincer.sch.bme.hu/favicon.ico",
    keywords: ["example", "link"],
  },
  {
    id: "asdasd",
    url: "https://www.vik.bme.hu/",
    title: "BME VIK",
    slug: "example-link",
    description: "Kari honlap.",
    iconUrl:
      "https://yt3.googleusercontent.com/ytc/AOPolaTFrLcmLW3rd2WmpH_RfL1iA73sKvp5kF1q_kee=s900-c-k-c0x00ffffff-no-rj",
    keywords: ["example", "link"],
  },
  {
    id: "asdasd",
    url: "https://konzi.kir-dev.hu/",
    title: "KonziSite",
    slug: "example-link",
    description: "Tájékozódj a koliban tartott konzultációkról!",
    iconUrl: "https://konzi.kir-dev.hu/favicon-32x32.png",
    keywords: ["example", "link"],
  },
  {
    id: "asdasd",
    url: "https://bazsalikom.sch.bme.hu/",
    title: "Bazsalikom",
    slug: "example-link",
    description:
      "Eredetileg Dél-Ázsiából, Perzsiából, Afrikából került Európába, és itt is kedvelt, egynyáriként termesztett kerti, cserép- és fűszernövény lett. Jellegzetes illatú és dús aromájú, színe zöld, virága pedig fehér színű.",
    iconUrl:
      "https://cdn.create.vista.com/api/media/small/312305004/stock-photo-fresh-green-basil-growing-flowerpot",
    keywords: ["example", "link"],
  },
];
