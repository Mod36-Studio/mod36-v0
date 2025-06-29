
// src/components/modals/version-log-modal.tsx
'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { siteContent } from "@/data/site-content"; // Import siteContent

interface VersionLogModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

// Use content from siteContent.ts
const modalContent = siteContent.modals.versionLog;

export function VersionLogModal({ isOpen, onOpenChange }: VersionLogModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-card text-card-foreground border-border shadow-xl rounded-lg">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl text-primary">{modalContent.title}</DialogTitle>
          <DialogDescription className="text-muted-foreground pt-1">
            {modalContent.description}
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[60vh] mt-4 pr-3">
          <div className="space-y-6 font-code text-sm">
            {modalContent.logs.map((log, index) => (
              <div key={index} className="pb-4 border-b border-border/50 last:border-b-0">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-foreground">{log.version}</h3>
                  <p className="text-xs text-muted-foreground">{log.date}</p>
                </div>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  {log.notes.map((note, noteIndex) => (
                    <li key={noteIndex}>{note}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

   