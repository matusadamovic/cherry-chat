# Cherry Chat

A scaffolded real-time video chat web application built with React, Vite and Firebase.

## Features

- Firebase Authentication (Google and anonymous users)
- WebRTC video chat placeholder
- Internationalization via **react-i18next**
- Light/Dark theme toggle with Tailwind CSS
- Progressive Web App configuration
- Stub modules for future mini-games

## Getting Started

1. Copy `.env.example` to `.env` and provide your Firebase credentials.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Lint the project:
   ```bash
   npm run lint
   ```
5. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

- `src/pages` – application pages (Home, Chat)
- `src/components` – reusable components
- `src/context` – React context providers (theme)
- `src/games` – stubbed mini-game modules
- `src/locales` – i18n translation files

This scaffold focuses on the MVP features. Additional functionality such as
real WebRTC signaling, moderation tools and premium matching can be built on top
of this foundation.
