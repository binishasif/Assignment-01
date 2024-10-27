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
      </div>
    );
  }