import { Check } from "lucide-react";

export function TrustStats({
  items,
}: {
  items: readonly { label: string }[];
}) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item.label} className="flex items-start gap-2.5">
          <Check
            className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand)]"
            strokeWidth={2.5}
            aria-hidden
          />
          <span className="text-sm font-medium text-academy-slate">
            {item.label}
          </span>
        </li>
      ))}
    </ul>
  );
}
