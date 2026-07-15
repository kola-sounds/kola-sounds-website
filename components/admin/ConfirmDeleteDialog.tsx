"use client";

import Button from "@/components/ui/Button";

interface ConfirmDeleteDialogProps {
  open: boolean;
  title?: string;
  message?: string;
  onCancel: () => void;
  onConfirm: () => void;
}

export default function ConfirmDeleteDialog({
  open,
  title = "Delete item?",
  message = "This action cannot be undone.",
  onCancel,
  onConfirm,
}: ConfirmDeleteDialogProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="w-full max-w-md rounded-2xl bg-neutral-900 p-6 shadow-xl">
        <h2 className="text-2xl font-bold text-yellow-400">
          {title}
        </h2>

        <p className="mt-3 text-gray-300">
          {message}
        </p>

        <div className="mt-8 flex justify-end gap-3">
          <Button variant="secondary" onClick={onCancel}>
            Cancel
          </Button>

          <Button variant="danger" onClick={onConfirm}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}
