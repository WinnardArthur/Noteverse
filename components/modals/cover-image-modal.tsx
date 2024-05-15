"use client";

import { useState } from "react";
import { useMutation } from "convex/react";

import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { useCoverImageStore } from "@/hooks/use-cover-image";
import { SingleImageDropzone } from "@/components//single-image-dropzone";
import { useEdgeStore } from "@/lib/edgestore";
import { api } from "@/convex/_generated/api";
import { useParams } from "next/navigation";
import { Id } from "@/convex/_generated/dataModel";

export const CoverImageModal = () => {
  const params = useParams();

  const coverImage = useCoverImageStore();

  const [file, setFile] = useState<File>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { edgestore } = useEdgeStore();

  const update = useMutation(api.documents.update);

  const onChange = async (file?: File) => {
    if (file) {
      setIsSubmitting(true);
      setFile(file);

      const res = await edgestore.publicFiles.upload({
        file,
        options: {
          replaceTargetUrl: coverImage.url,
        },
      });

      await update({
        id: params.documentId as Id<"documents">,
        coverImage: res.url,
      });

      onClose();
    }
  };

  const onClose = () => {
    setFile(undefined);
    setIsSubmitting(false);
    coverImage.onClose();
  };

  return (
    <Dialog open={coverImage.isOpen} onOpenChange={coverImage.onClose}>
      <DialogContent>
        <DialogHeader>
          <h2 className="text-center text-lg font-semibold">Cover Image</h2>
        </DialogHeader>
        <SingleImageDropzone
          value={file}
          onChange={onChange}
          disabled={isSubmitting}
          className="w-full outline-none"
        />
      </DialogContent>
    </Dialog>
  );
};
