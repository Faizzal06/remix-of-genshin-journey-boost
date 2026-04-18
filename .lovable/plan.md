
# Genshin Impact Joki Service Landing Page

## Overview
A clean, minimalist landing page for a Genshin Impact account boosting service with light theme, Inter font, and #1978E5 as the primary accent color.

## Pages & Sections

### Single-Page Layout
1. **Navbar** — Logo/brand name, nav links (Services, Testimonials, Contact), and a "Get Started" CTA button
2. **Hero Section** — Bold headline, subtitle describing the service, CTA button, and a decorative illustration/gradient element
3. **Services Grid** — 4 cards in a responsive grid:
   - Exploration assistance
   - Daily missions
   - Character builds
   - Endgame content (Spiral Abyss, etc.)
   - Each card: icon, title, description, pricing, and a "Book Now" button
4. **Testimonials Carousel** — Customer reviews with name, avatar, star rating, and review text; auto-rotating with manual controls
5. **CTA Banner** — Mid-page call-to-action section encouraging users to get started
6. **Footer** — Contact info (WhatsApp/Discord/email), social links, copyright

## Design Details
- **Colors**: Primary #1978E5, light backgrounds, dark text
- **Font**: Inter (Google Fonts) for all text
- **Border radius**: 8px on cards, buttons, inputs
- **Animations**: Subtle fade-in on scroll for sections, smooth carousel transitions
- **Responsive**: Mobile-first, hamburger menu on small screens

## Components to Build
- `Navbar` — sticky top nav with mobile menu
- `HeroSection` — intro with CTA
- `ServiceCard` — reusable card for each service
- `ServicesSection` — grid of ServiceCards
- `TestimonialCarousel` — rotating testimonials
- `CTABanner` — conversion-focused section
- `Footer` — contact and links

## Technical Notes
- Update CSS variables to match the color scheme (#1978E5 as primary)
- Add Inter font via Google Fonts in index.html
- All content on a single page with smooth scroll navigation
