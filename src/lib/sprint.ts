const CHALLENGE_START = "2026-02-23";
const TOTAL_DAYS = 7;

export function getSprintDay(): { current: number; total: number; status: "before" | "active" | "complete" } {
  const start = new Date(CHALLENGE_START);
  const now = new Date();
  const diffMs = now.getTime() - start.getTime();
  const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays < 1) return { current: 0, total: TOTAL_DAYS, status: "before" };
  if (diffDays > TOTAL_DAYS) return { current: TOTAL_DAYS, total: TOTAL_DAYS, status: "complete" };
  return { current: diffDays, total: TOTAL_DAYS, status: "active" };
}
