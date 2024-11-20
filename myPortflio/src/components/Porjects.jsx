import React from 'react'
import Aboute from './Aboute'
import Contact from './Contact'

function Porjects() {
  return (
<div className='w-full h-auto bg-gradient-to-b from-[#24232A] to-[#1a191d]'>
<div className=' max-w-[1664px] mx-auto px-[32px]'>
  <div className=' pt-20  min-h-screen'>
    <Aboute/>
  </div>
  <div className='w-full flex justify-center '>
  <div className='max-w-max py-2 px-5'>
  <h2 className='font-poppins text-white tracking-wide text-6xl font-extrabold'>Lastest Works</h2>
  </div>
  </div>
<div className=' pt-20 pb-10'>
<div className='lg:flex items-start lg:space-x-48 xl:space-x-64 space-y-32 lg:space-y-0 '>
    <a href="https://ohyoutube.netlify.app/" target='_blank'>
    <img className=' w-full lg:w-[480px] xl:w-[640px] aspect-[16/9] object-cover rounded-2xl cursor-pointer hover:transform hover:scale-105 duration-300' src="https://media.licdn.com/dms/image/v2/D5622AQH8-iKd5OiwfA/feedshare-shrink_800/feedshare-shrink_800/0/1731927145557?e=1734566400&v=beta&t=FmxebGtXmFi45OowvnfVbY6teiS4a2d99mOTMN3YAvg" alt="" />
    </a>
<div className='flex-1 space-y-5 '>
<span class="text-2xl  text-gray-500 font-robotoMono">—   Youtube Website</span>
<div className=' flex w-full flex-wrap gap-4 mt-[32px]'>
<span className=' text-xl font-poppins  font-medium py-1 px-4 text-white border-[1px] border-white rounded-full '>React js</span>
<span className=' text-xl font-poppins  font-medium py-1 px-4 text-white border-[1px] border-white rounded-full '>JavaScript</span>
<span className=' text-xl font-poppins  font-medium py-1 px-4 text-white border-[1px] border-white rounded-full '>Redux ToolKit</span>
<span className=' text-xl font-poppins  font-medium py-1 px-4 text-white border-[1px] border-white rounded-full '>Tailwind css</span>

<span className=' text-xl font-poppins  font-medium py-1 px-4 text-white border-[1px] border-white rounded-full '>Firebase</span>
</div>
<p className='mt-[32px] w-full text-[#a6a6a6] text-lg font-poppins ' >
The <em className="text-white">YouTube Clone </em> is a feature-rich web application developed with 
  <em className="text-white"> React.js</em> , <em className="text-white">Redux Toolkit</em> , 
  <em className="text-white">Tailwind CSS</em> , and <em className="text-white">Firebase</em>.
</p>
</div>
</div>
<div className=' mt-32'>
<div className='lg:flex items-start flex-row-reverse lg:space-x-48 lg:space-x-reverse xl:space-x-64 xl:space-x-reverse space-y-32 lg:space-y-0 '>
    <a href="https://swiggy-green.vercel.app/" target='_blank'>
    <img className=' w-full h-full lg:w-[480px] xl:w-[640px] aspect-[16/9] object-cover rounded-2xl cursor-pointer hover:transform hover:scale-105 duration-300' src="https://media.licdn.com/dms/image/v2/D5622AQFVOUx_zT0mMQ/feedshare-shrink_800/feedshare-shrink_800/0/1731930252367?e=1734566400&v=beta&t=BOkn7-o72rhRjf_0FOGJOuP8dKeXCozw-DgKkQyEkzs" alt="" />
    </a>
<div className='flex-1 space-y-5 '>
<span class="text-2xl  text-gray-500 font-robotoMono ">—   Swiggy Website</span>
<div className=' flex w-full flex-wrap gap-4 mt-8 '>
<span className=' text-xl font-poppins  font-medium py-1 px-4 text-white border-[1px] border-white rounded-full '>React js</span>
<span className=' text-xl font-poppins  font-medium py-1 px-4 text-white border-[1px] border-white rounded-full '>JavaScript</span>
<span className=' text-xl font-poppins  font-medium py-1 px-4 text-white border-[1px] border-white rounded-full '>Redux ToolKit</span>
<span className=' text-xl font-poppins  font-medium py-1 px-4 text-white border-[1px] border-white rounded-full '>Tailwind css</span>
<span className=' text-xl font-poppins  font-medium py-1 px-4 text-white border-[1px] border-white rounded-full '>FetchAPI</span>
<span className=' text-xl font-poppins  font-medium py-1 px-4 text-white border-[1px] border-white rounded-full '>Jsx</span>
<span className=' text-xl font-poppins  font-medium py-1 px-4 text-white border-[1px] border-white rounded-full '>Firebase</span>
</div>
<p className='mt-[32px] w-full text-[#a6a6a6] text-lg font-poppins ' >
The <em className="text-white">Swiggy Clone </em> is a robust web application developed with 
  <em className="text-white"> React.js </em> , <em className="text-white">Redux Toolkit </em> , 
  <em className="text-white">Tailwind CSS </em> , and <em className="text-white">Firebase </em>. 
  It includes features such as <em className="text-white">user authentication </em>, 
  <em className="text-white"> real-time restaurant listings </em>, 
  <em className="text-white"> order management </em>, and 
  <em className="text-white"> secure payment integration </em>. Its 
  <em className="text-white">responsive design </em> ensures a modern UI, showcasing expertise in 
  <em className="text-white"> state management </em>, <em className="text-white">API integration </em>, 
  and developing <em className="text-white">scalable applications</em>.
</p>
</div>
</div>
</div>
</div>
<Contact/>
    </div>
</div>

  )
}

export default Porjects