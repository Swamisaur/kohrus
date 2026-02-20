# Kohrus Platform Routes

All routes are now linked and functional. Here's the complete route structure:

## Buyer (Investor) Flow

1. **Landing Page** - `/`
   - CTAs: Sign Up, Browse, Tryout Form
   - Links to: `/signup`, `/browse`, `/tryout`

2. **Sign Up** - `/signup`
   - Links to: `/kyc` (after signup)

3. **KYC Verification** - `/kyc`
   - Links to: `/wallet` (after verification)

4. **UPI/Wallet Setup** - `/wallet`
   - Links to: `/browse` (after setup)

5. **Browse Assets** - `/browse`
   - Links to: `/asset/[id]` (individual assets)

6. **Asset Detail** - `/asset/[id]`
   - Links to: `/checkout` (invest button)

7. **Investment Checkout** - `/checkout`
   - Links to: `/portfolio` (after investment)

8. **Portfolio Dashboard** - `/portfolio`
   - Links to: `/browse` (browse more button)

9. **Secondary Market/Trading** - `/trading`

10. **Royalty Collection** - `/royalties`

11. **Withdrawal** - `/withdraw`

12. **Profile/Settings** - `/profile`

## Seller (Artist) Flow

1. **Artist Sign Up** - `/artist/signup`
   - Links to: `/artist/profile` (after signup)

2. **Artist Profile** - `/artist/profile`
   - Links to: `/artist/verify` (after profile creation)

3. **Artist Verification** - `/artist/verify`
   - Links to: `/artist/bank` (after verification)

4. **Bank Setup** - `/artist/bank`
   - Links to: `/artist/upload` (after bank setup)

5. **Asset Upload** - `/artist/upload`
   - Links to: `/artist/revenue` (after upload)

6. **Revenue Streams Documentation** - `/artist/revenue`
   - Links to: `/artist/valuation` (after documentation)

7. **Valuation** - `/artist/valuation`
   - Links to: `/artist/iso-setup` (after valuation)

8. **ISO Setup** - `/artist/iso-setup`
   - Links to: `/artist/iso-launch` (after setup)

9. **ISO Launch/Marketing** - `/artist/iso-launch`
   - Links to: `/artist/dashboard` (after launch)

10. **Capital Raising Dashboard** - `/artist/dashboard`
    - Links to: `/artist/contract` (after ISO success)

11. **Post-ISO Contract** - `/artist/contract`
    - Links to: `/artist/performance` (after contract)

12. **Performance Tracking** - `/artist/performance`

13. **Royalty Distribution** - `/artist/royalties`

## Platform Owner Flow

1. **Owner Login** - `/owner/login`
   - Links to: `/owner/dashboard` (after login)

2. **Owner Dashboard** - `/owner/dashboard`
   - Links to: `/owner/applications`, `/owner/artists`, `/owner/portfolio`

3. **Pending Applications** - `/owner/applications`
   - Links to: `/owner/applications/[id]` (review individual applications)
   - Links back to: `/owner/dashboard`

4. **Application Review** - `/owner/applications/[id]`
   - Links to: `/owner/artists` (after approval)
   - Links back to: `/owner/applications`

5. **Approved Artists** - `/owner/artists`
   - Links to: `/owner/artists/[id]` (view artist details)
   - Links to: `/owner/portfolio/new` (create portfolio listing)
   - Links back to: `/owner/dashboard`

6. **Artist Detail** - `/owner/artists/[id]`
   - Links back to: `/owner/artists`
   - Links to: `/owner/portfolio/new` (create portfolio listing)

7. **Portfolio Management** - `/owner/portfolio`
   - Links to: `/owner/portfolio/new` (create new listing)
   - Links to: `/owner/portfolio/[id]/edit` (edit listing)
   - Links to: `/asset/[id]` (view published listing)
   - Links back to: `/owner/dashboard`

8. **Create Portfolio Listing** - `/owner/portfolio/new`
   - Links back to: `/owner/portfolio`

9. **Edit Portfolio Listing** - `/owner/portfolio/[id]/edit`
   - Links back to: `/owner/portfolio`

## Public Pages

- **Tryout Form** - `/tryout`
  - Accessible without login
  - Links back to `/` (cancel button)
  - Form submission creates pending application for Platform Owner review

## Navigation

All pages include:
- Navigation bar with links to: Home, Browse, Portfolio, Trading
- Footer with platform links
- Consistent routing throughout

## CTA Flow Summary

**Landing Page CTAs:**
- "Start Investing" → `/signup`
- "I'm an Artist" → `/artist/signup`
- "Tryout for your song(s)" → `/tryout`
- "Create Free Account" → `/signup`
- "Learn More" → `/browse`
- "View All" → `/browse`

**Buyer Flow:**
- Sign Up → KYC → Wallet → Browse → Asset Detail → Checkout → Portfolio

**Seller Flow:**
- Artist Sign Up → Profile → Verification → Platform Approval → Bank → Upload → Revenue → Valuation → ISO Setup → ISO Launch → Dashboard → Contract → Performance → Royalties

**Platform Owner Flow:**
- Owner Login → Dashboard → Review Applications → Approve/Reject → Manage Artists → Create Portfolio → Publish Listings

**Tryout Form Integration:**
- Artist submits Tryout Form → Application appears in Owner Dashboard → Owner reviews → Approves → Artist can proceed with setup

All flows are now complete and linked!
