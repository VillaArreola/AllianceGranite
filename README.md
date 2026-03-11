# Alliance Granite & Quartz

Client project — business website for **Alliance Granite & Quartz**, a premium countertop company specializing in granite, quartz, and marble surfaces for kitchens and homes.

🌐 [alliancegranitequartz.com](https://www.alliancegranitequartz.com)

---

## Tech Stack

- [Astro](https://astro.build) v6
- [Tailwind CSS](https://tailwindcss.com) v4
- TypeScript

## Highlights

- Fully static site with zero JS by default
- SEO-ready: structured data (JSON-LD), Open Graph, canonical tags
- Local assets only — no external image dependencies
- Component-based architecture (Navbar, Hero, About, Services, Reviews, Location, Footer)
- Mobile responsive layout

## Project Structure

```
public/
  images/          # Local images (hero, gallery, logo)
src/
  components/
    Navbar.astro
    Footer.astro
    sections/
      Hero.astro
      About.astro
      Services.astro
      Reviews.astro
      ContactForm.astro   # Location + map
  data/
    site.ts        # Site config, contact info, social links
    reviews.json   # Customer reviews data
  layouts/
    Layout.astro  
  pages/
    index.astro
  styles/
    global.css
```


