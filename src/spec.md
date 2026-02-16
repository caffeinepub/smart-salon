# Specification

## Summary
**Goal:** Integrate the provided Smart Salon description, privacy policy link, screenshots, and app icon into the Smart Salon landing page for improved branding, content clarity, and presentation.

**Planned changes:**
- Replace the About section paragraph with the user-provided English description verbatim, keeping the heading “All in One Salon Booking App”.
- Update the footer “Privacy Policy” link to the provided GitHub raw URL, opening in a new tab with `target="_blank"` and `rel="noopener noreferrer"`.
- Replace the App Screens placeholder cards with the 9 uploaded screenshots as static frontend assets, shown in consistent rounded phone-style frames with responsive layout (1–5 across depending on viewport).
- Add the provided app icon as a small brand mark in the hero area and use it for the site favicon/app icon via static public assets.
- Add an HTML `<meta name="description">` derived from the provided description text (may be shortened, but faithful and in English).
- Add a short deployment/domain guidance document describing free Internet Computer hosting (default canister URL) and how to connect a custom domain later.

**User-visible outcome:** The landing page shows the full Smart Salon description, working Privacy Policy link, real app screenshots in a polished responsive gallery, and updated branding (hero mark + favicon), plus a simple doc explaining how to deploy and use a free URL with optional custom domain later.
