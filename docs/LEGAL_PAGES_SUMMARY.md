# Legal and Compliance Pages - Summary

Created: January 31, 2026

## Pages Created

### 1. Terms of Service (`/terms`)
**Location:** `/src/app/terms/page.tsx`

**Key Sections:**
- Acceptance of Terms
- Service Description
- **Prohibited Content and Activities** (highlighted section)
  - Sexually Explicit Material - ZERO TOLERANCE
  - Child Exploitation - ZERO TOLERANCE
  - Illegal Activities
  - Violence and Harm
  - Privacy Violations
  - Malicious Use
- Acceptable Use
- User Responsibilities
- Content Monitoring and Enforcement
- Disclaimer of Warranties
- Limitation of Liability
- Data Retention and Privacy
- Modifications to Terms
- Termination
- Governing Law
- Contact Information

### 2. Privacy Policy (`/privacy`)
**Location:** `/src/app/privacy/page.tsx`

**Key Sections:**
- Introduction
- Data We Collect
  - Images You Upload
  - Analysis Results
  - Technical Information
- How We Use Your Information
- Content Moderation and Safety (highlighted)
- Data Sharing and Disclosure
- Data Security
- Data Retention
- Cookies and Tracking
- Your Rights
- Children's Privacy
- International Data Transfers
- Changes to Privacy Policy
- Contact Information

### 3. Acceptable Use Policy (`/acceptable-use`)
**Location:** `/src/app/acceptable-use/page.tsx`

**Key Sections:**
- Overview
- **Strictly Prohibited Content** (prominent red section)
  1. Sexually Explicit Material - ZERO TOLERANCE
  2. Child Exploitation Material - ZERO TOLERANCE
  3. Violent and Harmful Content
  4. Illegal Surveillance and Stalking
  5. Privacy Violations
  6. Other Prohibited Content
- **Acceptable Uses** (green section)
  - Research and Education
  - OSINT Investigations
  - Personal Use
  - Journalism and Fact-Checking
  - Historical Research
  - Environmental Monitoring
- User Responsibilities
- Enforcement and Consequences
- Content Moderation
- Reporting Violations
- Changes to Policy

## Design Features

### Visual Hierarchy
- **Red sections** for prohibited content (high visibility)
- **Green sections** for acceptable uses (positive reinforcement)
- **Amber sections** for warnings and enforcement
- Icons from lucide-react for visual clarity

### Prominent Warnings
- Sexually explicit material prohibition appears in:
  1. Red highlighted box in Terms of Service
  2. Dedicated section in Acceptable Use Policy
  3. Warning banner on main upload interface
  4. Content moderation section in Privacy Policy

### Cross-linking
- All three pages link to each other
- Footer navigation on all pages
- Links from main "How It Works" page
- Warning banner on upload interface links to Acceptable Use Policy

## Integration Points

### 1. Main Application
- Warning banner added to ImageUploader component
- Appears when no image is selected
- Links to Acceptable Use Policy

### 2. How It Works Page
- Footer updated with legal page links

### 3. Sitemap
- All three legal pages added to sitemap.ts
- Priority: 0.5
- Change frequency: monthly

## Legal Compliance Features

### Content Moderation
- Automated scanning mentioned in Privacy Policy
- Clear consequences outlined in all documents
- Reporting mechanisms described

### User Responsibilities
- Clear acceptance of terms
- Explicit acknowledgment required
- Age restrictions (18+)

### Enforcement
- Immediate termination for violations
- Law enforcement reporting for illegal content
- NCMEC reporting for child exploitation

## Accessibility
- Clean, readable typography
- Clear section headings
- Consistent navigation
- Mobile-responsive design
- High contrast for warnings

## SEO Optimization
- Proper metadata for each page
- Descriptive titles
- Semantic HTML structure
- Sitemap inclusion

## Next Steps (Recommendations)

1. **Legal Review**: Have these documents reviewed by a legal professional
2. **Content Moderation**: Implement actual content scanning (e.g., Google Cloud Vision API moderation)
3. **Reporting System**: Add a formal reporting mechanism for violations
4. **Age Verification**: Consider adding age confirmation dialog
5. **Terms Acceptance**: Add checkbox requiring users to accept terms before first upload
6. **Contact Information**: Add actual contact email/form for legal inquiries
7. **Jurisdiction**: Specify governing law jurisdiction based on business location
8. **GDPR Compliance**: Add specific GDPR sections if serving EU users
9. **CCPA Compliance**: Add California privacy rights if serving CA users
10. **Cookie Consent**: Implement cookie consent banner if using tracking cookies

## Files Modified/Created

### Created:
- `/src/app/terms/page.tsx`
- `/src/app/privacy/page.tsx`
- `/src/app/acceptable-use/page.tsx`

### Modified:
- `/src/app/how-it-works/page.tsx` (footer links)
- `/src/components/ImageUploader.jsx` (warning banner)
- `/src/app/sitemap.ts` (added legal pages)

## Testing Checklist

- [ ] Visit `/terms` - page loads correctly
- [ ] Visit `/privacy` - page loads correctly
- [ ] Visit `/acceptable-use` - page loads correctly
- [ ] All internal links work
- [ ] Footer links appear on all pages
- [ ] Warning banner appears on main page
- [ ] Sitemap includes all pages
- [ ] Mobile responsive on all pages
- [ ] Scrolling works on all pages
- [ ] Cross-links between legal pages work
