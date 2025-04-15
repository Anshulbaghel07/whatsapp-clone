# WhatsApp Clone 💬

A simple WhatsApp-inspired chat application built using **React.js** and **Firebase**.

## 🚀 Features

- 🔐 Firebase Authentication (Login, Register, Logout)
- 🎯 Interest Selection after login:
  - Playing Cricket (Can Send & Read Messages)
  - Watching Cricket (Read-Only Access)
- 💬 Real-time Group Chat (Firebase Realtime Database)
- 😀 Emoji Support
- 🔄 Live message updates
- 🔒 Role-based access control

## 🧠 Tech Stack

- **Frontend**: React.js + Tailwind CSS
- **Backend / Realtime DB**: Firebase Realtime Database
- **Authentication**: Firebase Auth
- **Emoji Picker**: emoji-picker-react
- **Hosting**: Firebase Hosting / Vercel (optional)

## 🛠️ Setup Instructions

1. Clone the repo:
   ```bash
   git clone https://github.com/Anshulbaghel07/whatsapp-clone.git
   cd whatsapp-clone

2. Install dependencies:
   npm install

3. Create a .env file in the root folder and add your Firebase config:  
   VITE_API_KEY=your_api_key
   VITE_AUTH_DOMAIN=your_project.firebaseapp.com
   VITE_DATABASE_URL=your_db_url
   VITE_PROJECT_ID=your_project_id
   VITE_STORAGE_BUCKET=your_storage_bucket
   VITE_MESSAGING_SENDER_ID=your_msg_id
   VITE_APP_ID=your_app_id
   VITE_MEASUREMENT_ID=your_measurement_id

4. Run the app locally:
   npm run dev


🧠 Role-Based Chat Control
After login, users must select an interest:

Playing Cricket: Can send & receive messages.

Watching Cricket: Can only read messages.

Chat logic uses Firebase Auth + Realtime Database + role check to control message input visibility.


✨ Bonus Features
Clean responsive UI

Role-based message input

Firebase-powered real-time chat


👨‍💻 Author
Made with ❤️ by Anshul Baghel



