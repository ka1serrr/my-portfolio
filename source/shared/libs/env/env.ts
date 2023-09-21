export const ENV = Object.freeze({
  IS_DEV: process.env["NODE_ENV"] === "development",
  URL: process.env["LOCAL_URL"] || "http://localhost:3000/", // TODO: change URL on prod
});
