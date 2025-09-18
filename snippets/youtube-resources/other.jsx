export const OtherVideos = () => {
  const videos = [
    { embedId: "cMwb_PiFHb8", title: "Supadata Overview" },
    { embedId: "f-4a-M99AnA", title: "Web Scraping with Supadata" },
    { embedId: "nSv16Z7k4p4", title: "API Tutorial" },
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
