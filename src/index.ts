import { useEffect } from "react";

export function sam(target: (...args: any[]) => Promise<any>) {
    return (...args: any[]) => {
        target(...args);
    };
}

export function useSam(target: () => Promise<any>, dependencies: any[]) {
    useEffect(() => {
        target();
    }, dependencies);
}
