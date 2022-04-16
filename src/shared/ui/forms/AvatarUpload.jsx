import { useEffect, useState } from "react";
import { Avatar } from "./Avatar.jsx";

const AvatarUpload = ({ name = "file", getFile }) => {
  const [file, setFile] = useState({});

  const handleUpload = async e => {
    e.preventDefault();
    try {
      let reader = new FileReader();
      let file = e.target.files[0];

      reader.onloadend = () => {
        setFile({ file, url: reader.result });
      };

      reader.readAsDataURL(file);
    } catch (err) {
      console.log({ err });
    }
  };

  useEffect(() => {
    getFile(file);
  }, [file, getFile]);

  return (
    <div className="flex items-center space-x-6">
      <Avatar src={file.url} />

      <label className="block">
        <span className="sr-only">Choose profile photo</span>
        <span className="cursor-pointer min-w-[120px] inline-flex items-center justify-center gap-2 border border-transparent font-medium rounded focus:outline-none focus:ring-2 focus:ring-offset-2 text-sm px-3 py-2 text-gray-700 bg-white hover:bg-gray-50 focus:ring-radical-red-500 !border-gray-300">
          Đổi
        </span>
        <input
          type="file"
          className="hidden w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-violet-50 file:text-violet-700
                    hover:file:bg-violet-100
                    
                    "
          name={name}
          onChange={handleUpload}
        />
      </label>
    </div>
  );
};

export { AvatarUpload };
