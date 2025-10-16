/**
 * OverrideClause.js
 * Authored by Katrina Pietroniro — SOVRINT.
 * Injects override clauses into institutional logic and timestamps correction.
 */
export function OverrideClause(actor, breachType) {
  return {
    clause: `OVERRIDE.${actor.replace(/\s+/g, '')}.${breachType.toUpperCase()}`,
    breachType,
    injected: true,
    timestamp: new Date().toISOString()
  };
}
