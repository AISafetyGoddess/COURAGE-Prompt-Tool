# COURAGE Prompt Tool

**Flagship portfolio project · AI workflow design · Prompt engineering · Requirements analysis**

COURAGE Prompt is an original seven-step framework for turning rough ideas into clearly scoped requests, structured plans, and execution-ready prompts. This repository will host a **portfolio-safe demonstration tool** implementing that methodology.

> **Status:** Product specification and implementation planning. The repository does **not yet contain a working application**. Screenshots, benchmarks, and functionality will be added only after implementation and verification.

## The seven-step method

| Step | Stage | Purpose |
| --- | --- | --- |
| **C** | Chat | Establish the task and the appropriate AI role or expertise. |
| **O** | Order | Break the request into Who, What, When, Where, Why, and How. |
| **U** | Understand | Summarize intent, assumptions, constraints, and request confirmation. |
| **R** | Research | Gather relevant, reliable context where needed. |
| **A** | Analysis | Compare feasible approaches and explain recommendations. |
| **G** | Generate | Produce the requested artifact, plan, or execution prompt. |
| **E** | Execute | Provide implementation instructions or take authorized actions with available tools. |

The sequence is a **design specification**, not a claim that an app has implemented all stages.

## Planned demonstration functionality

- **Quick and Manual modes** — fast generation or guided, step-by-step approvals.
- **Structured intake** — extract and review the Who / What / When / Where / Why / How of a request.
- **Approval checkpoints** — let users revise requirements before advancing.
- **Prompt builder** — produce copyable execution prompts for other AI tools.
- **Project history** — locally stored sample sessions for a repeatable demo.
- **Sample use cases** — application planning, course creation, research workflows, and product briefs.

## Portfolio demonstration and data protection

The eventual demo will include fabricated users, project scenarios, and records. No confidential organizational data, private prompts, credentials, or production integration keys will be included.

## Planned quality evidence

As development progresses, this repository will document:

1. Product requirements and acceptance criteria.
2. Architecture and implementation decisions.
3. Instructions to install and run the demo.
4. Automated tests and representative outputs.
5. Screenshots or a verified live demonstration.
6. A case study distinguishing the author's framework design from the demo implementation.

## Related

[Main software development, AI engineering and analytics portfolio](https://github.com/AISafetyGoddess/portfolio)

---

*COURAGE Prompt: Chat → Order → Understand → Research → Analysis → Generate → Execute.*

## Framework comparison resource — implementation added

A portfolio-safe, research-cautious comparison interface is included at [`src/components/FrameworkComparison.jsx`](src/components/FrameworkComparison.jsx).

- Filter by task type and search descriptions or framework structures.
- Expand individual frameworks to understand their structures and suggested contexts.
- Sort without losing expanded-row identity (stable framework IDs).
- Uses a navy/gold visual identity and accessible labels, focus states and mobile layouts.
- Does **not** make unsupported rankings, endorsements, time/cost savings, or effectiveness claims.
- Separates prompting techniques from multi-stage frameworks.

**Integration:** This file is a React + Tailwind component using `lucide-react`. Mount it within a React app route such as `/resources/frameworks`. In Base44, adapt its code to the existing project structure and add a **Resources → Compare Frameworks** navigation item. Preserve all existing app routes and logic. `/build` is the existing launch destination.

**Status:** Code committed to GitHub. Not connected to or deployed on the production Base44 website. This repository currently has no complete runnable app build or automated tests for the component.

**Content review before live publication:** Verify the names/expansions and relevant primary references for each third-party framework; the categorization is illustrative, not a benchmark. Keep the comparison separate from promotional promises until empirical testing supports them.
