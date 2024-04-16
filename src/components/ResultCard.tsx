import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";

interface ResultCardListProps {
  videoInfo: any;
}

const ResultCard = ({ videoInfo }: ResultCardListProps) => {
  return (
    <>
      {videoInfo.video_streams.map((video: any, index: number) => {
        return (
          <div
            className="result_card_item flex flex-row gap-8 items-center justify-center border rounded-xl py-4 w-full"
            key={index}
          >
            <a href={video.url} target="_blank">
              <Button className="w-fit">
                <p>Download</p>
                <ArrowUpRight className="ml-1 w-5 text-background" />
              </Button>
            </a>
            <h1 className="text-xl tracking-wide">{`Resolution: ${video.resolution}`}</h1>
            <h1 className="text-xl tracking-wide">{`FPS: ${video.fps}`}</h1>
          </div>
        );
      })}
    </>
  );
};

export default ResultCard;
