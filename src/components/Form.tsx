import { useState } from "react";
import { youtube_list } from "../scripts/youtube_list";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Results from "./Results";

import { useToast } from "./ui/use-toast";

const Form = () => {
  const [show, setShow] = useState(false);
  const [videoInfo, setVideoInfo] = useState<any>(null);

  const { toast } = useToast();

  const handleDownload = async () => {
    const input = document.getElementById("url_input") as HTMLInputElement;
    if (!input.value) {
      toast({
        variant: "destructive",
        title: "Invalid URL",
        description: "Please, insert a valid URL",
      });
      return;
    }
    toast({
      title: "Vídeo download started",
      description: "Your vídeo will be soon ready for download",
    });
    const result = await youtube_list(input?.value);
    setVideoInfo(result);
    setShow(true);
  };

  return (
    <>
      <section
        id="url"
        className="flex justify-center items-center mt-10 flex-col px-80 gap-4"
      >
        <Input
          type="text"
          id="url_input"
          placeholder="Paste the URL here"
          className="text-white"
        />
        <Button onClick={handleDownload}>Download</Button>
        <div id="message" />
      </section>

      {show ? <Results videoInfo={videoInfo} /> : null}
    </>
  );
};

export default Form;
