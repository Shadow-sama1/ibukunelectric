import type { MetadataRoute } from "next";

const routes = [
  "",
  "/packages",
  "/services",
  "/portfolio",
  "/team",
  "/vacancies",
  "/contact",
  "/calculator",
  "/cart",
  "/faq",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ibukun-electric.example.com";

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
