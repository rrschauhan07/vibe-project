# Portfolio Website

A modern, elegant portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- ✨ **Modern Design**: Premium, elegant design with smooth animations
- 🎨 **Beautiful UI**: High contrast, beautiful whitespace, and refined color palette
- 📱 **Responsive**: Mobile-first responsive layout
- ⚡ **Performance**: Optimized with Next.js 14 App Router
- 🎭 **Animations**: Smooth transitions powered by Framer Motion
- ♿ **Accessible**: Built with accessibility best practices
- 🔍 **SEO Optimized**: Meta tags and social previews configured

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Font**: Inter (via Next.js Google Fonts)

## Project Structure

```
vibe-project/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Contact form API endpoint
│   ├── contact/
│   │   ├── page.tsx              # Contact page
│   │   └── metadata.ts          # Page-specific SEO metadata
│   ├── globals.css               # Global styles and Tailwind imports
│   ├── layout.tsx                # Root layout with metadata
│   └── page.tsx                  # Home page
├── components/
│   ├── Button.tsx                # Reusable button component
│   ├── ContactForm.tsx           # Contact form with validation
│   ├── Navbar.tsx                # Sticky navigation bar
│   └── ProjectCard.tsx           # Project showcase card
├── data/
│   └── projects.ts               # Example project data
├── types/
│   └── project.ts                # TypeScript types for projects
├── package.json
├── tailwind.config.ts            # Tailwind configuration
└── tsconfig.json
```

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build

Create an optimized production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Customization

### Update Personal Information

1. **Name and Tagline**: Edit `app/page.tsx` - update the hero section
2. **Bio/Introduction**: Edit the "About Me" section in `app/page.tsx`
3. **Contact Information**: 
   - Update email in `app/contact/page.tsx`
   - Update social links in `app/contact/page.tsx`

### Add Your Projects

Edit `data/projects.ts` to add your own projects. Each project should have:

```typescript
{
  id: string,
  title: string,
  description: string,
  image?: string,        // Optional: path to project image
  techStack: string[],   // Array of technologies used
  liveUrl?: string,      // Optional: link to live project
  githubUrl?: string,    // Optional: link to GitHub repo
}
```

### Customize Colors

Edit `tailwind.config.ts` to customize the color palette. The current theme uses:
- **Charcoal**: Deep grays for text and backgrounds
- **Electric**: Blue accents for highlights and CTAs

### SEO & Metadata

Update metadata in:
- `app/layout.tsx` - Global site metadata
- `app/contact/metadata.ts` - Contact page specific metadata

Update:
- Title
- Description
- Open Graph tags
- Twitter card tags
- Site URL

### Contact Form

The contact form API route is located at `app/api/contact/route.ts`. Currently, it logs submissions. To make it functional:

1. **Add Email Service**: Integrate with services like:
   - [Resend](https://resend.com)
   - [SendGrid](https://sendgrid.com)
   - [Nodemailer](https://nodemailer.com)

2. **Add Rate Limiting**: Prevent spam with services like:
   - [Upstash](https://upstash.com)
   - [Vercel Edge Config](https://vercel.com/docs/storage/edge-config)

3. **Add Validation**: Consider adding:
   - CAPTCHA verification
   - Honeypot fields
   - Server-side validation

Example with Resend:

```typescript
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

await resend.emails.send({
  from: 'contact@yourdomain.com',
  to: 'your-email@example.com',
  subject: `New contact from ${name}`,
  html: `<p>From: ${email}</p><p>${message}</p>`,
})
```

## Git & GitHub Setup

The project is already initialized with Git. To connect it to GitHub:

1. **Create a new repository on GitHub**:
   - Go to [GitHub](https://github.com) and create a new repository
   - Don't initialize it with a README (we already have one)

2. **Connect your local repository to GitHub**:
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Other Platforms

This Next.js app can be deployed on:
- Netlify
- AWS Amplify
- Any platform supporting Next.js

## Code Structure

### Components

All reusable components are in the `components/` directory:
- **Navbar**: Sticky navigation with smooth scroll effects
- **Button**: Versatile button component with multiple variants
- **ProjectCard**: Animated project showcase card
- **ContactForm**: Form with validation and error handling

### Pages

- **Home** (`app/page.tsx`): Hero, bio, and featured projects
- **Contact** (`app/contact/page.tsx`): Contact form and information

### Styling

- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Uses utility classes and component classes
- Responsive breakpoints: `sm:`, `md:`, `lg:`

## Best Practices Used

- ✅ Component-based architecture
- ✅ TypeScript for type safety
- ✅ Modular file structure
- ✅ SEO optimization
- ✅ Accessibility (focus states, semantic HTML)
- ✅ Performance optimization (Next.js Image, code splitting)
- ✅ Clean, commented code

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, please open an issue on GitHub or reach out through the contact form.

