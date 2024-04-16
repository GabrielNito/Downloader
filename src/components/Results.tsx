import { useEffect } from "react";
import ResultCard from "./ResultCard";
import { useToast } from "./ui/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

interface ResultsProps {
  videoInfo: any;
}

const Results = ({ videoInfo }: ResultsProps) => {
  const { toast } = useToast();
  useEffect(() => {
    toast({
      title: "Vídeo ready",
      description:
        "Your vídeo can now be downloaded, choose one of the alternatives",
    });
  }, []);

  return (
    <>
      <div
        id="results"
        className="flex flex-col gap-4 justify-center items-center"
      >
        <h1 className="font-bold text-3xl">{videoInfo.title}</h1>
        <div className="results_image aspect-video w-[30%] object-cover rounded-xl overflow-hidden flex justify-center items-center">
          <img src={videoInfo.thumbnail} alt={videoInfo.title} id="thumbnail" />
        </div>
        <Tabs defaultValue="video" className="w-[40%] mb-20">
          <TabsList className="grid w-full gap-4 grid-cols-2">
            <TabsTrigger value="video">Video</TabsTrigger>
            <TabsTrigger value="audio">Audio</TabsTrigger>
          </TabsList>
          <TabsContent value="video" className="flex flex-col gap-4">
            <ResultCard videoInfo={videoInfo} />
          </TabsContent>
          <TabsContent value="audio">
            <div className="flex justify-center items-center h-[100px]">
              <h1>Coming soon...</h1>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default Results;
