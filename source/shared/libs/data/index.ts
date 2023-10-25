import { UFC, AVATAR, M8STORE, HOMEET, SUSTAINABLE_EMOTIONS } from "@/public";
export { UFC, AVATAR, M8STORE, HOMEET, SUSTAINABLE_EMOTIONS };

export const links = [
  {
    name: "Начало",
    hash: "#home",
  },
  {
    name: "Инфо",
    hash: "#about",
  },
  {
    name: "Проекты",
    hash: "#projects",
  },
  {
    name: "Скилы",
    hash: "#skills",
  },
  {
    name: "Опыт",
    hash: "#experience",
  },
  {
    name: "Контакты",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "ufcfightpass.ru/Zarya Digital (Бизнесс в стиле.Ru)",
    description:
      "Работаю на этом проекте Front-end разработчиком с ноябре 2022 года. Сайт для покупки ufcfightpass для жителей РФ",
    tags: ["React", "JavaScript", "Scss", "Redux", "RTK"],
    image: UFC,
  },
  {
    title: "Homeet/Бизнес в стиле.Ru",
    description:
      "Работал на этом проекте с июля по сентябрь 2023 года. Сервис для поиска соседей и/или квартир для сотрудников и студентов НИУ ВШЭ.",
    tags: ["React", "TypeScript", "CSS Modules", "Redux", "RTK"],
    image: HOMEET,
  },
  {
    title: "m8store (в разработке)/ISourcing",
    description:
      "Работал на этом проекте с июля 2023 года. Маркетплейс для местных брендов одежды. Также работал над созданием административной панели",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwindcss",
      "Styled-components",
      "Redux",
      "RTK",
      "RTK-Query",
      "Framer Motion",
    ],
    image: M8STORE,
  },
  {
    title: "Sustainable Emotions/Zarya Digital",
    description:
      'Работал над этим проектом в октябре. Сайт для дубайской выставки DIFC Art Nights. Сайт для расшировки снов при помощи MidJourneyApi. Присутствуют два режима: стандартный и по "корану"',
    tags: ["React", "TypeScript", "Tailwindcss", "Redux", "RTK", "RTK-Query", "Framer Motion"],
    image: SUSTAINABLE_EMOTIONS,
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwindcss",
  "Prisma",
  "Redux",
  "Python",
  "Framer Motion",
  "Styled-Components",
  "SCSS",
] as const;
