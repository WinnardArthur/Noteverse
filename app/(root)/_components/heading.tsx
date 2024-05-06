"use client";

import React from "react";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";
import Link from "next/link";
import { SignInButton } from "@clerk/clerk-react";

export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Streamline your thoughts, stay organized and bring your ideas to life
        with
        <p>
          <span className="underline">Noteverse</span>
        </p>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Simplify note-taking and task management <br />
        all in one place.
      </h3>
      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size={"lg"} />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href={"/documents"}>
            Enter Noteverse <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button>
          Get Noteverse free <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </SignInButton>
      )}
    </div>
  );
};
