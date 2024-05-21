# Notification System with Firebase and React

## Project Overview

This project is a single-page application (SPA) built with React and TypeScript. It leverages Firebase Firestore to handle user notifications based on their interactions with UI elements. The application demonstrates the integration of Firebase with React, providing functionalities to add, display, and mark notifications as read.

## Features

- **Add Notifications:** Users can generate notifications by interacting with buttons.
- **Display Notifications:** Notifications are displayed in real-time using Firestore.
- **Mark as Read:** Users can mark notifications as read, which updates the state in Firestore.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Firebase**: A platform developed by Google for creating mobile and web applications.
  - **Firestore**: A flexible, scalable database for mobile, web, and server development.

## Setup and Installation

### Prerequisites

Ensure you have the following installed:

- Node.js
- npm (Node Package Manager)

### Steps to Setup

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/your-username/notification-system.git
    cd notification-system
    ```

2. **Install Dependencies:**

    ```bash
    npm install
    ```

3. **Firebase Configuration:**

   - Go to the [Firebase Console](https://console.firebase.google.com/).
   - Create a new project or use an existing one.
   - Navigate to **Project Settings** and click on the **</> (Web)** icon to create a new web app.
   - Copy the Firebase configuration and replace the content in `src/firebaseConfig.ts` with your configuration:

    ```typescript
    // src/firebaseConfig.ts
    import { initializeApp } from "firebase/app";
    import { getFirestore } from "firebase/firestore";

    const firebaseConfig = {
      apiKey: "YOUR_API_KEY",
      authDomain: "YOUR_AUTH_DOMAIN",
      projectId: "YOUR_PROJECT_ID",
      storageBucket: "YOUR_STORAGE_BUCKET",
      messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
      appId: "YOUR_APP_ID",
      measurementId: "YOUR_MEASUREMENT_ID"
    };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    export { db };
    ```

4. **Run the Application:**

    ```bash
    npm start
    ```

    The application should now be running on `http://localhost:3000`.

## Project Structure

```plaintext
src/
├── components/
│   ├── Notification.tsx          # Component to display individual notifications
│   └── NotificationSystem.tsx    # Component to manage and display notifications
├── firebaseConfig.ts             # Firebase configuration file
├── App.tsx                       # Main App component
├── index.tsx                     # Entry point of the application
└── App.css                       # CSS for styling (optional)
