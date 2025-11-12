import TheBodyAtEase from "./TheBodyAtEase";

export const metadata = {
  title: "The Body at Ease | Rehabilitation • Physical Therapy • Massage",
  description:
    "Calm, evidence-based care in Pannipitiya: rehabilitation, physical therapy, therapeutic massage, assisted stretching, and personal training.",
  openGraph: {
    title: "The Body at Ease",
    description:
      "Rehabilitation • Physical Therapy • Massage • Stretching • Personal Training",
    url: "https://your-domain.com",
    siteName: "The Body at Ease",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
    locale: "en_LK",
    type: "website",
  },
  alternates: { canonical: "https://your-domain.com" },
};

export default function Page() {
  return <TheBodyAtEase />;
}
