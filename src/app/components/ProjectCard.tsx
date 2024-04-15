import React from "react";
import { EyeIcon } from "@heroicons/react/24/outline";

type Props = {
  imgUrl: string;
  title: string;
  description: string;
  previewUrl: string;
};

const ProjectCard = ({ imgUrl, title, description, previewUrl }: Props) => {
  return (
    <div className="h-[234px] sm:w-[370px] sm:h-[300px] mb-36 w-[calc(100vw-48px)]">
      <div
        className="w-full h-full rounded-t-xl relative group !bg-cover !bg-center"
        style={{ background: `url(${imgUrl})` }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <button
            onClick={() => previewUrl ? window.open(previewUrl, "_blank") : null}
            className="relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            {previewUrl ? <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" /> : null}
            {!previewUrl ? <p className="text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-not-allowed">Privado</p> : null}
          </button>
        </div>
      </div>
      <div className="text-white !bg-[#202020] py-6 px-4 rounded-b-xl">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
