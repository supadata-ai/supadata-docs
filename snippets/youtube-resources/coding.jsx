export const CodingVideos = () => {
  const videos = [
    { embedId: "-FRBotBLc1o", title: "Vibe Coding with Supadata" },
    { embedId: "WsQ_W0VHW2I", title: "Vibe Coding Tutorial", startTime: 815 },
    { embedId: "QTJh7uueLAk", title: "Advanced Vibe Coding" },
    { embedId: "QI4Xqm7jsy4", title: "Vibe Coding Examples" },
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
