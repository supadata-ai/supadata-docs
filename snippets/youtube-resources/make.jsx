export const MakeVideos = () => {
  const videos = [
    { embedId: "ukxp-shgkkM", title: "Getting Started with Supadata and Make" },
    { embedId: "0EAHfHqPQu0", title: "Advanced Make Integration" },
    { embedId: "UPMlRzi4-x0", title: "Make Scenarios with Supadata" },
  ];

  return (
    <div className="space-y-4">
      {videos.map((video, index) => (
        <div key={index}>
          <iframe
            src={`https://www.youtube.com/embed/${video.embedId}`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full aspect-video rounded-lg"
          />
        </div>
      ))}
    </div>
  );
};
