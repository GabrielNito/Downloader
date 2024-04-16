interface YoutubeListProps {
  videoInfo: any;
}

const Youtube = ({ videoInfo }: YoutubeListProps) => {
  console.log(videoInfo);

  return (
    <div id="youtube_list" className="">
      {videoInfo.video_streams.map((video: any, index: number) => {
        return (
          <div className="video_option" key={index}>
            <a href={video.url} target="_blank">
              Download Url
            </a>
            <p>{`Resolution: ${video.resolution}`}</p>
            <p>{`FPS: ${video.fps}`}</p>
            <p>{`Type: ${video.type}`}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Youtube;
