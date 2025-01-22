import {
    SiWhatsapp,
    SiLinkedin,
    SiGmail,
    SiReact,
    SiJavascript,
    SiTailwindcss
  } from 'react-icons/si';

const Contact = () => {
    return(
        <section id='contact' className="w-full text-white pt-20 lg:pt-48 pb-5">
            <div className="flex justify-start items-end w-full mb-10">
                <h1 className="text-5xl lg:text-6xl">Contact</h1>
                <p className="font-bold text-6xl text-[#FF6347]">.</p>
            </div>
            <div className="flex flex-col gap-4 pb-5">
                <div className="flex gap-2 justify-start items-center">
                    <SiWhatsapp/>
                    <a className="text-xl text-[#FF6347]" href="https://wa.me/3512290552">+54 9 351 229 0552</a>
                </div>
                <div className="flex gap-2 justify-start items-center">
                    <SiLinkedin/>
                    <a className="text-xl text-[#FF6347]" href="https://www.linkedin.com/in/francogarcia02fcg">linkedin/fran-garcia</a>
                </div>
                <div className="flex gap-2 justify-start items-center">
                    <SiGmail/>
                    <a className="text-xl text-[#FF6347]" href="mailto:francoalbertogarcia2017@gmail.com">francoalbertogarcia2017@gmail.com</a>
                </div>
            </div>
            <div>
                <h1 className='font-bold text-xl mt-20 mb-4'>Portfolio created with</h1>
                <div className='flex gap-4'>
                    <SiReact className='text-3xl hover:text-[#FF6347]'/>
                    <SiJavascript className='text-3xl hover:text-[#FF6347]'/>
                    <SiTailwindcss className='text-3xl hover:text-[#FF6347]'/>
                </div>
            </div>
        </section>
    )
}

export default Contact