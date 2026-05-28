import type { de } from "@/messages/de";

/** Recursively widen string literals so DE and EN share one type. */
type Stringify<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? readonly Stringify<U>[]
    : T extends object
      ? { [K in keyof T]: Stringify<T[K]> }
      : T;

export type Dictionary = Stringify<typeof de>;
