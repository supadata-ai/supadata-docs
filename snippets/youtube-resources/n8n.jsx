export const N8nVideos = () => {
  const videos = [
    { embedId: "_BhS71m_niQ", title: "n8n Data Processing" },
    { embedId: "nMRKKHw_9NA", title: "n8n Workflow Tutorial" },
    { embedId: "szFHzs-zwyc", title: "Complex n8n Workflows" },
    { embedId: "wxM7VcjaulE", title: "n8n Automation Examples" },
    { embedId: "rDgloQZ7vMs", title: "n8n Workflow Examples" },
    { embedId: "uj7KaFSh95Y", title: "n8n API Integration" },
    { embedId: "3sPqsIWNuew", title: "Building n8n Workflows" },
    { embedId: "cUxQjP6XMP0", title: "n8n Best Practices" },
    {
      embedId: "pr6_oBBHVOE",
      title: "n8n and Supadata Deep Dive",
    },
    { embedId: "JPP-uvAzQXY", title: "Supadata n8n Node Tutorial" },
    { embedId: "Um6-sHCVzCs", title: "n8n Supadata Use Cases" },
    { embedId: "azv5kvuqHnU", title: "Getting Started with Supadata and n8n" },
    {
      embedId: "CqGuzvh8uis",
      title: "Advanced n8n Integration",
    },
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
