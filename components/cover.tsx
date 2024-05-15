"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { ImageIcon, X } from "lucide-react";
import { useMutation } from "convex/react";

import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import { useCoverImageStore } from "@/hooks/use-cover-image";
import { useParams } from "next/navigation";
import { Id } from "@/convex/_generated/dataModel";

interface CoverImageProps {
  url?: string;
  preview?: Boolean;
}

export const Cover = ({ url, preview }: CoverImageProps) => {
  const params = useParams();

  const coverImage = useCoverImageStore();

  const removeCoverImage = useMutation(api.documents.removeCoverImage);

  const handleRemove = () => {
    removeCoverImage({
      id: params.documentId as Id<"documents">,
    });
  };

  return (
    <div
      className={cn(
        "relative w-full h-[35vh] group",
        !url && "h-[12vh]",
        url && "bg-muted"
      )}
    >
      {!!url && (
        <Image src={url} fill alt="Cover Image" className="object-cover" />
      )}
      {url && !preview && (
        <div className="opacity-0 group-hover:opacity-100 absolute bottom-5 right-5 flex items-center gap-x-2">
          <Button
            onClick={() => {
              coverImage.onOpen();
            }}
            className="text-muted-foreground text-xs"
            variant={"outline"}
            size="sm"
          >
            <ImageIcon className="h-4 w-4 mr-2" />
            Change cover
          </Button>
          <Button
            onClick={handleRemove}
            className="text-muted-foreground text-xs"
            variant={"outline"}
            size="sm"
          >
            <X className="h-4 w-4 mr-2" />
            Remove
          </Button>
        </div>
      )}
    </div>
  );
};
