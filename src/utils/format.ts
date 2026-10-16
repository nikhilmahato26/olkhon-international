const inr = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });

/** 69999 -> "₹69,999" (Indian digit grouping). */
export const formatINR = (amount: number): string => inr.format(amount);
