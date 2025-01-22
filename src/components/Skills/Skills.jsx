import {
    SiBootstrap,
    SiFigma,
    SiFirebase,
    SiGithub,
    SiJavascript,
    SiNextdotjs,
    SiReact,
    SiTailwindcss,
    SiTypescript,
    SiPython,
    SiCss3,
    SiNodedotjs,
    SiExpress,
    SiSqlite,
    SiSocketdotio,
    SiHtml5,
    SiMui
  } from 'react-icons/si';

import SkillsList from './SkillsList';

const Skills = () => {
    
    const programmingLanguages = [
        {
            icon: <SiJavascript className='pb-2 text-6xl text-[#FF6347]'/>,
            title: 'JavaScript'
        },
        {
            icon: <SiTypescript className='pb-2 text-6xl text-[#FF6347]'/>,
            title: 'TypeScript'
        },
        {
            icon: <SiPython className='pb-2 text-6xl text-[#FF6347]'/>,
            title: 'Python'
        },
    ];

    const markupAndStyling = [
        {
            icon: <SiHtml5 className='pb-2 text-6xl text-[#FF6347]'/>,
            title: 'HTML5'
        },
        {
            icon: <SiCss3 className='pb-2 text-6xl text-[#FF6347]'/>,
            title: 'CSS3'
        }
    ];
    
    const stylingFrameworks = [
        {
            icon: <SiMui className='pb-2 text-6xl text-[#FF6347]'/>,
            title: 'Material UI'
        },
        {
            icon: <SiTailwindcss className='pb-2 text-6xl text-[#FF6347]'/>,
            title: 'Tailwind'
        },
        {
            icon: <SiBootstrap className='pb-2 text-6xl text-[#FF6347]'/>,
            title: 'Bootstrap'
        },
    ];
    
    const frontendLibraries = [
        {
            icon: <SiReact className='pb-2 text-6xl text-[#FF6347]'/>,
            title: 'React'
        },
        {
            icon: <SiNextdotjs className='pb-2 text-6xl text-[#FF6347]'/>,
            title: 'NextJS'
        }
    ];
    
    const backendTechnologies = [
        {
            icon: <SiNodedotjs className='pb-2 text-6xl text-[#FF6347]'/>,
            title: 'Node'
        },
        {
            icon: <SiExpress className='pb-2 text-6xl text-[#FF6347]'/>,
            title: 'Express'
        },
        {
            icon: <SiSocketdotio className='pb-2 text-6xl text-[#FF6347]'/>,
            title: 'Socket IO'
        }
    ];
    
    const databases = [
        {
            icon: <SiSqlite className='pb-2 text-6xl text-[#FF6347]'/>,
            title: 'SQLite'
        },
        {
            icon: <SiFirebase className='pb-2 text-6xl text-[#FF6347]'/>,
            title: 'Firebase'
        }
    ];
    
    const tools = [
        {
            icon: <SiGithub className='pb-2 text-6xl text-[#FF6347]'/>,
            title: 'GitHub'
        },
        {
            icon: <SiFigma className='pb-2 text-6xl text-[#FF6347]'/>,
            title: 'Figma'
        }
    ]

    return(
        <section id='skills' className="w-full text-white pt-20 lg:pt-48">
            <div className="flex justify-start items-end w-full mb-10">
                <h1 className="text-5xl lg:text-6xl">My Skills</h1>
                <p className="font-bold text-6xl text-[#FF6347]">.</p>
            </div>
            <div className="w-full flex flex-col justify-center items-start">
                <SkillsList title={'Programming Languages'} array={programmingLanguages}/>
                <SkillsList title={'FrontEnd Frameworks'} array={frontendLibraries}/>
                <SkillsList title={'Markup And Styling'} array={markupAndStyling}/>
                <SkillsList title={'Styling Frameworks'} array={stylingFrameworks}/>
                <SkillsList title={'Backend Technologies'} array={backendTechnologies}/>
                <SkillsList title={'Databases'} array={databases}/>
                <SkillsList title={'Tools'} array={tools}/>
            </div>
        </section>
    )
}

export default Skills