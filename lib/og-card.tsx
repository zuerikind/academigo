import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import type { Dictionary } from "@/messages/types";

export const ogImageSize = {
  width: 1200,
  height: 630,
} as const;

export async function createOgImageResponse(dict: Dictionary) {
  const logoPath = path.join(process.cwd(), "public/brand/logo-icon.png");
  const logoBuffer = await readFile(logoPath);
  const logoSrc = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  const { meta } = dict;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #0b1f3a 0%, #0f2744 55%, #132f52 100%)",
          color: "#ffffff",
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif',
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 28,
          }}
        >
          <img
            src={logoSrc}
            alt=""
            width={96}
            height={96}
            style={{ borderRadius: 20 }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <div
              style={{
                fontSize: 28,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#e8a317",
              }}
            >
              Academigo
            </div>
            <div
              style={{
                fontSize: 22,
                color: "rgba(255,255,255,0.75)",
              }}
            >
              {meta.ogTagline}
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            maxWidth: 980,
          }}
        >
          <div
            style={{
              fontSize: 56,
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            {meta.ogTitle}
          </div>
          <div
            style={{
              fontSize: 26,
              lineHeight: 1.45,
              color: "rgba(255,255,255,0.82)",
            }}
          >
            {meta.ogSubjects}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              fontSize: 22,
              color: "rgba(255,255,255,0.65)",
            }}
          >
            academigo.xyz
          </div>
          <div
            style={{
              padding: "12px 28px",
              borderRadius: 999,
              background: "#e8a317",
              color: "#0b1f3a",
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            {meta.ogCta}
          </div>
        </div>
      </div>
    ),
    {
      ...ogImageSize,
    },
  );
}
