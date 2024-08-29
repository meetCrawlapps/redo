"use client";
import { Button } from "@/components/shadecn/ui/button";
import { Plus } from "lucide-react";
import React from "react";

const AddButton = ({ toggleDrawer }: { toggleDrawer: () => void }) => {
  const handelclick = () => {
    toggleDrawer();
  };
  return (
    <>
      <Button className="px-2" onClick={handelclick}>
        <Plus />
      </Button>
    </>
  );
};

export default AddButton;
