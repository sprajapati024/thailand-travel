# Thailand Trip Dashboard - SPEC.md

## 1. Design Language

### 1.1 Style & Aesthetic
- **Theme:** Clean SaaS dashboard layout
- **Background:** Soft neutral light grey (`#F8FAFC` / `slate-50`)
- **Cards:** White (`#FFFFFF`) with subtle shadows (`shadow-sm`, `shadow-md` on hover)
- **Border Radius:** 8–12px
- **Typography:** Inter / SF Pro style, clean and minimal
- **Accent Colors:** 
  - Primary: Soft blue (`#3B82F6` / `blue-500`)
  - Success: Soft green (`#10B981` / `emerald-500`)
  - Secondary: Light purple (`#8B5CF6` / `violet-500`)
- **Whitespace:** Generous padding, airy layout
- **Mode:** Light mode only

### 1.2 Layout Structure

```
┌─────────────────────────────────────────────────────────┐
│  SIDEBAR (collapsible on mobile)  │  MAIN CONTENT     │
│  - Dashboard                       │  ┌──────────────┐  │
│  - Itinerary                       │  │ HEADER       │  │
│  - Packing                         │  │ Search/Print │  │
│  - Todo                            │  └──────────────┘  │
│  - Trip Details                    │  ┌──────────────┐  │
│  - Settings                        │  │ METRICS ROW │  │
│                                    │  └──────────────┘  │
│                                    │  ┌──────────────┐  │
│                                    │  │ CONTENT      │  │
│                                    │  │ (varies)     │  │
│                                    │  └──────────────┘  │
└─────────────────────────────────────────────────────────┘
```

### 1.3 Responsive Breakpoints
- **Mobile:** < 640px (sidebar becomes bottom nav or hamburger)
- **Tablet:** 640px - 1024px (sidebar collapsed by default)
- **Desktop:** > 1024px (full sidebar visible)

---

## 2. UI Components

### 2.1 Sidebar Navigation
- Vertical left sidebar
- Simple line icons (Lucide icons)
- Active state: blue accent background
- Hover: subtle background change
- Width: 240px desktop, 64px tablet, full-width drawer mobile

### 2.2 Header
- Search bar (decorative for v1)
- "Print Data" button
- "Summary" button (shows trip overview modal)
- Height: 64px

### 2.3 Metrics Summary Cards (4 cards)
| Card | Label | Value |
|------|-------|-------|
| 1 | Days Until Trip | Number (e.g., "43") |
| 2 | Items Packed | X/Y format with progress |
| 3 | Tasks Done | X/Y format with progress |
| 4 | Destinations | Count |

- Card style: White background, shadow-sm, rounded-xl
- Value: Large bold number
- Label: Small muted text below

### 2.4 Countdown Timer Section
- Prominent display: Days : Hours : Minutes : Seconds
- Subtitle: "Until April 3, 2026"
- Animation: Subtle pulse on seconds
- Background: Gradient or soft colored card

### 2.5 Packing List Section
- **Categories:** Collapsible sections
  - Clothes
  - Toiletries
  - Electronics
  - Documents
  - Misc
- **Item Row:** Checkbox + Item name + Category tag
- **Progress Bar:** Horizontal, soft green
- **Add Item:** Input field at bottom of each category
- **Persistence:** LocalStorage

### 2.6 Todo List Section
- **Item Row:** Checkbox + Task name + Priority badge (optional)
- **Priority Badges:** High (red), Medium (yellow), Low (grey)
- **Progress Bar:** Horizontal, soft blue
- **Add Task:** Input field at top
- **Persistence:** LocalStorage

### 2.7 Itinerary Timeline
- Horizontal scrollable timeline (mobile)
- Date markers with icons:
  - ✈️ Flight
  - 🏨 Hotel
  - 🗺️ Activity
  - 🚗 Transport
- Day cards below timeline showing details

### 2.8 Trip Details Section
- Flight info card
- Hotel booking cards
- Destination list with small arrow indicators
- Key contacts (placeholder for now)

---

## 3. Functionality Specification

