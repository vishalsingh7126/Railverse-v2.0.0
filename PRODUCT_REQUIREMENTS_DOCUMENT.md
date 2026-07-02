# Product Requirements Document (PRD)

**Product Name**: Railverse  
**Version**: 2.0.0  
**Authors**: Lead Software Architect & Product Team, TravelCore Technologies Pvt. Ltd.  
**Branding**: Railverse — A TravelCore Product  
**Status**: Project Initialization  

---

## 1. Product Vision & Mission

### Vision
To revolutionize train travel intelligence in India by establishing a new benchmark in utility design and technology. We envision a premium SaaS-like experience that replaces outdated, cluttered government-style layouts with clean, lightning-fast interfaces.

### Mission
To build India's most modern railway intelligence platform with a world-class UI/UX, fast performance, and a premium user experience. We present railway intelligence better than anyone else, optimizing how users retrieve, compare, and act on journey data.

---

## 2. Problem Statement & Goals

### Problem Statement
Indian railway passengers rely on outdated, advertisement-heavy, slow, and confusing portals to check PNR status, seat availability, train locations, and fare structures. The cognitive load on the user is high, and the mobile responsiveness of these systems is often poor. Existing commercial platforms compete primarily on booking transaction volume, resulting in cluttered interfaces filled with cross-selling banners, insurance prompts, and unrelated ads.

### Goals
1. **Zero Clutter**: Establish a 100% advertisement-free interface with generous whitespace and clear typography.
2. **Sub-Second Performance**: Return live location, availability, and routing information in milliseconds by implementing smart caching and edge optimization.
3. **Component-Driven Visuals**: Introduce visual models for PNR statuses, interactive date matrices for seat availability, and clean graphs for fare comparison.
4. **Intelligent Decisions**: Empower passengers to make optimal travel choices through predictive seat metrics and clear side-by-side fare comparisons.

---

## 3. Target Audience & User Personas

### Target Audience
- **Daily / Regular Commuters**: Tech-savvy professionals and students traveling frequently between cities.
- **Leisure & Business Travelers**: Individuals prioritizing ease-of-use, schedule reliability, and journey planning.
- **Family Planners**: Users booking tickets for multi-passenger groups who need simple status trackers and coach map lookups.

### User Personas

#### Persona A: Aarav Mehta (28) — Management Consultant
- **Behaviors**: Travels weekly between Mumbai and Pune. Constantly on his phone, values speed and dark mode.
- **Pain Points**: Needs to check if his waitlisted ticket is confirmed during client meetings; gets frustrated by slow-loading captchas and noisy ads.
- **Goal**: Instantly check waitlist status and view live train locations with zero friction.

#### Persona B: Priya Sharma (45) — Parent & Coordinator
- **Behaviors**: Plans quarterly family trips to visit relatives across states.
- **Pain Points**: Struggles to understand fare splits (base vs. superfast vs. catering charge) and finds it difficult to figure out where senior citizens' seats are allocated on coach layouts.
- **Goal**: Visual comparison of multi-class fares and an easy-to-read seat mapping interface.

---

## 4. Core Features & Functional Requirements

The initial release (v2.0.0) covers only these five core railway modules:

### 4.1 PNR Status Checker
- **FR-1.1**: The system must accept a 10-digit numeric Passenger Name Record (PNR) code.
- **FR-1.2**: Display detailed journey information: Train Name, Date of Journey, From/To Stations, Class, and Quota.
- **FR-1.3**: Show passenger-wise status splits (Booking Status vs. Current Status, e.g., `WL 14` -> `CNF`).
- **FR-1.4**: Render a visual seat map highlighting confirmed berths relative to coach placement.

### 4.2 Train Details & Schedules
- **FR-2.1**: Allow users to query by train number (5 digits) or train name.
- **FR-2.2**: Render the complete route map showing stop sequence, scheduled arrival/departure, halt durations, and distance traveled.
- **FR-2.3**: Categorize stops by region or division to aid route scannability.

