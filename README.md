# Thailand Adventure 2026 - Trip Dashboard

A complete, password-protected travel itinerary dashboard for Shirin & Zeel's Thailand trip (April 3-17, 2026).

## Features

✅ **Full Itinerary** - Day-by-day breakdown with:
- Flight details (times, confirmations, seats)
- Hotel information (addresses, confirmation numbers)
- Activities and attractions
- Songkran Festival information

✅ **Password Protection** - Simple PIN-based authentication
- Password: `thailand2026`
- Stored in localStorage
- Redirects to login on unauthorized access

✅ **Complete Travel Guide** - Including:
- Cost breakdown ($5,772 total)
- All booking confirmations
- Weather information by city
- Day trips from Phuket
- Hidden gems and cafes in Bangkok
- Vegetarian/vegan dining options
- Useful Thai phrases
- Emergency contacts

## Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit `http://localhost:3000` and enter the password to view the dashboard.

## Deployment

### Vercel (Recommended)

1. Push to GitHub repository
2. Import project in Vercel dashboard
3. Deploy automatically
4. Visit `https://thailand-travel.vercel.app`

### Environment Variables

No environment variables required - password is hardcoded for simplicity.

For production, consider storing the password in an environment variable:

```javascript
// lib/auth.js
const PASSWORD = process.env.NEXT_PUBLIC_TRIP_PASSWORD || "thailand2026";
```

## Project Structure

```
/pages
  /api              - API routes (future)
  _app.js           - App component
  index.js          - Dashboard page
  login.js          - Login page

/styles
  globals.css       - Global styles
  Home.module.css   - Dashboard styles
  Login.module.css  - Login styles

/lib
  auth.js           - Authentication logic
  tripData.js       - Complete trip data

/public            - Static assets
```

## Trip Overview

- **Duration:** 14 Days (April 3-17, 2026)
- **Route:** Toronto → Abu Dhabi → Bangkok → Chiang Mai → Phuket → Bangkok → Abu Dhabi → Toronto
- **Total Cost:** CA $5,772
- **Travelers:** Shirin & Zeel
- **Main Booking:** Etihad Airways (8DCFFH)

## Key Information

- Main Booking Confirmation: **8DCFFH**
- Shirin's Etihad Confirmation: **607 2414513542**
- Zeel's Etihad Confirmation: **607 2414513541**
- Baggage Allowance: Etihad 23kg×2 bags each + carry-on
- Songkran Festival: April 13-15 in Phuket
- 🌊 **ESSENTIAL:** Waterproof phone case for Songkran!

## Technologies

- **Framework:** Next.js 14
- **Language:** JavaScript (React)
- **Styling:** CSS Modules
- **Hosting:** Vercel
- **Storage:** Browser localStorage (auth tokens)

## License

Private - For trip participants only

---

**Created:** February 2026  
**Last Updated:** February 18, 2026
