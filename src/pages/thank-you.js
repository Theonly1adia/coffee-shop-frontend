export default function ThankYou() {
    return (
      <div
        className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white"
        style={{ backgroundImage: "url('/beads.jpeg')" }}
      >
        <div className="bg-black p-8 rounded-lg">
          <h1 className="text-3xl font-bold text-purple-600">Thank you for Signing Up!</h1>
          <p className="mt-4 text-white text-center">We appreciate you joining us.</p>
        </div>
      </div>
    );
  }
  