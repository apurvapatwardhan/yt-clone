import React from "react";
import VideoCard from "./VideoCard";

const videos = [
  {
    title: "LEarn coding in 30 days",
    image: "http://i3.ytimg.com/vi/Vb9QCgGp_TA/hqdefault.jpg",
    author: "Yash",
    thumbnail: "http://i3.ytimg.com/vi/Vb9QCgGp_TA/hqdefault.jpg",
    views: "100k",
    timeStamp: "2 days ago",
  },
  {
    title: "LEarn coding in 20 days",
    image: "http://i3.ytimg.com/vi/Zqs1cuBGh7w/hqdefault.jpg",
    author: "Katti",
    thumbnail: "http://i3.ytimg.com/vi/Zqs1cuBGh7w/hqdefault.jpg",
    views: "300k",
    timeStamp: "4 days ago",
  },
  {
    title: "LEarn coding in 34 days",
    image: "http://i3.ytimg.com/vi/7DLhTU3wiy4/hqdefault.jpg",
    author: "Tilak",
    thumbnail: "http://i3.ytimg.com/vi/7DLhTU3wiy4/hqdefault.jpg",
    views: "200k",
    timeStamp: "8 days ago",
  },
  {
    title: "LEarn coding in 30 days",
    image: "http://i3.ytimg.com/vi/Vb9QCgGp_TA/hqdefault.jpg",
    author: "Yash",
    thumbnail: "http://i3.ytimg.com/vi/Vb9QCgGp_TA/hqdefault.jpg",
    views: "100k",
    timeStamp: "2 days ago",
  },
  {
    title: "LEarn coding in 20 days",
    image: "http://i3.ytimg.com/vi/Zqs1cuBGh7w/hqdefault.jpg",
    author: "Katti",
    thumbnail: "http://i3.ytimg.com/vi/Zqs1cuBGh7w/hqdefault.jpg",
    views: "300k",
    timeStamp: "4 days ago",
  },
  {
    title: "LEarn coding in 34 days",
    image: "http://i3.ytimg.com/vi/7DLhTU3wiy4/hqdefault.jpg",
    author: "Tilak",
    thumbnail: "http://i3.ytimg.com/vi/7DLhTU3wiy4/hqdefault.jpg",
    views: "200k",
    timeStamp: "8 days ago",
  },
];

const VideoGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {videos.map((video) => {
        return (
          <VideoCard
            title={video.title}
            image={video.image}
            author={video.author}
            thumbnail={video.thumbnail}
            views={video.views}
            timeStamp={video.timeStamp}
          />
        );
      })}
    </div>
  );
};

export default VideoGrid;
