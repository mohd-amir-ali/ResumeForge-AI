# ResumeForge-AI: Conversational AI Resume Architect & ATS Evaluation System

[![Launch Live Studio](https://img.shields.io/badge/Launch_Live_App-ResumeForge_AI-4F46E5?style=for-the-badge)](https://mohd-amir-ali.github.io/ResumeForge-AI/)
[![AI Agent Architecture](https://img.shields.io/badge/Architecture-9--Stage_Conversational_Agent-10B981?style=for-the-badge)](./agents/resume_architect_agent/agent.py)
[![ATS Telemetry](https://img.shields.io/badge/ATS_Telemetry-5--Factor_Scoring_%26_STAR_Recourse-06B6D4?style=for-the-badge)](https://mohd-amir-ali.github.io/ResumeForge-AI/)
[![License: MIT](https://img.shields.io/badge/License-MIT-F59E0B?style=for-the-badge)](#license)

**ResumeForge-AI** is a conversational resume engineering and Applicant Tracking System (ATS) evaluation platform designed to close the gap between a candidate's actual technical capability and how automated hiring pipelines parse and rank their experience.

Rather than asking job seekers to format a blank document from scratch or guess why automated resume screeners filter out their applications, the system guides candidates through a structured 9-stage interview (`ForgeBot`), restructures raw project notes into quantified STAR-method impact statements, and generates a print-ready, ATS-compliant 1-Page or 2-Page A4 PDF resume.

---

## Core Concept & Problem Statement

Modern recruitment pipelines rely heavily on automated Applicant Tracking Systems to parse, score, and filter resumes before a human recruiter ever reviews them. This creates three persistent barriers for qualified candidates:

1. **Structural & Parsing Fragility:** Candidates often lose out due to non-standard section headers, multi-column parsing errors, or missing metadata fields that cause automated parsers to drop work history or skills.
2. **Unquantified Experience:** Students, fresh graduates, and career switchers frequently describe *responsibilities* ("worked on backend APIs") rather than *measurable outcomes* (`Action Verb + Technical Context + Quantified Metric`), resulting in low algorithmic ranking scores.
3. **Opaque ATS Filtering:** Job seekers rarely receive transparent feedback on why a resume scored poorly or which specific dimensions (action verb strength, metric density, domain keywords, or section completeness) need improvement.

**ResumeForge-AI** addresses these challenges by pairing a guided conversational interviewer with real-time, deterministic ATS telemetry.

---

## Ethical AI & Career Equity Principles

### 1. Evidence-Based Impact Over Keyword Stuffing
Automated resume tools often encourage candidates to inject unverified buzzwords to game screening filters. ResumeForge-AI takes an ethical, evidence-first approach: its **STAR-Method Bullet Polisher** restructures the candidate's own stated projects and responsibilities into clear `Action Verb + Technical Context + Quantified Outcome` statements without fabricating credentials or experience.

### 2. Leveling the Playing Field Across Career Stages
A first-time internship applicant and a senior engineering lead should not be evaluated with the same structural template. During the initial interview stages, ResumeForge-AI adapts its section hierarchy and evaluation weights based on:
* **Career Stage:** Student, Fresh Graduate, Working Professional, or Career Switcher.
* **Target Objective:** Internship, Full-Time Role, Internal Promotion, or Master Portfolio.
* **Document Scope:** 1-Page focused A4 layout or 2-Page extended technical portfolio.

### 3. Transparent 5-Factor ATS Telemetry & Client-Side Privacy
Every candidate can inspect how their resume is evaluated across five explicit dimensions (0 to 100%):
* **Action Verb Strength:** Evaluates the use of strong, past-tense engineering and leadership verbs at the start of experience and project bullets.
* **Quantified Impact Metrics:** Measures the presence of concrete performance indicators (`%`, `ms`, `x` multipliers, throughput, and scale).
* **Domain Keyword Density:** Checks alignment across programming languages, frameworks, cloud infrastructure, and analytical tools.
* **Section & Contact Completeness:** Verifies that essential contact links, summary, education, experience, projects, and categorized skills are present and machine-readable.
* **Zero-Server Data Retention:** All personal career data, contact information, and optional API keys remain strictly inside the user's local browser session and are never transmitted to a central database.

---

## System Architecture

Both the browser engine (`app.js`) and the standalone CLI agent (`agents/resume_architect_agent/agent.py`) implement the core resume synthesis pipeline:

1. **9-Stage Conversational State Machine (`ForgeBot`):** Sequentially collects Career Stage, Target Purpose, Template & Page Configuration, Contact Header, Executive Summary, Education, Work/Internship Experience, Signature Projects, and Categorized Technical Skills.
2. **Deterministic & LLM-Assisted STAR Rewriter:** Includes a built-in rule-based STAR bullet optimizer that works offline out of the box, alongside optional client-side integration for **Google Gemini (`gemini-1.5-flash`)** and **Groq (`llama-3.3-70b-versatile`)** APIs.
3. **Multi-Layout A4 Vector PDF Engine:** Renders real-time previews across three ATS-safe layout modes (*Classic Monochrome*, *Modern Executive*, and *Split-Sidebar*) with native vector print rules (`@media print`) and direct `.pdf` export.

---

## Repository Structure

```text
ResumeForge-AI/
├── index.html                                  # Split-screen conversational interviewer & live A4 workspace
├── styles.css                                  # Workspace layout, resume templates, and A4 print rules
├── app.js                                      # 9-stage interview state machine, STAR polisher & ATS scorer
├── agents/
│   └── resume_architect_agent/
│       ├── agent.py                            # Standalone CLI agent (STAR rewriter & ATS evaluator)
│       ├── requirements.txt                    # Dependencies
│       └── .env.example                        # Optional Gemini / Groq API key template
├── .gitignore                                  # Git ignore rules for local environment files
└── README.md                                   # Project documentation
```

---

## Live Deployment & Local Quick Start

* **Live Application (GitHub Pages):** https://mohd-amir-ali.github.io/ResumeForge-AI/

To run the web application locally:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080` in your browser.

To run the standalone resume architect agent from the terminal:

```bash
cd agents/resume_architect_agent
pip install -r requirements.txt
python3 agent.py
```

---

## License & Author

Released under the **MIT License**. Built by **Mohd Amir Ali** (techwithamir.com).
