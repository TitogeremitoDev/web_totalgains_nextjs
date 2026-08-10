"use client";

import { useSyncExternalStore } from 'react';

/* Nunca emite: el valor solo cambia entre el snapshot de servidor y el de cliente. */
const subscribe = () => () => { };

/**
 * `false` durante el prerender/hidratación y `true` a partir de ahí.
 * Sustituye al patrón `const [mounted, setMounted] = useState(false)` +
 * `useEffect(() => setMounted(true), [])`, que provoca un render en cascada
 * (regla react-hooks/set-state-in-effect).
 */
export function useHydrated() {
    return useSyncExternalStore(subscribe, () => true, () => false);
}
