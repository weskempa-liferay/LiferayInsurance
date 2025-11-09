# LiferayInsurance - Liferay DXP Fragment Collection

A comprehensive fragment collection for LiferayInsurance's public website built for Liferay DXP platform.

## Overview

This project contains reusable UI fragments styled with LiferayInsurance's brand identity:
- **Brand Colors**: Black (#000000) and Yellow (#FFCF31)
- **Tagline**: "Be Uniquely Insured℠"
- **Focus**: Customer attraction, revenue growth, and business user self-service

## Project Structure

```
selective-insurance-fragments/
├── src/
│   └── selective-public-site/          # Main fragment collection
│       ├── collection.json              # Collection metadata
│       ├── hero-banner/                 # Hero section with agent finder
│       ├── navigation/                  # Main navigation and utility links
│       ├── product-cards/               # Insurance product showcases
│       ├── claims-center/               # Claims center quick access
│       ├── myselective-feature/         # MySelective account feature
│       ├── blog-cards/                  # Blog/article grid
│       ├── customer-reviews/            # Customer review display
│       └── footer/                      # Site footer
├── preview/                             # Preview HTML files
└── package.json
```

## Fragment Components

### 1. Hero Banner
- Agent finder with zip code search
- Product of interest selector (Home, Auto, Business, Flood)
- "Be Uniquely Insured" branding
- Configurable background image and text

### 2. Navigation
- Main menu links
- Utility links (Pay Bill, Report Claim, MySelective)
- Mobile-responsive design

### 3. Product Cards
- Three-card layout for Business, Personal, and Flood insurance
- Hover effects with brand colors
- Configurable links and descriptions

### 4. Claims Center
- Quick access links for claims guidance
- Claim lookup functionality
- Emergency contact information

### 5. MySelective Feature
- Image and text layout
- Highlights online account benefits
- Call-to-action button

### 6. Blog Cards
- Responsive grid layout
- Featured image, title, and excerpt
- Seasonal risk management content

### 7. Customer Reviews
- Rating display (4.5 stars)
- Review count
- Link to full reviews page

### 8. Footer
- Multi-column layout
- Company information
- Quick links and social media

## Installation & Import

### For Liferay DXP

1. Compress the `src/selective-public-site` folder as a ZIP file
2. In Liferay DXP, navigate to Site Menu → Design → Fragments
3. Click "Import" and upload the ZIP file
4. The collection will be available for use in page builder

### For Local Preview

```bash
npm run preview
```

This will start a local server at http://localhost:5000 to preview the fragments.

## Configuration

Each fragment includes a `fragment.json` configuration file with editable fields for business users:
- Text content
- Images and media
- Links and URLs
- Colors and styling options

This enables self-service content management without developer intervention.

## Brand Guidelines

- **Primary Color**: Black (#000000)
- **Accent Color**: Yellow (#FFCF31)
- **Typography**: Rounded sans-serif for modern, friendly feel
- **Logo Feature**: Three dots above the "V" symbolizing employee-agent-customer collaboration

## Support

For questions or issues, refer to the [Liferay Fragment Documentation](https://learn.liferay.com/w/dxp/site-building/creating-pages/page-fragments-and-widgets/using-fragments).
