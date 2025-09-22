import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
        <MapPin className="h-6 w-6 text-blue-600" />
        Corporate Headquarter
      </h3>

      <div className="space-y-2 text-gray-600 text-sm">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-blue-500" />
          <span>Singapore</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-blue-500" />
          <span>+6591311877</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4 text-blue-500" />
          <span>contact@supportengine.io</span>
        </div>
      </div>

      {/* Google Map */}
      <div className="h-64 rounded-xl overflow-hidden shadow-md">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3106.1683935275815!2d-0.12260218465053075!3d51.50328227963471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d8e203%3A0x6a218041a31d923!2sLondon%20Eye!5e0!3m2!1sen!2suk!4v1628173428000!5m2!1sen!2suk"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps location of Corporate Headquarters"
        ></iframe>
      </div>
    </div>
  );
}
