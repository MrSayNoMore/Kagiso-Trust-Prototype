import React, { useMemo, useState } from "react";
import {
  Bell,
  CalendarDays,
  ChevronLeft,
  FileText,
  Home,
  Info,
  Landmark,
  LogIn,
  Menu,
  MessageSquare,
  Search,
  Settings,
  User,
  Users,
  BookOpen,
  Briefcase,
  CheckCircle2,
  XCircle,
  MapPin,
  Send,
  ShieldCheck,
  BarChart3,
  LogOut,
  Mail,
  ArrowRight,
  BookMarked,
  Building2,
  GraduationCap,
  Mic,
  Newspaper,
  Gavel,
  Clock3,
} from "lucide-react";

const COLORS = {
  orange: "#D56C38",
  green: "#65735C",
  brown: "#6B3E2E",
  gold: "#D5A62A",
  background: "#F5F2EA",
  text: "#1D1D1B",
  soft: "#EDE8DD",
  line: "rgba(0,0,0,0.08)",
};

const logoUrl = "https://cdn-ildpnba.nitrocdn.com/miRLwxeHaKdzaQXjLPqzXhnPBqYeqlZe/assets/images/optimized/rev-9192e03/kagiso.co.za/wp-content/uploads/2024/07/kagiso-trust-logo-300x119.png";

const newsItems = [
  {
    id: 1,
    title: "Education Conversations 2026",
    date: "25 March 2026",
    tag: "Newsroom",
    summary: "A new dialogue series focused on strengthening educational excellence and shared learning.",
    body:
      "Kagiso Trust continues to deepen education dialogue through structured learning engagements that bring together educators, partners, and communities. This initiative supports practical knowledge sharing and stronger alignment across the education ecosystem.",
  },
  {
    id: 2,
    title: "Annual Report 24/25",
    date: "10 March 2026",
    tag: "Annual Reports",
    summary: "Access Kagiso Trust's latest organisational and programme performance highlights.",
    body:
      "The Annual Report presents a consolidated view of programme delivery, institutional performance, governance progress, and financial sustainability. It is intended to support accountability, transparency, and strategic visibility.",
  },
  {
    id: 3,
    title: "In Brief Dec 2025",
    date: "12 December 2025",
    tag: "Publication",
    summary: "A concise view of programme activity, insights, and institutional updates.",
    body:
      "This publication provides a short-form summary of programme progress, emerging lessons, and institutional reflections across Kagiso Trust's operational areas. It is designed for quick access to high-value information.",
  },
];

const knowledgeItems = [
  {
    id: 1,
    title: "Annual Report 2024/25",
    type: "Report",
    icon: FileText,
    description: "Comprehensive organisational performance, programme delivery and financial highlights.",
  },
  {
    id: 2,
    title: "Civil Society In-Brief",
    type: "Publication",
    icon: Newspaper,
    description: "Short-form knowledge pieces and thought leadership content from Kagiso Trust.",
  },
  {
    id: 3,
    title: "Kagiso Trust Podcast Series",
    type: "Podcast",
    icon: Mic,
    description: "Audio content spotlighting development dialogue, learning and impact stories.",
  },
  {
    id: 4,
    title: "Policy & Governance Resources",
    type: "Knowledge Pack",
    icon: Gavel,
    description: "Reference materials supporting institutional strengthening and public policy engagement.",
  },
];

const opportunityItems = [
  {
    id: 1,
    title: "Careers",
    subtitle: "Open opportunities to join Kagiso Trust and contribute to national development impact.",
    icon: Briefcase,
    cta: "View Opportunities",
  },
  {
    id: 2,
    title: "Proposals & Bids",
    subtitle: "Active calls, submission guidance, and bid opportunities for service providers and partners.",
    icon: FileText,
    cta: "View Notices",
  },
];

const events = [
  {
    id: 1,
    title: "The Power of Youth in Co-creating Education",
    type: "Virtual Event",
    date: "18 March 2026",
    interested: 86,
    category: "Education",
  },
  {
    id: 2,
    title: "Leadership Conference 2025 Follow-up Session",
    type: "In-person",
    date: "24 April 2026",
    interested: 41,
    category: "Institutional Capacity Building",
  },
  {
    id: 3,
    title: "Partner Readiness Workshop",
    type: "Workshop",
    date: "10 May 2026",
    interested: 59,
    category: "Socio-Economic Development",
  },
];

