# PRODUCT REQUIREMENTS DOCUMENT

## EXECUTIVE SUMMARY

**Product Name:** Aging at Home Hub

**Product Vision:** Aging at Home Hub empowers older adults, caregivers, and adult children to make informed decisions about aging in place by providing personalized home safety recommendations through a simple, guided assessment process. The platform connects users with actionable improvements and local Orange County resources in just 5 minutes.

**Core Purpose:** Eliminates the overwhelm and uncertainty families face when trying to make homes safer for aging in place. Users answer 5-7 simple questions about their living situation and immediately receive prioritized, actionable recommendations with clear cost indicators and connections to verified local professionals and programs.

**Target Users:** 
- **Primary:** Adult children (ages 45-65) researching safety improvements for aging parents
- **Secondary:** Older adults (65+) planning to age in place, and professional caregivers seeking guidance for clients

**Key MVP Features:**
- Guided Home Safety Quiz - User-Generated Content (multi-step assessment)
- Personalized Safety Report - System Data (generated recommendations)
- Orange County Resource Directory - Configuration Data (pre-loaded, filterable database)
- Professional Contact Guidance - System Data (static educational content)
- Shareable Plan Summary - System Data (generated, public links)
- Feedback Collection - User-Generated Content (simple survey responses)

**Platform:** Web application (responsive design, accessible via browser on desktop, tablet, and mobile devices)

**Complexity Assessment:** Simple
- State Management: Backend database (MongoDB) with straightforward CRUD operations
- External Integrations: None required for MVP
- Business Logic: Simple rule-based matching (quiz answers → recommendations lookup)

**MVP Success Criteria:**
- Users complete the full quiz workflow and receive personalized recommendations
- All CRUD operations for quiz responses and feedback function correctly
- Resource directory filtering works across categories
- Shareable links generate and display correctly without authentication
- Responsive design functions on mobile, tablet, and desktop browsers
- 80% quiz completion rate and 60% positive feedback on "knowing where to start"

---

## 1. USERS & PERSONAS

**Primary Persona:**
- **Name:** Jennifer the Concerned Daughter
- **Context:** 52-year-old professional with aging parents (late 70s) living independently in Orange County. Recently noticed mom struggling with stairs and dad's mobility declining. Wants to help but doesn't know where to start or what's most important. Limited time due to work and family obligations.
- **Goals:** Quickly identify the most critical safety improvements, understand realistic costs, find trustworthy local professionals, share a clear plan with siblings and parents
- **Pain Points:** Overwhelmed by conflicting online advice, unsure which changes matter most, intimidated by contractor conversations, worried about costs, needs family buy-in

**Secondary Persona:**
- **Name:** Robert the Proactive Senior
- **Context:** 68-year-old recent retiree planning ahead after a neighbor's fall. Wants to stay in his home long-term. Tech-comfortable but prefers simple interfaces.
- **Goals:** Understand what modifications to prioritize now versus later, learn about available financial assistance programs
- **Pain Points:** Doesn't know what he doesn't know about home safety, concerned about unnecessary expenses, wants to maintain independence

---

## 2. FUNCTIONAL REQUIREMENTS

### 2.1 Core MVP Features (Priority 0)

**FR-001: Guided Home Safety Quiz**
- **Description:** Multi-step assessment (5-7 questions) collecting information about living situation, mobility concerns, and home features
- **Entity Type:** User-Generated Content
- **Operations:** Create (answer quiz), View (review answers in summary), Edit (change answers before submission), List (see all questions in progress indicator)
- **Key Rules:** All questions required before generating report; answers stored with timestamp; users can navigate back to change answers
- **Acceptance:** Users complete quiz from start to finish, can review/edit answers, and successfully submit to generate personalized report

**FR-002: Personalized Safety Report**
- **Description:** Generated recommendations based on quiz responses, organized by implementation type (DIY/Low-Cost/Professional) with cost indicators ($-$$$)
- **Entity Type:** System Data
- **Operations:** View (display generated report), Export (download/print summary), Share (generate public link)
- **Key Rules:** Report displays top 3-5 recommendations per category; cost indicators based on predefined ranges; recommendations pulled from database via matching logic
- **Acceptance:** Users receive immediate, relevant recommendations after quiz completion; can view categorized results with clear cost/effort indicators

