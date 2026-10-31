import React from "react";

// Note: This component uses Tailwind CSS for styling.
// Make sure Tailwind is configured in your project.

export default function MapContactCard() {
  // Social media contact information
  const socialLinks = [
    {
      id: 1,
      name: "WhatsApp",
      link: "https://wa.me/1234567890", // Replace with your WhatsApp number
      icon: "📱",
    },
    {
      id: 2,
      name: "Facebook",
      link: "https://facebook.com/yourprofile", // Replace with your Facebook URL
      icon: "f",
    },
    {
      id: 3,
      name: "Instagram",
      link: "https://instagram.com/yourprofile", // Replace with your Instagram URL
      icon: "📷",
    },
    {
      id: 4,
      name: "WhatsApp",
      link: "https://wa.me/1234567890", // Replace with your WhatsApp number
      icon: "💬",
    },
  ];

  // Map image URL - replace with your actual map image
  const mapImageUrl =
    "https://via.placeholder.com/420x180?text=Map+Location";

  return (
    <div className="min-h-screen bg-[#161616] flex items-center justify-center p-8">
      <div className="w-[920px] max-w-full bg-[#8f5570] rounded-sm shadow-lg">
        {/* top area with map */}
        <div className="px-8 pt-10 pb-6 relative">
          {/* map box with image */}
          <div className="mx-auto w-[420px] h-[180px] bg-[#e6e6e6] rounded-sm overflow-hidden">
            <img
              src={mapImageUrl}
              alt="Location Map"
              className="w-full h-full object-cover"
            />
          </div>

          {/* 'Map' label on the right of the map box */}
          <div className="absolute right-10 top-[86px] text-[#111111] text-lg font-medium">
            Map
          </div>
        </div>

        {/* divider line */}
        <div className="h-[1px] bg-white/70 opacity-90"></div>

        {/* footer with contact options */}
        <div className="px-8 py-8 grid grid-cols-2 gap-6">
          {/* left column */}
          <div className="flex flex-col gap-5">
            {socialLinks.slice(0, 2).map((social) => (
              <a
                key={social.id}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-white text-lg hover:opacity-80 transition-opacity duration-200 cursor-pointer group"
              >
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/90 text-[#8f5570] font-bold group-hover:scale-110 transition-transform duration-200">
                  {social.icon}
                </span>
                <span className="group-hover:underline">{social.name}</span>
              </a>
            ))}
          </div>

          {/* right column aligned to the right side */}
          <div className="flex flex-col gap-5 items-end">
            {socialLinks.slice(2, 4).map((social) => (
              <a
                key={social.id}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-white text-lg hover:opacity-80 transition-opacity duration-200 cursor-pointer group"
              >
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/90 text-[#8f5570] font-bold group-hover:scale-110 transition-transform duration-200">
                  {social.icon}
                </span>
                <span className="group-hover:underline">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
