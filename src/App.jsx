
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
  Wifi,
  Signal,
  BatteryFull,
  Bookmark,
  LayoutGrid,
} from "lucide-react";

const logoUrl = "https://cdn-ildpnba.nitrocdn.com/miRLwxeHaKdzaQXjLPqzXhnPBqYeqlZe/assets/images/optimized/rev-9192e03/kagiso.co.za/wp-content/uploads/2024/07/kagiso-trust-logo-300x119.png";

const colours = {
  orange: "#D56C38",
  green: "#65735C",
  gold: "#D5A62A",
  cream: "#F5F2EA",
  soft: "#EDE8DD",
  text: "#1D1D1B",
};

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
      "This publication provides a short-form summary of programme progress, emerging lessons, and institutional reflections across Kagiso Trust’s operational areas. It is designed for quick access to high-value information.",
  },
];

const events = [
  { id: 1, title: "The Power of Youth in Co-creating Education", type: "Virtual Event", date: "18 March 2026", interested: 86, category: "Education" },
  { id: 2, title: "Leadership Conference 2025 Follow-up Session", type: "In-person", date: "24 April 2026", interested: 41, category: "Institutional Capacity Building" },
  { id: 3, title: "Partner Readiness Workshop", type: "Workshop", date: "10 May 2026", interested: 59, category: "Socio-Economic Development" },
];

const knowledgeItems = [
  { id: 1, title: "Annual Report 2024/25", type: "Report", icon: FileText, description: "Comprehensive organisational performance, programme delivery and financial highlights." },
  { id: 2, title: "Civil Society In-Brief", type: "Publication", icon: Newspaper, description: "Short-form knowledge pieces and thought leadership content from Kagiso Trust." },
  { id: 3, title: "Kagiso Trust Podcast Series", type: "Podcast", icon: Mic, description: "Audio content spotlighting development dialogue, learning and impact stories." },
  { id: 4, title: "Policy & Governance Resources", type: "Knowledge Pack", icon: Gavel, description: "Reference materials supporting institutional strengthening and public policy engagement." },
];

const opportunityItems = [
  { id: 1, title: "Careers", subtitle: "Open opportunities to join Kagiso Trust and contribute to national development impact.", icon: Briefcase, cta: "View Opportunities" },
  { id: 2, title: "Proposals & Bids", subtitle: "Active calls, submission guidance, and bid opportunities for service providers and partners.", icon: FileText, cta: "View Notices" },
];

const programmes = [
  {
    id: "education",
    title: "Education Development",
    subtitle: "Enhancing access to quality education from early childhood through higher education.",
    icon: GraduationCap,
    color: colours.orange,
    overview: "Kagiso Trust’s education work focuses on improving learner outcomes, strengthening school leadership, and supporting long-term educational excellence in underserved communities.",
    highlights: ["Learner support", "School leadership", "Education partnerships"],
  },
  {
    id: "institutional",
    title: "Institutional Capacity Building",
    subtitle: "Strengthening local government and civil society organisations for long-term sustainability.",
    icon: Building2,
    color: colours.green,
    overview: "This pillar supports stronger institutions through governance support, systems strengthening, capability building, and collaboration with civil society and local government partners.",
    highlights: ["Governance support", "Civil society capacity", "Institutional strengthening"],
  },
  {
    id: "sed",
    title: "Socio-Economic Development",
    subtitle: "Supporting small black businesses and promoting economic inclusion.",
    icon: Landmark,
    color: colours.gold,
    overview: "Socio-Economic Development focuses on enterprise development, opportunity access, and sustainable participation in the economy through targeted support and strategic interventions.",
    highlights: ["Enterprise support", "Economic inclusion", "Sustainable livelihoods"],
  },
];

const peopleMenu = ["Our Patrons", "Our Trustees", "Executive Committee"];

function IconBadge({ icon: Icon, color = "var(--orange)", soft = "var(--soft)" }) {
  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-2xl" style={{ background: soft, color }}>
      <Icon size={18} />
    </div>
  );
}

function PrimaryButton({ children, variant = "primary", className = "", ...props }) {
  const base = "inline-flex w-full items-center justify-center gap-2 rounded-2xl px-4 py-3.5 text-[15px] font-semibold transition active:scale-[0.99]";
  const style =
    variant === "primary"
      ? "bg-[var(--orange)] text-white shadow-[0_8px_18px_rgba(213,108,56,0.28)]"
      : variant === "secondary"
      ? "border border-[var(--orange)]/15 bg-white text-[var(--text)]"
      : "bg-[var(--green)] text-white shadow-[0_8px_18px_rgba(101,115,92,0.25)]";
  return <button className={`${base} ${style} ${className}`} {...props}>{children}</button>;
}

