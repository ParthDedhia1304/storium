🚀 Storium — Secure File Storage & Sharing

A modern, secure, and decentralized file storage platform built with the MERN stack, empowering users to upload, manage, and share digital assets with granular control and IPFS-based decentralized storage.

✨ Features

✅ Secure Authentication — Login seamlessly via Google OAuth using Better Auth.
✅ Decentralized Storage — Files are uploaded to IPFS via Pinata, ensuring data integrity and privacy.
✅ File Management — Upload, rename, download, and delete files intuitively.
✅ Granular Sharing — Share files with custom permissions: read, update, delete.
✅ Subscription Management — Integrated with Paddle for premium storage tiers.
✅ Infinite Scrolling — Smooth and optimized browsing experience.
✅ Modern UI/UX — Built with Tailwind CSS + Shadcn UI, featuring responsive design and dark mode.

🛠️ Tech Stack
Category	Technologies
Frontend	Next.js, React, TypeScript, Tailwind CSS, Shadcn UI, React Query
Backend	Node.js, Hono
Database	MongoDB, Mongoose
Auth	Better Auth (Google OAuth)
Payments	Paddle
Storage	Pinata, IPFS
⚙️ Getting Started

Follow the steps below to run Storium locally:

1. Prerequisites

Ensure you have:

Node.js v18 or later

Bun (or npm/yarn)

MongoDB instance (e.g., MongoDB Atlas
)

API keys for Google Cloud, Pinata, and Paddle

2. Installation
# Clone the repository
git clone https://github.com/ParthDedhia1304/storium.git
cd storium

# Install dependencies
bun install

3. Environment Setup

Create a .env file in the project root and add:

# Authentication
BETTER_AUTH_SECRET="your_strong_secret_for_better_auth"
BETTER_AUTH_URL="http://localhost:3000"
GOOGLE_CLIENT_ID="your_google_client_id"
GOOGLE_CLIENT_SECRET="your_google_client_secret"
NEXT_PUBLIC_APP_URL="http://localhost:3000"

# Database
MONGODB_URI="your_mongodb_connection_string"

# File Storage (Pinata)
PINATA_JWT="your_pinata_jwt"
NEXT_PUBLIC_GATEWAY_URL="your_pinata_gateway_url"

# Payments (Paddle)
NEXT_PUBLIC_PADDLE_CLIENT_TOKEN="your_paddle_client_token"
PADDLE_API_KEY="your_paddle_api_key"
PADDLE_PRODUCT_ID="your_paddle_product_id"
PADDLE_SUBSCRIPTION_WEBHOOK_SECRET_KEY="your_paddle_webhook_secret"

4. Run the Development Server
bun run dev


Then open 👉 http://localhost:3000

🧠 Future Improvements

🔒 End-to-End Encryption — Client-side encryption for maximum data security.

👥 Team Collaboration — Shared workspaces and group access controls.

📂 Advanced File Previews — Inline previews for media and document types.

🔍 Smart Search — Full-text and tag-based search features.

🧾 License

This project is licensed under the MIT License.
See the LICENSE
 file for more details.
