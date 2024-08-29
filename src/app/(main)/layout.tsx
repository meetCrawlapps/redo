import InfoBar from "@/components/infobar";
import Sidebar from "@/components/Sidebar";
import React from "react";

type Props = { children: React.ReactNode };

const Layout = (props: Props) => {
  return (
    <div className="flex overflow-hidden h-screen">
      <Sidebar />
      <div className="flex flex-col w-full">
        <div className="z-50">
          <InfoBar />
        </div>
        <div className="w-full overflow-auto">{props.children}</div>
      </div>
    </div>
  );
};

export default Layout;
