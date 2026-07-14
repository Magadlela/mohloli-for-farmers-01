import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

const nkhono =
  "https://z-p3-scontent.fmsu3-1.fna.fbcdn.net/v/t39.30808-6/471789425_10162515435158586_8097790017530335910_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1365&ctp=s2048x1365&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Isz66mSNgHcQ7kNvwGAfC2N&_nc_oc=Adq-RTCGQfbEYU13uaMKJAC4Gf5GB38i4zjUWdqUE0VXq3Rn6GxoH0-ylRuj6pTPOgs&_nc_pt=5&_nc_zt=23&_nc_ht=z-p3-scontent.fmsu3-1.fna&_nc_gid=a4VLh8rlQ3CeTTeu_AoCJA&_nc_ss=7b289&oh=00_AQBfDaz2MuhOFzBcBe33_PGTrfXgibz9YU577L4KySuJkQ&oe=6A5C8879";
const plough =
  "https://www.anh-academy.org/sites/default/files/IMG_5054.JPG";
const cabbage =
  "https://www.ccardesa.org/sites/default/files/news-images/20230216_141602%5B1%5D.jpg";
const crisisImage =
  "https://www.wvi.org/sites/default/files/styles/4_3_1440x1080/public/2024-05/Picture1D.webp?itok=x15tFp-X";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mohloli — Sowing finance. Growing food security." },
      {
        name: "description",
        content:
          "An M-Pesa-powered agri-fintech prototype for Lesotho's smallholder farmers — seasonal credit, climate cover, savings and markets in one wallet.",
      },
      { property: "og:title", content: "Mohloli — Interactive Prototype" },
      {
        property: "og:description",
        content:
          "Tap through the Mohloli app: Home, Credit, Cover and Flow — built on the M-Pesa rails Basotho already trust.",
      },
      { property: "og:image", content: nkhono },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: nkhono },
    ],
  }),
  component: Index,
});

type TabId = "home" | "credit" | "cover" | "flow";
const TABS: { id: TabId; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "credit", label: "Credit" },
  { id: "cover", label: "Cover" },
  { id: "flow", label: "Flow" },
];

function Index() {
  const [tab, setTab] = useState<TabId>("home");

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground font-bold">
              M
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Vodacom Lesotho · M-Pesa
              </p>
              <p className="text-base font-semibold">Mohloli</p>
            </div>
          </div>
          <p className="hidden text-sm text-muted-foreground md:block">
            Sowing finance. Growing food security.
          </p>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-14 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-primary">
            Interactive prototype
          </p>
          <h1 className="mt-4 font-serif text-5xl leading-[1.05] tracking-tight md:text-6xl">
            Agricultural finance in the hands of every{" "}
            <span className="italic text-primary">Mosotho</span> farmer.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Take a quick tour of the Mohloli app built on the trusted mobile
            payment network Basotho already use, to help farmers access credit,
            protection, savings, and markets.
          </p>

          <div className="mt-8 grid max-w-xl grid-cols-3 gap-4 text-sm">
            <Stat value="227K+" label="farming households" />
            <Stat value="0.9M" label="M-Pesa customers" />
            <Stat value="M3,000" label="avg. input loan" />
          </div>
        </div>

        {/* Phone */}
        <div className="flex justify-center">
          <Phone tab={tab} setTab={setTab} />
        </div>
      </section>

      {/* Crisis section */}
      <section className="border-t border-border/60 bg-secondary/40">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-2xl border border-border/60 bg-card p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.18em] text-primary">
              The crisis
            </p>
            <h2 className="mt-4 font-serif text-3xl leading-tight md:text-4xl">
              Climate shocks can wipe out a season in days.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              One frost, storm, or dry spell can leave farmers without food,
              cash flow, or the means to recover. The result is often deeper
              debt and a harder road to the next planting season.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Mohloli helps turn that uncertainty into practical support, so
              farmers can protect their crops, access timely credit, and keep
              moving forward.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border/60 bg-card">
            <img
              src={crisisImage}
              alt="A dry maize field showing the impact of drought on a farming community."
              className="h-[420px] w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Testimonial + farmer photos */}
      <section className="border-t border-border/60 bg-background">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1fr_1.1fr]">
          <figure className="overflow-hidden rounded-2xl border border-border/60 bg-card">
            <img
              src={nkhono}
              alt="'Nkhono Limpho, a Mosotho farmer, wearing the traditional mokorotlo hat and Seanamarena blanket, standing before the Maluti mountains."
              className="h-[420px] w-full object-cover"
              loading="lazy"
            />
            <figcaption className="p-6">
              <p className="font-serif text-2xl leading-snug">
                &ldquo;Five decades of turning this soil. Last season the frost
                took everything — no insurance, no credit, no one to call.&rdquo;
              </p>
              <p className="mt-4 text-sm uppercase tracking-[0.18em] text-muted-foreground">
                &rsquo;Nkhono Limpho · 74 · Mafeteng
              </p>
            </figcaption>
          </figure>

          <div className="grid gap-6">
            <div className="overflow-hidden rounded-2xl border border-border/60">
              <img
                src={plough}
                alt="Basotho farmers ploughing a field with oxen under the Maluti sky."
                className="h-[240px] w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-border/60">
              <img
                src={cabbage}
                alt="Green grass fields in Lesotho, showing vibrant farmland under open skies."
                className="h-[240px] w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="rounded-2xl border border-primary/40 bg-primary/10 p-6">
              <p className="text-sm uppercase tracking-[0.18em] text-primary">
                The Mohloli loop
              </p>
              <p className="mt-3 text-base leading-relaxed">
                Data scores → wallet disburses → inputs purchased → crop insured
                → repayment builds the next, bigger loan.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-6 text-xs uppercase tracking-[0.16em] text-muted-foreground">
          <span>Mohloli · Vodacom Lesotho</span>
          <span>UN SDG Young Innovators 2026 · Zero Hunger</span>
        </div>
      </footer>
    </main>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-serif text-3xl text-primary">{value}</p>
      <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </p>
    </div>
  );
}

