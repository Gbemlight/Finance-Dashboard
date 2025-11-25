# Finance Dashboard

A modern, responsive finance dashboard application built with Next.js, Tailwind CSS, and Appwrite for backend services. This project features a complete user authentication flow and a clean, intuitive user interface.

## Features

-   **User Authentication**: Secure sign-up and sign-in functionality using Appwrite.
-   **Session Management**: Persistent user sessions with global state management via React Context.
-   **Protected Routes**: Dashboard is only accessible to authenticated users.
-   **Responsive Design**: A seamless experience on both desktop and mobile devices, featuring a desktop sidebar and a mobile bottom navigation bar.
-   **Modern UI**: Styled with Tailwind CSS and using icons from `lucide-react`.
-   **Client-Side Validation**: Forms include validation for a better user experience.

## Tech Stack

-   **Framework**: Next.js (App Router)
-   **Authentication**: Appwrite
-   **Styling**: Tailwind CSS
-   **Icons**: Lucide React
-   **State Management**: React Context API

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

1.  **Node.js**: Make sure you have Node.js (v18 or newer) installed. You can download it from nodejs.org.
2.  **Appwrite Account**: You need an Appwrite project. If you don't have one, create a free account at cloud.appwrite.io.

### Appwrite Setup

1.  **Create a Project**: In your Appwrite console, create a new project.
2.  **Create a Web Platform**: In your project's dashboard, add a new "Web App" platform. Use `localhost` for the hostname during local development.
3.  **Enable Email/Password Auth**: Go to the "Auth" section and enable the Email/Password provider.
4.  **Get Project Credentials**: From your project's "Settings" page, copy the **Project ID** and the **API Endpoint**.

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/finance-dashboard.git
    cd finance-dashboard
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Create an environment file**:
    Create a file named `.env.local` in the root of your project and add your Appwrite credentials:

    ```env
    NEXT_PUBLIC_APPWRITE_PROJECT_ID=YOUR_PROJECT_ID
    NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
    ```

    Replace `YOUR_PROJECT_ID` with the ID you copied from your Appwrite project settings.

4.  **Run the development server**:
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

Open http://localhost:3000 with your browser to see the result.

## Project Structure

```bash
finance-dashboard/
├── components/         # Shared React components (Header, Sidebar, UserContext)
├── lib/                # Appwrite client configuration
├── public/             # Static assets (images, fonts)
├── src/
│   ├── app/            # Next.js App Router pages and layouts
│   │   ├── (auth)/     # (Optional) Group for auth pages
│   │   ├── dashboard/  # Protected dashboard page
│   │   ├── signin/
│   │   ├── signup/
│   │   ├── layout.js   # Root layout
│   │   └── page.js     # Landing page
│   └── globals.css     # Global styles
├── .env.local          # Environment variables (ignored by Git)
├── jsconfig.json       # JavaScript configuration
├── next.config.mjs     # Next.js configuration
└── README.md           # This file
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