**FR-003: Orange County Resource Directory**
- **Description:** Pre-loaded database of 20+ verified local resources (CAPS contractors, Area Agency on Aging programs, nonprofits) with contact information and service descriptions
- **Entity Type:** Configuration Data
- **Operations:** View (browse resources), List (see all resources), Search (filter by category/service type), Edit (admin only - manage resource entries)
- **Key Rules:** Resources categorized by type (Safety/Funding/Contractors/Programs); each resource includes name, contact, services, cost range; filtering updates results in real-time
- **Acceptance:** Users can browse and filter resources by category; each resource displays complete contact information and service details

**FR-004: Professional Contact Guidance**
- **Description:** Educational content explaining 5-6 professional roles (Occupational Therapist, CAPS Contractor, Area Agency on Aging, Handyman, etc.) with sample questions and preparation tips
- **Entity Type:** System Data
- **Operations:** View (read guidance cards), List (see all professional types), Expand/Collapse (show/hide detailed questions)
- **Key Rules:** Each professional type includes role description, when to contact them, 3-5 sample questions to ask, and preparation checklist
- **Acceptance:** Users can view all professional types, expand cards to see detailed guidance, and understand what to ask each professional

**FR-005: Shareable Plan Summary**
- **Description:** Public-accessible summary page containing quiz results, recommendations, and relevant resources, accessible via unique URL
- **Entity Type:** System Data
- **Operations:** Create (generate unique link), View (access plan without login), Export (download/print plan)
- **Key Rules:** Each plan has unique ID; no authentication required to view; includes quiz answers, recommendations, and filtered resources; plans persist indefinitely
- **Acceptance:** Users generate shareable links after completing quiz; recipients can view complete plan without creating account; plans display correctly on all devices

**FR-006: Feedback Collection**
- **Description:** Simple 2-question survey collecting user satisfaction and clarity on next steps after viewing recommendations
- **Entity Type:** User-Generated Content
- **Operations:** Create (submit feedback), View (admin only - see aggregated responses), List (admin only - browse all feedback), Export (admin only - download feedback data)
- **Key Rules:** Survey appears after plan generation; questions: "Was this helpful?" (Yes/No) and "Do you know where to start now?" (Yes/No/Somewhat); optional comment field; one submission per plan
- **Acceptance:** Users can submit feedback after viewing recommendations; responses stored with plan ID and timestamp; admin can view aggregated results

**FR-007: User Authentication**
- **Description:** Optional account creation for saving quiz history and accessing past plans (not required for core workflow)
- **Entity Type:** System/Configuration
- **Operations:** Register (create account), Login (authenticate), View (see profile), Edit (update profile), Reset password, Logout
- **Key Rules:** Email-based registration; secure password storage; session persistence; users can complete quiz without account; account enables viewing past assessments
- **Acceptance:** Users can optionally create accounts, login securely, and access saved quiz history; guest users can complete full workflow without authentication

---

## 3. USER WORKFLOWS

### 3.1 Primary Workflow: Complete Safety Assessment and Receive Personalized Plan

**Trigger:** User lands on homepage and clicks "Get My Safety Recommendations"
**Outcome:** User receives personalized safety report with local resources and shareable plan link

**Steps:**
1. User clicks "Start Assessment" button on homepage
2. System displays first quiz question with button-based answer options and progress indicator (Question 1 of 7)
3. User selects answer and clicks "Next"; system saves response and advances to next question
4. User completes all 7 questions (can navigate back to change answers using "Previous" button)
5. User clicks "Get My Recommendations"; system processes answers through matching logic
6. System displays personalized safety report with 3-5 recommendations per category (DIY/Low-Cost/Professional), cost indicators, and relevant Orange County resources
7. User reviews recommendations, explores resource directory filters, and expands professional guidance cards
8. User clicks "Share This Plan"; system generates unique URL and displays shareable link with copy button
9. User submits optional feedback survey (2 questions: helpful? know where to start?)
10. System confirms feedback submission and displays option to start new assessment or create account to save results

