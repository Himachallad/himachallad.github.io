import Article from "@/components/pages/Article";

export async function generateStaticParams() {
    const blogIds = ["learn_ai_2024", "top_10_javascript_interview_questions", "scrap_images_for_ml_training", "scale_using_digital_marketting", "seventy_five_leetcode_problems"];

    return blogIds.map(blogId => {
        return {
            blogId: blogId
        };
    });
}


export default function BlogPage(props) {
    const { params } = props;
    const { blogId } = params;
    return <Article blogId={blogId} />;
}
