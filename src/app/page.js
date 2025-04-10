import Introduction from '@/components/organisms/Introduction';
import KnownTechnologies from '@/components/organisms/KnownTechnologies';
import Blogs from '@/components/pages/Blogs';
import Projects from '@/components/pages/Projects';
import Reviews from '@/components/pages/Reviews';
import { Divider } from 'antd';

export default function Home() {
  return (
    <main style={{
      background: 'linear-gradient(to right, #fbd3e9, #f7797d)',
      minHeight: '100vh',
      padding: '4rem 2rem',
      textAlign: 'center'
    }}>
      <Introduction />
      {/* <Projects /> */}
      {/* <Divider /> */}
      <Blogs />
    </main>
  );
}
