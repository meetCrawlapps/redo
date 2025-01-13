"use client";
import { AddWorkFlows } from "@/types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../shadecn/ui/form";
import { Input } from "../shadecn/ui/input";
import { Button } from "../shadecn/ui/button";
import { Loader2 } from "lucide-react";

const AddWorkflow = () => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof AddWorkFlows>>({
    mode: "onChange",
    resolver: zodResolver(AddWorkFlows),
    defaultValues: {
      name: "",
      discription: "",
    },
  });
  const handleSubmit = async (values: z.infer<typeof AddWorkFlows>) => {
    setIsLoading(true);
    // await onUpdate(values.name)
    // setIsLoading(false)
  };
  return (
    <>
      <Form {...form}>
        <form
          className="flex flex-col gap-6"
          onSubmit={form.handleSubmit(handleSubmit)}
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Name" type="text" />
                </FormControl>
                <FormMessage className="text-[#FF2D55]" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="discription"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Discription</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Discription" type="text" />
                </FormControl>
                <FormMessage className="text-[#FF2D55]" />
              </FormItem>
            )}
          />
          <Button type="submit" className="">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving
              </>
            ) : (
              "Save Settings"
            )}
          </Button>
        </form>
      </Form>
    </>
  );
};

export default AddWorkflow;
