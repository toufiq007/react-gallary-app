import React from "react";
import { useDropzone } from "react-dropzone";

const FileDropzone = () => {
  const onDrop = (acceptedFiles) => {
    console.log(acceptedFiles);
  };
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: false,
  });

  return (
    <div
      {...getRootProps()}
      className={`p-6 mt-5 w-[500px] border-2 mx-auto ${
        isDragActive
          ? "border-solid border-green-500"
          : "border-dotted border-blue-500"
      }`}
      style={{
        borderRadius: "10px",
        backgroundColor: isDragActive ? "#e6f7ff" : "#f9f9f9",
        cursor: "pointer",
      }}
    >
      <input {...getInputProps()} style={{ display: "none" }} />
      {isDragActive ? (
        <p className="text-green-600">Drop the image here...</p>
      ) : (
        <p className="text-blue-600 text-center">upload your image</p>
      )}
    </div>
  );
};

export default FileDropzone;
