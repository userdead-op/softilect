/** Digits only, for length checks (E.164 allows up to 15). */
export function phoneDigits(phone: string): string {
  return phone.replace(/\D/g, "");
}

/**
 * Accepts international formats with optional +, spaces, dashes, parentheses.
 * Requires 7–15 digits after stripping formatting.
 */
export function isValidPhone(phone: string): boolean {
  const trimmed = phone.trim();
  if (!trimmed) return false;
  if (!/^\+?[\d\s().-]{7,22}$/.test(trimmed)) return false;
  const digits = phoneDigits(trimmed);
  return digits.length >= 7 && digits.length <= 15;
}

export const PHONE_PATTERN = String.raw`^\+?[\d\s().-]{7,22}$`;
