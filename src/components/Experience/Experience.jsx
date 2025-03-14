import { useState } from "react"
import ExperienceCard from "./ExperienceCard"
import {
    SiNextdotjs,
    SiReact,
    SiTailwindcss,
    SiTypescript,
    SiCss3,
    SiHtml5,
    SiMui,
    SiJavascript,
    SiBootstrap
  } from 'react-icons/si';

const Experience = () => {
    const [width, setWidth] = useState(800)
    
    window.addEventListener("resize", () => {
        setWidth(window.innerWidth)
    });

    const data = [
        {
            title: 'WorkIn',
            job: 'Front End developer',
            type: 'hibryd',
            description: [
                'I developed solutions for a business software built with ReactJS',
                'It was my first job and the one where I learned the most',
                'The job was on-site and part-time, from Monday to Friday',
            ],
            initialDate: 'August 2021',
            endDate: 'September 2023',
            skillsIcon: [
                {
                    icon: <SiReact className="text-2xl hover:text-[#FF6347]"/>,
                    title: 'React'
                },
                {
                    icon: <SiJavascript className="text-2xl hover:text-[#FF6347]"/>,
                    title: 'JavaScript'
                },
                {
                    icon: <SiBootstrap className="text-2xl hover:text-[#FF6347]"/>,
                    title: 'Bootstrap'
                },
                {
                    icon: <SiMui className="text-2xl hover:text-[#FF6347]"/>,
                    title: 'Material UI'
                }
            ]
        },
        {
            title: 'Facill App',
            job: 'Front End developer',
            type: 'remote',
            description: [
                'Collaborated on the development and maintenance of the frontend of a business management software',
                'Collaborated on the implementation of new features and improvements to the user interface to optimize the customer experience',
                'Technologies such as React and Material UI were used to create modern and responsive interfaces'
            ],
            initialDate: 'August 2024',
            endDate: 'October 2024',
            skillsIcon: [
                {
                    icon: <SiReact className="text-2xl hover:text-[#FF6347]"/>,
                    title: 'React'
                },
                {
                    icon: <SiTypescript className="text-2xl hover:text-[#FF6347]"/>,
                    title: 'TypeScript'
                },
                {
                    icon: <SiTailwindcss className="text-2xl hover:text-[#FF6347]"/>,
                    title: 'Tailwind CSS'
                },
                {
                    icon: <SiMui className="text-2xl hover:text-[#FF6347]"/>,
                    title: 'Material UI'
                }
            ]
        },
        {
            title: 'facill ecommerce',
            job: 'Front End developer',
            type: 'remote',
            description: [
                'In charge of the development and maintenance of the frontend of a video sales website',
                'Implemented technologies and functionalities to improve the user interface and optimize the customer experience',
                'Technologies such as NextJS, TypeScript and Material UI were used to create modern and responsive interfaces'
            ],
            initialDate: 'October 2024',
            endDate: 'November 2024',
            skillsIcon: [
                {
                    icon: <SiNextdotjs className="text-2xl hover:text-[#FF6347]"/>,
                    title: 'Next JS'
                },
                {
                    icon: <SiTypescript className="text-2xl hover:text-[#FF6347]"/>,
                    title: 'TypeScript'
                },
                {
                    icon: <SiMui className="text-2xl hover:text-[#FF6347]"/>,
                    title: 'Material UI'
                },
                {
                    icon: <SiTailwindcss className="text-2xl hover:text-[#FF6347]"/>,
                    title: 'Tailwind CSS'
                }
            ]
        },
        {
            title: 'Freelancer on UpWork',
            job: 'Front End developer',
            type: 'remote',
            description: [
                'I worked as a freelancer on the platform called UpWork. The tasks I completed included:',
                'Bug fixing in TypeScript and Next.js code',
                'Expansion of a VPN advertising website',
                'Bug fixing on a VPN advertising website',
                'Modifications to a personal website',
                'All my projects received 5-star ratings'
            ],
            initialDate: 'November 2024',
            endDate: 'Actually',
            skillsIcon: [
                {
                    icon: <SiReact className="text-2xl hover:text-[#FF6347]"/>,
                    title: 'React'
                },
                {
                    icon: <SiNextdotjs className="text-2xl hover:text-[#FF6347]"/>,
                    title: 'Next JS'
                },
                {
                    icon: <SiTypescript className="text-2xl hover:text-[#FF6347]"/>,
                    title: 'TypeScript'
                },
                {
                    icon: <SiMui className="text-2xl hover:text-[#FF6347]"/>,
                    title: 'Material UI'
                },
                {
                    icon: <SiTailwindcss className="text-2xl hover:text-[#FF6347]"/>,
                    title: 'Tailwind CSS'
                },
                {
                    icon: <SiHtml5 className="text-2xl hover:text-[#FF6347]"/>,
                    title: 'HTML5'
                },
                {
                    icon: <SiCss3 className="text-2xl hover:text-[#FF6347]"/>,
                    title: 'CSS3'
                }
            ]
        },
    ]
    
    return(
        <section id="experience" className="text-white pt-20 lg:pt-48"> 
            <div className="flex justify-start items-end">
                <h1 className="text-5xl lg:text-6xl">My Work</h1>
                <p className="font-bold text-6xl text-[#FF6347]">.</p>
            </div>
            {width > 780 ?
            <div className="grid grid-cols-[1fr_auto_1fr] justify-between gap-6 mt-20 mb-10">
                <div>
                {data.map((item, index) =>(
                    <>
                    {index % 2 === 0 ?
                        <div className="mb-96">
                            <ExperienceCard key={index} item={item} index={index}/>
                        </div>
                        :
                        <></>
                    }
                    </>
                ))}
                </div>
                <div className="flex flex-col justify-between items-center w-1 h-full bg-white">
                    <div className="w-4 h-4 rounded-full bg-white"></div>
                    <div className="w-4 h-4 rounded-full bg-white"></div>
                </div>
                <div>
                {data.map((item, index) =>(
                    <>
                    {index % 2 === 0 ?
                        <></>
                        :
                        <div className="mt-96">
                            <ExperienceCard key={index} item={item} index={index}/>
                        </div>
                    }
                    </>
                ))}
                </div>
            </div>
            :
            <div className="flex flex-col mt-20 mb-10 gap-10">
                {data.map((item, index)=>(
                    <>
                    <ExperienceCard key={index} item={item} index={index}/>
                    <div className="w-full h-1 bg-white"></div>
                    </>
                ))}
            </div>
            }
            
        </section>
    )
}

export default Experience