import {
    SiBootstrap,
    SiFirebase,
    SiJavascript,
    SiNextdotjs,
    SiReact,
    SiTailwindcss,
    SiTypescript,
    SiCss3,
    SiNodedotjs,
    SiExpress,
    SiSqlite,
    SiSocketdotio,
    SiMui
  } from 'react-icons/si';

import ProyectCard from "./ProyectCard"

const Proyects = () => {
    
    const data = [
        {
            img: 'assets/img/portfolio/LINKUP.png',
            type: 'fullstack',
            linkPage: 'https://live-chat-client-steel.vercel.app/',
            title: 'linkup',
            description: 'Real-time chat dedicated to connecting users from all over the world, connected to a database with requests handled through a custom API',
            frontSkillsIcon: [
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
            ],
            backSkillsIcon:[
                {
                    icon: <SiNodedotjs className="text-2xl hover:text-[#FF6347]"/>,
                    title: 'Node JS'
                },
                {
                    icon: <SiExpress className="text-2xl hover:text-[#FF6347]"/>,
                    title: 'Express'
                },
                {
                    icon: <SiSocketdotio className="text-2xl hover:text-[#FF6347]"/>,
                    title: 'Socket IO'
                },
                {
                    icon: <SiSqlite className="text-2xl hover:text-[#FF6347]"/>,
                    title: 'SQLite'
                },
            ],
            link: 'https://github.com/francogarcia02/LiveChat'
        },
        {
            img: 'assets/img/portfolio/BIMAX-REARMADO.png',
            title: 'bimax page',
            description: 'Website developed as a team simulating the BIMAX portal, with a user system integrating a database.',
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
                },
            ],
            link: 'https://github.com/Qarola/inmobiliaria-bonpland-id-for-ideas'
        },
        {
            img: 'assets/img/portfolio/MP-ECOMMERCE.png',
            title: 'ecommerce with mercado pago',
            description: 'Web application developed for an electronics sales company with a payment gateway.',
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
                    icon: <SiCss3 className="text-2xl hover:text-[#FF6347]"/>,
                    title: 'CSS3'
                },
                {
                    icon: <SiBootstrap className="text-2xl hover:text-[#FF6347]"/>,
                    title: 'Bootstrap'
                },
                {
                    icon: <SiFirebase className="text-2xl hover:text-[#FF6347]"/>,
                    title: 'Firebase'
                },
            ],
            link: 'https://github.com/francogarcia02/React-Ecommerce_MP'
        },
        {
            img: 'assets/img/portfolio/AVENTURAS-VIAJERAS.png',
            title: 'turism web page',
            description: 'Web application developed for a tourism company located in southern Argentina',
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
                    icon: <SiCss3 className="text-2xl hover:text-[#FF6347]"/>,
                    title: 'CSS3'
                },
                {
                    icon: <SiBootstrap className="text-2xl hover:text-[#FF6347]"/>,
                    title: 'Bootstrap'
                },
            ],
            link: 'https://github.com/francogarcia02/React-AventurasViajeras'
        },
        {
            img: 'assets/img/portfolio/TASKING-PAGE.png',
            title: 'tasking page',
            description: 'Task page with Material UI',
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
                    icon: <SiCss3 className="text-2xl hover:text-[#FF6347]"/>,
                    title: 'CSS3'
                },
                {
                    icon: <SiBootstrap className="text-2xl hover:text-[#FF6347]"/>,
                    title: 'Bootstrap'
                },
                {
                    icon: <SiMui className="text-2xl hover:text-[#FF6347]"/>,
                    title: 'Material UI'
                },
            ],
            link: 'https://github.com/francogarcia02/React-OpenWeatherMap'
        },
        {
            img: 'assets/img/portfolio/WEATHER-PAGE.png',
            title: 'weather page',
            description: 'React app dedicated to weather forecasting with API integration',
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
                    icon: <SiCss3 className="text-2xl hover:text-[#FF6347]"/>,
                    title: 'CSS3'
                },
                {
                    icon: <SiBootstrap className="text-2xl hover:text-[#FF6347]"/>,
                    title: 'Bootstrap'
                },
            ],
            link: 'https://github.com/francogarcia02/React-OpenWeatherMap'
        },
    ]
    
    return(
        <section id="proyects" className="pt-20 lg:pt-48 text-white"> 
            <div className="flex justify-start items-end">
                <h1 className="text-5xl lg:text-6xl">My Proyects</h1>
                <p className="font-bold text-6xl text-[#FF6347]">.</p>
            </div>
            <div className="flex flex-wrap gap-4 mt-20">
                {data.map(item =>(
                    <ProyectCard item={item}/>
                ))}
            </div>
        </section>
    )
}

export default Proyects