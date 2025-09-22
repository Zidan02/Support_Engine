import { MailPlus, PhoneCall } from "lucide-react";

export default function ContactForm() {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
        <PhoneCall className="h-6 w-6 text-blue-600" />
        Get in Touch with SupportEngine
      </h3>

      <p className="text-gray-600">
        Have questions or need IT support? We&apos;re here to help! Whether
        you&apos;re looking to streamline your IT operations, optimize asset
        management, or improve service delivery, SupportEngine has the solutions
        you need.
      </p>
      <p className="text-gray-600 mb-3 flex gap-2">
        <MailPlus className="h-5 w-5 text-blue-600" />
        Reach out today and let’s power your IT services together!
      </p>

      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Name"
            className="p-3 border border-gray-300 rounded-lg w-full"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 border border-gray-300 rounded-lg w-full"
          />
        </div>
        <input
          type="text"
          placeholder="Subject"
          className="p-3 border border-gray-300 rounded-lg w-full"
        />
        <textarea
          placeholder="Your message (optional)"
          rows={4}
          className="p-3 border border-gray-300 rounded-lg w-full"></textarea>
        <button
          type="submit"
          className="px-5 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
          Submit Inquiry
        </button>
      </form>
    </div>
  );
}