### 3.2 Key Supporting Workflows

**Browse Resource Directory:** User navigates to Resources page → applies category filter (Safety/Funding/Contractors) → views filtered results with contact information → clicks resource to see full details

**Edit Quiz Answers:** User clicks "Previous" during quiz → returns to prior question → changes answer → clicks "Next" to continue → system updates stored response

**View Shared Plan:** Recipient opens shared URL → system loads plan summary without authentication → displays quiz context, recommendations, and resources → recipient can print or download plan

**Submit Feedback:** User views recommendations → sees feedback prompt → selects Yes/No for helpfulness → selects Yes/No/Somewhat for clarity → optionally adds comment → clicks Submit → sees confirmation message

**Create Account (Optional):** User clicks "Save My Results" after viewing plan → enters email and password → system creates account and associates current plan → user can login later to view history

---

## 4. BUSINESS RULES

### 4.1 Entity Lifecycle Rules

| Entity | Type | Who Creates | Who Edits | Who Deletes | Delete Action |
|--------|------|-------------|-----------|-------------|---------------|
| Quiz Response | User-Generated | All users | User (during quiz) | System (after 90 days) | Soft delete |
| Safety Report | System Data | System (generated) | None | None | Not allowed |
| Resource Entry | Configuration | Admin only | Admin only | Admin only | Soft delete |
| Professional Guidance | System Data | Admin only | Admin only | None | Not allowed |
| Shared Plan | System Data | System (generated) | None | None | Persists indefinitely |
| Feedback Response | User-Generated | All users | None | None | Not allowed |
| User Account | System/Configuration | User | User (own profile) | User | Hard delete with cascade |

### 4.2 Data Validation Rules

| Entity | Required Fields | Key Constraints |
|--------|-----------------|-----------------|
| Quiz Response | all 7 questions, submittedAt | Each question must have valid answer option; timestamp auto-generated |
| Safety Report | quizId, recommendations array | Must contain 3-5 recommendations per category; cost indicator required |
| Resource Entry | name, category, contact, services | Category from predefined list; contact must include phone or email |
| Feedback Response | planId, wasHelpful, knowWhereToStart | Boolean values required; comment optional max 500 chars |
| User Account | email, password | Email must be unique and valid format; password min 8 chars |
| Shared Plan | uniqueId, quizId, createdAt | Unique ID auto-generated; must reference valid quiz response |

### 4.3 Access & Process Rules
- Guest users can complete full quiz workflow and view recommendations without authentication
- Shared plan links are publicly accessible without login (no sensitive personal data included)
- Quiz responses auto-delete after 90 days unless associated with user account
- Resource directory updates require admin authentication
- Feedback responses are anonymous and cannot be edited after submission
- Users with accounts can view unlimited past assessments
- Recommendation matching logic runs server-side; results cached per quiz response
- Maximum 100 resource entries in directory for MVP (Orange County focus)

---

## 5. DATA REQUIREMENTS

### 5.1 Core Entities

**User**
- **Type:** System/Configuration | **Storage:** MongoDB
- **Key Fields:** id, email, passwordHash, name (optional), createdAt, lastLoginAt
- **Relationships:** has many QuizResponses, has many SharedPlans
- **Lifecycle:** Full CRUD with account deletion (cascades to owned quiz responses)

**QuizResponse**
- **Type:** User-Generated Content | **Storage:** MongoDB
- **Key Fields:** id, userId (nullable), answers (array of 7 question-answer pairs), submittedAt, expiresAt (90 days), isDeleted
- **Relationships:** belongs to User (optional), has one SafetyReport, has many SharedPlans
- **Lifecycle:** Create (during quiz), View (in summary), Edit (during quiz only), Soft delete (after 90 days or user deletion)

