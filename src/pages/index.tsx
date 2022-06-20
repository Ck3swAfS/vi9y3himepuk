import type { NextPage } from 'next';
import Sidebar from '@/components/Home/Sidebar';

const Home: NextPage = () => {
  return (
    <div className='flex min-h-screen max-w-7xl mx-auto'>
      {/* Sidebar */}
      <Sidebar />
      {/* Feed */}

      {/* Widgets */}
    </div>
  );
};

export default Home;
