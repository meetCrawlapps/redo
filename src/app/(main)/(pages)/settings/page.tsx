"use client"; // is needed only if you’re using React Server Components
import Profileform from "@/components/forms/editProfile";
import React from "react";
import { FileUploaderRegular } from "@uploadcare/react-uploader";
import "@uploadcare/react-uploader/core.css";
import Profilepicture from "./_components/profile-picture";
// import { currentUser } from "@clerk/nextjs/server";
const SettingsPage = async () => {
  console.log("global--------", global);
  // const user = await currentUser();
  return (
    <div className="flex flex-col gap-4">
      <h1 className="sticky top-0 z-10 flex items-center justify-between border-b p-6 text-4xl backdrop-blur-lg">
        <span>Settings</span>
      </h1>
      <div className="flex flex-col gap-10 p-6">
        <div>
          <h2 className="text-2xl font-bold">User Profile</h2>
          <p className="text-base text-white/50">
            Add or update your information
          </p>
        </div>
        <div>
          <FileUploaderRegular
            sourceList="local, url, camera, dropbox"
            classNameUploader="uc-dark uc-purple"
            pubkey={process.env.UPLOADCARE_PUBLIC_KEY}
          />
        </div>
        {/* <Profilepicture userimage="/user.jpg" /> */}
        <Profileform />
      </div>
    </div>
  );
};

export default SettingsPage;
