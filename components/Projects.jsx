import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import propertyImg from '../public/assets/projects/3.png';
import cryptoImg from '../public/assets/projects/4.png'
import netflixImg from '../public/assets/projects/2.png'
import twitchImg from '../public/assets/projects/1.png'
import finalImg from '../public/assets/projects/5.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Food in Finland'
            backgroundImg={propertyImg}
            projectUrl='/food'
            tech='React JS & Tailwind'
          />
          <ProjectItem
            title='Car React Project'
            backgroundImg={cryptoImg}
            projectUrl='/car'
            tech='React JS & Tailwind'

          />
          <ProjectItem
            title='Netflix App'
            backgroundImg={netflixImg}
            projectUrl='/netflix'
            tech='React JS & Tailwind'

          />
          <ProjectItem
            title='NFT Project with Solidity'
            backgroundImg={twitchImg}
            projectUrl='/nft'
            tech='Next JS'

          />
            <ProjectItem
            title='Crypto Script'
            backgroundImg={finalImg}
            projectUrl='/'
            tech='Next JS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
