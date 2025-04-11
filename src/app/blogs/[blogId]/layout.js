export default function BlogLayout({
    children,
}) {
    //. linear-gradient(to right, #2c2c2c, #404040)
    return (
        <section className="px-24 py-8 bg-gradient-to-r from-[#2c2c2c] to-[#404040]">
            <nav></nav>
            {children}
        </section>
    );
}