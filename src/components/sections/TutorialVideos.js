export default function TutorialVideos() {
  const allVideos = [
    {
      id: "AfP0kz7vers",
      title: "Dr. Chanda introduces Quantum Computing for Power Systems (2023)",
      url: "https://youtu.be/AfP0kz7vers"
    },
    // Add more videos here as they become available (up to 6 total)
  ];

  // Only show videos that have an ID (filter out placeholders)
  const videos = allVideos.filter(video => video.id).slice(0, 6);

  return (
    <section className="py-24 bg-[#111111]/50" id="tutorials">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Tutorial Videos
          </h2>
          <p className="text-[#a3a3a3] text-lg max-w-2xl mx-auto mb-4">
            Learn about quantum computing for power systems through our educational content
          </p>
          <a
            href="YOUR_PLAYLIST_URL_HERE"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#ea580b] hover:text-[#dc2626] transition-colors duration-200"
          >
            Full YouTube Playlist →
          </a>
        </div>

        {/* Videos Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div key={index} className="group">
              <a
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {/* Video Thumbnail */}
                <div className="relative overflow-hidden rounded-xl bg-[#111111] border border-[#262626] mb-4 transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-[#ea580b]/10 group-hover:border-[#ea580b]/50">
                  <div className="relative aspect-video">
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to hqdefault if maxresdefault doesn't exist
                        e.target.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
                      }}
                    />
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors duration-200">
                      <div className="w-16 h-16 bg-[#ea580b] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                        <svg
                          className="w-8 h-8 text-white ml-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Video Title */}
                <h3 className="text-white font-semibold leading-snug group-hover:text-[#ea580b] transition-colors duration-200">
                  {video.title}
                </h3>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
