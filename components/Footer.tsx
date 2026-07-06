export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-800 bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="grid gap-10 md:grid-cols-3">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-yellow-400">
              Kola Sounds
            </h2>

            <p className="mt-3 text-gray-400">
              Sounding Beyond Borders.
            </p>

            <p className="mt-2 text-gray-500">
              Worship • Praise • Ministry
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-yellow-400">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
              <li><a href="#about" className="hover:text-yellow-400">About</a></li>
              <li><a href="#music" className="hover:text-yellow-400">Music</a></li>
              <li><a href="#events" className="hover:text-yellow-400">Events</a></li>
              <li><a href="#gallery" className="hover:text-yellow-400">Gallery</a></li>
              <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-yellow-400">
              Connect
            </h3>

            <div className="space-y-3">

              <a
                href="https://youtube.com/@soundsofgrace-d5r?si=l4GIw_IF5JXw5JY3"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-yellow-400"
              >
                ▶ YouTube
              </a>

              <a
                href="https://www.tiktok.com/@kolasoundsofgrace?_r=1&_t=ZS-97npULfD81l"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-yellow-400"
              >
                ♫ TikTok
              </a>

              <a
                href="https://wa.me/254700207801"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-yellow-400"
              >
                💬 WhatsApp
              </a>

            </div>
          </div>

        </div>

        <div className="mt-12 border-t border-neutral-800 pt-6 text-center text-sm text-gray-500">
          © {year} Kola Sounds. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}
