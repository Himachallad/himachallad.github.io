export default function sitemap() {
    return [
        {
            url: 'https://himachallad.github.io/',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://himachallad.github.io/blogs',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        }
    ];
}