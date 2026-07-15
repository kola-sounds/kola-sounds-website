import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function Input({
  label,
  className = "",
  ...props
}: InputProps) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-gray-300">
          {label}
        </label>
      )}

      <input
        className={`w-full rounded-lg border border-neutral-700 bg-black px-4 py-3 text-white outline-none transition focus:border-yellow-400 ${className}`}
        {...props}
      />
    </div>
  );
}
