
import { FinanceStatCard } from "./StatCards";

export function FinanceStats() {
  return (
    <div className="grid grid-cols-1 gap-4 mt-4">
      <FinanceStatCard title="Personal Loans" value="$45,000" />
      <FinanceStatCard title="Subscriptions" value="$495" />
      <FinanceStatCard title="Income" value="$15,000" />
    </div>
  );
}
