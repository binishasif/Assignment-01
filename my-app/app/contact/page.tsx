export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-cyan-300 text-white flex flex-col items-center justify-center text-center py-20">
      <h2 className="text-5xl font-extrabold mb-4 drop-shadow-lg">Contact Me</h2>
      <p className="text-xl font-semibold max-w-2xl mx-auto mb-6">
        I would love to hear from you! Feel free to reach out for collaborations or just a friendly chat.
      </p>
      <button className="px-6 py-3 bg-black text-white rounded-lg shadow-md hover:bg-cyan-700 transition duration-300">
        Get in Touch
      </button>
      <a
        href="https://www.linkedin.com/in/binish-asif-373403300"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 mt-8 text-white hover:text-cyan-700 transition duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="mr-2"
        >
          <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.12 20.4H3.56V9.02h3.56v11.38zm-1.78-12.95c-1.14 0-2.07-.92-2.07-2.05 0-1.13.93-2.06 2.07-2.06s2.07.93 2.07 2.06c0 1.13-.93 2.05-2.07 2.05zm15.68 12.95h-3.56v-5.48c0-1.31-.03-3-1.83-3-1.84 0-2.12 1.44-2.12 2.91v5.57h-3.56V9.02h3.42v1.55h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.22z"/>
        </svg>
        <span className="text-lg font-semibold">Connect with me on LinkedIn</span>
      </a>
    </div>
  );
}