const programmes = [
  {
    id: "education",
    title: "Education Development",
    subtitle: "Enhancing access to quality education from early childhood through higher education.",
    icon: GraduationCap,
    color: COLORS.orange,
    overview:
      "Kagiso Trust’s education work focuses on improving learner outcomes, strengthening school leadership, and supporting long-term educational excellence in underserved communities.",
    highlights: ["Learner support", "School leadership", "Education partnerships"],
  },
  {
    id: "institutional",
    title: "Institutional Capacity Building",
    subtitle: "Strengthening local government and civil society organisations for long-term sustainability.",
    icon: Building2,
    color: COLORS.green,
    overview:
      "This pillar supports stronger institutions through governance support, systems strengthening, capability building, and collaboration with civil society and local government partners.",
    highlights: ["Governance support", "Civil society capacity", "Institutional strengthening"],
  },
  {
    id: "sed",
    title: "Socio-Economic Development",
    subtitle: "Supporting small black businesses and promoting economic inclusion.",
    icon: Landmark,
    color: COLORS.gold,
    overview:
      "Socio-Economic Development focuses on enterprise development, opportunity access, and sustainable participation in the economy through targeted support and strategic interventions.",
    highlights: ["Enterprise support", "Economic inclusion", "Sustainable livelihoods"],
  },
];

const patrons = ["Our Patrons", "Our Trustees", "Executive Committee"];

