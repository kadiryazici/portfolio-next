import { DependencyList, EffectCallback, useEffect, useRef } from "react";

export function useUpdateEffect(
  effect: EffectCallback,
  deps: DependencyList
): void {
  const mounted = useRef(false);

  useEffect(() => {
    if (mounted.current) {
      return effect();
    }

    let cancelled = false;

    queueMicrotask(() => {
      if (!cancelled) {
        mounted.current = true;
      }
    });

    return () => {
      cancelled = true;
    };
  }, deps);
}
