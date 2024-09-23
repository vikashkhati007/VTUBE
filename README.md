# VTUBE - YouTube Video Fetching Platform

VTUBE is a web application similar to YouTube that allows users to fetch videos, likes, comments, YouTuber profiles, subscribers, and more using the YouTube API. Built with Next.js, VTUBE provides an interactive and user-friendly experience for exploring YouTube content.

## Features
- Fetch and display YouTube videos in a responsive layout.
- Display video likes, comments, and other metadata.
- View detailed YouTuber profiles, including subscriber counts.
- Seamless integration with YouTube’s API using Google API keys.

## Tech Stack
- **Frontend**: Next.js, React
- **API**: YouTube Data API
- **Authentication**: Google OAuth (Google ID, Google Secret)
- **Styling**: [Your choice, e.g., Tailwind CSS, CSS Modules, etc.]

## Getting Started

### Prerequisites
To run this project locally, you will need:
- Node.js
- A Google Cloud project with YouTube Data API enabled
- A Google API key, Google Client ID, and Google Secret

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/vtube.git
    cd vtube
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables. Create a `.env.local` file in the root directory with the following:
    ```
    API_KEY=your-google-api-key
    GOOGLE_ID=your-google-client-id
    GOOGLE_SECRET=your-google-client-secret
    ```

4. Start the development server:
    ```bash
    npm run dev
    ```

5. Open `http://localhost:3000` in your browser.

## Usage
Once you set up the project, you can search for YouTube videos, view details such as likes and comments, and check out YouTuber profiles. The app provides a clean UI for easy browsing of YouTube content.

## Contributions
We welcome contributions from the community! See the [Contributing Guidelines](CONTRIBUTING.md) for more details.

## License
This project is licensed under the MIT License.
