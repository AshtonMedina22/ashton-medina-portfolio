import { ImageResponse } from "next/og";
export const runtime = "nodejs";

const accent = "#a78bfa";
const cyan = "#22d3ee";
const dark = "#07070a";

function truncate(value: string, max: number) {
  return value.length > max ? `${value.slice(0, max - 1)}…` : value;
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const title = truncate(url.searchParams.get("title") || "Ashton Medina", 88);
  const subtitle = truncate(
    url.searchParams.get("subtitle") ||
      "Business operations, systems implementation, and workflow execution",
    120,
  );

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        overflow: "hidden",
        background: dark,
        color: "#f8fafc",
        fontFamily: "Inter, Arial, sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 18% 18%, rgba(167,139,250,0.28), transparent 32%), radial-gradient(circle at 82% 20%, rgba(34,211,238,0.18), transparent 34%), linear-gradient(135deg, #09090b 0%, #111827 54%, #0f172a 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: -80,
          top: -120,
          width: 520,
          height: 520,
          borderRadius: 999,
          border: "1px solid rgba(255,255,255,0.08)",
          background: "rgba(255,255,255,0.03)",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 70,
          bottom: 70,
          width: 1040,
          height: 1,
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.24), transparent)",
        }}
      />

      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          padding: "72px 84px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div
              style={{
                width: 54,
                height: 54,
                borderRadius: 16,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background:
                  "linear-gradient(135deg, rgba(167,139,250,0.95), rgba(34,211,238,0.75))",
                color: "#050505",
                fontSize: 24,
                fontWeight: 900,
                letterSpacing: "-0.08em",
              }}
            >
              AM
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <div style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-0.03em" }}>
                Ashton Medina
              </div>
              <div style={{ fontSize: 16, fontWeight: 700, color: "#cbd5e1" }}>
                Dallas-Fort Worth, TX
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "12px 18px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.14)",
              background: "rgba(15,23,42,0.72)",
              color: "#e2e8f0",
              fontSize: 17,
              fontWeight: 800,
            }}
          >
            Operations • Systems • Implementation
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28, maxWidth: 950 }}>
          <div
            style={{
              display: "flex",
              padding: "10px 14px",
              borderRadius: 999,
              border: `1px solid ${accent}66`,
              background: "rgba(167,139,250,0.12)",
              color: "#ddd6fe",
              fontSize: 18,
              fontWeight: 900,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Portfolio case study
          </div>
          <div
            style={{
              fontSize: 70,
              lineHeight: 0.96,
              fontWeight: 900,
              letterSpacing: "-0.065em",
              textWrap: "balance",
            }}
          >
            {title}
          </div>
          <div
            style={{
              maxWidth: 900,
              fontSize: 28,
              lineHeight: 1.28,
              fontWeight: 650,
              color: "#cbd5e1",
              textWrap: "balance",
            }}
          >
            {subtitle}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ display: "flex", gap: 12 }}>
            {["Workflow design", "Operational controls", "Reporting visibility"].map((item) => (
              <div
                key={item}
                style={{
                  padding: "12px 15px",
                  borderRadius: 12,
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(255,255,255,0.055)",
                  color: "#e5e7eb",
                  fontSize: 16,
                  fontWeight: 800,
                }}
              >
                {item}
              </div>
            ))}
          </div>
          <div style={{ color: cyan, fontSize: 20, fontWeight: 900 }}>ashtonmedina.com</div>
        </div>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  );
}
