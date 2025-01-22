const ExperienceCard = ({item, index}) => {
    const {title, description, job, skillsIcon, initialDate, endDate} = item

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
        </div>
    )
}

export default ExperienceCard