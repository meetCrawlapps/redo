import React from "react";
import CustomeModel from "./_components/customeModel";

const WorkflowPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="sticky top-0 z-10 flex items-center justify-between border-b p-6 text-4xl backdrop-blur-lg">
        <span>Workflows</span>
        <CustomeModel />
      </h1>
    </div>
  );
};

export default WorkflowPage;