function AppButton({ children, variant = "primary", className = "", ...props }) {
  const styles =
    variant === "primary"
      ? "bg-[var(--orange)] text-white border-[var(--orange)]"
      : variant === "secondary"
      ? "bg-white text-[var(--dark)] border-black/10"
      : "bg-[var(--green)] text-white border-[var(--green)]";

  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-2xl border px-4 py-3 text-sm font-medium shadow-sm transition hover:opacity-95 active:scale-[0.99] ${styles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

function SectionTitle({ title, action, eyebrow }) {
  return (
    <div className="mb-3 flex items-end justify-between gap-3">
      <div>
        {eyebrow ? <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-500">{eyebrow}</div> : null}
        <h3 className="text-[15px] font-semibold tracking-tight text-[var(--dark)]">{title}</h3>
      </div>
      {action ? <button className="text-xs font-semibold text-[var(--orange)]">{action}</button> : null}
    </div>
  );
}

function Card({ children, className = "" }) {
  return <div className={`rounded-3xl border border-black/5 bg-white shadow-sm ${className}`}>{children}</div>;
}

function PhoneShell({ children }) {
  return (
    <div className="mx-auto w-full max-w-[420px] rounded-[36px] border-8 border-[#151515] bg-[var(--cream)] shadow-2xl">
      <div className="mx-auto mt-2 h-6 w-32 rounded-b-3xl bg-[#151515]" />
      <div className="relative min-h-[820px] overflow-hidden rounded-[28px]">
        <img src={logoUrl} alt="" className="pointer-events-none absolute -bottom-10 -right-16 w-72 opacity-[0.05]" />
        {children}
      </div>
    </div>
  );
}

function TopBar({ title, onMenu, onBack, right }) {
  return (
    <div className="flex items-center justify-between px-5 pb-3 pt-4">
      <button onClick={onBack || onMenu} className="rounded-full p-2 text-[var(--dark)] hover:bg-black/5">
        {onBack ? <ChevronLeft size={22} /> : <Menu size={22} />}
      </button>
      <div className="text-lg font-semibold tracking-tight text-[var(--dark)]">{title}</div>
      <div className="flex min-w-[40px] justify-end">{right}</div>
    </div>
  );
}

function BottomNav({ current, setCurrent }) {
  const items = [
    ["home", Home, "Home"],
    ["news", FileText, "News"],
    ["events", CalendarDays, "Events"],
    ["hub", BookOpen, "Hub"],
    ["profile", User, "Profile"],
  ];
  return (
    <div className="fixed bottom-0 left-0 right-0 mx-auto flex w-full max-w-[404px] items-center justify-between rounded-t-[26px] border-t border-black/5 bg-white px-4 py-3 shadow-[0_-8px_24px_rgba(0,0,0,0.08)]">
      {items.map(([key, Icon, label]) => {
        const active = current === key;
        return (
          <button key={key} onClick={() => setCurrent(key)} className="flex flex-1 flex-col items-center gap-1">
            <div className={`rounded-2xl p-2 ${active ? "bg-[var(--soft)]" : ""}`}>
              <Icon size={18} className={active ? "text-[var(--orange)]" : "text-gray-500"} />
            </div>
            <span className={`text-[10px] ${active ? "font-semibold text-[var(--orange)]" : "text-gray-500"}`}>{label}</span>
          </button>
        );
      })}
    </div>
  );
}

export default function KagisoTrustAppPrototype() {
  const [authMode, setAuthMode] = useState("landing");
  const [userType, setUserType] = useState(null);
  const [current, setCurrent] = useState("home");
  const [showMenu, setShowMenu] = useState(false);
  const [eventVotes, setEventVotes] = useState({});
  const [feedbackSent, setFeedbackSent] = useState(false);
  const [adminMode, setAdminMode] = useState(false);
  const [selectedProgramme, setSelectedProgramme] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [form, setForm] = useState({ fullName: "", email: "", password: "", otp: "" });

  const resolvedUser = useMemo(() => userType || null, [userType]);

  const strategyBlock = (
    <Card className="p-4">
      <div className="mb-2 flex items-center gap-2 text-[var(--orange)]"><ShieldCheck size={18} /><span className="text-sm font-semibold">Our Strategy</span></div>
      <div className="space-y-2 text-sm leading-6 text-gray-700">
        <p><span className="font-semibold text-[var(--dark)]">Vision:</span> A prosperous, peaceful, equitable, and just society.</p>
        <p><span className="font-semibold text-[var(--dark)]">Mission:</span> To contribute to development through sustainable funding, like-minded partnerships, and innovative scalable development models.</p>
        <p><span className="font-semibold text-[var(--dark)]">Strategic Goals:</span> Educational development, socio-economic development, institutional capability development, and financial sustainability.</p>
      </div>
    </Card>
  );

  function completeAuth(type) {
    setUserType(type);
    setCurrent("home");
    setShowMenu(false);
  }

  function renderAuth() {
    return (
      <PhoneShell>
        <div className="min-h-[820px] bg-[var(--cream)] px-6 pb-8 pt-6">
          <div className="flex items-center justify-between text-[var(--dark)]">
            <span className="text-sm font-semibold">9:41</span>
            <div className="flex items-center gap-2 text-xs"><span>5G</span><span>100%</span></div>
          </div>

          <div className="mt-10 text-center">
            <div className="mx-auto mb-6 inline-flex rounded-full border border-[var(--orange)]/15 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--orange)]">Kagiso Trust App</div>
            <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-3xl border border-black/5 bg-white shadow-sm">
              <img src={logoUrl} alt="Kagiso Trust" className="h-11 w-auto object-contain" />
            </div>
            <h1 className="text-3xl font-semibold tracking-tight text-[var(--dark)]">Kagiso Trust</h1>
            <p className="mx-auto mt-2 max-w-[280px] text-sm leading-6 text-gray-600">Sign in to access programmes, knowledge resources, opportunities, and organisational updates.</p>
          </div>

          <Card className="mt-8 border border-[var(--orange)]/10 p-5 shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
            {authMode === "landing" && (
              <div className="space-y-4">
                <div>
                  <h2 className="text-xl font-semibold text-[var(--dark)]">Welcome</h2>
                  <p className="mt-1 text-sm text-gray-600">Choose how you would like to continue.</p>
                </div>
                <div className="grid gap-3">
                  <AppButton onClick={() => setAuthMode("signup")} className="w-full text-base font-semibold"><Mail size={16} /> Sign Up</AppButton>
                  <AppButton variant="secondary" onClick={() => setAuthMode("login")} className="w-full text-base font-semibold"><LogIn size={16} /> Login</AppButton>
                  <AppButton variant="olive" onClick={() => completeAuth("guest")} className="w-full text-base font-semibold"><ArrowRight size={16} /> Continue as Guest</AppButton>
                </div>
              </div>
            )}

            {authMode === "signup" && (
              <div className="space-y-4">
                <button onClick={() => setAuthMode("landing")} className="text-sm font-medium text-[var(--orange)]">← Back</button>
                <div>
                  <h2 className="text-xl font-semibold text-[var(--dark)]">Create account</h2>
                  <p className="mt-1 text-sm text-gray-600">Staff accounts are differentiated by <span className="font-semibold">@kagiso.co.za</span> verification.</p>
                </div>
                <div className="space-y-3">
                  <input value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} placeholder="Full name" className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-[var(--orange)]" />
                  <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email address" className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-[var(--orange)]" />
                  <input value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} placeholder="Password" type="password" className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-[var(--orange)]" />
                  <input value={form.otp} onChange={(e) => setForm({ ...form, otp: e.target.value })} placeholder="OTP verification code" className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-[var(--orange)]" />
                </div>
                <AppButton onClick={() => completeAuth(form.email.endsWith("@kagiso.co.za") ? "staff" : "external")} className="w-full">Complete Sign Up</AppButton>
              </div>
            )}

            {authMode === "login" && (
              <div className="space-y-4">
                <button onClick={() => setAuthMode("landing")} className="text-sm font-medium text-[var(--orange)]">← Back</button>
                <div>
                  <h2 className="text-xl font-semibold text-[var(--dark)]">Login</h2>
                  <p className="mt-1 text-sm text-gray-600">Enter your credentials to continue.</p>
                </div>
                <div className="space-y-3">
                  <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email address" className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-[var(--orange)]" />
                  <input value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} placeholder="Password" type="password" className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-[var(--orange)]" />
                </div>
                <AppButton onClick={() => completeAuth(form.email.endsWith("@kagiso.co.za") ? "staff" : "external")} className="w-full">Login</AppButton>
                <button className="text-sm font-medium text-[var(--orange)]">Forgot password?</button>
              </div>
            )}
          </Card>
        </div>
      </PhoneShell>
    );
  }

  function renderHome() {
    return (
      <div className="relative min-h-[820px] bg-[var(--cream)] pb-24">
        <div className="border-b border-black/5 bg-white px-5 pb-5 pt-4">
          <div className="flex items-center justify-between text-sm text-[var(--dark)]">
            <span className="font-semibold">9:41</span>
            <div className="flex items-center gap-3">
              <button onClick={() => setShowMenu(true)}><Menu size={20} /></button>
              <Bell size={18} />
            </div>
          </div>
          <div className="mt-5 flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-black/5 bg-[var(--soft)]">
              <img src={logoUrl} alt="Kagiso Trust" className="h-10 w-auto object-contain" />
            </div>
            <div>
              <div className="text-lg font-semibold tracking-tight text-[var(--dark)]">Kagiso Trust</div>
              <div className="text-xs text-gray-500">Inspiring people to ignite their potential</div>
            </div>
          </div>
          <div className="mt-5 max-w-[300px] text-[28px] font-semibold leading-tight tracking-tight text-[var(--dark)]">A digital gateway to programmes, opportunities, knowledge, and impact.</div>
          <div className="mt-5 grid grid-cols-3 gap-3">
            {[["40+", "Years"], ["R2B+", "Invested"], ["1M+", "Lives"]].map(([v, l]) => (
              <Card key={l} className="p-3 text-center">
                <div className="text-lg font-semibold tracking-tight text-[var(--dark)]">{v}</div>
                <div className="text-[10px] uppercase tracking-wide text-gray-500">{l}</div>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-6 px-4 pt-5">
          <div>
            <SectionTitle title="Quick Access" eyebrow="Navigate" />
            <div className="grid grid-cols-4 gap-3">
              {[["news", FileText, "News"], ["events", CalendarDays, "Events"], ["hub", BookOpen, "Knowledge"], ["opportunities", Briefcase, "Opportunities"]].map(([key, Icon, label]) => (
                <button key={key} onClick={() => setCurrent(key)} className="rounded-3xl bg-white p-3 shadow-sm">
                  <div className="mx-auto mb-2 flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--soft)] text-[var(--orange)]"><Icon size={18} /></div>
                  <div className="text-[11px] font-medium text-gray-700">{label}</div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <SectionTitle title="Our Programmes" action="View all" eyebrow="Programme Pillars" />
            <div className="space-y-3">
              {programmes.map((p) => {
                const Icon = p.icon;
                return (
                  <Card key={p.id} className="p-4 cursor-pointer" onClick={() => setSelectedProgramme(p)}>
                    <div className="flex items-start gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl text-white" style={{ backgroundColor: p.color }}>
                        <Icon size={20} />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold tracking-tight text-[var(--dark)]">{p.title}</div>
                        <div className="mt-1 text-sm leading-5 text-gray-600">{p.subtitle}</div>
                      </div>
                      <ArrowRight size={16} className="mt-1 text-gray-400" />
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          <div>
            <SectionTitle title="Knowledge Hub" action="Explore" eyebrow="Resources" />
            <div className="grid gap-3">
              {knowledgeItems.slice(0, 2).map((item) => {
                const Icon = item.icon;
                return (
                  <Card key={item.id} className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--soft)] text-[var(--orange)]"><Icon size={18} /></div>
                      <div>
                        <div className="mb-1 inline-flex rounded-full bg-[var(--soft)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-[var(--orange)]">{item.type}</div>
                        <div className="font-semibold tracking-tight text-[var(--dark)]">{item.title}</div>
                        <div className="mt-1 text-sm text-gray-600">{item.description}</div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          <div>
            <SectionTitle title="Opportunities" action="View all" eyebrow="Apply & Engage" />
            <div className="grid gap-3">
              {opportunityItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Card key={item.id} className="p-4 cursor-pointer" onClick={() => setCurrent("opportunities")}>
                    <div className="flex items-start gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--soft)] text-[var(--orange)]"><Icon size={18} /></div>
                      <div className="flex-1">
                        <div className="font-semibold tracking-tight text-[var(--dark)]">{item.title}</div>
                        <div className="mt-1 text-sm leading-5 text-gray-600">{item.subtitle}</div>
                      </div>
                    </div>
                    <AppButton variant="secondary" className="mt-4 w-full">{item.cta}</AppButton>
                  </Card>
                );
              })}
            </div>
          </div>

          <div>
            <SectionTitle title="Latest News" action="See more" eyebrow="Updates" />
            <div className="space-y-3">
              {newsItems.map((item) => (
                <Card key={item.id} className="p-4 cursor-pointer" onClick={() => setSelectedArticle(item)}>
                  <div className="mb-2 inline-flex rounded-full bg-[var(--soft)] px-3 py-1 text-[11px] font-medium text-[var(--orange)]">{item.tag}</div>
                  <div className="font-semibold tracking-tight text-[var(--dark)]">{item.title}</div>
                  <div className="mt-1 text-sm text-gray-600">{item.summary}</div>
                  <div className="mt-2 text-xs text-gray-500">{item.date}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
        <BottomNav current={current} setCurrent={setCurrent} />
      </div>
    );
  }

  function renderNews() {
    return (
      <div className="relative min-h-[820px] bg-[var(--cream)] pb-24">
        <TopBar title="Newsfeed" onMenu={() => setShowMenu(true)} right={<Search size={18} className="text-[var(--dark)]" />} />
        <div className="px-4">
          <div className="mb-4 rounded-2xl bg-white p-3 text-sm text-gray-500 shadow-sm">Search news, reports and updates...</div>
          <div className="space-y-3">
            {newsItems.map((item) => (
              <Card key={item.id} className="p-4 cursor-pointer" onClick={() => setSelectedArticle(item)}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="mb-2 inline-flex rounded-full bg-[var(--soft)] px-3 py-1 text-[11px] font-medium text-[var(--orange)]">{item.tag}</div>
                    <div className="text-lg font-semibold tracking-tight text-[var(--dark)]">{item.title}</div>
                    <div className="mt-2 text-sm leading-6 text-gray-600">{item.summary}</div>
                    <div className="mt-3 text-xs text-gray-500">{item.date} | Kagiso Trust</div>
                  </div>
                  <BookMarked size={18} className="text-[var(--yellow)]" />
                </div>
              </Card>
            ))}
          </div>
        </div>
        <BottomNav current={current} setCurrent={setCurrent} />
      </div>
    );
  }

  function renderArticleView() {
    if (!selectedArticle) return null;
    return (
      <div className="relative min-h-[820px] bg-[var(--cream)] pb-6">
        <TopBar title="News Article" onBack={() => setSelectedArticle(null)} right={<BookMarked size={18} className="text-[var(--yellow)]" />} />
        <div className="px-4">
          <Card className="overflow-hidden">
            <div className="h-40 bg-[var(--orange)] px-5 py-6 text-white">
              <div className="inline-flex rounded-full bg-white/15 px-3 py-1 text-[11px] font-medium">{selectedArticle.tag}</div>
              <div className="mt-4 text-2xl font-semibold leading-tight tracking-tight">{selectedArticle.title}</div>
              <div className="mt-3 flex items-center gap-2 text-xs text-white/80"><Clock3 size={14} /> {selectedArticle.date}</div>
            </div>
            <div className="p-5 text-sm leading-7 text-gray-700">
              <p>{selectedArticle.body}</p>
              <p className="mt-4">The prototype article view demonstrates how Kagiso Trust news and publications can move beyond card previews into a more complete reading experience for users on mobile devices.</p>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  function renderEvents() {
    return (
      <div className="relative min-h-[820px] bg-[var(--cream)] pb-24">
        <TopBar title="Events" onMenu={() => setShowMenu(true)} right={<CalendarDays size={18} className="text-[var(--dark)]" />} />
        <div className="px-4 space-y-4">
          {events.map((event) => {
            const vote = eventVotes[event.id];
            return (
              <Card key={event.id} className="p-4">
                <div className="mb-2 inline-flex rounded-full bg-[var(--soft)] px-3 py-1 text-[11px] font-medium text-[var(--orange)]">{event.category}</div>
                <div className="text-lg font-semibold tracking-tight text-[var(--dark)]">{event.title}</div>
                <div className="mt-1 text-sm text-gray-600">{event.type} • {event.date}</div>
                <div className="mt-3 flex items-center justify-between text-sm text-gray-600">
                  <span>{event.interested + (vote === "up" ? 1 : 0)} interested</span>
                  <span>Guest interaction enabled</span>
                </div>
                <div className="mt-4 flex gap-3">
                  <AppButton variant={vote === "up" ? "primary" : "secondary"} className="flex-1" onClick={() => setEventVotes({ ...eventVotes, [event.id]: "up" })}>
                    <CheckCircle2 size={16} /> Interested
                  </AppButton>
                  <AppButton variant={vote === "down" ? "olive" : "secondary"} className="flex-1" onClick={() => setEventVotes({ ...eventVotes, [event.id]: "down" })}>
                    <XCircle size={16} /> Not now
                  </AppButton>
                </div>
              </Card>
            );
          })}
        </div>
        <BottomNav current={current} setCurrent={setCurrent} />
      </div>
    );
  }

  function renderKnowledgeHub() {
    return (
      <div className="relative min-h-[820px] bg-[var(--cream)] pb-24">
        <TopBar title="Knowledge Hub" onMenu={() => setShowMenu(true)} right={<Search size={18} className="text-[var(--dark)]" />} />
        <div className="space-y-4 px-4">
          {knowledgeItems.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.id} className="p-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--soft)] text-[var(--orange)]"><Icon size={18} /></div>
                  <div className="flex-1">
                    <div className="mb-1 inline-flex rounded-full bg-[var(--soft)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-[var(--orange)]">{item.type}</div>
                    <div className="font-semibold tracking-tight text-[var(--dark)]">{item.title}</div>
                    <div className="mt-1 text-sm leading-5 text-gray-600">{item.description}</div>
                    <div className="mt-3 flex gap-2">
                      <AppButton variant="secondary" className="px-3 py-2 text-xs">Open</AppButton>
                      <AppButton variant="secondary" className="px-3 py-2 text-xs">Download</AppButton>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
        <BottomNav current={current} setCurrent={setCurrent} />
      </div>
    );
  }

  function renderOpportunities() {
    return (
      <div className="relative min-h-[820px] bg-[var(--cream)] pb-24">
        <TopBar title="Opportunities" onMenu={() => setShowMenu(true)} right={<Briefcase size={18} className="text-[var(--dark)]" />} />
        <div className="space-y-4 px-4">
          {opportunityItems.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.id} className="p-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--soft)] text-[var(--orange)]"><Icon size={18} /></div>
                  <div>
                    <div className="font-semibold tracking-tight text-[var(--dark)]">{item.title}</div>
                    <div className="mt-1 text-sm leading-6 text-gray-600">{item.subtitle}</div>
                  </div>
                </div>
                <AppButton className="mt-4 w-full">{item.cta}</AppButton>
              </Card>
            );
          })}
        </div>
        <BottomNav current={current} setCurrent={setCurrent} />
      </div>
    );
  }

  function renderProgrammeDetail() {
    if (!selectedProgramme) return null;
    const Icon = selectedProgramme.icon;
    return (
      <div className="relative min-h-[820px] bg-[var(--cream)] pb-6">
        <TopBar title="Programme" onBack={() => setSelectedProgramme(null)} right={<Icon size={18} className="text-[var(--orange)]" />} />
        <div className="px-4 space-y-4">
          <Card className="overflow-hidden">
            <div className="px-5 py-6 text-white" style={{ backgroundColor: selectedProgramme.color }}>
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15"><Icon size={22} /></div>
              <div className="text-2xl font-semibold leading-tight tracking-tight">{selectedProgramme.title}</div>
              <div className="mt-2 text-sm text-white/85">{selectedProgramme.subtitle}</div>
            </div>
            <div className="p-5 text-sm leading-7 text-gray-700">
              <p>{selectedProgramme.overview}</p>
              <div className="mt-5">
                <div className="mb-2 text-sm font-semibold text-[var(--dark)]">Key Focus Areas</div>
                <div className="flex flex-wrap gap-2">
                  {selectedProgramme.highlights.map((item) => (
                    <div key={item} className="rounded-full bg-[var(--soft)] px-3 py-2 text-xs font-medium text-gray-700">{item}</div>
                  ))}
                </div>
              </div>
              <AppButton className="mt-5 w-full">Explore Programme</AppButton>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  function renderAbout() {
    return (
      <div className="relative min-h-[820px] bg-[var(--cream)] pb-24">
        <TopBar title="About Us" onMenu={() => setShowMenu(true)} right={<Info size={18} className="text-[var(--dark)]" />} />
        <div className="px-4 space-y-4">
          <Card className="overflow-hidden">
            <div className="border-b border-black/5 bg-white p-5">
              <div className="text-sm uppercase tracking-[0.2em] text-gray-500">Kagiso Trust</div>
              <div className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-[var(--dark)]">Inspiring people to ignite their potential</div>
            </div>
            <div className="p-4 text-sm leading-6 text-gray-700">
              Kagiso Trust is dedicated to creating a brighter future for South Africa’s most vulnerable communities through education, socio-economic development, and institutional capacity building.
            </div>
          </Card>
          {strategyBlock}
          <Card className="p-4">
            <div className="mb-3 flex items-center gap-2 text-[var(--orange)]"><Users size={18} /><span className="text-sm font-semibold">Our People</span></div>
            <div className="grid grid-cols-1 gap-3">
              {patrons.map((label) => (
                <div key={label} className="rounded-2xl bg-[var(--soft)] px-4 py-3 text-sm font-medium text-gray-700">{label}</div>
              ))}
            </div>
          </Card>
          <Card className="p-4">
            <div className="mb-3 flex items-center gap-2 text-[var(--orange)]"><MapPin size={18} /><span className="text-sm font-semibold">Contact & Location</span></div>
            <div className="space-y-2 text-sm text-gray-700">
              <p>27 Scott Street, Waverley, Johannesburg, 2000</p>
              <p>Tel: +27 (0) 11 566 1900</p>
              <p>Email: info@kagiso.co.za</p>
            </div>
            <AppButton variant="secondary" className="mt-4 w-full"><MapPin size={16} /> Open Map</AppButton>
          </Card>
        </div>
        <BottomNav current={current} setCurrent={setCurrent} />
      </div>
    );
  }

  function renderProfile() {
    const isGuest = resolvedUser === "guest";
    return (
      <div className="relative min-h-[820px] bg-[var(--cream)] pb-24">
        <div className="border-b border-black/5 bg-white px-5 pb-6 pt-4">
          <div className="flex items-center justify-between text-[var(--dark)]">
            <button onClick={() => setShowMenu(true)} className="rounded-full p-2 hover:bg-black/5"><ChevronLeft size={22} /></button>
            <div className="text-lg font-semibold tracking-tight">Profile</div>
            <button onClick={() => setAdminMode(!adminMode)} className="rounded-full p-2 hover:bg-black/5"><Settings size={18} /></button>
          </div>
          <div className="mt-6 rounded-3xl bg-[var(--orange)] p-4 text-white">
            <div className="text-4xl font-semibold tracking-tight">{isGuest ? "Guest User" : resolvedUser === "staff" ? "Sbusiso Ndlovu" : "Community User"}</div>
            <div className="mt-1 text-sm text-white/85">{isGuest ? "Limited access profile" : resolvedUser === "staff" ? "KT official • sndlovu@kagiso.co.za" : "Registered stakeholder account"}</div>
          </div>
        </div>
        <div className="px-4 pt-5">
          {adminMode ? (
            <div className="space-y-4">
              <SectionTitle title="Admin Dashboard" />
              <div className="grid grid-cols-2 gap-3">
                {[["Engagements", "1,284"], ["New Users", "126"], ["Reach", "8,420"], ["Total Users", "3,106"]].map(([label, value]) => (
                  <Card key={label} className="p-4">
                    <div className="text-xs text-gray-500">{label}</div>
                    <div className="mt-2 text-2xl font-semibold text-[var(--dark)]">{value}</div>
                  </Card>
                ))}
              </div>
              <Card className="p-4">
                <div className="mb-3 flex items-center gap-2 text-[var(--orange)]"><BarChart3 size={18} /><span className="text-sm font-semibold">Filters</span></div>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  {['Month', 'Year', 'Programme'].map((f) => <div key={f} className="rounded-2xl bg-[var(--soft)] px-3 py-2 text-center">{f}</div>)}
                </div>
              </Card>
              <Card className="p-4">
                <div className="mb-2 text-sm font-semibold text-[var(--dark)]">Admin Authentication</div>
                <div className="text-sm text-gray-600">Sign-in and sign-out controls are included as part of the admin access preview.</div>
                <div className="mt-4 flex gap-3">
                  <AppButton className="flex-1"><LogIn size={16} /> Sign In</AppButton>
                  <AppButton variant="secondary" className="flex-1"><LogOut size={16} /> Sign Out</AppButton>
                </div>
              </Card>
            </div>
          ) : (
            <div className="space-y-4">
              <SectionTitle title="My Access" />
              <Card className="p-4">
                <div className="grid grid-cols-3 gap-3 text-center">
                  {[["Bookmarks", BookMarked], ["Saved Forms", FileText], ["Notifications", Bell]].map(([label, Icon]) => (
                    <div key={label} className="rounded-2xl bg-white p-3 shadow-sm">
                      <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--soft)] text-[var(--orange)]"><Icon size={18} /></div>
                      <div className="text-xs font-medium text-gray-700">{label}</div>
                    </div>
                  ))}
                </div>
              </Card>
              <AppButton variant="olive" className="w-full"><Settings size={16} /> Settings</AppButton>
              <AppButton variant="secondary" className="w-full" onClick={() => { setUserType(null); setAuthMode('landing'); }}><LogOut size={16} /> Log out</AppButton>
            </div>
          )}
        </div>
        <BottomNav current={current} setCurrent={setCurrent} />
      </div>
    );
  }

  function renderSideMenu() {
    if (!showMenu) return null;
    return (
      <div className="absolute inset-0 z-50 flex">
        <div className="w-[82%] bg-white p-5 shadow-2xl">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <div className="text-lg font-semibold text-[var(--dark)]">Menu</div>
              <div className="text-xs text-gray-500">Kagiso Trust</div>
            </div>
            <button onClick={() => setShowMenu(false)} className="rounded-full p-2 hover:bg-black/5"><ChevronLeft size={22} /></button>
          </div>
          <div className="space-y-2 text-sm">
            {[
              ["home", Home, "Home"],
              ["news", FileText, "News Feed"],
              ["events", CalendarDays, "Events"],
              ["hub", BookOpen, "Knowledge Hub"],
              ["opportunities", Briefcase, "Opportunities"],
              ["about", Info, "About Us"],
              ["about", ShieldCheck, "Our Work → Strategy"],
              ["profile", Users, "Our People"],
              ["profile", MessageSquare, "Feedback"],
            ].map(([key, Icon, label], i) => (
              <button key={i} onClick={() => { setCurrent(key); setShowMenu(false); }} className="flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-left hover:bg-[var(--soft)]">
                <Icon size={18} className="text-[var(--orange)]" />
                <span className="font-medium text-gray-700">{label}</span>
              </button>
            ))}
          </div>
          <Card className="mt-5 p-4">
            <div className="mb-2 flex items-center gap-2 text-[var(--orange)]"><MessageSquare size={16} /><span className="text-sm font-semibold">Feedback</span></div>
            <div className="text-sm text-gray-600">Share comments or questions directly through the app.</div>
            <textarea placeholder="Share your feedback..." className="mt-3 h-24 w-full rounded-2xl border border-black/10 px-4 py-3 text-sm outline-none focus:border-[var(--orange)]" />
            <AppButton className="mt-3 w-full" onClick={() => setFeedbackSent(true)}><Send size={16} /> Submit Feedback</AppButton>
            {feedbackSent ? <div className="mt-2 text-xs text-green-700">Feedback submitted successfully.</div> : null}
          </Card>
        </div>
        <button className="flex-1 bg-black/20" onClick={() => setShowMenu(false)} />
      </div>
    );
  }

  function renderShell() {
    return (
      <PhoneShell>
        <div className="relative min-h-[820px] [--orange:#D56C38] [--green:#65735C] [--yellow:#D5A62A] [--cream:#F5F2EA] [--dark:#1D1D1B] [--soft:#EDE8DD]">
          {selectedArticle ? renderArticleView() : selectedProgramme ? renderProgrammeDetail() : (
            <>
              {current === "home" && renderHome()}
              {current === "news" && renderNews()}
              {current === "events" && renderEvents()}
              {current === "hub" && renderKnowledgeHub()}
              {current === "opportunities" && renderOpportunities()}
              {current === "about" && renderAbout()}
              {current === "profile" && renderProfile()}
              {renderSideMenu()}
            </>
          )}
        </div>
      </PhoneShell>
    );
  }

  return (
    <div className="min-h-screen bg-[#EAE4D9] px-4 py-8 [--orange:#D56C38] [--green:#65735C] [--yellow:#D5A62A] [--cream:#F5F2EA] [--dark:#1D1D1B] [--soft:#EDE8DD]">
      {resolvedUser ? renderShell() : renderAuth()}
    </div>
  );
}
