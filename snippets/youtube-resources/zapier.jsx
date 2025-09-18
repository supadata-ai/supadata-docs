export const ZapierVideos = () => {
  const videos = [
    {
      embedId: "Gkd-GPXzTlM",
      title: "Zapier and Supadata Integration",
      startTime: 14,
    },
    { embedId: "ZOqDpzy6Prw", title: "Building Zaps with Supadata" },
  ];

  return (
    <div className="space-y-4">
      {videos.map((video, index) => (
        <div key={index}>
          <iframe
            src={`https://www.youtube.com/embed/${video.embedId}${
              video.startTime ? `?start=${video.startTime}` : ""
            }`}
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
