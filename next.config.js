/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "em-content.zobj.net",
      },
    ],
  },
  // i18n: { //TODO : сделать переключение языка.
  //   locales: ["en-US", "ru-RU"],
  //   defaultLocale: "ru-RU",
  //   domains: [
  //     {
  //       domain: `localhost`,
  //       defaultLocale: "ru-RU",
  //       http: true,
  //     },
  //     {
  //       domain: `localhost/en`,
  //       defaultLocale: "en-US",
  //       http: true,
  //     },
  //   ],
  // },
};

module.exports = nextConfig;
