# ChemMatch Multi-User Educational Platform - Requirements Specification

**Version:** 1.0
**Date:** October 29, 2025
**Status:** Planning Phase - Pipeline for Future Implementation

---

## Executive Summary

Transform ChemMatch from a single-user chemistry learning game into a comprehensive multi-user educational platform that enables teachers to manage classes, create assignments, and track student progress across multiple schools.

---

## Table of Contents

1. [Project Vision](#project-vision)
2. [User Personas](#user-personas)
3. [Core Features](#core-features)
4. [Technical Architecture](#technical-architecture)
5. [Database Schema](#database-schema)
6. [User Stories](#user-stories)
7. [MVP Scope](#mvp-scope)
8. [Future Enhancements](#future-enhancements)
9. [Implementation Phases](#implementation-phases)
10. [Technology Stack Recommendations](#technology-stack-recommendations)

---

## Project Vision

### Goal
Enable chemistry teachers worldwide to use ChemMatch as a classroom management tool where they can:
- Organize students into classes
- Create custom assignments
- Track student performance
- Provide personalized feedback

### Target Audience
- **Primary**: Middle school and high school chemistry teachers (Grade 6-12)
- **Secondary**: Students enrolled in chemistry courses
- **Scale**: Multi-school, multi-region deployment (SaaS model)

### Success Metrics
- Number of active teachers using the platform
- Number of students enrolled across all classes
- Assignment completion rates
- Student engagement metrics (time spent, equations completed)
- Teacher satisfaction scores

---

## User Personas

### Persona 1: Chemistry Teacher (Ms. Sarah Chen)

**Background:**
- 8 years teaching experience
- Teaches 4 chemistry classes (120 students total)
- Uses Google Classroom and Kahoot regularly
- Limited technical expertise but comfortable with web apps

**Needs:**
- Easy way to assign homework and track completion
- Ability to see which students are struggling
- Class performance analytics
- Minimal setup time (< 5 minutes to create first assignment)

**Pain Points:**
- Current homework is paper-based or generic online quizzes
- Hard to track individual student progress on equation balancing
- Wants gamification but existing tools are too complex

---

### Persona 2: Student (Alex Rodriguez)

**Background:**
- 8th grade student (IB MYP3)
- Has multiple teachers using different platforms
- Uses phone and laptop for homework
- Motivated by achievements and leaderboards

**Needs:**
- Clear view of what assignments are due
- Immediate feedback on answers
- Compare progress with classmates
- Access on multiple devices

**Pain Points:**
- Too many different platforms to remember
- Wants offline access for practicing on bus/train
- Frustrated when can't see progress/improvement

---

## Core Features

### 1. Authentication & User Management

#### Teacher Registration
- Email/password signup
- Email verification required
- Profile fields:
  - Full name
  - School/Institution name
  - Subject specialization
  - Profile photo (optional)
  - Bio/introduction (optional)

#### Student Registration
- Email/password signup OR OAuth (Google)
- Email verification required
- Profile fields:
  - Full name
  - Grade level
  - School name
  - Profile photo (optional)

#### Login System
- Secure authentication with JWT tokens
- "Remember me" option
- Password reset via email
- Role-based access control (RBAC)

#### Profile Management
- Edit personal information
- Change password
- View activity history
- Account deletion option (with data export)

---

### 2. Class Management (Teacher Features)

#### Create Class
- Class name (e.g., "Chemistry Period 3", "IB Chemistry HL")
- Subject
- Grade level
- Academic year/semester
- Class description
- Class photo/icon (optional)

#### Invite Students
- **Option 1: Email Invitation**
  - Enter student email addresses (bulk or individual)
  - System sends invitation link
  - Student clicks link to join class

- **Option 2: Class Code**
  - Teacher generates unique 6-8 character code
  - Students enter code to join
  - Code can be regenerated if needed

- **Option 3: Shareable Link**
  - Direct URL that students can click
  - Can set expiration date for link

#### Manage Class Roster
- View list of all students in class
- See student status (invited, active, inactive)
- Remove students from class
- Export class roster to CSV
- Send messages/announcements to class

#### Archive Classes
- Mark classes as archived (completed semester)
- Archived classes remain readable but not editable
- Students can still view past grades

---

### 3. Assignment System (Teacher Features)

#### Create Assignment
- **Basic Info:**
  - Assignment title
  - Description/instructions
  - Due date and time
  - Total points possible
  - Allow late submissions (yes/no)
  - Late penalty percentage

- **Content Selection:**
  - Select specific equations (multi-select from 20 available)
  - OR select difficulty level (Beginner/Intermediate/Advanced/Expert)
  - OR select reaction type (synthesis, decomposition, combustion, etc.)
  - Number of equations to complete (5, 10, 15, 20)

- **Settings:**
  - Shuffle equation order for each student (prevent copying)
  - Show hints (yes/no, point deduction if yes)
  - Time limit per equation (optional)
  - Retry attempts (1, 3, unlimited)
  - Show correct answer after submission (yes/no)

#### Assign to Classes
- Select one or multiple classes
- Can differentiate (different due dates per class)
- Can assign to individual students (differentiation)

#### Monitor Assignment Progress
- Dashboard showing:
  - % of students who started
  - % of students who completed
  - Average score
  - Average time spent
  - Students who haven't started (send reminders)

#### View Student Submissions
- See each student's answers
- View time taken per equation
- See number of hints used
- Add manual feedback/comments
- Adjust scores if needed (override auto-grading)

#### Grade Distribution
- Histogram of scores
- Identify struggling students (red flag if < 60%)
- Compare performance across classes

---

### 4. Student Dashboard & Features

#### Dashboard View
- **Upcoming Assignments Card:**
  - Due date countdown
  - Assignment title and class
  - Points possible
  - Status (Not started, In progress, Completed)

- **My Classes Card:**
  - List of all enrolled classes
  - Teacher name
  - Number of pending assignments per class

- **Recent Activity Card:**
  - Recent grades
  - Achievements unlocked
  - Personal bests

- **Performance Summary:**
  - Overall grade average
  - Total equations balanced
  - Current level/XP
  - Class rankings

#### Join Class
- Enter class code
- OR click invitation link
- OR accept email invitation
- See class details before confirming join

#### View Assignments
- **Filter options:**
  - By class
  - By status (To do, In progress, Completed, Overdue)
  - By due date

- **Assignment card shows:**
  - Title and description
  - Due date with countdown
  - Points possible
  - Estimated time to complete
  - Status indicator

#### Complete Assignment
- Click "Start Assignment" button
- Shows timer (if time-limited)
- Work through equations one by one
- Can save progress and return later (if allowed)
- Submit when finished
- See immediate feedback and score

#### View Grades & Feedback
- See score and grade (A, B, C, etc.)
- View which equations were correct/incorrect
- See teacher comments
- Compare with class average (optional)
- Download/print grade report

#### Practice Mode
- Separate from assignments
- All 20 equations available
- No grade tracking
- Progress saves locally
- Same gamification as current version

---

### 5. Analytics & Reporting

#### Teacher Analytics Dashboard

**Class Overview:**
- Total students enrolled
- Average class performance
- Assignment completion rates
- Most challenging equations for class
- Time-based trends (improving/declining)

**Individual Student Reports:**
- Student profile with photo
- All assignments with grades
- Equation-by-equation performance
- Strength areas (reaction types mastered)
- Improvement areas (reaction types struggling)
- Time spent on platform
- Login frequency
- Achievements earned

**Assignment Analytics:**
- Which equations had lowest success rate
- Average time per equation
- Correlation between hints used and success
- Comparison across classes (if teaching multiple)

**Export Options:**
- PDF report cards
- CSV grade exports
- Print-friendly views

#### Student Analytics

**Personal Dashboard:**
- Overall GPA across all classes
- Equations balanced over time (graph)
- Success rate by reaction type
- Comparison with class average
- Achievements progress
- Level/XP tracking

**Progress Tracking:**
- Visual charts showing improvement
- Badges for milestones
- Leaderboard position in each class
- Personal bests

---

### 6. Gamification & Engagement

#### Existing Features (Keep)
- XP and leveling system
- Achievements (12 current + more)
- Success modal with confetti
- Sound effects and animations
- Interactive periodic table
- Tutorial system

#### New Social Features

**Class Leaderboards:**
- Top 10 students in class
- Can be disabled by teacher
- Weekly/monthly/all-time views
- Points based on:
  - Assignment scores
  - Bonus for early submission
  - Streak bonuses

**Team Challenges:**
- Teacher creates class-wide challenges
- "Balance 1000 equations as a class this month"
- Progress bar showing class contribution
- Rewards when goal is met

**Peer Recognition:**
- Students can give "kudos" to classmates
- "Chemistry Helper" badge for students who help others
- Teacher can spotlight top performers

**Streaks:**
- Daily login streaks
- Assignment completion streaks
- Perfect score streaks
- Rewards for maintaining streaks

---

## Technical Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Frontend (React)                      │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐ │
│  │   Student    │  │   Teacher    │  │    Public    │ │
│  │  Dashboard   │  │  Dashboard   │  │    Pages     │ │
│  └──────────────┘  └──────────────┘  └──────────────┘ │
│                                                          │
│  ┌────────────────────────────────────────────────────┐│
│  │         Shared Components & State Management       ││
│  │         (Zustand + React Context)                  ││
│  └────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────┐
│                    API Layer                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐ │
│  │     Auth     │  │   Classes    │  │ Assignments  │ │
│  │   Service    │  │   Service    │  │   Service    │ │
│  └──────────────┘  └──────────────┘  └──────────────┘ │
└─────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────┐
│              Database (Recommended: Supabase)            │
│  ┌──────────────────────────────────────────────────┐  │
│  │              PostgreSQL Database                  │  │
│  │  ├─ users                                         │  │
│  │  ├─ classes                                       │  │
│  │  ├─ class_memberships                            │  │
│  │  ├─ assignments                                   │  │
│  │  ├─ assignment_submissions                        │  │
│  │  ├─ student_progress                              │  │
│  │  └─ achievements                                  │  │
│  └──────────────────────────────────────────────────┘  │
│                                                          │
│  ┌──────────────────────────────────────────────────┐  │
│  │           Authentication (Supabase Auth)          │  │
│  └──────────────────────────────────────────────────┘  │
│                                                          │
│  ┌──────────────────────────────────────────────────┐  │
│  │         Real-time Subscriptions (Optional)        │  │
│  └──────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────┐
│              External Services (Optional)                │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐ │
│  │    Email     │  │   Storage    │  │  Analytics   │ │
│  │  (SendGrid)  │  │  (S3/Supabase│  │  (Posthog)   │ │
│  └──────────────┘  └──────────────┘  └──────────────┘ │
└─────────────────────────────────────────────────────────┘
```

### Authentication Flow

```
1. User visits /login or /signup
2. Enters credentials
3. Frontend → Supabase Auth API
4. Supabase validates and returns JWT
5. JWT stored in httpOnly cookie + localStorage
6. Protected routes check JWT before rendering
7. API requests include JWT in Authorization header
8. Backend validates JWT on each request
```

### Data Flow Example: Teacher Creates Assignment

```
1. Teacher fills assignment form → Frontend
2. Frontend validates form data
3. POST /api/assignments with JWT token
4. Backend:
   a. Verify JWT and extract teacher_id
   b. Validate teacher owns the classes
   c. Insert into assignments table
   d. Create assignment_class junction records
   e. Trigger notifications to students (optional)
5. Return assignment ID and success
6. Frontend redirects to assignment details page
7. Students see new assignment in their dashboard
```

---

## Database Schema

### Users Table
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role VARCHAR(20) NOT NULL CHECK (role IN ('student', 'teacher')),
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  school_name VARCHAR(255),
  grade_level INTEGER, -- for students only
  profile_photo_url TEXT,
  bio TEXT,
  email_verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  last_login_at TIMESTAMP
);

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_role ON users(role);
```

### Classes Table
```sql
CREATE TABLE classes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  teacher_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  subject VARCHAR(100) DEFAULT 'Chemistry',
  grade_level INTEGER,
  academic_year VARCHAR(20),
  semester VARCHAR(20),
  description TEXT,
  class_code VARCHAR(8) UNIQUE NOT NULL,
  invite_link_token VARCHAR(64) UNIQUE,
  is_archived BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_classes_teacher ON classes(teacher_id);
CREATE INDEX idx_classes_code ON classes(class_code);
```

### Class Memberships Table (Junction)
```sql
CREATE TABLE class_memberships (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  class_id UUID NOT NULL REFERENCES classes(id) ON DELETE CASCADE,
  student_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('invited', 'active', 'removed')),
  joined_at TIMESTAMP DEFAULT NOW(),

  UNIQUE(class_id, student_id)
);

CREATE INDEX idx_memberships_class ON class_memberships(class_id);
CREATE INDEX idx_memberships_student ON class_memberships(student_id);
```

### Assignments Table
```sql
CREATE TABLE assignments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  teacher_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  description TEXT,

  -- Equation selection
  equation_ids INTEGER[], -- array of equation IDs from equations.ts
  difficulty_level VARCHAR(20), -- if selecting by difficulty instead
  reaction_types VARCHAR(50)[], -- if selecting by reaction type
  num_equations INTEGER NOT NULL DEFAULT 10,

  -- Settings
  due_date TIMESTAMP NOT NULL,
  total_points INTEGER NOT NULL DEFAULT 100,
  allow_late_submission BOOLEAN DEFAULT FALSE,
  late_penalty_percent INTEGER DEFAULT 0,
  shuffle_equations BOOLEAN DEFAULT TRUE,
  allow_hints BOOLEAN DEFAULT TRUE,
  hint_penalty_points INTEGER DEFAULT 5,
  time_limit_minutes INTEGER, -- NULL for no time limit
  max_attempts INTEGER DEFAULT 1,
  show_correct_answers BOOLEAN DEFAULT TRUE,

  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_assignments_teacher ON assignments(teacher_id);
CREATE INDEX idx_assignments_due_date ON assignments(due_date);
```

### Assignment Classes Table (Junction)
```sql
CREATE TABLE assignment_classes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  assignment_id UUID NOT NULL REFERENCES assignments(id) ON DELETE CASCADE,
  class_id UUID NOT NULL REFERENCES classes(id) ON DELETE CASCADE,
  custom_due_date TIMESTAMP, -- override assignment due_date for this class

  UNIQUE(assignment_id, class_id)
);

CREATE INDEX idx_assignment_classes_assignment ON assignment_classes(assignment_id);
CREATE INDEX idx_assignment_classes_class ON assignment_classes(class_id);
```

### Assignment Submissions Table
```sql
CREATE TABLE assignment_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  assignment_id UUID NOT NULL REFERENCES assignments(id) ON DELETE CASCADE,
  student_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,

  -- Submission data
  status VARCHAR(20) DEFAULT 'not_started' CHECK (status IN ('not_started', 'in_progress', 'submitted', 'graded')),
  started_at TIMESTAMP,
  submitted_at TIMESTAMP,

  -- Answers (JSONB for flexibility)
  answers JSONB, -- { "equation_id": { "coefficients": [...], "correct": true, "time_spent": 45 } }

  -- Grading
  score INTEGER,
  max_score INTEGER,
  percentage DECIMAL(5,2),
  grade VARCHAR(2), -- A, B, C, D, F
  teacher_feedback TEXT,
  teacher_adjusted_score INTEGER, -- if teacher overrides

  -- Metadata
  time_spent_seconds INTEGER,
  hints_used INTEGER DEFAULT 0,
  attempts_used INTEGER DEFAULT 0,
  is_late BOOLEAN DEFAULT FALSE,

  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),

  UNIQUE(assignment_id, student_id)
);

CREATE INDEX idx_submissions_assignment ON assignment_submissions(assignment_id);
CREATE INDEX idx_submissions_student ON assignment_submissions(student_id);
CREATE INDEX idx_submissions_status ON assignment_submissions(status);
```

### Student Progress Table (for practice mode)
```sql
CREATE TABLE student_progress (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  student_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,

  -- Overall stats
  total_equations_balanced INTEGER DEFAULT 0,
  total_correct INTEGER DEFAULT 0,
  total_incorrect INTEGER DEFAULT 0,
  current_level INTEGER DEFAULT 1,
  current_xp INTEGER DEFAULT 0,

  -- Streaks
  current_streak_days INTEGER DEFAULT 0,
  longest_streak_days INTEGER DEFAULT 0,
  last_activity_date DATE,

  -- Performance by reaction type (JSONB)
  reaction_type_stats JSONB, -- { "synthesis": { "correct": 10, "total": 12 }, ... }

  -- Achievements
  achievements_unlocked TEXT[], -- array of achievement IDs

  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),

  UNIQUE(student_id)
);

CREATE INDEX idx_progress_student ON student_progress(student_id);
```

### Achievements Table
```sql
CREATE TABLE achievements (
  id VARCHAR(50) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  icon VARCHAR(50),
  category VARCHAR(50),
  requirement_type VARCHAR(50),
  requirement_value INTEGER,
  points INTEGER DEFAULT 0
);

-- Seed with existing achievements
INSERT INTO achievements VALUES
  ('first_balance', 'First Balance', 'Balance your first equation', 'trophy', 'beginner', 'equations_balanced', 1, 10),
  ('perfect_five', 'Perfect Five', 'Balance 5 equations in a row correctly', 'star', 'streak', 'perfect_streak', 5, 25),
  -- ... rest of achievements
```

### Notifications Table (Optional - Future)
```sql
CREATE TABLE notifications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  type VARCHAR(50) NOT NULL,
  title VARCHAR(255) NOT NULL,
  message TEXT,
  link_url TEXT,
  is_read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_notifications_user ON notifications(user_id);
CREATE INDEX idx_notifications_unread ON notifications(user_id, is_read);
```

---

## User Stories

### Teacher User Stories

#### Epic 1: Account & Profile Management
- **T1.1**: As a teacher, I want to create an account with my email so I can access the platform
- **T1.2**: As a teacher, I want to verify my email to ensure account security
- **T1.3**: As a teacher, I want to add my school name and profile photo so students recognize me
- **T1.4**: As a teacher, I want to reset my password if I forget it

#### Epic 2: Class Management
- **T2.1**: As a teacher, I want to create a new class with a name and grade level
- **T2.2**: As a teacher, I want to generate a class code so students can easily join
- **T2.3**: As a teacher, I want to invite students via email so they get a direct link
- **T2.4**: As a teacher, I want to see a list of all students in my class
- **T2.5**: As a teacher, I want to remove a student from my class if they transfer out
- **T2.6**: As a teacher, I want to archive old classes from previous years

#### Epic 3: Assignment Creation
- **T3.1**: As a teacher, I want to create an assignment by selecting specific equations
- **T3.2**: As a teacher, I want to set a due date and point value for an assignment
- **T3.3**: As a teacher, I want to choose difficulty levels (beginner, intermediate, advanced)
- **T3.4**: As a teacher, I want to enable/disable hints with point deductions
- **T3.5**: As a teacher, I want to set time limits per equation to prevent rushing
- **T3.6**: As a teacher, I want to shuffle equations so students can't copy each other
- **T3.7**: As a teacher, I want to assign to multiple classes at once
- **T3.8**: As a teacher, I want to save assignments as drafts and publish later

#### Epic 4: Progress Monitoring
- **T4.1**: As a teacher, I want to see which students have completed an assignment
- **T4.2**: As a teacher, I want to view each student's score and time spent
- **T4.3**: As a teacher, I want to see which equations students struggled with
- **T4.4**: As a teacher, I want to add feedback comments to student submissions
- **T4.5**: As a teacher, I want to manually adjust a student's score if needed
- **T4.6**: As a teacher, I want to send reminders to students who haven't started

#### Epic 5: Analytics & Reporting
- **T5.1**: As a teacher, I want to see class-wide performance on each assignment
- **T5.2**: As a teacher, I want to view a histogram of score distribution
- **T5.3**: As a teacher, I want to see individual student progress over time
- **T5.4**: As a teacher, I want to identify struggling students automatically
- **T5.5**: As a teacher, I want to export grades to CSV for my gradebook
- **T5.6**: As a teacher, I want to print report cards for parent-teacher conferences

---

### Student User Stories

#### Epic 6: Account & Profile Management
- **S1.1**: As a student, I want to create an account with my email
- **S1.2**: As a student, I want to log in with Google to save time
- **S1.3**: As a student, I want to add my grade level and school
- **S1.4**: As a student, I want to upload a profile picture

#### Epic 7: Class Enrollment
- **S2.1**: As a student, I want to join a class using a class code
- **S2.2**: As a student, I want to join via email invitation link
- **S2.3**: As a student, I want to see my teacher's name before joining
- **S2.4**: As a student, I want to see all my classes on my dashboard
- **S2.5**: As a student, I want to leave a class if I drop the course

#### Epic 8: Assignment Completion
- **S3.1**: As a student, I want to see all my assignments in one place
- **S3.2**: As a student, I want to see due dates with countdown timers
- **S3.3**: As a student, I want to start an assignment and work through equations
- **S3.4**: As a student, I want to save my progress and continue later (if allowed)
- **S3.5**: As a student, I want to use hints if I'm stuck (and see point deduction)
- **S3.6**: As a student, I want to see immediate feedback on my answers
- **S3.7**: As a student, I want to submit my assignment when finished
- **S3.8**: As a student, I want to see my score right after submitting

#### Epic 9: Progress & Performance
- **S4.1**: As a student, I want to see my grade for each assignment
- **S4.2**: As a student, I want to view teacher feedback/comments
- **S4.3**: As a student, I want to see which equations I got wrong
- **S4.4**: As a student, I want to compare my score with the class average
- **S4.5**: As a student, I want to see my overall GPA across classes
- **S4.6**: As a student, I want to track my improvement over time with graphs

#### Epic 10: Gamification & Engagement
- **S5.1**: As a student, I want to see the class leaderboard
- **S5.2**: As a student, I want to earn achievements for milestones
- **S5.3**: As a student, I want to maintain a login streak for bonus points
- **S5.4**: As a student, I want to practice equations outside of assignments
- **S5.5**: As a student, I want to see my level and XP progress

---

## MVP Scope (Phase 1)

### Must-Have Features for MVP

#### Authentication (2 weeks)
- [ ] Email/password signup and login for teachers and students
- [ ] Email verification
- [ ] Password reset
- [ ] Basic profile management
- [ ] Role-based access control

#### Class Management (2 weeks)
- [ ] Teachers can create classes
- [ ] Generate unique class codes
- [ ] Students can join via class code
- [ ] View class roster
- [ ] Remove students from class

#### Assignment System (3 weeks)
- [ ] Teachers can create assignments
  - Select specific equations (from existing 20)
  - Set due date and points
  - Enable/disable hints
  - Assign to one or more classes
- [ ] Students see assignments in dashboard
- [ ] Students complete assignments
- [ ] Auto-grading based on correct answers
- [ ] Students see their scores

#### Basic Analytics (1 week)
- [ ] Teacher: View assignment completion status
- [ ] Teacher: See individual student scores
- [ ] Student: View their grades
- [ ] Student: See class average comparison

#### UI/UX Updates (1 week)
- [ ] Teacher dashboard layout
- [ ] Student dashboard layout
- [ ] Assignment creation form
- [ ] Assignment completion interface
- [ ] Mobile-responsive design

**Total MVP Timeline: ~9 weeks (2.25 months)**

### Nice-to-Have (Defer to Phase 2)
- Email invitations (use class codes for MVP)
- Real-time updates (use manual refresh for MVP)
- Advanced analytics and charts
- Teacher feedback comments
- Manual score adjustments
- Time limits per equation
- Multiple attempts
- Leaderboards
- Team challenges

---

## Future Enhancements (Post-MVP)

### Phase 2: Enhanced Features (3 months)
- Email invitation system
- Advanced analytics dashboard with charts
- Teacher feedback and comments on submissions
- Time limits and multiple attempts
- Export grades to CSV
- Print-friendly report cards
- Class announcements
- Student-to-teacher messaging

### Phase 3: Engagement Features (2 months)
- Real-time class leaderboards
- Team challenges
- Peer recognition (kudos system)
- Daily/weekly streaks with rewards
- More achievements
- Badges and trophies
- Parent view (read-only access)

### Phase 4: Advanced Functionality (3 months)
- Equation editor (teachers create custom equations)
- Question banks and templates
- Differentiated assignments (per-student customization)
- Adaptive difficulty (AI-powered)
- Video explanations for equations
- Discussion forums per class
- Mobile app (React Native)

### Phase 5: Enterprise Features (4 months)
- School/district administration accounts
- Multi-school management
- SSO integration (Google Workspace, Microsoft)
- LMS integration (Canvas, Google Classroom, Moodle)
- Detailed compliance (FERPA, COPPA, GDPR)
- Advanced security features
- White-labeling options
- API for third-party integrations

---

## Implementation Phases

### Phase 1: Foundation (Weeks 1-4)

**Week 1-2: Database & Authentication**
- Set up Supabase project
- Design and create database schema
- Implement authentication flows
- Build login/signup pages
- Email verification system

**Week 3-4: Basic Class Management**
- Teacher: Create class UI
- Generate class codes
- Student: Join class UI
- View roster functionality
- Basic profile pages

### Phase 2: Core Assignment System (Weeks 5-8)

**Week 5-6: Assignment Creation**
- Assignment creation form
- Equation selection interface
- Due date and settings configuration
- Assign to classes functionality
- Save draft assignments

**Week 7-8: Assignment Completion**
- Student assignment dashboard
- Assignment detail view
- Equation-solving interface (adapt existing playground)
- Auto-grading logic
- Submission and results flow

### Phase 3: Analytics & Polish (Weeks 9-10)

**Week 9: Basic Analytics**
- Teacher assignment analytics
- Student grade viewing
- Class performance summaries
- Score distribution views

**Week 10: Testing & Refinement**
- End-to-end testing
- Bug fixes
- Performance optimization
- User acceptance testing
- Documentation

### Phase 4: Beta Launch (Week 11)
- Deploy to production
- Onboard 5-10 pilot teachers
- Monitor usage and collect feedback
- Iterate based on feedback

---

## Technology Stack Recommendations

### Option 1: Supabase (Recommended)

**Pros:**
- PostgreSQL database (robust, scalable)
- Built-in authentication (email, OAuth)
- Real-time subscriptions (optional)
- Row-level security (RLS) for data protection
- Storage for profile photos
- Edge functions for custom logic
- Great free tier
- Easy to scale

**Cons:**
- Requires learning Supabase-specific patterns
- Vendor lock-in (though PostgreSQL is standard)

**Stack:**
```
Frontend: React + TypeScript + TailwindCSS (current)
Backend: Supabase (PostgreSQL + Auth + Storage)
Deployment: Vercel (frontend) + Supabase (backend)
Email: Supabase (built-in) or SendGrid
File Storage: Supabase Storage
Analytics: PostHog or Plausible
```

---

### Option 2: Convex

**Pros:**
- Real-time by default
- Excellent developer experience
- TypeScript-first
- Automatic API generation
- Built-in file storage
- Generous free tier

**Cons:**
- Less mature than Supabase
- Smaller community
- Uses its own query language (not SQL)

**Stack:**
```
Frontend: React + TypeScript + TailwindCSS (current)
Backend: Convex (database + auth + real-time)
Deployment: Vercel (frontend) + Convex (backend)
Email: SendGrid or Resend
Analytics: PostHog
```

---

### Option 3: Firebase

**Pros:**
- Very mature platform
- Excellent real-time capabilities
- Built-in authentication
- Large community
- Good mobile SDK (for future app)

**Cons:**
- NoSQL (Firestore) harder to query
- Can get expensive at scale
- Google vendor lock-in

**Stack:**
```
Frontend: React + TypeScript + TailwindCSS (current)
Backend: Firebase (Firestore + Auth)
Deployment: Firebase Hosting
Email: SendGrid
Analytics: Firebase Analytics
```

---

### Recommended Choice: **Supabase**

**Reasoning:**
1. PostgreSQL is industry standard and future-proof
2. Strong authentication and authorization (RLS)
3. Great for educational platforms (student data security)
4. Easy to migrate data if needed (standard SQL)
5. Generous free tier for starting out
6. Real-time features available when needed
7. Good documentation and community support

---

## Data Privacy & Security Considerations

### FERPA Compliance (USA)
- **Family Educational Rights and Privacy Act**
- Student education records must be protected
- Requires parental consent for students under 18
- Teachers must have legitimate educational interest
- Cannot share student data without consent

**Implementation:**
- Encrypt sensitive data at rest and in transit
- Implement strict access controls
- Provide data export for students
- Allow account deletion with data purging
- Privacy policy clearly stating data usage

### COPPA Compliance (USA)
- **Children's Online Privacy Protection Act**
- Applies to students under 13
- Requires verifiable parental consent
- Limited data collection

**Implementation:**
- Age verification during signup
- Parental consent flow for under-13 users
- Minimal data collection (only educational purposes)
- No third-party advertising or tracking

### GDPR Compliance (EU)
- **General Data Protection Regulation**
- Right to access data
- Right to delete data
- Right to data portability
- Clear consent mechanisms

**Implementation:**
- Privacy policy with GDPR language
- Cookie consent banner
- Data export functionality
- Account deletion option
- Clear consent checkboxes

### General Security Best Practices
- [ ] Password hashing with bcrypt/argon2
- [ ] HTTPS everywhere
- [ ] JWT token expiration and rotation
- [ ] Rate limiting on API endpoints
- [ ] SQL injection prevention (parameterized queries)
- [ ] XSS protection (sanitize inputs)
- [ ] CSRF protection
- [ ] Regular security audits
- [ ] Logging and monitoring
- [ ] Automated backups

---

## API Endpoints (REST API Design)

### Authentication
```
POST   /api/auth/signup           - Create new account
POST   /api/auth/login            - Login
POST   /api/auth/logout           - Logout
POST   /api/auth/forgot-password  - Request password reset
POST   /api/auth/reset-password   - Reset password with token
GET    /api/auth/verify-email     - Verify email with token
```

### Users/Profile
```
GET    /api/users/me              - Get current user profile
PATCH  /api/users/me              - Update profile
DELETE /api/users/me              - Delete account
GET    /api/users/:id             - Get user by ID (restricted)
```

### Classes (Teacher)
```
GET    /api/classes               - List teacher's classes
POST   /api/classes               - Create new class
GET    /api/classes/:id           - Get class details
PATCH  /api/classes/:id           - Update class
DELETE /api/classes/:id           - Delete class
GET    /api/classes/:id/students  - Get class roster
DELETE /api/classes/:id/students/:studentId - Remove student
POST   /api/classes/:id/generate-code - Generate new class code
```

### Classes (Student)
```
POST   /api/classes/join          - Join class with code
GET    /api/classes/my-classes    - Get student's classes
DELETE /api/classes/:id/leave     - Leave class
```

### Assignments (Teacher)
```
GET    /api/assignments           - List teacher's assignments
POST   /api/assignments           - Create assignment
GET    /api/assignments/:id       - Get assignment details
PATCH  /api/assignments/:id       - Update assignment
DELETE /api/assignments/:id       - Delete assignment
GET    /api/assignments/:id/submissions - Get all submissions
GET    /api/assignments/:id/analytics - Get assignment analytics
PATCH  /api/assignments/:id/submissions/:submissionId - Grade/add feedback
```

### Assignments (Student)
```
GET    /api/assignments/my-assignments - List student's assignments
GET    /api/assignments/:id            - Get assignment details
POST   /api/assignments/:id/start      - Start assignment
PATCH  /api/assignments/:id/progress   - Save progress
POST   /api/assignments/:id/submit     - Submit assignment
GET    /api/assignments/:id/submission - Get student's submission
```

### Analytics
```
GET    /api/analytics/teacher/overview       - Teacher overview stats
GET    /api/analytics/teacher/class/:id      - Class performance
GET    /api/analytics/teacher/student/:id    - Individual student report
GET    /api/analytics/student/overview       - Student overview stats
GET    /api/analytics/student/progress       - Student progress over time
```

### Progress (Practice Mode)
```
GET    /api/progress/me           - Get student's practice progress
PATCH  /api/progress/me           - Update practice progress
GET    /api/achievements          - List all achievements
GET    /api/achievements/me       - Get student's achievements
```

---

## Wireframes & UI Mockups (Descriptions)

### Teacher Dashboard
```
┌─────────────────────────────────────────────────────────────┐
│  ChemMatch Teacher                            [Profile] [⚙️] │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Welcome back, Ms. Chen! 👋                                 │
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │  📚 Classes  │  │ 📝 Active     │  │ ✅ Graded    │     │
│  │      4       │  │  Assignments  │  │    Today     │     │
│  │              │  │      12       │  │      8       │     │
│  └──────────────┘  └──────────────┘  └──────────────┘     │
│                                                              │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ My Classes                           [+ Create Class]│   │
│  ├─────────────────────────────────────────────────────┤   │
│  │ 🧪 Chemistry Period 3                               │   │
│  │ Grade 8 • 28 students • Code: ABC123              │   │
│  │ [View] [Create Assignment]                          │   │
│  ├─────────────────────────────────────────────────────┤   │
│  │ 🧬 IB Chemistry HL                                  │   │
│  │ Grade 11-12 • 22 students • Code: XYZ789          │   │
│  │ [View] [Create Assignment]                          │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                              │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ Recent Assignments                                   │   │
│  ├─────────────────────────────────────────────────────┤   │
│  │ Balancing Synthesis Reactions                        │   │
│  │ Due: Oct 30 • 24/28 submitted • Avg: 87%           │   │
│  │ [View Results] [Send Reminder]                       │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

### Student Dashboard
```
┌─────────────────────────────────────────────────────────────┐
│  ChemMatch                                   [Profile] [⚙️]  │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Hey Alex! 🎓 Level 12 • 2,450 XP                          │
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │  📚 Classes  │  │ ⏰ Due Soon   │  │ ⭐ Grade Avg │     │
│  │      3       │  │      2        │  │    92%       │     │
│  └──────────────┘  └──────────────┘  └──────────────┘     │
│                                                              │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ 🔥 Upcoming Assignments                              │   │
│  ├─────────────────────────────────────────────────────┤   │
│  │ ⚠️ Balancing Combustion Reactions                  │   │
│  │ Chemistry P3 • Due in 2 hours • 50 pts              │   │
│  │ [Start Assignment]                                   │   │
│  ├─────────────────────────────────────────────────────┤   │
│  │ Synthesis & Decomposition Practice                   │   │
│  │ IB Chemistry • Due Oct 31 • 100 pts                │   │
│  │ [Continue] (50% complete)                            │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                              │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ My Classes                              [+ Join Class]│   │
│  ├─────────────────────────────────────────────────────┤   │
│  │ Chemistry Period 3 • Ms. Chen                        │   │
│  │ 3 assignments • Class rank: #5                       │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

### Assignment Creation Form (Teacher)
```
┌─────────────────────────────────────────────────────────────┐
│  Create Assignment                                    [✕]   │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Title: [________________________________]                   │
│  Description:                                                │
│  [____________________________________________]              │
│  [____________________________________________]              │
│                                                              │
│  📝 Equation Selection                                       │
│  ○ Select specific equations                                │
│  ● Select by difficulty: [Intermediate ▼]                   │
│  ○ Select by reaction type                                  │
│                                                              │
│  Number of equations: [10 ▼]                                │
│                                                              │
│  📅 Due Date: [Oct 30, 2025 ▼] Time: [11:59 PM ▼]         │
│                                                              │
│  💯 Points: [100]                                            │
│                                                              │
│  ⚙️ Settings                                                │
│  ☑ Shuffle equation order                                   │
│  ☑ Allow hints (−5 pts each)                               │
│  ☐ Time limit per equation: [__] minutes                   │
│  Max attempts: [1 ▼]                                        │
│  ☑ Show correct answers after submission                    │
│                                                              │
│  🎓 Assign to:                                              │
│  ☑ Chemistry Period 3 (28 students)                        │
│  ☐ IB Chemistry HL (22 students)                           │
│                                                              │
│  [Save Draft]          [Preview]    [Create Assignment]     │
└─────────────────────────────────────────────────────────────┘
```

---

## Success Metrics & KPIs

### Product Metrics
- **User Acquisition:**
  - Number of teacher signups per month
  - Number of student signups per month
  - Teacher-to-student ratio

- **Engagement:**
  - Daily active users (DAU)
  - Weekly active users (WAU)
  - Average session duration
  - Equations balanced per student per week
  - Assignment completion rate

- **Retention:**
  - 7-day retention rate
  - 30-day retention rate
  - Class churn rate (archived classes)

- **Usage:**
  - Average assignments per teacher per month
  - Average students per class
  - Average equations per assignment

### Educational Outcomes
- Student score improvement over time
- Reduction in time to balance equations
- Increase in confidence (student surveys)
- Teacher satisfaction scores (NPS)

### Technical Metrics
- Page load time (< 2 seconds)
- API response time (< 500ms)
- Error rate (< 0.1%)
- Uptime (> 99.9%)

---

## Risk Analysis & Mitigation

### Technical Risks

**Risk 1: Database Performance at Scale**
- Impact: Slow queries with 10,000+ students
- Mitigation: Index optimization, query caching, database read replicas
- Monitoring: Query performance logging

**Risk 2: Authentication Security Breach**
- Impact: Unauthorized access to student data
- Mitigation: Strong encryption, regular security audits, bug bounty program
- Monitoring: Suspicious activity alerts

**Risk 3: Data Loss**
- Impact: Loss of student work and grades
- Mitigation: Automated daily backups, point-in-time recovery
- Monitoring: Backup verification tests

### Product Risks

**Risk 4: Low Teacher Adoption**
- Impact: Not enough teachers sign up
- Mitigation: Focus on great onboarding, teacher testimonials, free tier
- Monitoring: Signup conversion rates

**Risk 5: Assignment Creation Too Complex**
- Impact: Teachers frustrated with UI
- Mitigation: User testing, simplified MVP, video tutorials
- Monitoring: Assignment creation completion rate

**Risk 6: Students Find Loopholes**
- Impact: Cheating or gaming the system
- Mitigation: Equation shuffling, anti-cheat measures, teacher monitoring tools
- Monitoring: Suspicious submission patterns

### Legal/Compliance Risks

**Risk 7: FERPA/COPPA Violations**
- Impact: Legal issues, loss of trust
- Mitigation: Legal review, clear privacy policies, parental consent flows
- Monitoring: Regular compliance audits

**Risk 8: Copyright Issues (Equations)**
- Impact: DMCA takedowns
- Mitigation: Use only public domain or original equations
- Monitoring: Content review

---

## Go-to-Market Strategy

### Phase 1: Pilot Program (Month 1-2)
- Recruit 5-10 pilot teachers from network
- Offer free premium features for feedback
- Weekly check-ins and rapid iteration
- Case study documentation

### Phase 2: Soft Launch (Month 3-4)
- Launch to 50-100 teachers
- Social media marketing (chemistry teacher communities)
- Blog posts and video tutorials
- Referral program (invite 3 teachers, get premium)

### Phase 3: Public Launch (Month 5-6)
- Product Hunt launch
- Press outreach to education publications
- Partnerships with chemistry teacher organizations
- Conference presentations (NSTA, etc.)

### Phase 4: Growth (Month 7-12)
- Content marketing (lesson plans, resources)
- SEO optimization
- Paid advertising (Google Ads, Facebook)
- Integration with LMS platforms
- Freemium model with premium features

---

## Pricing Strategy (Future)

### Free Tier
- Up to 2 classes
- 30 students total
- 10 assignments per month
- Basic analytics
- Community support

### Teacher Pro ($9.99/month or $89/year)
- Unlimited classes
- Unlimited students
- Unlimited assignments
- Advanced analytics
- Export grades
- Priority support
- Custom equations (future)

### School/District ($299/year per school)
- All Pro features
- School admin dashboard
- SSO integration
- Dedicated account manager
- Custom training
- SLA guarantee

---

## Next Steps

### Immediate Actions
1. **Validate with Teachers**: Interview 10-15 chemistry teachers to validate requirements
2. **Choose Tech Stack**: Finalize decision (recommend Supabase)
3. **Create Detailed Designs**: Wireframes → High-fidelity mockups
4. **Set Up Development Environment**: Repository structure, Supabase project, CI/CD

### Before Implementation
- [ ] Get user feedback on requirements spec
- [ ] Prioritize features for MVP
- [ ] Create detailed sprint plan
- [ ] Set up project management (Linear/Jira)
- [ ] Assemble team or confirm solo development timeline

---

## Document Change Log

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | Oct 29, 2025 | Ruhan Singh | Initial requirements document |

---

## Appendix

### Glossary
- **Assignment**: A set of chemistry equations assigned by teacher to students
- **Class/Batch**: A group of students taught by one teacher
- **Submission**: A student's completed assignment
- **Equation**: A chemical equation to be balanced
- **Practice Mode**: Free play without grades
- **RLS**: Row-Level Security (database security model)
- **FERPA**: Family Educational Rights and Privacy Act
- **COPPA**: Children's Online Privacy Protection Act

### References
- Current ChemMatch codebase: `/Users/rakeshsingh/work/personal/chem-match`
- Supabase Documentation: https://supabase.com/docs
- FERPA Guidelines: https://www2.ed.gov/policy/gen/guid/fpco/ferpa/index.html
- COPPA Compliance: https://www.ftc.gov/business-guidance/privacy-security/childrens-privacy

---

**END OF DOCUMENT**

_This requirements specification is a living document and will be updated as the project evolves._