### 3.1 Countdown Timer
- Target date: April 3, 2026 (flight departure)
- Updates every second
- Format: DD : HH : MM : SS
- Handles timezone (local time)

### 3.2 Packing List
- **CRUD Operations:**
  - Add item to category
  - Check/uncheck item
  - Delete item (swipe or delete button)
  - Edit item name
- **Data Structure:**
```json
{
  "packingList": {
    "clothes": [
      { "id": "1", "name": "T-shirts", "packed": false },
      { "id": "2", "name": "Shorts", "packed": true }
    ],
    "toiletries": [...],
    "electronics": [...],
    "documents": [...],
    "misc": [...]
  }
}
```
- **Storage:** LocalStorage key `thailand-packing-list`

### 3.3 Todo List
- **CRUD Operations:**
  - Add task
  - Check/uncheck
  - Delete task
  - Set priority (optional v2)
- **Data Structure:**
```json
{
  "todoList": [
    { "id": "1", "name": "Book airport transfer", "done": false, "priority": "high" },
    { "id": "2", "name": "Get travel insurance", "done": true, "priority": "medium" }
  ]
}
```
- **Storage:** LocalStorage key `thailand-todo-list`

### 3.4 Itinerary
- Static data for v1 (hardcoded dates/activities)
- Expandable day details
- Icon mapping for activity types

---

## 4. Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `bg-primary` | `#F8FAFC` | Main background |
| `bg-card` | `#FFFFFF` | Card backgrounds |
| `text-primary` | `#1E293B` | Headings, important text |
| `text-secondary` | `#64748B` | Labels, descriptions |
| `accent-blue` | `#3B82F6` | Primary actions, links |
| `accent-green` | `#10B981` | Success, packed items |
| `accent-purple` | `#8B5CF6` | Secondary highlights |
| `border` | `#E2E8F0` | Dividers, card borders |

---

## 5. Animations & Interactions

- **Page Transitions:** Fade in (200ms)
- **Card Hover:** Subtle lift (`translateY(-2px)`, shadow increase)
- **Checkbox:** Smooth check animation
- **Progress Bars:** Animate on load (CSS transition)
- **Sidebar:** Slide in on mobile (drawer)
- **Countdown:** Gentle pulse on seconds

---

## 6. Acceptance Criteria

### Visual
- [ ] Sidebar renders with all 6 nav items
- [ ] Metrics cards show 4 values with labels
- [ ] Countdown timer displays and updates
- [ ] Packing list shows categories with items
- [ ] Todo list shows tasks with checkboxes
- [ ] Responsive: No horizontal scroll on 375px width
- [ ] Colors match spec palette

### Functional
- [ ] Countdown updates every second
- [ ] Can add new packing item to any category
- [ ] Can check/uncheck packing items (persists on refresh)
- [ ] Can add new todo item
- [ ] Can check/uncheck todo items (persists on refresh)
- [ ] Progress percentages calculate correctly

### Performance
- [ ] Lighthouse Performance > 90
- [ ] First Contentful Paint < 1.5s

---

## 7. File Structure

```
thailand-travel/
├── app/
│   ├── page.tsx          # Main dashboard
│   ├── layout.tsx       # Root layout with sidebar
│   ├── globals.css      # Tailwind + custom styles
│   └── itinary/
│       └── page.tsx     # Itinerary page
├── components/
│   ├── Sidebar.tsx
│   ├── Header.tsx
│   ├── MetricCard.tsx
│   ├── Countdown.tsx
│   ├── PackingList.tsx
│   ├── TodoList.tsx
│   └── ItineraryTimeline.tsx
├── lib/
│   └── storage.ts        # LocalStorage helpers
├── public/
│   └── (images, icons)
├── package.json
├── tailwind.config.js
└── SPEC.md
```

---

**Status:** Ready for Implementation  
**Implementation Order:** 
1. Layout + Sidebar + Header
2. Metric Cards + Countdown
3. Packing List (with persistence)
4. Todo List (with persistence)
5. Itinerary Timeline
6. Polish + Responsive
