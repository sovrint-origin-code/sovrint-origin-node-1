/**
 * TokenValidator.js
 * Authored by Katrina Pietroniro — SOVRINT.
 * Validates trust tokens and onboarding flows.
 */
export function TokenValidator(token) {
  const valid = token.startsWith("SOVRINT.");
  return {
    token,
    valid,
    timestamp: new Date().toISOString()
  };
}
