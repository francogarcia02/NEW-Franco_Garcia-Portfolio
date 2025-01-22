const SkillsList = ({title, array}) => {
    return(
        <div className="w-full flex flex-wrap text-center lg:text-start lg:flex-nowrap justify-center items-center lg:justify-start lg:items-center mt-10 mb-10 gap-6">
            <h1 className="uppercase font-bold text-2xl w-60">{title}</h1>
            <div className="flex flex-wrap lg:flex-nowrap justify-center items-center lg:justify-start lg:items-center gap-10">
                {array.map(item => (
                    <div className='flex flex-col p-5 justify-center items-center bg-[#101010] rounded-lg hover:bg-[#202020]'>
                        {item.icon}
                        <p className="font-bold">
                            {item.title}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SkillsList