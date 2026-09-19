import { ImageResponse } from "next/og";

export const alt = "Soul Power Energies - Solar & EV Infrastructure Kozhikode & Wayanad";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#F8F9FC",
          backgroundImage:
            "radial-gradient(circle at 90% 10%, rgba(217, 119, 6, 0.15) 0%, transparent 50%), radial-gradient(circle at 10% 90%, rgba(245, 158, 11, 0.1) 0%, transparent 50%)",
          padding: "64px 80px",
          fontFamily: "sans-serif",
          boxSizing: "border-box",
          position: "relative",
        }}
      >
        {/* Top Header Row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {/* Logo Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                backgroundColor: "#FEF3C7",
                border: "2px solid #D97706",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#D97706",
                fontSize: "24px",
                fontWeight: "900",
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="m4.93 4.93 1.41 1.41" />
                <path d="m17.66 17.66 1.41 1.41" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="m6.34 17.66-1.41 1.41" />
                <path d="m19.07 4.93-1.41 1.41" />
              </svg>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span
                style={{
                  fontSize: "28px",
                  fontWeight: "900",
                  color: "#0F172A",
                  letterSpacing: "-0.5px",
                }}
              >
                SOUL POWER ENERGIES
              </span>
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: "700",
                  color: "#D97706",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                }}
              >
                POWERED BY THE SUN
              </span>
            </div>
          </div>

          {/* Location Pill */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 22px",
              borderRadius: "9999px",
              backgroundColor: "#FFFFFF",
              border: "1px solid rgba(217, 119, 6, 0.3)",
              color: "#D97706",
              fontSize: "14px",
              fontWeight: "800",
              textTransform: "uppercase",
              letterSpacing: "1px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>Kozhikode &amp; Wayanad</span>
          </div>
        </div>

        {/* Main Content Area */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            maxWidth: "960px",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <h1
            style={{
              fontSize: "54px",
              fontWeight: "900",
              color: "#0F172A",
              lineHeight: 1.15,
              letterSpacing: "-1.5px",
              margin: 0,
            }}
          >
            Rooftop Solar &amp; EV Infrastructure Specialist
            <span style={{ color: "#D97706" }}>.</span>
          </h1>
          <p
            style={{
              fontSize: "22px",
              fontWeight: "500",
              color: "#475569",
              lineHeight: 1.4,
              margin: 0,
            }}
          >
            Empowering Kerala homes, businesses, and industries with Tier-1 solar panel installations, net metering, and EV charging solutions.
          </p>
        </div>

        {/* Bottom Partner Trust Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            paddingTop: "24px",
            borderTop: "2px solid #E2E8F0",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontSize: "15px",
              fontWeight: "700",
              color: "#334155",
            }}
          >
            <div
              style={{
                width: "22px",
                height: "22px",
                borderRadius: "50%",
                backgroundColor: "#FEF3C7",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <span>Authorized Partner of Virgin Power &amp; Engineering Pvt. Ltd.</span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              fontSize: "15px",
              fontWeight: "700",
              color: "#64748B",
            }}
          >
            <span>Thiruvambady, Calicut</span>
            <span>-</span>
            <span style={{ color: "#D97706", fontWeight: "800" }}>soulpowerenergies.in</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
