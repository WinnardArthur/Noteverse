"use client";

import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { useSettingsStore } from "@/hooks/use-settings";
import { ModeToggle } from "@/components/mode-toggle";
import { Label } from "@/components/ui/label";

export const SettingsModal = () => {
  const { isOpen, onClose } = useSettingsStore();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader className="border-b pb-3">
          <h2 className="text-lg font-medium">My Settings</h2>
        </DialogHeader>

        <div className="flex items-center justify-between">
          <div className="flex-col flex gap-y-1">
            <Label>Appearance</Label>
            <span className="text-[0.8rem] text-muted-foreground">
              Customize how Noteverse looks on your device
            </span>
          </div>
          <ModeToggle />
        </div>
      </DialogContent>
    </Dialog>
  );
};
