import React from "react";
import "./VideoGrid.css";

const videos = [
  { id: 1, title: "Intro to React", views: "10K views", thumbnail: "https://via.placeholder.com/250" },
  { id: 2, title: "FastAPI Basics", views: "8K views", thumbnail: "https://via.placeholder.com/250" },
  { id: 3, title: "Arduino IoT", views: "5K views", thumbnail: "https://via.placeholder.com/250" },
];

const VideoGrid = () => {
  return (
    <div className="video-grid">
      {videos.map((video) => (
        <div key={video.id} className="video-item">
          <img src={video.thumbnail} alt={video.title} />
          <p>{video.title}</p>
          <span>{video.views}</span>
        </div>
      ))}
    </div>
  );
};

export default VideoGrid;
