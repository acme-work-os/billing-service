// Synthetic demo code - not a real billing system.

export interface LineItem {
  description: string;
  quantity: number;
  unitPriceCents: number;
}

export interface Invoice {
  id: string;
  accountId: string;
  currency: "USD" | "EUR";
  items: LineItem[];
}

export function lineTotalCents(item: LineItem): number {
  return item.quantity * item.unitPriceCents;
}

export function invoiceTotalCents(invoice: Invoice): number {
  return invoice.items.reduce((sum, item) => sum + lineTotalCents(item), 0);
}

export function formatTotal(invoice: Invoice): string {
  return (invoiceTotalCents(invoice) / 100).toFixed(2) + " " + invoice.currency;
}
