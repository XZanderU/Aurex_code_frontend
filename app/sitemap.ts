
import type { MetadataRoute } from "next";

const baseUrl = "https://aurexcode.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/servicios/automatizacion-onboarding",
    "/servicios/facturacion-dian",
    "/servicios/pagos-instantaneos",
    "/servicios/software-asambleas-propiedad-horizontal",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified:
      route === "" ? new Date("2024-05-20") : new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
