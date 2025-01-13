"use client";
import React, { useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/shadecn/ui/drawer";
import { Button } from "@/components/shadecn/ui/button";
import { Plus } from "lucide-react";
import AddWorkflow from "@/components/forms/addWorkflow";

const CustomeModel = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <div>
      <Drawer open={isOpen} onClose={() => setIsOpen(false)}>
        <DrawerTrigger asChild>
          <Button className="px-2" onClick={() => setIsOpen(!isOpen)}>
            <Plus />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-md">
            <DrawerHeader>
              <DrawerTitle>Create a Workflow Automation</DrawerTitle>
              <DrawerDescription>
                workflow are powerfull that help you automate tasks.
              </DrawerDescription>
            </DrawerHeader>
            <div className="p-4">
              <AddWorkflow />
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default CustomeModel;
