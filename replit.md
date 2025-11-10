# Selective Insurance - Liferay DXP Fragment Collection

## Project Overview

This is a comprehensive Liferay DXP fragment collection for Selective Insurance's digital experience. The project contains 9 fully-styled, configurable UI fragments that follow Selective's brand identity and support their business goals of customer attraction, revenue growth, and business user self-service. Includes both public-facing website fragments and a secure agent dashboard.

**Brand Identity:**
- Primary Color: Black (#000000)
- Accent Color: Yellow (#FFCF31)
- Tagline: "Be Uniquely Insured℠"
- Logo Feature: Three dots above the "V" representing employee-agent-customer collaboration

## Project Structure

```
selective-insurance-fragments/
├── src/
│   └── selective-public-site/          # Main Liferay fragment collection
│       ├── collection.json              # Collection metadata
│       ├── hero-banner/                 # Hero with agent finder
│       ├── navigation/                  # Main nav + mobile menu
│       ├── product-cards/               # Business/Personal/Flood cards
│       ├── claims-center/               # Claims quick access
│       ├── myselective-feature/         # Account feature section
│       ├── blog-cards/                  # Article grid layout
│       ├── customer-reviews/            # Reviews display
│       ├── footer/                      # Site footer
│       └── agent-dashboard/             # Agent secure dashboard
├── preview/                             # Preview HTML & assets
├── README.md                            # Documentation
└── package.json                         # Project metadata
```

## Fragments

### 1. Navigation (navigation/)
- Sticky header with Selective branding
- Desktop menu with hover effects
- Mobile-responsive hamburger menu
- Utility links: Pay Bill, Report Claim, MySelective

### 2. Hero Banner (hero-banner/)
- Full-width hero with gradient background
- Configurable headline text
- Agent finder form with zip code and product selection
- Form validation and submission handling

### 3. Product Cards (product-cards/)
- Three-column responsive grid
- Business, Personal, and Flood insurance
- Hover animations with brand colors
- Configurable titles and descriptions

### 4. Claims Center (claims-center/)
- Dark background with yellow accents
- Primary and secondary CTA buttons
- 24/7 emergency contact info
- Click animations on buttons

### 5. MySelective Feature (myselective-feature/)
- Two-column image + text layout
- Configurable image position (left/right)
- Bullet point benefits list
- Call-to-action button

### 6. Blog Cards (blog-cards/)
- Responsive grid layout (1-4 columns)
- Featured images with category tags
- Excerpt text and read more links
- Hover effects on cards

### 7. Customer Reviews (customer-reviews/)
- Star rating display (configurable)
- Review count display
- Bordered card design
- Link to full reviews

### 8. Footer (footer/)
- Four-column layout
- Quick links organized by category
- Social media icons
- Copyright with dynamic year
- Legal links

### 9. Agent Dashboard (agent-dashboard/)
- **For secure agent experience**
- Dashboard header with welcome message and agent ID
- Quick stats cards: Active Policies, Pending Claims, New Leads, Upcoming Renewals
- Quick action buttons (New Quote, Find Client, View Policies, etc.)
- Recent activity feed with color-coded activity types
- Client search form with recent search suggestions
- Upcoming appointments list
- Fully responsive dashboard layout

## Configuration Features

All fragments include Liferay configuration options for business users:
- Editable text fields (headlines, descriptions, etc.)
- Image selectors for custom media
- Configurable links and URLs
- Toggle options for showing/hiding elements

## Technical Details

**Technologies:**
- HTML5 semantic markup
- CSS3 with Flexbox and Grid
- Vanilla JavaScript (Liferay compatible)
- FreeMarker template syntax for Liferay integration

**Features:**
- Fully responsive (mobile, tablet, desktop)
- Accessibility best practices
- Smooth animations and transitions
- Form validation
- Intersection Observer API for scroll animations
- LocalStorage not used (fragments are stateless)

## Import into Liferay DXP

1. Compress the `src/selective-public-site/` folder as a ZIP file
2. In Liferay DXP: Site Menu → Design → Fragments
3. Click "Import" and upload the ZIP file
4. Fragments will be available in the "Selective Public Site" collection
5. Drag and drop fragments onto pages in the page builder

## Local Preview

The preview server is running at: http://localhost:5000

To restart the preview:
```bash
npx http-server ./preview -p 5000 -c-1
```

## Deployment Notes

- These fragments are designed for the development/staging environment
- All placeholder images use via.placeholder.com (replace with real images in Liferay)
- Social media links are currently set to "#" (update with real URLs)
- Agent finder form submits to "/find-agent" (configure in Liferay backend)

## Business Goals Alignment

✅ **Attract Customers**: Eye-catching hero banner with agent finder, customer reviews display
✅ **Attract People (Recruitment)**: Careers link in navigation and footer
✅ **Support Business Objectives**: Product cards showcase all insurance lines, claims center for service
✅ **Enhance Revenue Growth**: Clear CTAs, easy agent finding, product information
✅ **Empower Business Users**: All fragments have configuration options for self-service content management

## Recent Changes

- **November 10, 2025**: Added Agent Dashboard fragment for secure agent experience
  - Quick stats, activity feed, client search, appointments
  - Responsive design with mobile, tablet, and desktop layouts
  - Interactive elements with hover states and click animations
  - Passed architect review for code quality and accessibility
- November 7, 2025: Initial fragment collection created with 8 public-facing fragments
  - Added accessibility improvements (ARIA attributes, form validation)
  - All fragments tested and previewed successfully
- Preview server configured and running on port 5000

## User Preferences

No specific user preferences recorded yet. This is the initial build based on Selective Insurance's brand guidelines and the reference Liferay structure.