function SoftCard({ children, className = "", onClick }) {
  return (
    <div onClick={onClick} className={`rounded-[24px] border border-black/5 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.06)] ${className}`}>
      {children}
    </div>
  );
}

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-5 pb-3 pt-4 text-[13px] font-semibold text-[var(--text)]">
      <span>9:41</span>
      <div className="flex items-center gap-1.5 text-[var(--text)]">
        <Signal size={14} strokeWidth={2.2} />
        <Wifi size={14} strokeWidth={2.2} />
        <BatteryFull size={16} strokeWidth={2.2} />
      </div>
    </div>
  );
}

function Shell({ children }) {
  return (
    <div className="mx-auto w-full max-w-[390px] rounded-[42px] border-[10px] border-[#121212] bg-black shadow-[0_30px_60px_rgba(0,0,0,0.22)]">
      <div className="mx-auto mt-2 h-6 w-36 rounded-b-[18px] bg-[#121212]" />
      <div className="relative h-[844px] overflow-hidden rounded-[32px] bg-[var(--cream)]">
        <img src={logoUrl} alt="" className="pointer-events-none absolute bottom-8 right-[-52px] w-60 opacity-[0.05]" />
        {children}
      </div>
    </div>
  );
}

function PageHeader({ title, left, right }) {
  return (
    <div className="flex items-center justify-between px-5 pb-3 pt-1">
      <div className="w-10">{left}</div>
      <div className="text-[20px] font-semibold tracking-tight text-[var(--text)]">{title}</div>
      <div className="flex w-10 justify-end">{right}</div>
    </div>
  );
}