**SafetyReport**
- **Type:** System Data | **Storage:** MongoDB
- **Key Fields:** id, quizResponseId, recommendations (array with category, title, description, costIndicator, priority), generatedAt
- **Relationships:** belongs to QuizResponse
- **Lifecycle:** Create (auto-generated after quiz), View only, Export (PDF/print)

**ResourceEntry**
- **Type:** Configuration Data | **Storage:** MongoDB
- **Key Fields:** id, name, category (enum: Safety/Funding/Contractors/Programs), services (array), contactPhone, contactEmail, website, address, costRange, description, isActive
- **Relationships:** none (standalone reference data)
- **Lifecycle:** Full CRUD (admin only) with soft delete (isActive flag)

**ProfessionalGuidance**
- **Type:** System Data | **Storage:** MongoDB
- **Key Fields:** id, professionalType (enum: OT/CAPS/AAA/Handyman/etc), roleDescription, whenToContact, sampleQuestions (array), preparationTips (array), displayOrder
- **Relationships:** none (static educational content)
- **Lifecycle:** Create/Edit (admin only), View only for users

**SharedPlan**
- **Type:** System Data | **Storage:** MongoDB
- **Key Fields:** id, uniqueSlug (URL-safe), quizResponseId, createdAt, viewCount, lastViewedAt
- **Relationships:** belongs to QuizResponse
- **Lifecycle:** Create (when user generates link), View (public access), Track views (increment counter)

**FeedbackResponse**
- **Type:** User-Generated Content | **Storage:** MongoDB
- **Key Fields:** id, sharedPlanId (nullable), wasHelpful (boolean), knowWhereToStart (enum: Yes/No/Somewhat), comment (optional), submittedAt
- **Relationships:** belongs to SharedPlan (optional)
- **Lifecycle:** Create only (immutable after submission), View/Export (admin only for analytics)

### 5.2 Data Storage Strategy
- **Primary Storage:** MongoDB database for all entities
- **Capacity:** Estimated 10,000 quiz responses, 100 resources, 5,000 feedback entries for MVP phase
- **Persistence:** All data persists indefinitely except quiz responses (90-day expiration for guest users)
- **Audit Fields:** All entities include createdAt, updatedAt; user-generated content includes createdBy (userId or "guest")
- **Indexing:** Indexes on QuizResponse.userId, SharedPlan.uniqueSlug, ResourceEntry.category for performance

---

## 6. INTEGRATION REQUIREMENTS

No external integrations required for MVP. All functionality implemented with internal logic and database operations.

---

## 7. VIEWS & NAVIGATION

### 7.1 Primary Views

**Homepage** (`/`) - Hero section with "Get My Safety Recommendations" CTA, brief explanation of 5-minute process, trust indicators (verified resources, local focus), sample recommendation preview

**Quiz Interface** (`/assessment`) - Multi-step form with one question per screen, large button-based answer options, progress indicator (Question X of 7), Previous/Next navigation, accessible typography and high-contrast design

**Safety Report** (`/report/:id`) - Personalized recommendations organized in three sections (DIY/Low-Cost/Professional), cost indicators ($-$$$), priority badges, "Share This Plan" button, embedded resource directory filtered to relevant categories, professional guidance cards

**Resource Directory** (`/resources`) - Filterable list of Orange County resources, category tabs (All/Safety/Funding/Contractors/Programs), resource cards with contact info and service descriptions, click to expand full details

**Professional Guidance** (`/guidance`) - Grid of professional type cards (OT, CAPS, AAA, Handyman, etc.), expandable sections showing role description, when to contact, sample questions, preparation checklist

**Shared Plan View** (`/plan/:slug`) - Public-accessible summary with quiz context, recommendations, relevant resources, print/download options, no authentication required

**Feedback Survey** (modal after report generation) - Two-question survey overlay: "Was this helpful?" (Yes/No buttons), "Do you know where to start now?" (Yes/No/Somewhat buttons), optional comment field, Submit button

**User Dashboard** (`/dashboard`) - (Optional, for logged-in users) List of past assessments with dates, quick access to previous reports, account settings link

**Account Settings** (`/settings`) - Profile information, email/password management, view saved assessments, export all data, delete account option

