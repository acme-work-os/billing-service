// Synthetic demo code - figures are made up.

export interface Subscription {
  accountId: string;
  plan: "basic" | "standard" | "pro";
  monthlyCents: number;
  active: boolean;
}

export function annualRecurringRevenueCents(subs: Subscription[]): number {
  return subs
    .filter((s) => s.active)
    .reduce((sum, s) => sum + s.monthlyCents * 12, 0);
}

export function arrByPlan(subs: Subscription[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const s of subs) {
    if (!s.active) continue;
    out[s.plan] = (out[s.plan] ?? 0) + s.monthlyCents * 12;
  }
  return out;
}
