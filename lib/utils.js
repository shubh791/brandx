/**
 * Utility functions for Brand X Frontend
 */

/**
 * Combines class names conditionally, filtering out falsy values.
 * @param  {...any} classes - Class names or expressions
 * @returns {string} - Merged class names
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Formats a numeric price into a localized currency string.
 * @param {number|string} amount - The amount to format
 * @param {string} [currency='INR'] - Currency code
 * @param {string} [locale='en-IN'] - Localization code
 * @returns {string} - Formatted currency string
 */
export function formatPrice(amount, currency = "INR", locale = "en-IN") {
  const numericAmount = typeof amount === "string" ? parseFloat(amount) : amount;
  if (isNaN(numericAmount)) return "";

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
    maximumFractionDigits: 2,
    minimumFractionDigits: numericAmount % 1 === 0 ? 0 : 2,
  }).format(numericAmount);
}

/**
 * Truncates a string to a specified max length with ellipsis.
 * @param {string} text - Source text
 * @param {number} maxLength - Maximum character count
 * @returns {string} - Truncated string
 */
export function truncateText(text, maxLength = 100) {
  if (!text || text.length <= maxLength) return text || "";
  return `${text.slice(0, maxLength).trim()}...`;
}

/**
 * Converts a string to a URL-friendly slug.
 * @param {string} text - Source text
 * @returns {string} - Slugified string
 */
export function slugify(text) {
  if (!text) return "";
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");
}
