export default function TutorialVideos() {
  const videos = [
    {
      id: "AfP0kz7vers",
      title: "Dr. Chanda introduces Quantum Computing for Power Systems (2023)",
      url: "https://youtu.be/AfP0kz7vers"
    },
    // Placeholders for upcoming videos
    { id: null, title: "Coming Soon", url: null },
    { id: null, title: "Coming Soon", url: null },
    { id: null, title: "Coming Soon", url: null },
    { id: null, title: "Coming Soon", url: null },
    { id: null, title: "Coming Soon", url: null }
  ];

  return (
    <section className="py-24 bg-[#111111]/50" id="tutorials">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Tutorial Videos
          </h2>
          <p className="text-[#a3a3a3] text-lg max-w-2xl mx-auto">
            Learn about quantum computing for power systems through our educational content
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div key={index} className="group">
              {video.id ? (
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
              ) : (
                // Placeholder for upcoming videos
                <div className="opacity-50 cursor-not-allowed">
                  <div className="relative overflow-hidden rounded-xl bg-[#111111] border border-[#262626] mb-4">
                    <div className="relative aspect-video flex items-center justify-center bg-gradient-to-br from-[#111111] to-[#1a1a1a]">
                      <div className="text-center">
                        <svg
                          className="w-16 h-16 text-[#262626] mx-auto mb-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                          />
                        </svg>
                        <p className="text-[#525252] text-sm font-semibold">Coming Soon</p>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-[#525252] font-semibold">
                    {video.title}
                  </h3>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
