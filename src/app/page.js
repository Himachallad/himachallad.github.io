import Introduction from '@/components/organisms/Introduction';
import KnownTechnologies from '@/components/organisms/KnownTechnologies';
import Blogs from '@/components/pages/Blogs';
import Projects from '@/components/pages/Projects';
import Reviews from '@/components/pages/Reviews';

export default function Home() {
  return (
    <main className="pt-24 ml-20 mr-20">
      <Introduction />
      <KnownTechnologies />
      <Reviews />
      <Projects />
      <Blogs />
    </main>
  );
}
