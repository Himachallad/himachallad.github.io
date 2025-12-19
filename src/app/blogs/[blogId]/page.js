import Article from "@/components/pages/Article";
import blogConfig from "@/config/blog.config";

export async function generateStaticParams() {
    return blogConfig.map((blog) => ({
        blogId: blog.path,
    }));
}


import MainLayout from "@/components/templates/MainLayout";

export default function BlogPage(props) {
    const { params } = props;
    const { blogId } = params;
    return (
        <MainLayout fullWidth={true}>
            <Article blogId={blogId} />
        </MainLayout>
    );
}
