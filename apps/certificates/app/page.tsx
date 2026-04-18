export default function CertificatesHome() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md text-center">
        <h1 className="font-heading text-3xl font-bold text-text-heading">Verify a Certificate</h1>
        <p className="mt-3 text-text-muted">Enter a Wenza certificate ID to verify its authenticity.</p>
        <div className="mt-6 flex gap-2">
          <input
            id="certificate-id-input"
            type="text"
            placeholder="WZ-2026-00042"
            className="flex-1 rounded-button border border-border bg-bg-card px-4 py-2.5 text-text-body outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
          <button className="rounded-button bg-primary px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-hover">
            Verify
          </button>
        </div>
      </div>
    </main>
  );
}