function Phone({ tab, setTab }: { tab: TabId; setTab: (t: TabId) => void }) {
  return (
    <div className="relative">
      <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-primary/10 blur-3xl" />
      <div className="relative h-[640px] w-[320px] rounded-[3rem] border border-border bg-[oklch(0.18_0.03_140)] p-3 shadow-2xl">
        {/* notch */}
        <div className="absolute left-1/2 top-3 z-10 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-black/80" />
        <div className="relative h-full w-full overflow-hidden rounded-[2.4rem] bg-background">
          {/* status bar */}
          <div className="flex items-center justify-between px-6 pt-3 text-[10px] font-medium text-muted-foreground">
            <span>9:41</span>
            <span>Mohloli · M-Pesa</span>
            <span>••••</span>
          </div>

          <div className="h-[520px] overflow-hidden px-5 pt-4">
            {tab === "home" && <HomeScreen />}
            {tab === "credit" && <CreditScreen />}
            {tab === "cover" && <CoverScreen />}
            {tab === "flow" && <FlowScreen />}
          </div>

          {/* tab bar */}
          <nav className="absolute inset-x-3 bottom-3 flex items-center justify-between rounded-2xl border border-border bg-secondary/70 px-2 py-2 backdrop-blur">
            {TABS.map((t) => {
              const active = tab === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  className={
                    "flex-1 rounded-xl px-2 py-2 text-[11px] font-semibold transition-colors " +
                    (active
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground")
                  }
                >
                  {t.label}
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}

function ScreenHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-[0.2em] text-primary">
        {eyebrow}
      </p>
      <h2 className="mt-1 font-serif text-xl leading-tight">{title}</h2>
    </div>
  );
}

function HomeScreen() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <div
          className="h-11 w-11 rounded-full border border-primary/40 bg-cover bg-center"
          style={{ backgroundImage: `url(${nkhono})` }}
        />
        <div>
          <p className="text-[11px] uppercase tracking-widest text-muted-foreground">
            Lumela
          </p>
          <p className="text-sm font-semibold">&rsquo;Nkhono Limpho</p>
        </div>
      </div>

      <div className="rounded-2xl bg-primary p-4 text-primary-foreground">
        <p className="text-[10px] uppercase tracking-widest opacity-80">
          Wallet balance
        </p>
        <p className="mt-1 font-serif text-3xl">M 2,480</p>
        <p className="mt-1 text-[11px] opacity-80">M-Pesa · linked</p>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <TileMini label="Credit" value="M3,000" hint="Pre-approved" />
        <TileMini label="Cover" value="Active" hint="Frost + drought" />
        <TileMini label="Savings" value="M 640" hint="Planting pocket" />
        <TileMini label="Market" value="12 buyers" hint="Nearby" />
      </div>

      <div className="rounded-xl border border-border bg-card p-3">
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
          Advice today
        </p>
        <p className="mt-1 text-xs leading-snug">
          Frost risk in Mafeteng tonight — cover young cabbage seedlings.
        </p>
      </div>
    </div>
  );
}

function TileMini({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-3">
      <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
        {label}
      </p>
      <p className="mt-1 text-sm font-semibold">{value}</p>
      <p className="text-[10px] text-muted-foreground">{hint}</p>
    </div>
  );
}

function CreditScreen() {
  return (
    <div className="space-y-4">
      <ScreenHeader eyebrow="Input credit" title="Fund your planting season" />
      <div className="rounded-2xl border border-primary/40 bg-primary/10 p-4">
        <p className="text-[10px] uppercase tracking-widest text-primary">
          Pre-approved
        </p>
        <p className="mt-1 font-serif text-3xl text-primary">M 3,000</p>
        <p className="mt-1 text-[11px] text-muted-foreground">
          Scored on 14 months of M-Pesa history
        </p>
      </div>

      <div className="space-y-2">
        <RangeRow label="Seeds & seedlings" pct={55} />
        <RangeRow label="Fertiliser" pct={70} />
        <RangeRow label="Labour" pct={30} />
      </div>

      <div className="rounded-xl border border-border bg-card p-3 text-[11px]">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Repayment</span>
          <span>At harvest · Mar 2027</span>
        </div>
        <div className="mt-1 flex justify-between">
          <span className="text-muted-foreground">Rate</span>
          <span>1.8% / month</span>
        </div>
      </div>

      <button className="w-full rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground">
        Send to wallet
      </button>
    </div>
  );
}

function RangeRow({ label, pct }: { label: string; pct: number }) {
  return (
    <div>
      <div className="flex justify-between text-[11px]">
        <span>{label}</span>
        <span className="text-muted-foreground">{pct}%</span>
      </div>
      <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full rounded-full bg-primary"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

function CoverScreen() {
  return (
    <div className="space-y-4">
      <ScreenHeader eyebrow="Climate cover" title="Your crop is insured" />
      <div className="rounded-2xl border border-border bg-card p-4">
        <div className="flex items-center justify-between">
          <span className="text-[11px] uppercase tracking-widest text-muted-foreground">
            Status
          </span>
          <span className="rounded-full bg-primary/20 px-2 py-0.5 text-[10px] font-semibold text-primary">
            Active
          </span>
        </div>
        <p className="mt-2 font-serif text-2xl">Cabbage · 0.6 ha</p>
        <p className="text-[11px] text-muted-foreground">
          Ha Ramabanta · plot #A17
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <MiniStat label="Drought" value="Covered" />
        <MiniStat label="Frost" value="Covered" />
        <MiniStat label="Excess rain" value="Covered" />
        <MiniStat label="Payout cap" value="M 4,200" />
      </div>

      <div className="rounded-xl border border-accent/40 bg-accent/10 p-3">
        <p className="text-[10px] uppercase tracking-widest text-accent">
          Satellite trigger
        </p>
        <p className="mt-1 text-[11px] leading-snug">
          Automatic payout if rainfall &lt; 40mm across the growing window. No
          claim forms.
        </p>
      </div>
    </div>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-3">
      <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
        {label}
      </p>
      <p className="mt-1 text-xs font-semibold">{value}</p>
    </div>
  );
}

function FlowScreen() {
  return (
    <div className="space-y-3">
      <ScreenHeader eyebrow="Flow" title="Savings, market & advice" />

      <div className="rounded-2xl border border-border bg-card p-3">
        <div className="flex items-center justify-between">
          <p className="text-[11px] uppercase tracking-widest text-muted-foreground">
            Planting pocket
          </p>
          <p className="text-[11px] text-primary">73%</p>
        </div>
        <p className="mt-1 font-serif text-xl">M 640 / 880</p>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-secondary">
          <div className="h-full w-[73%] rounded-full bg-primary" />
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-card p-3">
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
          Marketplace · nearby buyers
        </p>
        <ul className="mt-2 space-y-1.5 text-[11px]">
          <MarketRow name="Maseru Fresh Co-op" crop="Cabbage" price="M 6.20/kg" />
          <MarketRow name="Pick n Pay Maseru" crop="Peppers" price="M 18/kg" />
          <MarketRow name="Local school feed" crop="Maize" price="M 4.80/kg" />
        </ul>
      </div>

      <div className="rounded-2xl border border-primary/40 bg-primary/10 p-3">
        <p className="text-[10px] uppercase tracking-widest text-primary">
          Expert advice · voice note
        </p>
        <div className="mt-2 flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground">
            ▶
          </div>
          <div className="flex-1">
            <p className="text-[11px] font-semibold">Ntate Thabo, agronomist</p>
            <p className="text-[10px] text-muted-foreground">
              &ldquo;Frost cover for cabbage seedlings&rdquo; · 1:20
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MarketRow({
  name,
  crop,
  price,
}: {
  name: string;
  crop: string;
  price: string;
}) {
  return (
    <li className="flex items-center justify-between">
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-[10px] text-muted-foreground">{crop}</p>
      </div>
      <span className="text-primary">{price}</span>
    </li>
  );
}
