import React, { useMemo, useState } from "react";
import { ChevronDown, Search, ArrowUpDown, ExternalLink } from "lucide-react";

/**
 * Portfolio-safe educational comparison.
 * Qualitative descriptions are illustrative, not benchmark results.
 * Verify naming/attribution with primary sources before publishing externally.
 */
const frameworks = [
  { id: "courage", name: "COURAGE", steps: 7, level: "Guided", category: "projects", audience: "Multi-step projects and AI workflows", structure: "Chat · Order · Understand · Research · Analysis · Generate · Execute", note: "Includes requirements confirmation and an execution stage. Quick/Manual modes are product features, not comparative performance evidence." },
  { id: "create", name: "CREATE", steps: 6, level: "Structured", category: "content", audience: "Writing and content-development tasks", structure: "Character · Request · Examples · Adjustments · Type of output · Extras", note: "Useful when examples and output requirements matter." },
  { id: "risen", name: "RISEN", steps: 5, level: "Structured", category: "projects", audience: "Procedural work and complex instructions", structure: "Role · Instructions · Steps · End goal · Narrowing", note: "Emphasizes a step-based deliverable." },
  { id: "rhodes", name: "RHODES / RODES", steps: 5, level: "Structured", category: "content", audience: "Tasks with examples and review needs", structure: "Role · Objective · Details · Examples · Sense check", note: "A named variant from the supplied comparison; verify provenance and exact expansion before external publication." },
  { id: "care", name: "CARE", steps: 4, level: "Compact", category: "content", audience: "Design or content tasks with explicit constraints", structure: "Context · Ask · Rules · Examples", note: "Compact structure emphasizing context, rules and examples." },
  { id: "pgtc", name: "PGTC", steps: 4, level: "Compact", category: "quick", audience: "Everyday prompting", structure: "Persona · Goal · Task · Context", note: "Short framework for defining who, why, what and context." },
  { id: "aces", name: "ACES", steps: 4, level: "Compact", category: "projects", audience: "Context-rich workplace tasks", structure: "Aim · Context · Expectations · Source", note: "Emphasizes expectations and information sources." },
  { id: "race", name: "RACE", steps: 4, level: "Compact", category: "quick", audience: "Short business communications", structure: "Role · Action · Context · Expectation", note: "Useful shorthand when the task is already understood." },
  { id: "star", name: "STAR", steps: 4, level: "Compact", category: "content", audience: "Presentation and communication tasks", structure: "Situation · Task · Appearance · Refine", note: "One prompting adaptation of the STAR acronym; distinguish from interview-method variants." },
  { id: "rtf", name: "RTF", steps: 3, level: "Minimal", category: "quick", audience: "Simple, clear requests", structure: "Role · Task · Format", note: "A concise pattern with few fields to fill in." },
];
const techniques = [
  { name: "Chain-of-thought prompting", purpose: "Reasoning-oriented prompting technique; not directly comparable to a full workflow framework." },
  { name: "Chain of Density", purpose: "Iterative summarization technique; not directly comparable to a full workflow framework." },
];

