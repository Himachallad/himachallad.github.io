"use client";
import Markdown from "react-markdown";
import Image from 'next/image';
import { articles } from "./articleConfig";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Link from "next/link";

const markdownComponents = () => {
    return {
        p: (paragraph) => {
            const { node } = paragraph;

            if (node.children[0].tagName === "img") {
                const image = node.children[0];
                const metastring = image.properties.alt;
                const alt = metastring?.match(/\{[^{}]*\}|[^{}]+/);
                let size = metastring.match(/\s*(\d+)x(\d+)\s*}/);
                size = size || ["_", "768", "400"];
                const width = size[1] || "768";
                const height = size[2] || "400";
                const isPriority = metastring?.toLowerCase().includes('{priority}');
                const hasCaption = metastring?.toLowerCase().includes('{caption:');
                const caption = metastring?.match(/{caption: (.*?)}/)?.pop();
                return (
                    <div style={{
                        minHeight: `${height}px`
                    }} className="relative w-full max-w-none overflow-hidden mb-[35px] prose-img:rounded-xl">
                        <Image
                            src={image.properties.src}
                            className="postImg rounded-xl"
                            alt={alt}
                            priority={isPriority}
                            fill
                            style={{ objectFit: "contain" }}
                        />
                        {hasCaption ? <div className="caption" aria-label={caption}>{caption}</div> : null}
                    </div>
                );
            } else if (node.children[0].tagName == "a") {
                const anchor = node.children[0];
                const href = anchor.properties.href;
                const text = anchor.children[0].value;
                return <Link className="no-underline text-sky-500 font-light cursor-pointer" href={href} passHref target="_blank">{text}</Link>;
            }
            return <p>{paragraph.children}</p>;
        },
        code: (props) => {
            const { children, className, ...rest } = props;
            const match = /language-(\w+)/.exec(className || '');
            return match ? (
                <SyntaxHighlighter
                    {...rest}
                    PreTag="div"
                    language={match[1]}
                    style={materialLight}
                >{children}</SyntaxHighlighter>
            ) : (
                <code {...rest} className={className}>
                    {children}
                </code>
            );
        },
        a: (props) => {
            const { children, href } = props;
            return <Link className="no-underline text-sky-500 font-light cursor-pointer" href={href} passHref target="_blank">{children}</Link>;
        },
    };
};

export default function Articles(props) {
    const { blogId } = props;
    const articleBody = articles[blogId]?.body || "# Page not found";

    return <article className="max-w-none prose pt-10 mb-[140px] 
    prose-h1:font-semibold prose-h1:leading-[50px] prose-h1:text-[40px] 
    prose-p:font-light prose-p:leading-[28px] prose-p:text-[20px]
    prose-h2:font-semibold prose-h3:font-semibold
    prose-code:bg-code-color prose-code:font-light prose-code:text-[20px]
    prose-code:leading-[28px] prose-code:text-inherit
    prose-code:after:content-none prose-code:before:content-none
    prose-pre:bg-inherit prose-pre:px-0 prose-invert">
        <Markdown components={markdownComponents()}>{articleBody}</Markdown>
    </article >;
}