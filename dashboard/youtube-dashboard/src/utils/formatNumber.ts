
export function formatNumber(value: string): string {
    const num = Number(value);

    if (isNaN(num)) return "0"; 

    if (num >= 1_000_000) {
        const formatted = (num / 1_000_000).toFixed(1).replace(".0", "");
        return `${formatted} mi`;
    }

    if (num >= 1_000) {
        const formatted = (num / 1_000).toFixed(0);
        return `${formatted} mil`;
    }

    return num.toString();
}
