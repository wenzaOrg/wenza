export default function ScholarshipHome() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-16 text-center">
      <span className="rounded-pill bg-accent-gold/10 px-4 py-1 text-sm font-medium text-accent-gold">
        Up to 90% off your programme fee
      </span>
      <h1 className="font-heading mt-4 text-4xl font-bold text-text-heading">
        Apply for a Wenza Scholarship
      </h1>
      <p className="mt-4 text-text-muted">
        We believe talent is everywhere and opportunity should match it. The Wenza Scholarship
        Programme covers up to 90% of your programme fee for qualified applicants.
      </p>
      <a
        href="/apply"
        className="mt-8 inline-block rounded-button bg-primary px-8 py-3 font-medium text-white hover:bg-primary-hover"
      >
        Apply now — it only takes 5 minutes
      </a>
    </main>
  );
}
