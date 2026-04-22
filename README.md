## Functional Guide

### 1. Application Purpose

CodePack is a Single Page Application (SPA) built with Angular and Firebase, designed for small development teams.

🚧 **Project Status:** The application is currently under active development. Some features may be incomplete or subject to change.

The main goal of the application is to improve team collaboration by providing tools for project management (packs), task tracking, code snippet sharing, and real-time communication.

The platform allows developers to organize their workflow, collaborate efficiently, and manage resources in one centralized place.

---

### 2.User Roles

#### Guest Users
1.Can view public page (home page)
2.Can register
3.Can log in

#### Authenticated User
1.Can create, edit, and delete tasks
2.Can create and join teams
3.Can communicate via chat
4.Can view and edit their profile

---

### 3. Public Features

The following features are accessible without authentication:

- **Home page** – available to all users. Visitors can explore the application, learn about its purpose, and understand its main functionalities.
- **Login page** – allows existing users to sign in.
- **Registration page** – allows new users to create an account.

Users who are not logged in can browse the home page to get familiar with the platform and decide whether they want to log in or register.

#### Authenticated User Features

After logging in, users gain access to the full functionality of the application:

- Create new tasks
- Edit and manage their own tasks
- Delete their own tasks
- Create and manage packs (projects)
- Create and join teams
- Upload and view code snippets
- Communicate with other users through a real-time chat system
- View and edit their user profile

---

### 4. Main Application Flow

1. The user opens the application and browses the home page.
2. The user registers or logs into their account.
3. After authentication, the user accesses the dashboard.
4. The user creates or joins a team.
5. The user creates a profile and adds tasks.
6. The user tracks and manages their tasks.
7. The user communicates with team members through the chat system.

### 5. Data Structure

The application uses several main data collections stored in Firebase.

#### User Object
- email (string) – e.g. "nikola.stoyanov@example.com"
- name (string) – e.g. "Nikola Stoqnov"
- role (string) – e.g. "Fullstack Developer"
- team (string) – e.g. "Wizards"

#### Task Object

- createdAt (timestamp) – date and time when the task was created (e.g. April 21, 2026 at 12:07:45 PM UTC+3)
- dueDate (string) – deadline for the task (e.g. "2026-04-21")
- status (string) – current state of the task (e.g. "in-progress")
- title (string) – task title (e.g. "т")
- userId (string) – ID of the user who created or owns the task

#### Chat Message Object

- text (string) – the content of the message (e.g. "Hi")
- timestamp (timestamp) – date and time when the message was sent (e.g. April 20, 2026 at 4:46:27 PM UTC+3)
- user (string) – email of the user who sent the message (e.g. "ivan.petrov@example.com")

---

### 6. Project Architecture
### Application structure (src/app)
#### core/
Global application logic:

- guards/ – route protection (e.g. auth-guard, profile.guard)
- models/ – data models (e.g. app-user.model)
- services/ – core services (auth, chat, task, user services)

#### features/
Main application features:

- auth/
  - login/
  - register/
  - forgot-password/

- chat/ – chat functionality
- home/ – home page
- task/ – task management
- user/
  - profile/ – user profile
 
#### firebase/
- firebase.config.ts – Firebase configuration

#### layouts/
Application layouts:

- main-layout/
- private-layout/

#### shared/
Reusable UI elements:

- components/
  - navbar/
  - footer/
  - private-navbar/
 
---

### 7. Technologies Used

- Angular
- TypeScript
- Firebase (Authentication, Firestore, Storage)
- RxJS
- HTML & CSS

---

### 8.How to Run the Project

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
