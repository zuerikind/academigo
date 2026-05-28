import { DynamicIcon, type IconName } from "@/lib/icons";

export function TrustStats({
  items,
}: {
  items: ReadonlyArray<{ label: string; icon: string }>;
}) {
  return (
    <ul className="grid grid-cols-2 gap-4 sm:gap-5">
      {items.map((item) => (
        <li
          key={item.label}
          className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm"
        >
          <DynamicIcon
            name={item.icon as IconName}
            className="h-5 w-5 shrink-0 text-academy-gold"
          />
          <span className="text-sm font-medium text-white/90">{item.label}</span>
        </li>
      ))}
    </ul>
  );
}
