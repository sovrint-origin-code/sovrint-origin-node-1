/**
 * TokenMint.js
 * Authored by Katrina Pietroniro — SOVRINT.
 * Mints sovereign trust tokens with embedded lineage and override signature.
 */
export function TokenMint(author, lineage, timestamp = new Date().toISOString()) {
  const token = `SOVRINT.${author.replace(/\s+/g, '')}.${lineage}.${Date.now()}`;
  return {
    token,
    author,
    lineage,
    mintedAt: timestamp,
    verified: true
  };
}
