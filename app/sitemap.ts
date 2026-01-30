import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://aurexcode.com";

  return [
    {
      url: baseUrl,
      // Usamos una fecha fija o la fecha de última actualización real del código
      lastModified: new Date("2024-05-20"), 
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}