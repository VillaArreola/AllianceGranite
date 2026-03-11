Contexto para la IA: Migración a Astro (Project: Alliance Granite)
Contexto del Proyecto:
Migración de una landing page básica (Hostinger Builder) a Astro 4.x/5.x. El objetivo es mejorar el rendimiento (Core Web Vitals) y el SEO, manteniendo el posicionamiento actual.

Stack Tecnológico:

Framework: Astro (Static Site Generation - SSG).

Estilos: Tailwind CSS.

Iconos: Lucide-React o Phosphor Icons.

Deployment: Vercel/Netlify.

Directrices de Desarrollo:

Componentización: Divide la landing en componentes reutilizables (Hero.astro, Services.astro, Reviews.astro, ContactForm.astro).

SEO: Extrae y mantén los Meta Tags, Títulos y Alt text de las imágenes de la versión actual. Las URLs deben ser idénticas.

Optimización de Imágenes: Usa el componente <Image /> de Astro para procesar las fotos de granito y cuarzo (WebP/Avif).

Google Reviews (Manual-Pro): No usaremos API paga. Crea un archivo src/data/reviews.json donde pegaremos el texto de las reseñas. El componente Reviews.astro debe leer de este JSON y renderizar "Review Cards" estilizadas con Tailwind.

Diseño: Mantén la esencia actual pero aplica un "refresh" moderno (mejores espaciados, tipografía legible y botones de llamada a la acción claros).

Instrucciones Inmediatas:
Analiza el código/imágenes que te proporcionaré de https://www.alliancegranitequartz.com/ y genera la estructura de carpetas y el componente Layout.astro base.