### 7.2 Navigation Structure

**Main Nav:** Home | Resources | Guidance | [User Menu: Dashboard/Login/Logout]
**Default Landing:** Homepage with immediate CTA to start assessment
**Mobile:** Hamburger menu, sticky "Start Assessment" button, responsive card layouts, touch-friendly button sizing (min 44px)
**Accessibility:** ARIA labels, keyboard navigation, high-contrast mode support, screen reader optimized, minimum 16px base font size

---

## 8. MVP SCOPE & CONSTRAINTS

### 8.1 MVP Success Definition

The MVP is successful when:
- ✅ Users complete 5-7 question quiz and receive personalized recommendations within 5 minutes
- ✅ All entity lifecycle operations (quiz CRUD, report generation, resource filtering, feedback submission) work correctly
- ✅ Shareable plan links generate and display without authentication
- ✅ Resource directory filtering functions across all categories
- ✅ Responsive design works on mobile (iOS/Android browsers), tablet, and desktop
- ✅ Data persists correctly in MongoDB with proper relationships
- ✅ 80% quiz completion rate and 60% positive feedback on "knowing where to start"
- ✅ Basic error handling prevents data loss and provides user-friendly messages

### 8.2 In Scope for MVP

Core features included:
- FR-001: Guided Home Safety Quiz (7 questions, multi-step form, answer editing)
- FR-002: Personalized Safety Report (generated recommendations, cost indicators, categorization)
- FR-003: Orange County Resource Directory (20+ pre-loaded resources, category filtering)
- FR-004: Professional Contact Guidance (5-6 professional types with sample questions)
- FR-005: Shareable Plan Summary (unique URLs, public access, no login required)
- FR-006: Feedback Collection (2-question survey, optional comments)
- FR-007: User Authentication (optional account creation, login, saved history)

Supporting functionality:
- Responsive design optimized for seniors (large text, high contrast, simple navigation)
- Print/download options for safety reports and shared plans
- Admin interface for managing resource directory entries
- Basic analytics dashboard showing quiz completion rates and feedback aggregation
- 90-day auto-deletion of guest quiz responses
- Error handling for failed submissions and network issues

### 8.3 Technical Constraints

- **Data Storage:** MongoDB database with 10GB initial capacity
- **Concurrent Users:** Designed for 100 simultaneous users during MVP testing phase
- **Performance:** Page loads <2 seconds on 3G connection; quiz navigation instant (<200ms); report generation <3 seconds
- **Browser Support:** Chrome, Firefox, Safari, Edge (last 2 versions); iOS Safari 14+, Android Chrome 90+
- **Mobile:** Responsive design with touch-optimized controls; minimum 44px tap targets; works on screens 320px width and up
- **Offline:** Not supported in MVP; requires internet connection for all operations
- **Data Limits:** Maximum 100 resources in directory; quiz responses limited to 10,000 for MVP phase
- **Security:** HTTPS required; password hashing with bcrypt; session management with secure cookies; no PII in shareable links

### 8.4 Known Limitations

**For MVP:**
- Single language support (English only) - Spanish translation deferred to V2
- Orange County resources only - geographic expansion requires V2 resource partnerships
- No professional account features - contractors/OTs cannot claim listings or submit resources
- No advanced recommendation logic - uses simple rule-based matching (not AI/ML)
- No multi-device sync for guest users - quiz progress lost if browser closed
- No email notifications - users must manually save/share plan links
- No payment processing - all resources are informational only (no booking/scheduling)
- Limited analytics - basic completion rates and feedback only (no funnel analysis)

**Future Enhancements:**
- V2 will add bilingual content (English/Spanish) with language toggle
- V2 will expand to additional California counties with regional resource databases
- V2 will include professional portal for resource submissions and profile management
- V2 will implement AI-powered recommendation engine with learning capabilities
- V2 will add email delivery of reports and reminder sequences
- V2 will integrate scheduling/booking with partner contractors and service providers

---

## 9. ASSUMPTIONS & DECISIONS

