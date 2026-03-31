## Functional Guide

### 1. Application Purpose

CodePack is a Single Page Application (SPA) built with Angular and Firebase, designed for small development teams.

🚧 **Project Status:** The application is currently under active development. Some features may be incomplete or subject to change.

The main goal of the application is to improve team collaboration by providing tools for project management (packs), task tracking, code snippet sharing, and real-time communication.

The platform allows developers to organize their workflow, collaborate efficiently, and manage resources in one centralized place.

---

### 2. Main User Flows

#### Public Flow (Guest Users)
1. The user opens the application.
2. Views public content (home page / forum).
3. Can choose to:
   - Register
   - Log in

#### Authentication Flow
1. The user registers using a form.
2. Data is sent to Firebase Authentication.
3. After successful login, access to the private section is granted.

#### Private Flow (Authenticated Users)
1. The user logs into the system.
2. Accesses the dashboard.
3. Creates or joins a team.
4. Creates a “pack” (project).
4. Manages tasks (roadmap).
5. Uploads and views code snippets.
6. Communicates with team members via chat.
7. Views and edits their profile.

---

### 3. Core Features

#### Authentication
- User registration and login via Firebase
- Route protection using guards (auth.guard, guest.guard)
- Secure access to private routes

#### Packs (Projects)
- Create, edit, and delete packs
- View pack details

#### Teams
- Create teams
- Add and manage members

#### Tasks / Roadmap
- Create, edit, and delete tasks
- Organize project workflow

#### Code Snippets
- Upload and share code
- View snippet collections

#### Chat System
- Real-time messaging between team members
- Powered by Firebase

#### User Profile
- View and manage personal profile information

---

### 4. User Interaction

Users interact with the application through:

- Navigation bar (navbar)
- Forms (login, register, create/edit)
- Action buttons (create, edit, delete)
- Dynamic lists (packs, tasks, snippets)
- Chat interface

The application is built as an SPA, enabling smooth navigation without page reloads.

---

### 5. System Architecture

The application follows a modular structure:

- **Core** – global services, guards, and interceptors
- **Shared** – reusable components and pipes
- **Features** – main application functionalities
- **Firebase** – backend services (Authentication, Firestore, Storage)

---

### 6. Technologies Used

- Angular
- Firebase (Authentication, Firestore, Storage)
- TypeScript
- HTML & CSS

---

### 7. How to Run the Project

```bash
# Clone the repository
git clone https://github.com/Ina2118/CodePack-Angular-Project.git

# Navigate to project folder
cd codepack

# Install dependencies
npm install

# Start the application
ng serve

# Open in browser
http://localhost:4200/