import { ChangeEvent, useRef, useState } from "react";
import Button from "../components/Button";
import IconButton from "../components/IconButton";
import TextArea from "../components/TextArea";
import useForm from "../hooks/useForm";
import PhotoIcon from "@heroicons/react/24/solid/PhotoIcon";
import TweetImagePreview from "../components/TweetImagePreview";
import { useUI } from "../context/ui/uIContext";
import { v4 } from "uuid";
import useCreateTweet from "../hooks/tweet/useCreateTweet";

const CreateTweetFeature = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [filesToPreview, setFilesToPreview] = useState<string[]>([]);
  const [filesToUpload, setFilesToUpload] = useState<FileList | null>();
  const formData = new FormData();

  const { createToast } = useUI();

  const { isLoading, mutateAsync } = useCreateTweet();

  const create = async () => {
    formData.append("description", state.tweet);
    if (filesToUpload) {
      for (let i = 0; i < filesToUpload.length; i++) {
        formData.append("files", filesToUpload[i]);
      }
    }
    setIsLoading(true);
    try {
      await mutateAsync(formData);
      const id = v4();
      createToast("New post created");
      setState({ ...state, tweet: "" });
      setFilesToPreview([]);
      setFilesToUpload(null);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  const { onChange, onSubmit, state, setIsLoading, setState } = useForm(
    {
      tweet: "",
    },
    create
  );

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setFilesToUpload(files);
      const urls: string[] = [];
      for (let i = 0; i < files?.length; i++) {
        const url = URL.createObjectURL(files[i]);
        urls.push(url);
      }
      setFilesToPreview(urls);
    }
  };

  return (
    <form className="mt-3" onSubmit={onSubmit}>
      <div className="w-full border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-slate-700">
        <div className="bg-white rounded-t-lg dark:bg-gray-800">
          <TextArea onChange={onChange} value={state.tweet} name="tweet" />
        </div>
        <div className="flex items-center relative justify-between px-3 py-2 border-t dark:border-gray-600">
          {/* <span className="w-100 h-1 bg-blue-500 absolute top-0 right-0 left-0"></span> */}
          <Button
            status={!state.tweet ? "not-allowed" : isLoading ? "loading" : "ok"}
            type="submit"
            size="small"
            variant="fill-primary"
          >
            Post
          </Button>
          <div className="flex pl-0 space-x-1 sm:pl-2 items-center">
            <TweetImagePreview urls={filesToPreview} />
            <input
              onChange={onFileChange}
              ref={fileInputRef}
              className="hidden"
              multiple
              type="file"
            />
            <IconButton
              type="button"
              onClick={() => fileInputRef.current?.click()}
            >
              <PhotoIcon className="w-5 h-5" />
            </IconButton>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CreateTweetFeature;
