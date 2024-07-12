import Banner from "../components/ui/banner"
import { FaWhatsapp } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa6"
import Card from "../components/ui/cards"
import { data } from "../data/projects"
import { data_skill } from "../data/skills"
import { data_soft_skill } from "../data/soft_skills"
function Home() {
  console.log(data_skill)
  return (
    <>
      <Banner></Banner>

      <section id="info" className="h-full">
        <div className="mx-auto max-w-7xl h-full flex flex-col justify-center items-center rounded-md py-4 px-4 lg:px-0">

          <div className="h-full md:w-full flex flex-col md:flex-row justify-center items-center rounded-md">

            <div className="w-full lg:w-1/3 gradient-border animate-pulse h-full rounded-md">
              <div className="content w-full h-full">
                <img src="" alt="" className="h-56" />
              </div>
            </div>

            <div className="w-full lg:w-2/3 h-full px-2 py-2 md:py-0 flex flex-col items-start text-start gap-2">
              <p className="gradient-text-t text-2xl font-semibold">Carlos Sánchez</p>
              <p className="text-jazzberry-jam-200">22 years old</p>
              <p>
              Poseo conocimientos fundamentales en la creación y mantenimiento de aplicaciones web y móviles, así como un fuerte compromiso con el aprendizaje continuo y el crecimiento profesional. 
              <br />
              Mis habilidades y competencias incluyen:
              Desarrollo Frontend y Backend: Experiencia práctica en la implementación de interfaces de usuario atractivas y funcionales utilizando HTML, CSS y JavaScript para el frontend, y en el desarrollo de lógica de negocio y manejo de bases de datos con tecnologías como Node.js, Express para el backend.

              </p>

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

          </div>

        </div>

      </section>

      <section id="skills">
        <h2 className="mx-auto max-w-7xl flex justify-center items-center py-2 text-2xl font-bold"><span className="gradient-text-t">My&nbsp;</span>Skills</h2>

        <div className="mx-auto max-w-7xl h-72 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 px-4 lg:px-0">

          <ul className="col-span-1 md:col-span-2 flex flex-col justify-center gap-2">
            {data_skill.map((skill,index)=>(
            <li key={index} className="flex justify-start items-center gap-2">
              <div className="border rounded-full p-2">
                {skill.img}
              </div>
              <p>{skill.name}</p>
              <hr className="hidden md:block bg-jazzberry-jam-100 w-1/2"/>
            </li>
            ))}


          </ul>

          <div className="col-span-1 md:col-span-2 h-full w-full hidden lg:block">
            <div className="w-full h-full flex flex-col justify-center items-center">
              <div className="w-56 h-56 rounded-full bg-gradient-to-r from-jazzberry-jam-100 via-jazzberry-jam-200 opacity-15 blur"></div>
            </div>
          </div>
          
          <ul className="col-span-1 md:col-span-2 flex flex-col justify-center gap-2">
          {data_soft_skill.map((skill,index)=>(
            <li key={index} className="flex justify-end items-center gap-2">
              <hr className="hidden md:block bg-jazzberry-jam-100 w-1/2"/>
              <p>{skill.name}</p>
              <div className="border rounded-full p-2">
                {skill.img}
              </div>
            </li>
          ))}

          </ul>
        

        </div>

      </section>

      <section id="proyects" className="h-auto py-4">
        <h3 className="mx-auto max-w-7xl flex justify-center items-center py-2 text-2xl font-bold"><span className="gradient-text-t">My&nbsp;</span>Proyects</h3>
        <div className="mx-auto max-w-7xl h-full justify-center items-center grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 md:gap-3 gap-4 place-items-center my-2 px-4 lg:px-0">
        {data.map((project, index) => (
          <Card key={index} data={project}></Card>
        ))}
        </div>

      </section>

      <section id="contact" className="bg-gradient bg-gradient-to-t from-black from-50% via-black/50 to-jazzberry-jam-600/20 py-4 h-auto">
        <h2 className="mx-auto max-w-7xl flex justify-center items-center py-2 text-2xl font-bold"><span className="gradient-text-t">My&nbsp;</span>Contact</h2>

        <div className="mx-auto max-w-7xl h-full grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 md:gap-3 gap-4 my-2 px-4 lg:px-0 place-content-center place-items-center">

          <div className="w-full md:w-full h-full rounded-lg col-span-2 md:col-span-4 select-none flex flex-col justify-center items-center bg-jazzberry-jam-800">
            <form action="" className="flex flex-col gap-4 w-full px-4 py-2">
              <p className="py-4 font-semibold">Contact Me</p>
              <div className="flex gap-x-4 items-center">
                <label htmlFor="name">Name:</label>
                <input type="text" className="rounded-sm py-1 bg-white/70 text-black/60"/>
              </div>

              <div className="flex gap-x-7 items-center">
              <label htmlFor="name">Mail:</label>
                <input type="email" className="rounded-sm py-1 bg-white/70 text-black/60"/>
              </div>

              <div className="flex flex-col">
                <label htmlFor="desciption" className="">Description:</label>
                <textarea name="description" id="" className="max-h-14 bg-white/70 border text-black/60 rounded-sm"></textarea>
              </div>

              <button className="bg-jazzberry-jam-900 px-4 py-2 rounded-md">Enviar</button>
            </form>
          </div>

          <div className="w-full h-full md:w-full rounded-lg col-span-1 select-none flex flex-col justify-center items-center bg-slate-700/50 border border-jazzberry-jam-300">
            <FaWhatsapp className="w-10 h-10"/>
          </div>

          <div className="w-full h-full md:w-full rounded-lg col-span-1 select-none flex flex-col justify-center items-center bg-slate-700/50 border border-jazzberry-jam-300">
            <FaLinkedin className="w-10 h-10"/>
          </div>

        </div>

      </section>
    </>
  )
}

export default Home
