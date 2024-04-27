import Introduction from '@/components/organisms/Introduction';
import KnownTechnologies from '@/components/organisms/KnownTechnologies';
import Blogs from '@/components/pages/Blogs';
import Projects from '@/components/pages/Projects';
// import Image from 'next/image';

export default function Home() {
  return (
    <main className="pt-24 ml-20 mr-20">
      {/* <div className='flex w-full'>
        <Image src="/icons/background.jpg"
          alt='back-ground'
          fill
          style={{ objectFit: "cover" }}
          priority />
      </div> */}
      <Introduction />
      <KnownTechnologies />
      <Projects />
      <p>Technology</p>
      <Blogs />
    </main>
  );
}