export default function FrameworkComparison() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("name");
  const [open, setOpen] = useState({});
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return frameworks.filter(f =>
      (category === "all" || f.category === category) &&
      [f.name, f.audience, f.structure, f.note].some(v => v.toLowerCase().includes(q))
    ).sort((a,b) => sort === "steps" ? a.steps - b.steps || a.name.localeCompare(b.name) : a.name.localeCompare(b.name));
  }, [query, category, sort]);
  return (
    <main className="min-h-screen bg-[#F7F8FC] text-[#132A45]">
      <header className="bg-[#132A45] text-white">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#C9AE7B]">COURAGE Learning Resources</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">Find the right prompting approach</h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-200">Compare structures and use cases. There is no single best framework for every task.</p>
          <a href="/build" className="mt-8 inline-flex rounded-lg bg-[#C9AE7B] px-5 py-3 font-semibold text-[#132A45] hover:bg-[#e1c99b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Try the COURAGE Tool <ExternalLink size={16} className="ml-2" aria-hidden="true" /></a>
        </div>
      </header>
      <section aria-labelledby="comparison-title" className="mx-auto max-w-6xl px-5 py-12">
        <h2 id="comparison-title" className="text-2xl font-bold">Framework comparison</h2>
        <p className="mt-2 text-slate-600">Explore characteristics, not unsupported performance rankings.</p>
        <div className="mt-7 grid gap-4 md:grid-cols-[1fr_220px_180px]">
          <label className="block"><span className="mb-2 block text-sm font-medium">Search frameworks</span>
            <span className="relative block"><Search size={18} aria-hidden="true" className="absolute left-3 top-3 text-slate-400" />
              <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search names, tasks, or steps" className="w-full rounded-lg border border-slate-300 bg-white py-2.5 pl-10 pr-3 focus:border-[#132A45] focus:outline-none focus:ring-2 focus:ring-[#C9AE7B]" />
            </span>
          </label>
          <label className="block"><span className="mb-2 block text-sm font-medium">Task type</span>
            <select value={category} onChange={e=>setCategory(e.target.value)} className="w-full rounded-lg border border-slate-300 bg-white p-2.5">
              <option value="all">All task types</option><option value="quick">Quick tasks</option><option value="content">Writing & design</option><option value="projects">Structured projects</option>
            </select>
          </label>
          <label className="block"><span className="mb-2 flex items-center gap-1 text-sm font-medium">Sort <ArrowUpDown size={14} aria-hidden="true"/></span>
            <select value={sort} onChange={e=>setSort(e.target.value)} className="w-full rounded-lg border border-slate-300 bg-white p-2.5"><option value="name">Name</option><option value="steps">Number of steps</option></select>
          </label>
        </div>
        <div className="mt-5 space-y-3">
          {visible.length === 0 && <p role="status" className="rounded-xl bg-white p-6">No matching frameworks. Try a different search.</p>}
          {visible.map(f => (
            <article key={f.id} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <button type="button" aria-expanded={!!open[f.id]} aria-controls={"details-" + f.id}
                onClick={()=>setOpen(prev=>({...prev,[f.id]:!prev[f.id]}))}
                className="flex w-full items-center justify-between gap-4 p-5 text-left hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#132A45]">
                <div className="min-w-0"><div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-semibold">{f.name}</h3>
                  {f.id === "courage" && <span className="rounded-full bg-[#F1E5C7] px-2.5 py-1 text-xs font-semibold">COURAGE product</span>}
                </div><p className="mt-1 text-sm text-slate-600">{f.audience}</p></div>
                <div className="flex shrink-0 items-center gap-3"><span className="hidden text-sm text-slate-600 sm:inline">{f.steps} steps · {f.level}</span><ChevronDown aria-hidden="true" className={"transition-transform " + (open[f.id]?"rotate-180":"")} size={20}/></div>
              </button>
              {open[f.id] && <div id={"details-"+f.id} className="border-t border-slate-100 bg-[#FBFCFE] px-5 py-5">
                <p className="text-sm font-semibold">Structure</p><p className="mt-1 text-sm text-slate-700">{f.structure}</p>
                <p className="mt-4 text-sm font-semibold">When to consider it</p><p className="mt-1 text-sm text-slate-700">{f.note}</p>
              </div>}
            </article>
          ))}
        </div>
        <aside className="mt-10 rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-bold">Related prompting techniques</h2>
          <p className="mt-2 text-sm text-slate-600">These are techniques rather than directly comparable end-to-end frameworks.</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700">{techniques.map(t=><li key={t.name}><strong>{t.name}:</strong> {t.purpose}</li>)}</ul>
        </aside>
        <p className="mt-6 text-xs leading-relaxed text-slate-500">Educational comparison adapted from a working draft. Framework names and expansions may vary across sources. Categories are editorial descriptions, not empirical assessments. No comparative outcome, speed, cost, or effectiveness scores are claimed. Verify source attribution before publication as an authoritative reference.</p>
      </section>
    </main>
  );
}