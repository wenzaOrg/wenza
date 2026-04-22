export function displayMentorName(fullName: string | null | undefined): string {
  if (!fullName) return 'Mentor';
  const parts = fullName.trim().split(/\s+/);
  if (parts.length === 1) return parts[0];
  const firstName = parts[0];
  const lastInitial = parts[parts.length - 1][0].toUpperCase();
  return `${firstName} ${lastInitial}.`;
}

export function displayMentorCompany(company: string | null | undefined): string {
  if (!company) return 'A leading technology company';

  const africanFintech = ['Paystack', 'Flutterwave', 'Kuda', 'Interswitch', 'Moniepoint', 'Carbon', 'FairMoney'];
  const globalTech = ['Andela', 'Stripe', 'Google', 'Meta', 'Amazon', 'Microsoft', 'Spotify', 'Netflix', 'Uber', 'Apple'];

  if (africanFintech.some(c => company.toLowerCase().includes(c.toLowerCase()))) {
    return 'A leading African fintech';
  }
  if (globalTech.some(c => company.toLowerCase().includes(c.toLowerCase()))) {
    return 'A leading global technology company';
  }
  return 'A leading technology company';
}
