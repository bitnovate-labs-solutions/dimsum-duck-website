"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#F7F0E9",
          color: "#273D7F",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ textAlign: "center", padding: "2rem" }}>
          <h2 style={{ marginBottom: "1rem" }}>Something went wrong</h2>
          <p style={{ marginBottom: "1.5rem" }}>{error.message}</p>
          <button
            type="button"
            onClick={reset}
            style={{
              background: "#273D7F",
              color: "#fff",
              border: "none",
              padding: "0.75rem 1.5rem",
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
