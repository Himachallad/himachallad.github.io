# Himachallad.github.io - Enterprise Portfolio V3

High-performance personal portfolio and engineering blog built for the AI era.

![Firefly H logo 91409 (1) (1)](https://github.com/Himachallad/himachallad.github.io/assets/20709166/fb5c022b-f0f0-41c3-af1e-743cc49f0422)

## 🚀 Key Features

### 1. Enterprise Engineering Blog
Deep-dive technical articles focusing on high-level system design, distributed systems, and performance engineering.
- **Interactive HLDs**: Mermaid-based architectural diagrams.
- **Internal Deep Dives**: Mathematical breakdowns of algorithms (HNSW, PQ, Bloom Filters).

### 2. AI-Native Accessibility
Fully optimized for LLM consumption.
- **[`/llms.txt`](public/llms.txt)**: Standardized manifest for AI agents.
- **[`/llms-full.txt`](public/llms-full.txt)**: Concatenated context window dump for RAG ingestion.
- **Automation**: `npm run build:llm` script to auto-generate these assets.

### 3. Gamified Experience
- **Quest System**: Scroll-based progress tracking ("XP Bar").
- **Rewards**: "Quest Complete" achievements upon finishing technical reads.

## 🛠 Tech Stack
- **Framework**: Next.js 15 (RC)
- **Styling**: Tailwind CSS + Custom Typography
- **Animation**: Framer Motion (Scroll-linked Spring Physics)
- **Mathematics**: KaTeX + Remark/Rehype
- **Diagrams**: Mermaid.js

## 🏃 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production (includes LLM text generation)
npm run build && npm run build:llm
```
