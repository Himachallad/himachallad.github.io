const fs = require('fs');
const path = require('path');

// Manually defining blogs to avoid ES module import issues in standalone script
const blogs = [
    {
        title: "Scaling Milvus for Billion-Scale Search",
        subtitle: "Architecting vector databases for high-throughput enterprise retrieval.",
        path: "scaling_milvus_billion_scale"
    },
    {
        title: "System Design: Distributed Web Crawler",
        subtitle: "Challenges in URL frontier management, politeness policies, and fault tolerance.",
        path: "designing_distributed_web_crawler"
    },
    {
        title: "Python Performance for AI Pipelines",
        subtitle: "Profiling, async I/O, and compiled extensions for maximum throughput.",
        path: "python_performance_optimization"
    },
    {
        title: "Event-Driven Microservices with Kafka",
        subtitle: "Decoupling systems and ensuring data consistency at scale.",
        path: "event_driven_kafka"
    }
];

const ARTICLES_DIR = path.join(__dirname, '../src/components/pages/Article/articles');
const PUBLIC_DIR = path.join(__dirname, '../public');

async function generate() {
    let llmsTxt = "# Himachallad's Blog - Technical Architecture & Engineering\n\n";
    llmsTxt += "This site contains deep-dive engineering articles on distributed systems, AI infrastructure, and high-performance computing.\n\n";

    let fullContent = "# Himachallad's Complete Technical Blog\n";
    fullContent += "Combined content for Context Window ingestion.\n\n";

    for (const blog of blogs) {
        // Add to llms.txt
        const url = `https://himachallad.github.io/blogs/${blog.path}`;
        llmsTxt += `- [${blog.title}](${url}): ${blog.subtitle}\n`;

        // Add to llms-full.txt
        const filePath = path.join(ARTICLES_DIR, `${blog.path}.md`);
        if (fs.existsSync(filePath)) {
            const content = fs.readFileSync(filePath, 'utf-8');
            fullContent += `\n\n---\n\n## ARTICLE: ${blog.title}\nURL: ${url}\n\n${content}`;
            console.log(`Processed: ${blog.title}`);
        } else {
            console.warn(`Missing file: ${filePath}`);
        }
    }

    // Write files
    fs.writeFileSync(path.join(PUBLIC_DIR, 'llms.txt'), llmsTxt);
    fs.writeFileSync(path.join(PUBLIC_DIR, 'llms-full.txt'), fullContent);

    console.log("✅ Generated public/llms.txt");
    console.log("✅ Generated public/llms-full.txt");
}

generate().catch(console.error);
