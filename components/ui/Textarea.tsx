import { TextareaHTMLAttributes } from "react";

interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export default function Textarea({
  label,
  className = "",
  ...props
}: TextareaProps) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-gray-300">
          {label}
        </label>
      )}

      <textarea
        className={`min-h-[120px] w-full rounded-lg border border-neutral-700 bg-black px-4 py-3 text-white outline-none transition focus:border-yellow-400 ${className}`}
        {...props}
      />
    </div>
  );
}
