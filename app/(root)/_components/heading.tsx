"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";

export const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Streamline your thoughts, stay organized and bring your ideas to life with
        <p>
          <span className="underline">Noteverse</span>
        </p>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Simplify note-taking and task management <br />
        all in one place.
      </h3>
      <Button>
        Enter Noteverse <ArrowRight className="ml-2 w-4 h-4" />
      </Button>
    </div>
  );
};
