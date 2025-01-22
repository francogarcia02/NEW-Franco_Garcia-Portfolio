import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Presentation = () => {
    return(
        <section id="presentation" className="pt-20 lg:pt-48 mb-2 w-full flex flex-col justify-center items-start gap-10">
            <div className="flex flex-col justify-center items-start gap-4 w-full">
                <h1 className="text-5xl lg:text-6xl text-white">Franco Garcia</h1>
                <h4 className="text-xl text-[#FF6347]">FullStack Developer</h4>
                <h4 className="text-xl text-white">Web developer specialized in Next.js with React, JavaScript, and TypeScript</h4>
            </div>
            <div className="flex p-4 ps-0 gap-2">
                <a className="w-full p-2 font-bold text-white hover:text-[#FF6347] border border-white hover:border-[#FF6347] rounded-lg" href="assets/CV/FrancoGarcia-CV.pdf">Curriculum Vitae</a>
                <a href='https://github.com/francogarcia02'>
                <GitHubIcon className={`text-white hover:text-[#FF6347]`} fontSize="large"/>
                </a>
                <a href='https://www.linkedin.com/in/francogarcia02fcg/'>
                <LinkedInIcon className={`text-white hover:text-[#FF6347]`} fontSize="large"/>    
                </a>                
            </div>
        </section>
    )
}

export default Presentation