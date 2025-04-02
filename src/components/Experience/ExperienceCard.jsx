import { useState } from "react"
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const ExperienceCard = ({item, index}) => {
    const [side, setSide] = useState(true)
    
    const {title, description, job, skillsIcon, initialDate, endDate, full, skillsFrontIcon, skillsBackIcon} = item


    return(
        <div className="text-white w-full flex flex-col gap-2">
            <h1 className="text-2xl p-2 uppercase font-bold">{title}</h1>
            <div className="flex gap-2 ps-2">
                <p className="text-[#FF6347]">{initialDate}</p>
                <p>to</p>
                <p className="text-[#FF6347]">{endDate}</p>
            </div>
            <div className="flex gap-2 ps-2">
                <p className="text-[#FF6347]">{job}</p>
            </div>
            <div className="flex flex-col p-2 gap-2 mt-5">
                {description.map(item=>(
                    <p>{item}</p>
                ))}
            </div>
            {full ?
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
                    {skillsFrontIcon.map((item, index) => (
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
                    {skillsBackIcon.map((item, index) => (
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
            <div className="flex flex-wrap items-center gap-4 p-2">
                {skillsIcon.map((item, index) => (
                    <div
                    key={index}
                    className="flex items-center group transition-all duration-300"
                    >
                    {/* Imagen */}
                    {item.icon}
                    {/* Etiqueta <p>, mostrando solo el nombre del archivo */}
                    <p
                        className="ml-1 opacity-0 max-w-0 group-hover:opacity-100 group-hover:max-w-xs group-hover:ml-1 transition-all duration-300 overflow-hidden whitespace-nowrap text-gray-500"
                    >
                        {item.title}
                    </p>
                    </div>
                ))}
                
            </div>
            }
            
        </div>
    )
}

export default ExperienceCard