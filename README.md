
# Study Flow

Study Flow is a comprehensive educational platform designed for students to manage tasks, complete assignments, and track exam submissions, while enabling teachers to grade assignments and provide feedback. The platform includes a user dashboard for tracking assignments and a teacher dashboard for grading and feedback, with a user-friendly design and robust error handling for secure and efficient use.


## Quick Links
• [Live Website](https://stydy-flow.web.app/) 

• [Client Repository](https://github.com/Sohelrana2815/study-flow-client) 

• [Server Repository](https://github.com/Sohelrana2815/study-flow-server) 
## Key Features
• Task Management: Users can add, complete, and remove study tasks, with filtering options based on priority and status.

• Assignments Dashboard: Allows students to view, take, update, and delete assignments,    and lets teachers create assignments.

• Exam Submission Tracking: Tracks exam submissions, with grading capabilities for teachers.

• Feedback and Grading: Teachers can review submitted assignments, provide grades and feedback, and update assignment status.

• Interactive User Guide: A built-in guide helps new users understand the application’s features and functionalities.

• Secure Authentication: JWT-based authentication for secure user sessions.

• Responsive Design: Fully responsive across desktop and mobile.

## Tech Stack

• Frontend: React.js, Tailwind CSS, AOS (Animate On Scroll for smooth transitions), React Hot Toast (for dynamic notifications)

• Backend: Node.js, Express.js, MongoDB

• Authentication: JSON Web Tokens (JWT) for secure user access

• Alerts and Notifications: SweetAlert2 for intuitive modals and React Hot Toast for real-time notifications

• Deployment: Firebase (Frontend), Vercel (Backend)

## Getting Started

* Client stup

1..   git clone: https://github.com/Sohelrana2815/study-flow-client
cd study-flow-client

2.. Install Dependencies: npm install

3.. Environment Variables:

• In the root of your client repository, create a .env file to hold only the Firebase-related configuration values, which you can retrieve from the Firebase project settings.

VITE_FIREBASE_API_KEY=your-firebase-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
VITE_FIREBASE_PROJECT_ID=your-firebase-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id
VITE_FIREBASE_APP_ID=your-firebase-app-id


4.. Run the Client:

• npm run dev



* Server Setup
Clone the Server Repository:


git clone: https://github.com/Sohelrana2815/study-flow-server

1.. cd study-flow-server


2.. Install Dependencies: npm install



3..Environment Variables: Create a .env file in the server root and configure environment variables like the MongoDB connection URI and JWT secret key




* DB_USER=your_DB_username

* DB_PASS=your_DB_pssword

* ACCESS_TOKEN_SECRET=your-jwt-secret

Start the Server: nodemon index.js


The server will be accessible at http://localhost:5000

