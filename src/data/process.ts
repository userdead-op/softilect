export const buildStages = [
  {
    id: "01",
    title: "Discovery",
    line: "We turn ambition into a buildable brief before anyone writes code.",
    detail:
      "Stakeholder interviews, competitor teardown, success metrics, and risk logs. Scope is earned, not assumed.",
  },
  {
    id: "02",
    title: "Design",
    line: "Journeys, interfaces, and motion systems shaped for clarity under real use.",
    detail:
      "Information architecture, prototypes, and design systems that engineering can implement without reinterpretation.",
  },
  {
    id: "03",
    title: "Architecture",
    line: "Secure, robust foundations chosen for the product you will run in year two.",
    detail:
      "Data models, auth boundaries, integrations, and threat-minded decisions that protect scale and compliance.",
  },
  {
    id: "04",
    title: "Engineering",
    line: "Production software delivered in visible sprints. No black-box weeks.",
    detail:
      "Web, mobile, APIs, and platform work with daily progress signals, velocity tracking, and clean handoffs.",
  },
  {
    id: "05",
    title: "Quality Assurance",
    line: "Nothing reaches users until acceptance criteria say yes.",
    detail:
      "Manual and automated checks, exploratory testing, and severity-based triage before release windows open.",
  },
  {
    id: "06",
    title: "Reviews & Retros",
    line: "Code, design, and delivery rituals that keep quality compounding.",
    detail:
      "Pull-request reviews, design QA, and sprint retrospectives that convert friction into process upgrades.",
  },
  {
    id: "07",
    title: "Change Management",
    line: "Scope shifts stay controlled, documented, estimated, and sequenced.",
    detail:
      "Change requests, impact analysis, and backlog rebalancing so timelines remain honest when priorities move.",
  },
  {
    id: "08",
    title: "Deployment",
    line: "Release choreography with rollback paths and calm go-live checklists.",
    detail:
      "CI/CD, environment promotion, release notes, and launch-day ownership so premieres feel intentional.",
  },
  {
    id: "09",
    title: "Maintenance",
    line: "Post-launch care that treats shipping as the start of growth.",
    detail:
      "Monitoring, feedback loops, dependency hygiene, and roadmap planning with the same accountability that got you live.",
  },
];

export const processExtra: Record<string, { you: string[]; we: string[]; time: string }> = {
  "01": { we: ["Interview stakeholders and users", "Review competitors and the market", "Define goals, scope and risks"], you: ["Brief, scope and success metrics", "Risk log and rough roadmap"], time: "1 to 2 weeks" },
  "02": { we: ["Map user journeys and screens", "Build clickable prototypes", "Create a reusable design system"], you: ["Wireframes and prototype", "UI kit ready for engineering"], time: "2 to 4 weeks" },
  "03": { we: ["Plan data, APIs and integrations", "Set access and security rules", "Choose a stack that scales"], you: ["Technical plan", "API contracts and data model"], time: "1 to 2 weeks" },
  "04": { we: ["Build in short sprints", "Share a working preview every sprint", "Review code before it merges"], you: ["Working software on staging", "Sprint notes and progress reports"], time: "Sprints of 1 to 2 weeks" },
  "05": { we: ["Run manual and automated tests", "Test across devices and browsers", "Triage bugs by severity"], you: ["Test report", "Release candidate that meets acceptance criteria"], time: "Runs alongside every sprint" },
  "06": { we: ["Review code and designs", "Hold sprint demos and retrospectives", "Turn lessons into process changes"], you: ["Clear feedback loops", "Steady quality across sprints"], time: "End of each sprint" },
  "07": { we: ["Log every change request", "Estimate impact on time and cost", "Re-plan the backlog openly"], you: ["Written change records", "Honest, updated timelines"], time: "As changes arise" },
  "08": { we: ["Automate builds and releases", "Promote through test environments", "Prepare rollback and launch checklists"], you: ["Live product", "Release notes and handover docs"], time: "Launch week" },
  "09": { we: ["Monitor errors and performance", "Apply updates and security patches", "Plan the next release with you"], you: ["Support plan", "Prioritised roadmap from real data"], time: "Ongoing" },
};
