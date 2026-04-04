import Navbar from "@/components/navigation/Navbar";

export default function AuthenticatedLayout({ children }: { children: React.ReactNode }) {
  // We can add authentication checks here in the future to redirect unauthenticated users
  return (
    <>
      <Navbar />
      <main className="grow flex flex-col">
        {children}
      </main>
      {/* No Footer for Dashboard and Authenticated flows by default based on the design */}
    </>
  );
}
