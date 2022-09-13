import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import propertyImg from '../public/assets/projects/3.png';
import cryptoImg from '../public/assets/projects/4.png'
import netflixImg from '../public/assets/projects/2.png'
import twitchImg from '../public/assets/projects/1.png'
import finalImg from '../public/assets/projects/5.png'
import finalImg1 from '../public/assets/projects/7.png'
import finalImg2 from '../public/assets/projects/8.png'
import finalImg3 from '../public/assets/projects/9.png'
import finalImg4 from '../public/assets/projects/10.png'
import finalImg5 from '../public/assets/projects/11.png'
import finalImg6 from '../public/assets/projects/12.png'
import finalImg7 from '../public/assets/projects/15.png'
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
            projectUrl='https://app-for-fun.vercel.app/'
            tech='Next JS'

          />
              <ProjectItem
            title='Cloning Coinbase'
            backgroundImg={finalImg1}
            projectUrl='https://coin-baseclone.vercel.app/'
            tech='React JS'

          />
              <ProjectItem
            title='Simple Crypto Landing Page'
            backgroundImg={finalImg2}
            projectUrl='https://crypt-alpha.vercel.app/'
            tech='Reacr JS'

          />
              <ProjectItem
            title='Simple IKEA clone'
            backgroundImg={finalImg3}
            projectUrl='https://carp.vercel.app/'
            tech='React JS'

          />
              <ProjectItem
            title='Pets Everywhere in React'
            backgroundImg={finalImg4}
            projectUrl='https://pets-theta.vercel.app/'
            tech='React JS'

          />
              <ProjectItem
            title='Creating a simple Defi'
            backgroundImg={finalImg5}
            projectUrl='https://defi-kappa.vercel.app/'
            tech='React JS'

          />
              <ProjectItem
            title='Creating a data website'
            backgroundImg={finalImg6}
            projectUrl='https://data-eta.vercel.app/'
            tech='React JS'

          />
             <ProjectItem
            title='Creating a data website'
            backgroundImg={finalImg7}
            projectUrl='https://payments-swart.vercel.app/'
            tech='React JS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
