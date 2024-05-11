import BlogGridView from "@/components/molecules/BlogGridView";

export default function RecommendedBlogs({ blogs }) {
    const recommendedBlogs = Object.values(blogs).map(({ title, subtitle, imagePath, category, date }, idx) => {
        console.log("title is ", title);
        return (<BlogGridView
            key={`recommended_blog_${idx}`}
            title={title}
            subtitle={subtitle}
            imagePath={imagePath}
            category={category}
            date={date}
        />);
    });

    return <>
        <div className="font-bold text-2xl">Recommended</div>
        <div className="grid grid-cols-2 place-items-center">{recommendedBlogs}</div></>;
}