### 4.3 Live Train Status
- **FR-3.1**: Display real-time train positioning, current delay status (in minutes), and last updated station coordinates.
- **FR-3.2**: Highlight approaching stations and estimate arrival times based on historical delay analytics.
- **FR-3.3**: Provide a clean timeline interface with organic micro-animations demonstrating progress between stops.

### 4.4 Seat Availability Matrix
- **FR-4.1**: Let users search availability between station pairs by selecting date, class (e.g., 1A, 2A, 3A, SL), and quota (General, Ladies, Tatkal).
- **FR-4.2**: Render a calendar grid showcasing consecutive dates' availability status (Available, Waitlisted, Regret) to eliminate repetitive searches.
- **FR-4.3**: Highlight low-availability thresholds using color-coded status badges.

### 4.5 Fare Comparison Tool
- **FR-5.1**: Provide a side-by-side comparison of fare differences across all available classes on a selected train.
- **FR-5.2**: Provide a cost breakdown showing base fare, superfast charges, reservation fees, catering charges, and GST.
- **FR-5.3**: Render an interactive line chart illustrating fare-to-distance ratios for alternative train types (Express vs. Rajdhani vs. Vande Bharat).

---

## 5. Non-Functional Requirements

### 5.1 Performance & Scalability
- **NFR-1.1**: Core Web Vitals targets: Largest Contentful Paint (LCP) < 1.2 seconds, Cumulative Layout Shift (CLS) < 0.05.
- **NFR-1.2**: Server response time for API cache hits must be < 100ms.
- **NFR-1.3**: Support up to 50,000 concurrent page sessions during peak Tatkal booking hours (10:00 AM - 12:00 PM).

### 5.2 Design & UX Principles
- **NFR-2.1**: Look and feel must be premium, following the design aesthetics of Stripe, Vercel, and Linear.
- **NFR-2.2**: High use of structural whitespace, minimal borders, and a curated neutral color palette (grays, deep slate, with vibrant blue or emerald accents for positive states).
- **NFR-2.3**: Dark mode must be a first-class citizen, styled natively using Tailwind CSS v4 variables.
- **NFR-2.4**: Page transitions and element states must utilize spring-physics animations via Framer Motion.

### 5.3 Security & Privacy
- **NFR-3.1**: All outbound traffic must use HTTPS / TLS 1.3 encryption.
- **NFR-3.2**: Passenger query histories (e.g., PNR searches) must be stored locally in the browser's localStorage or encrypted on the client side. No PII should be retained in the platform logs.

### 5.4 Accessibility (WCAG 2.1 AA)
- **NFR-4.1**: Standard interface elements must support key-navigation (tabs and arrows).
- **NFR-4.2**: Color combinations must meet WCAG AA contrast standards.
- **NFR-4.3**: All custom icons and complex graphics must contain `aria-label` or description tags.

---

## 6. Release & Success Metrics

### Success Metrics
- **Performance Rating**: Lighthouse performance index > 95.
- **Query Completion Rate**: Time taken to input PNR and view status must be < 3 seconds average user time.
- **Interface Retention**: User retention of dashboard selections across sessions.
- **Search Success Rate**: Percentage of users finding seat availability matrices on first click.

### Release Strategy
1. **Phase 1: Developer Preview**: Internal deployment within TravelCore team.
2. **Phase 2: Closed Beta**: Private access for select frequent commuters (500 users) to test speed and cache stability.
3. **Phase 3: Public Launch**: Complete deployment of Railverse v2.0.0 as the main customer platform.

---

## 7. Risks & Constraints

- **Dependency Risk**: Data is fetched from core railway databases. Outages or schema changes in source data APIs will affect display accuracy.
- **Mitigation**: Implement a robust Backend-for-Frontend (BFF) layer in Next.js that formats variations in responses and serves stale cached data during backend outages.
- **Rate Limits**: Core railway endpoints enforce search limits.
- **Mitigation**: Deploy Redis caching on the BFF layer to optimize load times and reuse results for overlapping queries.
