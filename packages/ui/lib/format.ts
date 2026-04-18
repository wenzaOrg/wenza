/**
 * Currency formatting helpers per wenza/README.md §4.4.
 */

/**
 * Format a value in Naira.
 * @param amount - Amount in Naira (not kobo)
 * @returns "₦150,000"
 */
export const formatNaira = (amount: number): string =>
  new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(amount);

/**
 * Format a value in USD.
 * @param amount - Amount in USD
 * @returns "$1,200"
 */
export const formatUsd = (amount: number): string =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount);
