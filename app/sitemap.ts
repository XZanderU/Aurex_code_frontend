import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://aurexcode.com",
      lastModified: new Date(),
    },
  ];
}
