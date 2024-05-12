export default function BlogLayout({
    children,
}) {
    return (
        <section className="px-24 py-8">
            <nav></nav>
            {children}
        </section>
    );
}