import { DiJava } from "react-icons/di"
import { SiAstro, SiMysql, SiPhp, SiTailwindcss, SiVite } from "react-icons/si"
import Profile from "../../images/Profile.png"

function Banner(){
    return(
        <section className="bg-gray-950/5 w-full h-[95dvh] flex justify-center">

            <div className="w-full h-[95dvh] max-w-7xl mx-auto grid grid-cols-8 grid-rows-8 place-content-center absolute">
                <div className="bg-gradient-to-b from-black/0 from-10% via-black/0 to-black h-full w-full relative col-start-1 -col-end-1 row-start-1 row-end-8 z-10"></div>
                <div className="bg-jazzberry-jam-600 opacity-35 rounded-full h-40 w-40 relative col-start-1 -col-end-1 md:col-start-3 md:col-end-7 row-start-2 row-end-8 -z-20 object-[center_20%] blur duration-900 -right-90 top-40 -translate-x-1/2"></div>
                <div className="bg-jazzberry-jam-600 opacity-35 rounded-full h-32 w-32 relative col-start-1 -col-end-1 md:col-start-3 md:col-end-7 row-start-2 row-end-8 -z-20 object-[center_20%] blur duration-900 right-60 top-60 translate-x-1/2"></div>
                <div className="bg-jazzberry-jam-600 opacity-35 rounded-full h-60 w-60 relative col-start-1 -col-end-1 md:col-start-3 md:col-end-7 row-start-2 row-end-8 -z-20 object-[center_20%] blur duration-900 right-10 translate-x-1/2"></div>
                <img src={Profile} alt="" className="object-cover bg-center h-full w-full relative col-start-1 -col-end-1 md:col-start-3 md:col-end-7 row-start-2 row-end-8 -z-10 object-[center_20%]"/>
                
                <div className="col-start-1 -col-end-1 row-start-4 row-end-6">
                    
                </div>
                <div className="flex flex-col justify-center items-center col-start-1 -col-end-1 row-start-6 row-end-8 py-2 z-20 gap-2">
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-7xl gradient-text-t shadow-text font-semibold text-center">Carlos Sánchez</p>
                        <p className="text-4xl gradient-text-t font-medium animate-pulse">Web Developer</p>
                    </div>
                    
                </div>

                <div className="bg-black col-start-1 -col-end-1 row-start-8 row-end-9 flex justify-center items-center gap-4 md:gap-8 lg:gap-12">
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