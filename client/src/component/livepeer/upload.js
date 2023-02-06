import { useState, useRef, useContext } from "react";

import * as tus from "tus-js-client";

import { ethers } from "ethers";

function Main() {
  const [isLoading, setIsLoading] = useState(false);
  const [video, setVideo] = useState("");

  const nameInputRef = useRef();
  const descriptionInputRef = useRef();

  const videoHandler = (event) => {
    setVideo(event.target.files[0]);
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const response = await fetch(
      "https://livepeer.studio/api/asset/request-upload",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${"4402a176-ddeb-4ecc-bfd6-ea9be0466f11"}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "tusClient",
        }),
      }
    );

    const { tusEndpoint } = await response.json();

    const upload = new tus.Upload(video, {
      endpoint: tusEndpoint,
      metadata: {
        filename: "tusClient",
        filetype: "video/mp4",
      },
      uploadSize: video.size,
      onError(err) {
        console.error("Error uploading file:", err);
      },
      onProgress(bytesUploaded, bytesTotal) {
        const percentage = ((bytesUploaded / bytesTotal) * 100).toFixed(2);
        console.log("Uploaded " + percentage + "%");
      },
      onSuccess() {
        console.log("Upload finished:", upload.url);
        console.log("upload is", upload);
      },
    });
    const previousUploads = await upload.findPreviousUploads();
    if (previousUploads.length > 0) {
      upload.resumeFromPreviousUpload(previousUploads[0]);
    }
    upload.start();
  };

  return (
    <div className="flex items-center pl-[32rem] ">
      <form
        className="form-control w-full max-w-xs"
        onSubmit={formSubmitHandler}
        encType="multipart/form-data"
      >
        <input
          type="file"
          name="videoUrl"
          id="videoUrl"
          className="file-input file-input-bordered file-input-info w-full max-w-xs"
          onChange={videoHandler}
          required
        />
        <button
          type="submit"
          className={`btn btn-outline btn-success ${isLoading && "loading"}`}
          style={{ marginTop: "7%" }}
        >
          {isLoading ? "Uploading..." : "Upload"}
        </button>
      </form>
    </div>
  );
}

export default Main;
