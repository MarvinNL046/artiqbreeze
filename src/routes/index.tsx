import { createFileRoute, Link } from "@tanstack/react-router";
import { Logo } from "../ui/logo";
import { cn } from "@/utils/misc";
import {
  CalendarClock,
  CheckCircle2,
  CloudCog,
  GaugeCircle,
  Loader2,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import { Button } from "@/ui/button";
import { ThemeSwitcherHome } from "@/ui/theme-switcher";
import { useConvexAuth } from "@convex-dev/react-query";
import { Route as AuthLoginRoute } from "@/routes/_app/login/_layout.index";
import { Route as DashboardRoute } from "@/routes/_app/_auth/dashboard/_layout.index";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const { isLoading, isAuthenticated } = useConvexAuth();
  const navLinks = [
    { label: "Product", href: "#product" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "About", href: "#about" },
  ];
  const features = [
    {
      icon: CalendarClock,
      title: "Smart Scheduling",
      description: "Dispatch techs, auto-reminders, and optimized daily routes.",
    },
    {
      icon: ShieldCheck,
      title: "F-Gas Compliance",
      description:
        "Capture leak checks, certificates, and logs in one compliant workflow.",
    },
    {
      icon: Smartphone,
      title: "Mobile Field App",
      description: "Technicians get jobs, parts, signatures, and photo proof.",
    },
    {
      icon: GaugeCircle,
      title: "Performance Insights",
      description: "Track SLAs, margins, and unit history across sites.",
    },
    {
      icon: CloudCog,
      title: "Artiq CRM Backbone",
      description: "Unified customers, billing, subscriptions, and auth.",
    },
  ];
  const highlights = [
    "Zero-friction onboarding for cooling teams",
    "Built on Artiq CRM for scale and reliability",
    "Secure payments, auth, and multi-tenant ready",
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[hsl(var(--background))] via-white/70 to-[hsl(var(--background))] text-foreground">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(28,199,255,0.15),_transparent_35%),radial-gradient(circle_at_20%_20%,_rgba(111,255,216,0.08),_transparent_25%)]" />
      <div className="base-grid absolute inset-0 opacity-20" />

      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-primary/5 backdrop-blur bg-card/70">
        <div className="mx-auto flex w-full max-w-screen-xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-3">
            <Logo variant="wordmark" width={170} height={42} />
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium text-primary/80 md:flex">
            {navLinks.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-primary">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="outline" asChild>
              <Link
                to={
                  isAuthenticated
                    ? DashboardRoute.fullPath
                    : AuthLoginRoute.fullPath
                }
                disabled={isLoading}
              >
                {isLoading && <Loader2 className="animate-spin w-4 h-4" />}
                {!isLoading && isAuthenticated && "Dashboard"}
                {!isLoading && !isAuthenticated && "Sign in"}
              </Link>
            </Button>
            <Button className="hidden sm:inline-flex" asChild>
              <Link to={AuthLoginRoute.fullPath}>Request Demo</Link>
            </Button>
            <div className="md:hidden">
              <ThemeSwitcherHome />
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto flex w-full max-w-screen-xl flex-col gap-16 px-6 pb-24 pt-12 lg:pt-16">
        {/* Hero */}
        <section
          id="product"
          className="relative overflow-hidden rounded-3xl border border-primary/10 bg-card/80 shadow-xl backdrop-blur"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#0B1B2E] via-[#12426F] to-[#1CC7FF33] opacity-60" />
          <div className="relative grid gap-10 p-8 md:p-12 lg:grid-cols-12 lg:items-center">
            <div className="flex flex-col gap-6 lg:col-span-6">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/10 bg-white/60 px-3 py-1 text-xs font-semibold uppercase text-primary tracking-wide shadow-sm backdrop-blur">
                Powered by Artiq CRM
              </div>
              <h1 className="text-4xl font-bold leading-tight text-primary md:text-5xl lg:text-6xl">
                The Future of HVAC
                <br />
                Management is Here.
              </h1>
              <p className="max-w-2xl text-lg text-primary/70 md:text-xl">
                Effortlessly manage scheduling, compliance, and field operations
                with the intelligent platform designed for cooling professionals.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Button asChild>
                  <Link to={AuthLoginRoute.fullPath}>
                    Get Started with Artiq Breeze
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <a href="mailto:hello@artiqbreeze.com">Talk to Sales</a>
                </Button>
              </div>
              <div className="grid gap-3 rounded-2xl border border-primary/10 bg-white/50 p-4 shadow-sm backdrop-blur md:grid-cols-2">
                {highlights.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-primary/80">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-3xl border border-primary/10 bg-gradient-to-br from-[#0B1B2E] via-[#0F3056] to-[#1CC7FF]/30 p-6 shadow-2xl">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(111,255,216,0.2),transparent_30%),radial-gradient(circle_at_70%_70%,rgba(28,199,255,0.25),transparent_35%)]" />
                <div className="relative flex flex-col gap-4 text-primary/90">
                  <div className="flex items-center justify-between rounded-2xl bg-white/10 px-4 py-3 backdrop-blur">
                    <div>
                      <p className="text-xs uppercase tracking-[0.12em] text-primary/60">
                        Live Jobs
                      </p>
                      <p className="text-2xl font-semibold text-white">124</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs uppercase tracking-[0.12em] text-primary/60">
                        SLA On-Time
                      </p>
                      <p className="text-2xl font-semibold text-accent">98%</p>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                    <p className="text-sm font-semibold text-white">Today&apos;s Route</p>
                    <div className="mt-3 space-y-3">
                      {["Install • 09:00", "Leak check • 11:30", "Service • 14:00", "Compliance • 16:00"].map(
                        (item) => (
                          <div
                            key={item}
                            className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2 text-sm text-white/90"
                          >
                            <span>{item}</span>
                            <span className="rounded-full bg-accent/20 px-2 py-0.5 text-xs font-semibold text-accent">
                              Scheduled
                            </span>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-center text-white/90">
                    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                      <p className="text-xs uppercase tracking-[0.12em] text-white/60">
                        Techs
                      </p>
                      <p className="text-lg font-semibold">42</p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                      <p className="text-xs uppercase tracking-[0.12em] text-white/60">
                        Sites
                      </p>
                      <p className="text-lg font-semibold">310</p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                      <p className="text-xs uppercase tracking-[0.12em] text-white/60">
                        Alerts
                      </p>
                      <p className="text-lg font-semibold text-accent">3</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust */}
        <section className="flex flex-col gap-4">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-primary/60">
            Trusted by Industry Leaders
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 text-primary/50">
            {["NordicCool", "FrostWorks", "ArcticOps", "HVAC Labs", "BlueGrid"].map(
              (name) => (
                <div
                  key={name}
                  className="rounded-full border border-primary/10 px-4 py-2 text-sm font-semibold backdrop-blur"
                >
                  {name}
                </div>
              ),
            )}
          </div>
        </section>

        {/* Features */}
        <section id="features" className="flex flex-col gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h2 className="text-3xl font-bold text-primary md:text-4xl">
              Built for Cooling Professionals
            </h2>
            <p className="text-primary/70">
              Everything you need to schedule, certify, and execute HVAC work—fast.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col gap-3 rounded-2xl border border-primary/10 bg-card/70 p-5 shadow-sm backdrop-blur"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-primary">
                  <feature.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-primary">{feature.title}</h3>
                <p className="text-sm text-primary/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Advantage */}
        <section
          id="about"
          className="grid gap-8 rounded-3xl border border-primary/10 bg-card/80 p-8 shadow-lg lg:grid-cols-12 lg:items-center"
        >
          <div className="lg:col-span-7 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/60">
              Platform Advantage
            </p>
            <h3 className="text-3xl font-bold text-primary">
              Powered by Artiq CRM for scale, security, and speed.
            </h3>
            <p className="text-primary/70">
              Artiq Breeze inherits auth, billing, subscriptions, and deploy tooling from
              the Artiq core—so your HVAC workflows ride on proven infrastructure.
            </p>
            <div className="space-y-2">
              {[
                "Multi-tenant ready: handle crews, regions, and clients in one workspace.",
                "Stripe-native billing and usage for predictable revenue.",
                "Convex backend with real-time updates and optimized queries.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-primary/75">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild>
                <Link to={AuthLoginRoute.fullPath}>Launch Artiq Breeze</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to={DashboardRoute.fullPath}>View Dashboard Demo</Link>
              </Button>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-primary/10 bg-gradient-to-br from-[#0B1B2E] via-[#0F3056] to-[#1CC7FF]/30 p-6 text-white shadow-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-white/60">
                    Compliance
                  </p>
                  <p className="text-2xl font-semibold">99.4%</p>
                </div>
                <div className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-accent">
                  F-Gas ready
                </div>
              </div>
              <div className="mt-5 space-y-3">
                {[
                  { label: "Service SLAs", value: "98%", tone: "text-accent" },
                  { label: "First-time fix", value: "87%", tone: "text-white" },
                  { label: "Avg. response", value: "42 min", tone: "text-white" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3 backdrop-blur"
                  >
                    <span className="text-sm text-white/80">{stat.label}</span>
                    <span className={cn("text-base font-semibold", stat.tone)}>
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3 text-center text-white/90">
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <p className="text-xs uppercase tracking-[0.14em] text-white/60">
                    Jobs/mo
                  </p>
                  <p className="text-xl font-semibold">12.4k</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <p className="text-xs uppercase tracking-[0.14em] text-white/60">
                    Savings
                  </p>
                  <p className="text-xl font-semibold text-accent">$68k</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          id="pricing"
          className="flex flex-col items-center gap-4 rounded-3xl border border-primary/10 bg-card/90 p-10 text-center shadow-lg"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/60">
            Get Ahead of Peak Season
          </p>
          <h3 className="text-3xl font-bold text-primary md:text-4xl">
            Start with Artiq Breeze today.
          </h3>
          <p className="max-w-2xl text-primary/70">
            Launch in minutes with Artiq CRM’s secure backbone. Bring your teams, routes,
            and compliance into one cooling-first platform.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button asChild>
              <Link to={AuthLoginRoute.fullPath}>Create your workspace</Link>
            </Button>
            <Button variant="outline" asChild>
              <a href="mailto:hello@artiqbreeze.com">Schedule a walkthrough</a>
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-primary/10 bg-card/80">
        <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-6 px-6 py-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <Logo width={28} height={28} />
            <span className="text-sm font-semibold text-primary">ARTIQ BREEZE</span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-primary/70">
            <a href="#product" className="hover:text-primary">
              Product
            </a>
            <a href="#features" className="hover:text-primary">
              Features
            </a>
            <a href="#pricing" className="hover:text-primary">
              Pricing
            </a>
            <a href="#about" className="hover:text-primary">
              About
            </a>
          </div>
          <div className="flex items-center gap-3 text-sm text-primary/70">
            <a href="mailto:hello@artiqbreeze.com" className="hover:text-primary">
              hello@artiqbreeze.com
            </a>
            <ThemeSwitcherHome />
          </div>
        </div>
      </footer>
    </div>
  );
}
