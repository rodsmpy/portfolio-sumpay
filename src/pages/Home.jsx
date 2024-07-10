import profilepic from '../assets/images/profilepic.png'
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';
import html from '../assets/images/html.png'
import css from '../assets/images/css.png'
import js from '../assets/images/js.png'
import bootstrap from '../assets/images/bootstrap.png'
import tailwind from '../assets/images/tail.png'
import science from '../assets/images/science.png'
import mongo from '../assets/images/mongo.png'
import node from '../assets/images/node.png'
import express from '../assets/images/express.png'
import figma from '../assets/images/figma.png'
import canva from '../assets/images/canva.png'
import backyardlettuce from '../assets/images/backyardlettuce.png'
import heavenlydesserts from '../assets/images/heavenlydesserts.png'
import promocentral from '../assets/images/promocentral.png'
import smarthighway from '../assets/images/smarthighway.png'
import starproducer from '../assets/images/starproducer.png'
import catbook from '../assets/images/catbook.png'
import trailsnaplogo from '../assets/images/trailsnap.jpg'
import cheesu from '../assets/images/cheesu.png'
import iskin from '../assets/images/iskin.png'
import BBI from '../assets/images/BBI.png'
import couchwasabi from '../assets/images/couchwasabi.png'
import contis from '../assets/images/contis.png'
import rythm from '../assets/images/rythm.png'
import zam from '../assets/images/zam.png'
import { useState } from 'react';
import { IoIosCall } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Home() {
    const [showPortfolio, setShowPortfolio] = useState(1);
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_m9xx74s', 'template_lr3cj2j', form.current, {
            publicKey: '7hdt4U0Xi615_gY2f',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              e.target.reset();
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    

      const handleLinkClick = (event, url) => {
        // Prevent default only for left-clicks
        if (event.button === 0) {
            event.preventDefault();
            window.open(url, '_blank', 'noopener noreferrer');
        }
    }
    

    
    return (
        <>
            <div className='mt-20 md:flex transition-all font-Pop' id='welcome-section'>
                <div className='p-2 pt-6 flex flex-col md:pt-44 md:pl-12 lg:pl-40 lg:pt-44 items-center md:items-start lg:w-1/2 transition-all '>
                    <div className=' md:p-10 flex flex-col items-center md:items-start '>
                        <p className='text-4xl text-[#00ADB5]  lg:text-7xl font-medium tracking-wide'>Hello, Welcome</p>
                        <p className='text-2xl lg:text-3xl mt-5 text-[#393E46]'>I am Rodney Sumpay</p>
                        <p className='text-1xl mt-5 text-[#393E46]'>I am excited to start my journey in the world of technology. My goal is to use my knowledge and skills to make a positive impact, solve difficult problems, and keep learning and improving as a professional.</p>
                        <div className='flex mt-10 gap-1'>
                            <a className='cursor-pointer' href='https://x.com/rodsmpy' onClick={(event) => handleLinkClick(event, 'https://x.com/rodsmpy')}>
                                <FaSquareXTwitter className='text-5xl' />
                            </a>

                            <a className='cursor-pointer' href='https://www.linkedin.com/in/rodney-sumpay-0881302b2/'  onClick={(event) => handleLinkClick(event, 'https://www.linkedin.com/in/rodney-sumpay-0881302b2/')}>
                                <FaLinkedin className='text-5xl text-[#0A66C2]' />
                            </a>

                            <a className='cursor-pointer' href='https://github.com/rodsmpy' onClick={(event) => handleLinkClick(event, 'https://github.com/rodsmpy')}>
                                <FaGithub className='text-5xl ' />
                            </a>

                            <a className='cursor-pointer' href='https://www.facebook.com/rodzxcz' onClick={(event) => handleLinkClick(event, 'https://www.facebook.com/rodzxcz')}>
                                <FaFacebookSquare className='text-5xl text-[#0A66C2] ' />
                            </a>





                        </div>
                        <a href="/Rodney_Sumpay_Resume.pdf" rel='noopener noreferrer' className='bg-[#00ADB5] w-44 mt-5 p-3 rounded-lg text-white font-medium text-center ' target='_blank'>
                        Download CV
                        </a>

                    </div>

                </div>
                <div className='p-2 md:px-10 pt-10 md:pt-44 lg:pt-44 flex justify-center lg:w-1/2 '>
                    <div className='w-72 h-80 rounded-3xl overflow-hidden bg-slate-400 lg:w-96 lg:h-96 lg:ml-14 transition-all shadow-2xl'>
                        <img src={profilepic} />

                    </div>
                </div>
            </div>
            <div className='mt-36 md:mt-72 font-Pop text-[#393E46]' id="skills-section" >
                <p className='text-center text-5xl text-[#00ADB5] font-medium '>SKILLS</p>

                <div className='flex flex-col w-4/5 m-auto gap-7 lg:flex-row mt-12 '>

                    <div className='py-12 px-6 w-full border rounded-3xl shadow-2xl border-slate-100'>
                        <p className='text-2xl  text-center text-[#00ADB5] font-medium'>Frontend</p>
                        <div className='flex flex-wrap gap-10 justify-center mt-16'>
                            <div className='flex flex-col items-center'>
                                <div className='w-24 h-24'>
                                    <img src={html} className='w-full h-full' />
                                </div>
                                <p className='mt-3 text-sm '>HTML</p>
                            </div>
                            <div className='flex flex-col items-center '>
                                <div className='w-24 h-24'>
                                    <img src={css} className='w-full h-full' />
                                </div>
                                <p className='mt-3 text-sm'>CSS</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <div className='w-24 h-24'>
                                    <img src={js} className='w-full h-full' />
                                </div>
                                <p className='mt-3 text-sm'>Javascript</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <div className='w-24 h-24'>
                                    <img src={bootstrap} className='w-full h-full' />
                                </div>
                                <p className='mt-3 text-sm'>Bootstrap</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <div className='w-24 h-24'>
                                    <img src={tailwind} className='w-full h-full' />
                                </div>
                                <p className='mt-3 text-sm'>Tailwind</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <div className='w-24 h-24'>
                                    <img src={science} className='w-full h-full' />
                                </div>
                                <p className='mt-3 text-sm'>React</p>
                            </div>
                        </div>
                    </div>




                    <div className='py-12 px-6 w-full border rounded-3xl shadow-2xl border-slate-100'>
                        <p className='text-2xl  text-center text-[#00ADB5] font-medium'>Backend</p>
                        <div className='flex  flex-wrap gap-10 justify-center mt-16'>
                            <div className='flex flex-col items-center'>
                                <div className='w-24 h-24'>
                                    <img src={mongo} className='w-full h-full' />
                                </div>
                                <p className='mt-3 text-sm'>MOngoDB</p>
                            </div>
                            <div className='flex flex-col items-center '>
                                <div className='w-24 h-24'>
                                    <img src={node} className='w-full h-full' />
                                </div>
                                <p className='mt-3 text-sm'>NodeJS</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <div className='w-24 h-24'>
                                    <img src={express} className='w-full h-full' />
                                </div>
                                <p className='mt-3 text-sm'>Express</p>
                            </div>
                        </div>

                    </div>


                    <div className='py-12 px-6 w-full border rounded-3xl shadow-2xl border-slate-100'>
                        <p className='text-2xl  text-center text-[#00ADB5] font-medium'>Design</p>
                        <div className='flex  flex-wrap gap-10 justify-center mt-16'>
                            <div className='flex flex-col items-center'>
                                <div className='w-24 h-24'>
                                    <img src={canva} className='w-full h-full' />
                                </div>
                                <p className='mt-3 text-sm'>Canva</p>
                            </div>
                            <div className='flex flex-col items-center '>
                                <div className='w-24 h-24'>
                                    <img src={figma} className='w-full h-full' />
                                </div>
                                <p className='mt-3 text-sm'>Figma</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='mt-44 font-Pop h-full' id="portfolio-section">
                <div>
                    <p className='text-center text-5xl text-[#00ADB5] font-medium' >Portfolio </p>
                </div>
                <div className='flex gap-x-40 justify-center mt-14'>
                    <span className={` font-medium text-lg cursor-pointer  text-[#00ADB5] p-2 rounded-lg ${showPortfolio === 1 ? ' underline decoration-2 underline-offset-8 decoration-[#00ADB5]' : ''}`} onClick={() => setShowPortfolio(1)}>Web Designs</span>
                    <span className={`font-medium text-lg cursor-pointer  text-[#00ADB5] p-2 rounded-lg ${showPortfolio === 2 ? 'underline decoration-2 underline-offset-8 decoration-[#00ADB5]' : ''}`} onClick={() => setShowPortfolio(2)} >Websites</span>

                </div>

                <div className={`w-6/7 m-auto mt-16 flex flex-col items-center flex-wrap md:flex-row md:justify-center gap-x-10 gap-y-16 ${showPortfolio === 1 ? 'block bg' : 'hidden'} text-[#393E46]`}>
                    <a href='https://www.figma.com/proto/KyQA2PDEkOunnDasjtCSKI/Revamp-Task-4?node-id=2-2&t=T0k92eyeqbvQsheP-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A2' onClick={(event) => handleLinkClick(event,'https://www.figma.com/proto/KyQA2PDEkOunnDasjtCSKI/Revamp-Task-4?node-id=2-2&t=T0k92eyeqbvQsheP-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A2')}>
                        <div className='w-96 shadow-2xl'>
                            <img src={smarthighway} />
                        </div>
                        <p className='text-center mt-6'>Smart Highway</p>
                    </a>
                    <a href='https://www.figma.com/proto/oJWCJqrFyb3CXRiAFEGeIM/Revamp-Task-10-Redesign?node-id=2-2&t=jL9KqK4RyoMqt7wW-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A2&show-proto-sidebar=1' onClick={(event) => handleLinkClick(event,'https://www.figma.com/proto/oJWCJqrFyb3CXRiAFEGeIM/Revamp-Task-10-Redesign?node-id=2-2&t=jL9KqK4RyoMqt7wW-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A2&show-proto-sidebar=1')}>
                        <div className='w-96 shadow-2xl'>
                            <img src={starproducer} />
                        </div>
                        <p className='text-center mt-6'>Star Producer</p>
                    </a>
                    <a href='https://www.figma.com/proto/dRtFpQVr2ZzLvmKtmPAl5A/Revamp-Task-13?node-id=0-3&t=W0WzBJEkIsZoR6tm-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=0%3A3' onClick={(event) => handleLinkClick(event,'https://www.figma.com/proto/dRtFpQVr2ZzLvmKtmPAl5A/Revamp-Task-13?node-id=0-3&t=W0WzBJEkIsZoR6tm-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=0%3A3')}>
                        <div className='w-96 border shadow-2xl '>
                            <img src={backyardlettuce} />
                        </div>
                        <p className='text-center mt-6'>Backyard Lettuce</p>
                    </a>
                    <a href='https://www.figma.com/proto/aEGakmsVP7H8nLiRhipDRu/Revamp-Task-12-Redesign?node-id=37-596&t=isFjkmJk3GngjoC9-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=37%3A596&show-proto-sidebar=1' onClick={(event) => handleLinkClick(event,'https://www.figma.com/proto/aEGakmsVP7H8nLiRhipDRu/Revamp-Task-12-Redesign?node-id=37-596&t=isFjkmJk3GngjoC9-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=37%3A596&show-proto-sidebar=1')}>
                        <div className='w-96 border shadow-2xl'>
                            <img src={heavenlydesserts} />
                        </div>
                        <p className='text-center mt-6'>Heavely Desserts</p>
                    </a>
                    <a href='https://www.figma.com/proto/WEFtWSCbP47o7SUorCifOQ/Revamp-Task-8---Redesign?node-id=1-2&t=HMzXxAXOJpxPAExA-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2' onClick={(event) => handleLinkClick(event,'https://www.figma.com/proto/WEFtWSCbP47o7SUorCifOQ/Revamp-Task-8---Redesign?node-id=1-2&t=HMzXxAXOJpxPAExA-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2')}>
                        <div className='w-96 border shadow-2xl'>
                            <img src={promocentral} />
                        </div>
                        <p className='text-center mt-6'>Promo Central</p>
                    </a>
                    <a href='https://www.figma.com/proto/3KeVx5UyZOfHb8FfnNNaIB/Revamp-Task-2?node-id=2-3&t=YzEUMWyUZXFMqBnN-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A3' onClick={(event) => handleLinkClick(event,'https://www.figma.com/proto/3KeVx5UyZOfHb8FfnNNaIB/Revamp-Task-2?node-id=2-3&t=YzEUMWyUZXFMqBnN-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A3')}>
                        <div className='w-96 border shadow-2xl'>
                            <img src={BBI} />
                        </div>
                        <p className='text-center mt-6'>BBI</p>
                    </a>
                    <a href='https://www.figma.com/proto/TnEsxkv803zjwZ7Gp1eap7/Revamp-Task-6?node-id=2-2&t=6C0usI1JNK0vzwKv-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A2' onClick={(event) => handleLinkClick(event,'https://www.figma.com/proto/TnEsxkv803zjwZ7Gp1eap7/Revamp-Task-6?node-id=2-2&t=6C0usI1JNK0vzwKv-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A2')}>
                        <div className='w-96 border shadow-2xl'>
                            <img src={cheesu} />
                        </div>
                        <p className='text-center mt-6'>Cheesu</p>
                    </a>

                    <a href='https://www.figma.com/proto/xJrXaHHpzOv7RlI4v9Gtxj/Revamp-Task-5?node-id=1-2&t=CJ9n8gE2OiPnzWaC-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2' onClick={(event) => handleLinkClick(event,'https://www.figma.com/proto/xJrXaHHpzOv7RlI4v9Gtxj/Revamp-Task-5?node-id=1-2&t=CJ9n8gE2OiPnzWaC-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2')}>
                        <div className='w-96 border shadow-2xl'>
                            <img src={iskin} />
                        </div>
                        <p className='text-center mt-6'>iSkin</p>
                    </a>
                    <a href='https://www.figma.com/proto/juyhAYc87J3sNCtyWK3gyu/Revamp-Task-9---Redesign?node-id=0-3&t=So1GSUDl1QMeW3X2-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=0%3A3' onClick={(event) => handleLinkClick(event,'https://www.figma.com/proto/juyhAYc87J3sNCtyWK3gyu/Revamp-Task-9---Redesign?node-id=0-3&t=So1GSUDl1QMeW3X2-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=0%3A3')}>
                        <div className='w-96 border shadow-2xl'>
                            <img src={couchwasabi} />
                        </div>
                        <p className='text-center mt-6'>Couch Wasabi</p>
                    </a>
                    <a href='https://www.figma.com/proto/5Pmb48e8A7wBnvCfy0YNZk/Revamp-Task-11-Redesign?node-id=1-14&t=qfJ1F9ywxhvm9jcI-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=26%3A1693' onClick={(event) => handleLinkClick(event,'https://www.figma.com/proto/5Pmb48e8A7wBnvCfy0YNZk/Revamp-Task-11-Redesign?node-id=1-14&t=qfJ1F9ywxhvm9jcI-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=26%3A1693')}>
                        <div className='w-96 border shadow-2xl'>
                            <img src={contis} />
                        </div>
                        <p className='text-center mt-6'>Contis</p>
                    </a>
                    <a href='https://www.figma.com/proto/o4siEEh189DB75nuNyOXkr/Revamp-Task-3?node-id=1-3&t=HlbSB6hXQOFLV5Mc-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A3' onClick={(event) => handleLinkClick(event,'https://www.figma.com/proto/o4siEEh189DB75nuNyOXkr/Revamp-Task-3?node-id=1-3&t=HlbSB6hXQOFLV5Mc-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A3')}>
                        <div className='w-96 border shadow-2xl'>
                            <img src={rythm} />
                        </div>
                        <p className='text-center mt-6'>Rythm</p>
                    </a>

                    <a href='https://www.figma.com/proto/3E9xZ3AKVhnBLN4JISsdQR/Revamp-Task-1?node-id=3-14&starting-point-node-id=3%3A14' onClick={(event) => handleLinkClick(event,'https://www.figma.com/proto/3E9xZ3AKVhnBLN4JISsdQR/Revamp-Task-1?node-id=3-14&starting-point-node-id=3%3A14')} >
                        <div className='w-96 border shadow-2xl'>
                            <img src={zam} />
                        </div>
                        <p className='text-center mt-6'>Zam</p>
                    </a>



                </div>

                <div className={`${showPortfolio === 2 ? 'block' : 'hidden'} w-6/7 m-auto mt-16 flex flex-col items-center flex-wrap md:flex-row md:justify-center gap-x-10 gap-y-16`}>
                    <div >
                        <div className='w-60 h-60 border shadow-2xl rounded-2xl overflow-hidden'>
                            <img src={catbook} className='w-full h-full' />
                        </div>
                        <p className='text-center mt-6'>CatBook</p>
                    </div>
                    <div >
                        <div className='w-60 border h-60 shadow-2xl rounded-2xl overflow-hidden'>
                            <img src={trailsnaplogo} className='w-full h-full' />
                        </div>
                        <p className='text-center mt-6'>Trailsnap</p>
                    </div>

                </div>
            </div>


            <div className=' mt-44 font-Pop flex flex-col items-center text-[#393E46]' id='contact-section'>
                <p className=' text-center text-5xl text-[#00ADB5] font-medium  '>Contact Me</p>
                <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-11 mt-14 min-w-96 md:w-1/3'>
                    <div>
                        <input type="text" name='from_name' placeholder='Name:' className='border-2 p-2 w-full rounded-md' />
                    </div>

                    <div>
                        <input type="email" name='user_email' placeholder='Email:' className='border-2 p-2 w-full rounded-md ' />
                    </div>

                    <div>
                        <textarea name="message"  placeholder='Message:' className='border-2 p-2 w-full h-36 rounded-md'
                        ></textarea>
                    </div>
                    <input type="submit" className='bg-[#00ADB5] w-48 text-white m-auto p-2 rounded-lg active:opacity-75 cursor-pointer' value="Send"   />
                </form>
            </div>
            <div className='mt-36 p-10 bg-[#393E46] flex justify-center flex-col gap-10 md:flex-row md:gap-20 lg:gap-56 font-Pop'>
                <div>
                    <p className='text-2xl text-white'>Find Me On</p>
                    <div className='flex gap-2 mt-5'>
                        <a href='https://x.com/rodsmpy' onClick={(event) => handleLinkClick(event,'https://x.com/rodsmpy')}>
                            <FaSquareXTwitter className='text-3xl text-white' />
                        </a>
                        
                        <a href='https://www.linkedin.com/in/rodney-sumpay-0881302b2/' onClick={(event) => handleLinkClick(event,'https://www.linkedin.com/in/rodney-sumpay-0881302b2/')}>
                            <FaLinkedin className='text-3xl text-white' />
                        </a>

                        <a href='https://www.facebook.com/rodzxcz' onClick={(event) => handleLinkClick(event,'https://www.facebook.com/rodzxcz')}>
                            <FaFacebookSquare className='text-3xl text-white ' />
                        </a>



                    </div>
                </div>
                <div>
                    <p className='text-2xl text-white'>Contact Details</p>
                    <div className='flex gap-5 mt-5'>
                        <IoIosCall className='text-3xl text-white' />
                        <p className='text-white'>09602845524</p>
                    </div>

                    <div className='flex gap-5 mt-2'>
                        <MdOutlineEmail className='text-3xl text-white' />
                        <p className='text-white'>rodneypiojosumpay@gmail.com</p>
                    </div>
                </div>



            </div>

        </>
    )
}



{/* <div className="pt-28 pl-5 md:pl-10 lg:flex justify-center">
<div className=' lg:w-1/2 lg:pt-48 lg:pl-0'>
    <p className="text-4xl text-[#76ABAE] font-medium md:text-5xl">Hello, Welcome</p>
    <p className="text-2xl pt-2 text-[#31363F] md:text-3xl">I am Rodney Sumpay</p>
    <p className="pt-2">I am excited to start my journey in the world of technology. My goal is to use my knowledge and skills to make a positive impact, solve difficult problems, and keep learning and improving as a professional.</p>
</div>
<div className='mr-7 w-80 h-80 mt-4 rounded-full overflow-hidden bg-black md:mt-14 md:w-96 md:h-96 md:ml-44 transition-all lg:ml-36 '>
    <img src={profilepic} alt=""/>
</div>

</div> */}