function SectionHeader({ title, action, eyebrow }) {
  return (
    <div className="mb-3 flex items-end justify-between">
      <div>
        {eyebrow ? <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-500">{eyebrow}</div> : null}
        <div className="text-[16px] font-semibold tracking-tight text-[var(--text)]">{title}</div>
      </div>
      {action ? <button className="text-xs font-semibold text-[var(--orange)]">{action}</button> : null}
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
    <div className="absolute bottom-0 left-0 right-0 border-t border-black/5 bg-white px-3 pb-5 pt-3">
      <div className="flex items-center justify-between gap-1">
        {items.map(([key, Icon, label]) => {
          const active = current === key;
          return (
            <button key={key} onClick={() => setCurrent(key)} className="flex flex-1 flex-col items-center gap-1 rounded-2xl py-1.5">
              <div className={`flex h-10 w-10 items-center justify-center rounded-2xl ${active ? "bg-[var(--soft)]" : "bg-transparent"}`}>
                <Icon size={18} className={active ? "text-[var(--orange)]" : "text-gray-500"} />
              </div>
              <span className={`text-[10px] ${active ? "font-semibold text-[var(--orange)]" : "text-gray-500"}`}>{label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function KagisoTrustAppPrototype() {
  const [authMode, setAuthMode] = useState("landing");
  const [userType, setUserType] = useState(null);
  const [screen, setScreen] = useState("home");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [eventVotes, setEventVotes] = useState({});
  const [feedbackSent, setFeedbackSent] = useState(false);
  const [adminMode, setAdminMode] = useState(false);
  const [selectedProgramme, setSelectedProgramme] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [form, setForm] = useState({ fullName: "", email: "", password: "", otp: "" });

  const resolvedUser = useMemo(() => userType || null, [userType]);

  function completeAuth(type) {
    setUserType(type);
    setScreen("home");
    setDrawerOpen(false);
  }

  const strategySection = (
    <SoftCard className="p-4">
      <div className="mb-3 flex items-center gap-2 text-[var(--orange)]"><ShieldCheck size={18} /><span className="text-sm font-semibold">Our Strategy</span></div>
      <div className="space-y-2 text-[14px] leading-6 text-gray-700">
        <p><span className="font-semibold text-[var(--text)]">Vision:</span> A prosperous, peaceful, equitable, and just society.</p>
        <p><span className="font-semibold text-[var(--text)]">Mission:</span> To contribute to development through sustainable funding, like-minded partnerships, and innovative scalable development models.</p>
        <p><span className="font-semibold text-[var(--text)]">Strategic Goals:</span> Educational development, socio-economic development, institutional capability development, and financial sustainability.</p>
      </div>
    </SoftCard>
  );

  function AuthScreen() {
    return (
      <Shell>
        <div className="relative flex h-full flex-col bg-[var(--cream)]" style={{ ['--orange']: colours.orange, ['--green']: colours.green, ['--gold']: colours.gold, ['--cream']: colours.cream, ['--soft']: colours.soft, ['--text']: colours.text }}>
          <StatusBar />
          <div className="flex-1 overflow-y-auto px-5 pb-6 pt-2">
            <div className="rounded-full border border-[var(--orange)]/15 bg-white px-4 py-2 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--orange)]">Kagiso Trust App</div>
            <div className="pt-8 text-center">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-[28px] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
                <img src={logoUrl} alt="Kagiso Trust" className="h-12 w-auto object-contain" />
              </div>
              <div className="mt-6 text-[30px] font-semibold tracking-tight text-[var(--text)]">Kagiso Trust</div>
              <div className="mx-auto mt-2 max-w-[285px] text-[15px] leading-6 text-gray-600">Sign in to access programmes, opportunities, knowledge resources and organisational updates.</div>
            </div>

            <SoftCard className="mt-8 p-5">
              {authMode === "landing" && (
                <div className="space-y-4">
                  <div>
                    <div className="text-[18px] font-semibold text-[var(--text)]">Welcome</div>
                    <div className="mt-1 text-sm text-gray-600">Choose how you would like to continue.</div>
                  </div>
                  <div className="space-y-3">
                    <PrimaryButton onClick={() => setAuthMode("signup")}><Mail size={17} /> Sign Up</PrimaryButton>
                    <PrimaryButton variant="secondary" onClick={() => setAuthMode("login")}><LogIn size={17} /> Login</PrimaryButton>
                    <PrimaryButton variant="olive" onClick={() => completeAuth("guest")}><ArrowRight size={17} /> Continue as Guest</PrimaryButton>
                  </div>
                </div>
              )}

              {authMode === "signup" && (
                <div className="space-y-4">
                  <button onClick={() => setAuthMode("landing")} className="text-sm font-medium text-[var(--orange)]">← Back</button>
                  <div>
                    <div className="text-[18px] font-semibold text-[var(--text)]">Create account</div>
                    <div className="mt-1 text-sm text-gray-600">Staff accounts are differentiated using <span className="font-semibold">@kagiso.co.za</span> verification.</div>
                  </div>
                  <div className="space-y-3">
                    {[
                      ["fullName", "Full name", "text"],
                      ["email", "Email address", "email"],
                      ["password", "Password", "password"],
                      ["otp", "OTP verification code", "text"],
                    ].map(([key, label, type]) => (
                      <input
                        key={key}
                        value={form[key]}
                        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                        placeholder={label}
                        type={type}
                        className="w-full rounded-2xl border border-black/10 bg-[var(--cream)] px-4 py-3.5 text-sm outline-none focus:border-[var(--orange)]"
                      />
                    ))}
                  </div>
                  <PrimaryButton onClick={() => completeAuth(form.email.endsWith("@kagiso.co.za") ? "staff" : "external")}>Complete Sign Up</PrimaryButton>
                </div>
              )}

              {authMode === "login" && (
                <div className="space-y-4">
                  <button onClick={() => setAuthMode("landing")} className="text-sm font-medium text-[var(--orange)]">← Back</button>
                  <div>
                    <div className="text-[18px] font-semibold text-[var(--text)]">Login</div>
                    <div className="mt-1 text-sm text-gray-600">Enter your credentials to continue.</div>
                  </div>
                  <div className="space-y-3">
                    <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email address" className="w-full rounded-2xl border border-black/10 bg-[var(--cream)] px-4 py-3.5 text-sm outline-none focus:border-[var(--orange)]" />
                    <input type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} placeholder="Password" className="w-full rounded-2xl border border-black/10 bg-[var(--cream)] px-4 py-3.5 text-sm outline-none focus:border-[var(--orange)]" />
                  </div>
                  <PrimaryButton onClick={() => completeAuth(form.email.endsWith("@kagiso.co.za") ? "staff" : "external")}>Login</PrimaryButton>
                  <button className="text-sm font-medium text-[var(--orange)]">Forgot password?</button>
                </div>
              )}
            </SoftCard>
          </div>
        </div>
      </Shell>
    );
  }

  function HomeScreen() {
    return (
      <div className="relative flex h-full flex-col bg-[var(--cream)]">
        <StatusBar />
        <div className="border-b border-[var(--orange)]/10 bg-white px-5 pb-4 pt-1">
          <PageHeader
            title="Home"
            left={<button onClick={() => setDrawerOpen(true)} className="rounded-full p-2 text-[var(--text)]"><Menu size={20} /></button>}
            right={<button className="rounded-full p-2 text-[var(--text)]"><Bell size={18} /></button>}
          />
          <div className="mt-2 flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-[var(--soft)]">
              <img src={logoUrl} alt="Kagiso Trust" className="h-10 w-auto object-contain" />
            </div>
            <div>
              <div className="text-[18px] font-semibold tracking-tight text-[var(--text)]">Kagiso Trust</div>
              <div className="text-xs text-gray-500">Inspiring people to ignite their potential</div>
            </div>
          </div>
          <div className="mt-4 text-[26px] font-semibold leading-tight tracking-tight text-[var(--text)]">Connecting programmes, opportunities, knowledge and impact.</div>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {[['40+', 'Years'], ['R2B+', 'Invested'], ['1M+', 'Lives']].map(([v, l]) => (
              <SoftCard key={l} className="p-3 text-center">
                <div className="text-[18px] font-semibold tracking-tight text-[var(--text)]">{v}</div>
                <div className="text-[10px] uppercase tracking-[0.14em] text-gray-500">{l}</div>
              </SoftCard>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 pb-28 pt-5">
          <div>
            <SectionHeader title="Quick Access" eyebrow="Navigate" />
            <div className="grid grid-cols-4 gap-3">
              {[["news", FileText, "News"], ["events", CalendarDays, "Events"], ["hub", BookOpen, "Knowledge"], ["opportunities", Briefcase, "Opportunities"]].map(([key, Icon, label]) => (
                <button key={key} onClick={() => setScreen(key)} className="rounded-[22px] bg-white p-3 text-center shadow-[0_8px_24px_rgba(0,0,0,0.05)]">
                  <div className="mx-auto mb-2 flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--soft)] text-[var(--orange)]"><Icon size={18} /></div>
                  <div className="text-[11px] font-medium leading-4 text-gray-700">{label}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-7">
            <SectionHeader title="Our Programmes" action="View all" eyebrow="Programme Pillars" />
            <div className="space-y-3">
              {programmes.map((p) => {
                const Icon = p.icon;
                return (
                  <SoftCard key={p.id} className="p-4" onClick={() => setSelectedProgramme(p)}>
                    <div className="flex items-start gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-[18px] text-white" style={{ backgroundColor: p.color }}>
                        <Icon size={20} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-[15px] font-semibold tracking-tight text-[var(--text)]">{p.title}</div>
                        <div className="mt-1 text-sm leading-5 text-gray-600">{p.subtitle}</div>
                      </div>
                      <ArrowRight size={16} className="mt-1 text-gray-400" />
                    </div>
                  </SoftCard>
                );
              })}
            </div>
          </div>

          <div className="mt-7">
            <SectionHeader title="Knowledge Hub" action="Explore" eyebrow="Resources" />
            <div className="space-y-3">
              {knowledgeItems.slice(0, 2).map((item) => {
                const Icon = item.icon;
                return (
                  <SoftCard key={item.id} className="p-4">
                    <div className="flex items-start gap-3">
                      <IconBadge icon={Icon} />
                      <div className="min-w-0 flex-1">
                        <div className="mb-1 inline-flex rounded-full bg-[var(--soft)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--orange)]">{item.type}</div>
                        <div className="text-[15px] font-semibold tracking-tight text-[var(--text)]">{item.title}</div>
                        <div className="mt-1 text-sm leading-5 text-gray-600">{item.description}</div>
                      </div>
                    </div>
                  </SoftCard>
                );
              })}
            </div>
          </div>

          <div className="mt-7">
            <SectionHeader title="Latest News" action="See more" eyebrow="Updates" />
            <div className="space-y-3">
              {newsItems.map((item) => (
                <SoftCard key={item.id} className="p-4" onClick={() => setSelectedArticle(item)}>
                  <div className="mb-2 inline-flex rounded-full bg-[var(--soft)] px-3 py-1 text-[11px] font-medium text-[var(--orange)]">{item.tag}</div>
                  <div className="text-[15px] font-semibold tracking-tight text-[var(--text)]">{item.title}</div>
                  <div className="mt-1 text-sm leading-5 text-gray-600">{item.summary}</div>
                  <div className="mt-2 text-xs text-gray-500">{item.date}</div>
                </SoftCard>
              ))}
            </div>
          </div>
        </div>

        <BottomNav current={screen} setCurrent={setScreen} />
      </div>
    );
  }

  function NewsScreen() {
    return (
      <div className="relative flex h-full flex-col bg-[var(--cream)]">
        <StatusBar />
        <PageHeader
          title="Newsfeed"
          left={<button onClick={() => setDrawerOpen(true)} className="rounded-full p-2 text-[var(--text)]"><Menu size={20} /></button>}
          right={<Search size={18} className="text-[var(--text)]" />}
        />
        <div className="flex-1 overflow-y-auto px-4 pb-28 pt-2">
          <div className="mb-4 rounded-2xl border border-black/5 bg-white px-4 py-3 text-sm text-gray-500">Search news, reports and updates...</div>
          <div className="space-y-3">
            {newsItems.map((item) => (
              <SoftCard key={item.id} className="p-4" onClick={() => setSelectedArticle(item)}>
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <div className="mb-2 inline-flex rounded-full bg-[var(--soft)] px-3 py-1 text-[11px] font-medium text-[var(--orange)]">{item.tag}</div>
                    <div className="text-[17px] font-semibold tracking-tight text-[var(--text)]">{item.title}</div>
                    <div className="mt-2 text-sm leading-6 text-gray-600">{item.summary}</div>
                    <div className="mt-3 text-xs text-gray-500">{item.date} | Kagiso Trust</div>
                  </div>
                  <Bookmark size={18} className="text-[var(--gold)]" />
                </div>
              </SoftCard>
            ))}
          </div>
        </div>
        <BottomNav current={screen} setCurrent={setScreen} />
      </div>
    );
  }

  function ArticleScreen() {
    if (!selectedArticle) return null;
    return (
      <div className="relative flex h-full flex-col bg-[var(--cream)]">
        <StatusBar />
        <PageHeader
          title="Article"
          left={<button onClick={() => setSelectedArticle(null)} className="rounded-full p-2 text-[var(--text)]"><ChevronLeft size={22} /></button>}
          right={<Bookmark size={18} className="text-[var(--gold)]" />}
        />
        <div className="flex-1 overflow-y-auto px-4 pb-8 pt-2">
          <SoftCard className="overflow-hidden">
            <div className="bg-[var(--orange)] px-5 py-6 text-white">
              <div className="inline-flex rounded-full bg-white/15 px-3 py-1 text-[11px] font-medium">{selectedArticle.tag}</div>
              <div className="mt-4 text-[28px] font-semibold leading-tight tracking-tight">{selectedArticle.title}</div>
              <div className="mt-3 flex items-center gap-2 text-xs text-white/80"><Clock3 size={14} /> {selectedArticle.date}</div>
            </div>
            <div className="p-5 text-[14px] leading-7 text-gray-700">
              <p>{selectedArticle.body}</p>
              <p className="mt-4">This screen demonstrates how Kagiso Trust news and publications can move beyond card previews into a richer in-app reading experience suited to mobile users.</p>
            </div>
          </SoftCard>
        </div>
      </div>
    );
  }

  function EventsScreen() {
    return (
      <div className="relative flex h-full flex-col bg-[var(--cream)]">
        <StatusBar />
        <PageHeader
          title="Events"
          left={<button onClick={() => setDrawerOpen(true)} className="rounded-full p-2 text-[var(--text)]"><Menu size={20} /></button>}
          right={<CalendarDays size={18} className="text-[var(--text)]" />}
        />
        <div className="flex-1 overflow-y-auto px-4 pb-28 pt-2 space-y-4">
          {events.map((event) => {
            const vote = eventVotes[event.id];
            return (
              <SoftCard key={event.id} className="p-4">
                <div className="mb-2 inline-flex rounded-full bg-[var(--soft)] px-3 py-1 text-[11px] font-medium text-[var(--orange)]">{event.category}</div>
                <div className="text-[17px] font-semibold tracking-tight text-[var(--text)]">{event.title}</div>
                <div className="mt-1 text-sm text-gray-600">{event.type} • {event.date}</div>
                <div className="mt-3 flex items-center justify-between text-sm text-gray-600">
                  <span>{event.interested + (vote === "up" ? 1 : 0)} interested</span>
                  <span>Guest interaction enabled</span>
                </div>
                <div className="mt-4 flex gap-3">
                  <PrimaryButton variant={vote === "up" ? "primary" : "secondary"} className="flex-1 !w-auto" onClick={() => setEventVotes({ ...eventVotes, [event.id]: "up" })}><CheckCircle2 size={16} /> Interested</PrimaryButton>
                  <PrimaryButton variant={vote === "down" ? "olive" : "secondary"} className="flex-1 !w-auto" onClick={() => setEventVotes({ ...eventVotes, [event.id]: "down" })}><XCircle size={16} /> Not now</PrimaryButton>
                </div>
              </SoftCard>
            );
          })}
        </div>
        <BottomNav current={screen} setCurrent={setScreen} />
      </div>
    );
  }

  function HubScreen() {
    return (
      <div className="relative flex h-full flex-col bg-[var(--cream)]">
        <StatusBar />
        <PageHeader
          title="Knowledge Hub"
          left={<button onClick={() => setDrawerOpen(true)} className="rounded-full p-2 text-[var(--text)]"><Menu size={20} /></button>}
          right={<Search size={18} className="text-[var(--text)]" />}
        />
        <div className="flex-1 overflow-y-auto px-4 pb-28 pt-2 space-y-4">
          {knowledgeItems.map((item) => {
            const Icon = item.icon;
            return (
              <SoftCard key={item.id} className="p-4">
                <div className="flex items-start gap-3">
                  <IconBadge icon={Icon} />
                  <div className="min-w-0 flex-1">
                    <div className="mb-1 inline-flex rounded-full bg-[var(--soft)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--orange)]">{item.type}</div>
                    <div className="text-[15px] font-semibold tracking-tight text-[var(--text)]">{item.title}</div>
                    <div className="mt-1 text-sm leading-5 text-gray-600">{item.description}</div>
                    <div className="mt-3 flex gap-2">
                      <PrimaryButton variant="secondary" className="!w-auto px-3 py-2 text-xs">Open</PrimaryButton>
                      <PrimaryButton variant="secondary" className="!w-auto px-3 py-2 text-xs">Download</PrimaryButton>
                    </div>
                  </div>
                </div>
              </SoftCard>
            );
          })}
        </div>
        <BottomNav current={screen} setCurrent={setScreen} />
      </div>
    );
  }

  function OpportunitiesScreen() {
    return (
      <div className="relative flex h-full flex-col bg-[var(--cream)]">
        <StatusBar />
        <PageHeader
          title="Opportunities"
          left={<button onClick={() => setDrawerOpen(true)} className="rounded-full p-2 text-[var(--text)]"><Menu size={20} /></button>}
          right={<Briefcase size={18} className="text-[var(--text)]" />}
        />
        <div className="flex-1 overflow-y-auto px-4 pb-28 pt-2 space-y-4">
          {opportunityItems.map((item) => {
            const Icon = item.icon;
            return (
              <SoftCard key={item.id} className="p-4">
                <div className="flex items-start gap-3">
                  <IconBadge icon={Icon} />
                  <div className="min-w-0 flex-1">
                    <div className="text-[15px] font-semibold tracking-tight text-[var(--text)]">{item.title}</div>
                    <div className="mt-1 text-sm leading-6 text-gray-600">{item.subtitle}</div>
                  </div>
                </div>
                <PrimaryButton className="mt-4">{item.cta}</PrimaryButton>
              </SoftCard>
            );
          })}
        </div>
        <BottomNav current={screen} setCurrent={setScreen} />
      </div>
    );
  }

  function ProgrammeScreen() {
    if (!selectedProgramme) return null;
    const Icon = selectedProgramme.icon;
    return (
      <div className="relative flex h-full flex-col bg-[var(--cream)]">
        <StatusBar />
        <PageHeader
          title="Programme"
          left={<button onClick={() => setSelectedProgramme(null)} className="rounded-full p-2 text-[var(--text)]"><ChevronLeft size={22} /></button>}
          right={<Icon size={18} className="text-[var(--orange)]" />}
        />
        <div className="flex-1 overflow-y-auto px-4 pb-8 pt-2 space-y-4">
          <SoftCard className="overflow-hidden">
            <div className="px-5 py-6 text-white" style={{ backgroundColor: selectedProgramme.color }}>
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-[18px] bg-white/15"><Icon size={22} /></div>
              <div className="text-[28px] font-semibold leading-tight tracking-tight">{selectedProgramme.title}</div>
              <div className="mt-2 text-sm text-white/85">{selectedProgramme.subtitle}</div>
            </div>
            <div className="p-5 text-[14px] leading-7 text-gray-700">
              <p>{selectedProgramme.overview}</p>
              <div className="mt-5">
                <div className="mb-2 text-sm font-semibold text-[var(--text)]">Key Focus Areas</div>
                <div className="flex flex-wrap gap-2">
                  {selectedProgramme.highlights.map((item) => (
                    <div key={item} className="rounded-full bg-[var(--soft)] px-3 py-2 text-xs font-medium text-gray-700">{item}</div>
                  ))}
                </div>
              </div>
              <PrimaryButton className="mt-5">Explore Programme</PrimaryButton>
            </div>
          </SoftCard>
        </div>
      </div>
    );
  }

  function AboutScreen() {
    return (
      <div className="relative flex h-full flex-col bg-[var(--cream)]">
        <StatusBar />
        <PageHeader
          title="About Us"
          left={<button onClick={() => setDrawerOpen(true)} className="rounded-full p-2 text-[var(--text)]"><Menu size={20} /></button>}
          right={<Info size={18} className="text-[var(--text)]" />}
        />
        <div className="flex-1 overflow-y-auto px-4 pb-28 pt-2 space-y-4">
          <SoftCard className="overflow-hidden">
            <div className="border-b border-[var(--orange)]/10 bg-white p-5">
              <div className="text-sm uppercase tracking-[0.2em] text-gray-500">Kagiso Trust</div>
              <div className="mt-3 text-[30px] font-semibold leading-tight tracking-tight text-[var(--text)]">Inspiring people to ignite their potential</div>
            </div>
            <div className="p-4 text-sm leading-6 text-gray-700">
              Kagiso Trust is dedicated to creating a brighter future for South Africa’s most vulnerable communities through education, socio-economic development, and institutional capacity building.
            </div>
          </SoftCard>
          {strategySection}
          <SoftCard className="p-4">
            <div className="mb-3 flex items-center gap-2 text-[var(--orange)]"><Users size={18} /><span className="text-sm font-semibold">Our People</span></div>
            <div className="space-y-3">
              {peopleMenu.map((label) => (
                <div key={label} className="rounded-2xl bg-[var(--soft)] px-4 py-3 text-sm font-medium text-gray-700">{label}</div>
              ))}
            </div>
          </SoftCard>
          <SoftCard className="p-4">
            <div className="mb-3 flex items-center gap-2 text-[var(--orange)]"><MapPin size={18} /><span className="text-sm font-semibold">Contact & Location</span></div>
            <div className="space-y-2 text-sm text-gray-700">
              <p>27 Scott Street, Waverley, Johannesburg, 2000</p>
              <p>Tel: +27 (0) 11 566 1900</p>
              <p>Email: info@kagiso.co.za</p>
            </div>
            <PrimaryButton variant="secondary" className="mt-4"><MapPin size={16} /> Open Map</PrimaryButton>
          </SoftCard>
        </div>
        <BottomNav current={screen} setCurrent={setScreen} />
      </div>
    );
  }

  function ProfileScreen() {
    const isGuest = resolvedUser === "guest";
    return (
      <div className="relative flex h-full flex-col bg-[var(--cream)]">
        <StatusBar />
        <div className="border-b border-[var(--orange)]/10 bg-white px-5 pb-5 pt-1">
          <PageHeader
            title="Profile"
            left={<button onClick={() => setDrawerOpen(true)} className="rounded-full p-2 text-[var(--text)]"><Menu size={20} /></button>}
            right={<button onClick={() => setAdminMode(!adminMode)} className="rounded-full p-2 text-[var(--text)]"><Settings size={18} /></button>}
          />
          <div className="mt-3 rounded-[24px] bg-[var(--orange)] p-4 text-white shadow-[0_12px_24px_rgba(213,108,56,0.28)]">
            <div className="text-[30px] font-semibold tracking-tight">{isGuest ? "Guest User" : resolvedUser === "staff" ? "Sbusiso Ndlovu" : "Community User"}</div>
            <div className="mt-1 text-sm text-white/85">{isGuest ? "Limited access profile" : resolvedUser === "staff" ? "KT official • sndlovu@kagiso.co.za" : "Registered stakeholder account"}</div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 pb-28 pt-5">
          {adminMode ? (
            <div className="space-y-4">
              <SectionHeader title="Admin Dashboard" eyebrow="Management View" />
              <div className="grid grid-cols-2 gap-3">
                {[["Engagements", "1,284"], ["New Users", "126"], ["Reach", "8,420"], ["Total Users", "3,106"]].map(([label, value]) => (
                  <SoftCard key={label} className="p-4">
                    <div className="text-xs text-gray-500">{label}</div>
                    <div className="mt-2 text-[26px] font-semibold tracking-tight text-[var(--text)]">{value}</div>
                  </SoftCard>
                ))}
              </div>
              <SoftCard className="p-4">
                <div className="mb-3 flex items-center gap-2 text-[var(--orange)]"><BarChart3 size={18} /><span className="text-sm font-semibold">Filters</span></div>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  {["Month", "Year", "Programme"].map((f) => <div key={f} className="rounded-2xl bg-[var(--soft)] px-3 py-2 text-center text-gray-700">{f}</div>)}
                </div>
              </SoftCard>
              <SoftCard className="p-4">
                <div className="mb-2 text-sm font-semibold text-[var(--text)]">Admin Authentication</div>
                <div className="text-sm text-gray-600">Sign-in and sign-out controls are included as part of the admin access preview.</div>
                <div className="mt-4 flex gap-3">
                  <PrimaryButton className="flex-1 !w-auto"><LogIn size={16} /> Sign In</PrimaryButton>
                  <PrimaryButton variant="secondary" className="flex-1 !w-auto"><LogOut size={16} /> Sign Out</PrimaryButton>
                </div>
              </SoftCard>
            </div>
          ) : (
            <div className="space-y-4">
              <SectionHeader title="My Access" eyebrow="Account" />
              <SoftCard className="p-4">
                <div className="grid grid-cols-3 gap-3 text-center">
                  {[["Bookmarks", BookMarked], ["Saved Forms", FileText], ["Notifications", Bell]].map(([label, Icon]) => (
                    <div key={label} className="rounded-[20px] bg-[var(--cream)] p-3">
                      <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--soft)] text-[var(--orange)]"><Icon size={18} /></div>
                      <div className="text-xs font-medium text-gray-700">{label}</div>
                    </div>
                  ))}
                </div>
              </SoftCard>
              <PrimaryButton variant="olive"><Settings size={16} /> Settings</PrimaryButton>
              <PrimaryButton variant="secondary" onClick={() => { setUserType(null); setAuthMode("landing"); }}><LogOut size={16} /> Log out</PrimaryButton>
            </div>
          )}
        </div>
        <BottomNav current={screen} setCurrent={setScreen} />
      </div>
    );
  }

  function SideDrawer() {
    if (!drawerOpen) return null;
    return (
      <div className="absolute inset-0 z-50 flex">
        <div className="w-[84%] bg-white px-4 pb-6 pt-4 shadow-2xl">
          <div className="mb-5 flex items-center justify-between px-1">
            <div>
              <div className="text-[18px] font-semibold text-[var(--text)]">Menu</div>
              <div className="text-xs text-gray-500">Kagiso Trust</div>
            </div>
            <button onClick={() => setDrawerOpen(false)} className="rounded-full p-2 text-[var(--text)]"><ChevronLeft size={22} /></button>
          </div>

          <div className="space-y-2">
            {[
              ["home", Home, "Home"],
              ["news", FileText, "News Feed"],
              ["events", CalendarDays, "Events"],
              ["hub", BookOpen, "Knowledge Hub"],
              ["opportunities", Briefcase, "Opportunities"],
              ["about", Info, "About Us"],
              ["about", ShieldCheck, "Our Work → Strategy"],
              ["profile", Users, "Our People"],
            ].map(([key, Icon, label]) => (
              <button key={label} onClick={() => { setScreen(key); setDrawerOpen(false); }} className="flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-left hover:bg-[var(--soft)]">
                <Icon size={18} className="text-[var(--orange)]" />
                <span className="text-sm font-medium text-gray-700">{label}</span>
              </button>
            ))}
          </div>

          <SoftCard className="mt-5 p-4">
            <div className="mb-2 flex items-center gap-2 text-[var(--orange)]"><MessageSquare size={16} /><span className="text-sm font-semibold">Feedback</span></div>
            <div className="text-sm text-gray-600">Share comments or questions directly through the app.</div>
            <textarea placeholder="Share your feedback..." className="mt-3 h-24 w-full rounded-2xl border border-black/10 bg-[var(--cream)] px-4 py-3 text-sm outline-none focus:border-[var(--orange)]" />
            <PrimaryButton className="mt-3" onClick={() => setFeedbackSent(true)}><Send size={16} /> Submit Feedback</PrimaryButton>
            {feedbackSent ? <div className="mt-2 text-xs text-green-700">Feedback submitted successfully.</div> : null}
          </SoftCard>
        </div>
        <button className="flex-1 bg-black/20" onClick={() => setDrawerOpen(false)} />
      </div>
    );
  }

  function AppShell() {
    return (
      <Shell>
        <div className="relative h-full" style={{ ['--orange']: colours.orange, ['--green']: colours.green, ['--gold']: colours.gold, ['--cream']: colours.cream, ['--soft']: colours.soft, ['--text']: colours.text }}>
          {selectedArticle ? <ArticleScreen /> : selectedProgramme ? <ProgrammeScreen /> : (
            <>
              {screen === "home" && <HomeScreen />}
              {screen === "news" && <NewsScreen />}
              {screen === "events" && <EventsScreen />}
              {screen === "hub" && <HubScreen />}
              {screen === "opportunities" && <OpportunitiesScreen />}
              {screen === "about" && <AboutScreen />}
              {screen === "profile" && <ProfileScreen />}
              <SideDrawer />
            </>
          )}
        </div>
      </Shell>
    );
  }

  return (
    <div className="min-h-screen bg-[#E7E0D4] px-4 py-8" style={{ ['--orange']: colours.orange, ['--green']: colours.green, ['--gold']: colours.gold, ['--cream']: colours.cream, ['--soft']: colours.soft, ['--text']: colours.text }}>
      <div className="mx-auto mb-4 max-w-[390px] text-center text-[12px] font-medium uppercase tracking-[0.18em] text-[#8A7B6F]">Mobile Application Prototype</div>
      {resolvedUser ? <AppShell /> : <AuthScreen />}
    </div>
  );
}

