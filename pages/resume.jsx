import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Onyeluka | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Okonkwo Onyeluka</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/onyeluka-okonkwo-715733232/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/pharmluka'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Creative<span className='px-1'>|</span> Web Development{' '}
              <span className='px-1'>|</span> Critical Thinker
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
        Front End Developer using JavaScript and JavaScript Frame work React. I love managing states with Redux
and styling my pages using either tailwind CSS or styled components. Sometimes, I make use of material UI
or Chakra UI. Six years ago, I created my backend using PHP but now am currently learning solidity. I hope to learn ExpressJs soon. Have been able to create simple servers using express but that’s where it ends for now.
I am currently creating smart contracts using solidity and react JS to develop minting contracts and other smart contracts on either the ethereum or Solana blockchains. I love football, the one played with legs. I enjoy basketball too, I am a dog lover and I spend my spare time on all my hobbies.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Front-End Web Developer
            <span className='px-2'>|</span> HTML <span className='px-2'>|</span>
            CSS <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span> React
            <span className='px-2'>|</span> Next.js
            <span className='px-2'>|</span> Solidity
          </p>
          <p className='py-2'>
            <span className='font-bold'>Amazon Web Services</span>
            <span className='px-2'>|</span>Azure
         
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              WORDPRESS,  PHP, WIX, SHOPIFY, WOOCOMMERCE
            </span>
            <span className='px-2'>|</span>LAGOS, NIGERIA & TAMPERE, FINLAND
          </p>
          <p className='py-1 italic'>Freelance Work (2014 - 2018)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Created Mobile responsive pages and adapted designs, created plugins and themes
            </li>
            <li>
              Troubleshoot issues and concerns, configure operation and analytic
              plugins, and design changes as needed.
            </li>
            <li>
              Worked directly with a diverse client base to understand and
              implement multiple technologies and programs.
            </li>
            <li>
              Platform migration managing DNS servers as well as MX records and
              ensuring a smooth migration process.
            </li>
          </ul>
        </div>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>WEDANCE, COMMITIUM</span>
            <span className='px-2'>|</span>Remote
          </p>
          <p className='py-1 italic'>Frontend Developer (2018 - Current)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
             Creating and Interpreting UI/UX Frame
            </li>
            <li>
            Optimizing web pages for maximum speed and scalability.
            </li>
            <li>
            Determining the structure and design of web pages.
            </li>
            <li>
Ensuring user experience determines design choices.
</li>
<li>
Developing features to enhance the user experience.
Striking a balance between functional and aesthetic design.
</li>
<li>
Ensuring web design is optimized for smartphones.
            </li>
            <li>
            Maintaining brand consistency throughout the design.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