### 9.1 Platform Decisions
- **Type:** Full-stack web application (frontend + backend + database)
- **Storage:** MongoDB for all persistent data (quiz responses, resources, feedback, user accounts)
- **Auth:** Email/password authentication with optional guest workflow (no login required for core features)
- **Hosting:** Cloud-hosted with HTTPS (specific provider TBD by development team)

### 9.2 Entity Lifecycle Decisions

**QuizResponse:** Create, View, Edit (during quiz only), Soft delete (90-day expiration)
- **Reason:** User-generated content needs editing during quiz; soft delete preserves data for analytics while respecting privacy

**SafetyReport:** Create (auto-generated), View, Export only
- **Reason:** System-generated data should be immutable once created; users can retake quiz for new report

**ResourceEntry:** Full CRUD (admin only) with soft delete
- **Reason:** Configuration data requires admin control; soft delete preserves historical references in generated reports

**FeedbackResponse:** Create only (immutable)
- **Reason:** Survey responses should not be editable to maintain data integrity for analytics

**SharedPlan:** Create, View only (public access)
- **Reason:** Generated links should persist indefinitely for sharing; no editing needed

### 9.3 Key Assumptions

1. **Users prefer simple button-based quiz over text input**
   - Reasoning: Target audience (older adults, busy caregivers) benefits from reduced cognitive load; button selections faster than typing; easier on mobile devices

2. **7 questions sufficient to generate valuable recommendations**
   - Reasoning: Product idea specifies "5-7 questions" for 5-minute completion; balances gathering enough context without overwhelming users; can expand in V2 based on feedback

3. **Guest workflow (no login) is critical for adoption**
   - Reasoning: Requiring account creation adds friction; users want immediate value; optional accounts for power users who want history

4. **Orange County geographic focus is acceptable for MVP**
   - Reasoning: Product idea specifies "Orange County Resource Directory"; allows validation with focused, high-quality local resources before scaling

5. **Simple rule-based recommendation logic sufficient for MVP**
   - Reasoning: AI/ML adds complexity without validating core hypothesis; predefined matching rules can deliver value; can enhance with ML in V2 if users find recommendations relevant

6. **Shareable links should be public (no authentication)**
   - Reasoning: Product idea emphasizes "share with family/handyman"; requiring recipients to create accounts defeats purpose; no sensitive personal data in plans

7. **Cost indicators ($-$$$) more useful than exact prices**
   - Reasoning: Actual costs vary by contractor and home specifics; ranges set expectations without misleading users; reduces maintenance burden

8. **90-day retention for guest quiz responses balances privacy and analytics**
   - Reasoning: Allows meaningful analytics window while respecting user privacy; users with accounts retain data indefinitely

### 9.4 Clarification Q&A Summary

**Q:** Design & Accessibility - Do you have specific visual design preferences for senior-friendly interface?
**A:** "You can decide on your own"
**Decision:** Implemented accessibility best practices: minimum 16px base font, high-contrast colors (WCAG AA compliant), large touch targets (44px minimum), simple navigation, clear visual hierarchy, button-based interactions over text input

**Q:** Recommendation Logic - How complex is the logic connecting quiz answers to recommendations?
**A:** "You can decide on your own"
**Decision:** Simple rule-based matching for MVP: each quiz answer maps to predefined recommendation tags; recommendations ranked by priority score; top 3-5 per category displayed; allows quick implementation and easy content updates without ML complexity

**Q:** Data Management - Do you have existing resource content, or need admin interface for MVP?
**A:** "You can decide on your own"
**Decision:** Include basic admin interface in MVP for resource management (CRUD operations); allows product owner to add/update Orange County resources without developer involvement; admin can seed initial 20+ resources and maintain directory

**Q:** Sharing Mechanism - Should shared plans be stored in database or encoded in URL?
**A:** "You can decide on your own"
**Decision:** Database storage with unique slug URLs; allows tracking view counts, preserves data if quiz responses expire, enables future features (comments, updates); more scalable than URL encoding for complex recommendation data

---

**PRD Complete - Ready for Development**
