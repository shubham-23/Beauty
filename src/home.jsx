import React from "react";

// ServiceGallery.jsx
// Tailwind CSS required. Drop this file into a Create React App / Vite project
// that has Tailwind configured. Replace the image URLs and link hrefs with your
// real assets.

export default function ServiceGallery() {
  const services = [
    {
      id: 1,
      title: "Hair",
      img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=60",
      href: "https://example.com/hair",
    },
    {
      id: 2,
      title: "Skin",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=60",
      href: "https://example.com/skin",
    },
    {
      id: 3,
      title: "Bride (make-up / hairStyle)",
      img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=600&q=60",
      href: "https://example.com/bride",
    },
    {
      id: 4,
      title: "Nails",
      img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=60",
      href: "https://example.com/nails",
    },
  ];

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8">
      <div className="w-[920px] max-w-full bg-white rounded-lg p-8">
        {/* top bar */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-6">
            {/* Logo (left) */}
            <a href="https://example.com" className="block">
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=400&q=60"
                alt="Logo"
                className="w-36 h-12 object-cover rounded-md"
              />
            </a>
          </div>

          {/* nav buttons (right) */}
          <nav className="flex items-center gap-4">
            <a
              href="/"
              className="px-4 py-2 bg-gray-200 text-gray-800 text-sm rounded-md hover:bg-gray-300 transition-colors"
            >
              Home
            </a>
            <a
              href="/about"
              className="px-4 py-2 bg-gray-200 text-gray-800 text-sm rounded-md hover:bg-gray-300 transition-colors"
            >
              About
            </a>
            <a
              href="/contact"
              className="px-4 py-2 bg-gray-200 text-gray-800 text-sm rounded-md hover:bg-gray-300 transition-colors"
            >
              Contact Us
            </a>
          </nav>
        </div>

        {/* gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s) => (
            <div key={s.id} className="flex flex-col items-center text-center">
              <a href={s.href} target="_blank" rel="noreferrer" className="group">
                <div className="w-40 h-40 rounded-lg bg-gray-100 overflow-hidden flex items-center justify-center shadow-md border border-gray-200">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </a>

              <a href={s.href} target="_blank" rel="noreferrer" className="mt-4 text-gray-700 text-lg font-medium hover:text-gray-900 hover:underline transition-colors">
                {s.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
