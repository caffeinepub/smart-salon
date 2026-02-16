import { ReactNode } from 'react';
import { X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';

interface LegalModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  children: ReactNode;
}

export function LegalModal({ open, onOpenChange, title, children }: LegalModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0 bg-card border-border/50">
        <DialogHeader className="px-6 pt-6 pb-4 border-b border-border/50">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold text-foreground">{title}</DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onOpenChange(false)}
              className="rounded-full hover:bg-muted"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </DialogHeader>
        <ScrollArea className="h-[calc(90vh-8rem)] px-6 py-4">
          <div className="prose prose-invert max-w-none">
            {children}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
