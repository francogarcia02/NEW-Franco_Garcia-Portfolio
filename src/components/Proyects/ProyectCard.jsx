import GitHubIcon from '@mui/icons-material/GitHub';

import { useState } from 'react';

import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const ProyectCard = ({item}) => {
    const [side, setSide] = useState(true)
    const [width, setWidth] = useState()
    
    window.addEventListener("resize", () => {
        setWidth(window.innerWidth)
    });

    const {img, title, description, skillsIcon, link, type, frontSkillsIcon, backSkillsIcon, linkPage} = item
    
    return(
        <article className="relative w-full border border-gray-400 rounded-lg bg-[#101010] p-4">
            <h1 className="text-xl uppercase font-bold mb-5">{title}</h1>
            {linkPage ? 
            <div className="absolute top-2 right-2 w-56">
                {width > 800 ?
                <>
                <img
                    src={img}
                    className="w-full rounded-lg border border-gray-400"
                    alt="img-experience"
                />

                <a
                    href={linkPage} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg text-white font-semibold"
                >
                    Visit Site 
                    <OpenInNewIcon/>
                </a>
                </>
                :
                <></>
                }
                
            </div>
            :
            <>
            {width > 780 ?
            <img src={img} className="absolute top-2 right-2 w-56 rounded-lg border border-gray-400" alt="img-experience"/>
            :
            <></>
            }
            </>
            }
            <div className="lg:w-1/2">
                <p>{description}</p>
            </div>
            <div className="flex justify-between items-center mt-10">
                {type ?
                <div>
                    <div className='flex justify-start items-center gap-4 mb-3'>
                        <button onClick={()=>setSide(true)} className={`text-xs font-bold ${side ? 'text-[#FF6347]':''}`}>FRONT</button>
                        <div className='flex'>
                            <KeyboardArrowLeftIcon fontSize='small' className={`${side ? 'text-[#FF6347]' : ''}`}/>
                            <KeyboardArrowRightIcon fontSize='small' className={`${side ? '' : 'text-[#FF6347]'}`}/>
                        </div>
                        <button onClick={()=>setSide(false)} className={`text-xs font-bold ${side ? '':'text-[#FF6347]'}`}>BACK</button>
                    </div>
                    {side ? 
                    <div className="flex items-center gap-4">
                        {frontSkillsIcon.map((item, index) => (
                            <div
                            key={index}
                            className="flex items-center group transition-all duration-300"
                            >
                            {item.icon}
                            <p
                                className="ml-2 opacity-0 max-w-0 group-hover:opacity-100 group-hover:max-w-xs group-hover:ml-4 transition-all duration-300 overflow-hidden whitespace-nowrap text-gray-500"
                            >
                                {item.title}
                            </p>
                            </div>
                        ))}
                    </div>
                    :
                    <div className="flex items-center gap-4">
                        {backSkillsIcon.map((item, index) => (
                            <div
                            key={index}
                            className="flex items-center group transition-all duration-300"
                            >
                            {item.icon}
                            <p
                                className="ml-2 opacity-0 max-w-0 group-hover:opacity-100 group-hover:max-w-xs group-hover:ml-4 transition-all duration-300 overflow-hidden whitespace-nowrap text-gray-500"
                            >
                                {item.title}
                            </p>
                            </div>
                        ))}
                    </div>
                    }
                </div>
                :
                <div className="flex items-center gap-4">
                    {skillsIcon.map((item, index) => (
                        <div
                        key={index}
                        className="flex items-center group transition-all duration-300"
                        >
                        {item.icon}
                        <p
                            className="ml-2 opacity-0 max-w-0 group-hover:opacity-100 group-hover:max-w-xs group-hover:ml-4 transition-all duration-300 overflow-hidden whitespace-nowrap text-gray-500"
                        >
                            {item.title}
                        </p>
                        </div>
                    ))}
                </div>
                }       
                <a href={link}>
                    <GitHubIcon
                    className="text-white hover:text-[#383838] transition-colors duration-150 ease-in-out !important"
                    fontSize="large"
                    />
                </a>
            </div>
        </article>
    )
}

export default ProyectCard