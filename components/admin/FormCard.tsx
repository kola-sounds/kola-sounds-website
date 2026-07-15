import { ReactNode } from "react";
import Card from "@/components/ui/Card";

interface Props {
  title?: string;
  children: ReactNode;
}

export default function FormCard({
  title,
  children,
}: Props) {
  return (
    <Card>
      {title && (
        <h2 className="mb-6 text-2xl font-bold text-yellow-400">
          {title}
        </h2>
      )}

      <div className="space-y-6">
        {children}
      </div>
    </Card>
  );
}
