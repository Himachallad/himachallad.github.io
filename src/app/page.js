import Introduction from '@/components/organisms/Introduction';
// import KnownTechnologies from '@/components/organisms/KnownTechnologies';
import Blogs from '@/components/pages/Blogs';
// import Projects from '@/components/pages/Projects';
// import Reviews from '@/components/pages/Reviews';
// import { Divider } from 'antd';
import MainLayout from '@/components/templates/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      <div className="">
        <Introduction />
        <Blogs />
      </div>
    </MainLayout>
  );
}
