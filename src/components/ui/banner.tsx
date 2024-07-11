import { DiJava } from "react-icons/di"
import { SiAstro, SiMysql, SiPhp, SiTailwindcss, SiVite } from "react-icons/si"
import Profile from "../../images/Profile.png"

function Banner(){
    return(
        <section className="bg-gray-950/5 w-full h-[95dvh] flex justify-center">

            <div className="w-full h-[95dvh] max-w-7xl mx-auto grid grid-cols-8 grid-rows-8 place-content-center absolute">
                <div className="bg-gradient-to-b from-black/0 from-10% via-black/0 to-black h-full w-full relative col-start-1 -col-end-1 row-start-1 row-end-8 z-10"></div>
                <img src={Profile} alt="" className="object-cover bg-center h-full w-full relative col-start-1 -col-end-1 md:col-start-3 md:col-end-7 row-start-2 row-end-8 -z-10 object-[center_20%]"/>
                
                <div className="col-start-1 -col-end-1 row-start-4 row-end-6">
                    
                </div>
                <div className="flex flex-col justify-center items-center col-start-1 -col-end-1 row-start-6 row-end-8 py-2 z-20 gap-2">
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-7xl gradient-text-t shadow-text font-semibold">Carlos Sánchez</p>
                        <p className="text-4xl gradient-text-t font-medium animate-pulse">Web Developer</p>
                    </div>

                    <a href="#" className="bg-jazzberry-jam-800 rounded-lg hover:bg-chocolate-800 hover:translate-y-0.5 duration-200 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white focus:ring-4 focus:outline-none">
                        <div className='w-full flex justify-center items-center gap-2'>
                        Download CV
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                            </svg>
                        </div>
                    </a>
                    
                </div>

                <div className="col-start-1 -col-end-1 row-start-8 row-end-9 flex justify-center items-center gap-4 md:gap-8 lg:gap-12">
                    <SiVite className="w-10 h-10"></SiVite>
                    <SiTailwindcss className="w-10 h-10"></SiTailwindcss>
                    <SiPhp className="w-10 h-10"></SiPhp>
                    <SiMysql className="w-10 h-10"></SiMysql>
                    <DiJava className="w-10 h-10"></DiJava>
                    <SiAstro className="w-10 h-10"></SiAstro>
                </div>
                
            </div>
        </section>
    )
}
export default Banner