import { MdHexagon } from "react-icons/md"
import Banner from "../components/ui/banner"
import Img from "../images/cursosmarinos.png"
import { FaWhatsapp } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa6"

function Home() {

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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, incidunt, officia ab id magnam qui voluptatum nobis reprehenderit distinctio sed repudiandae voluptatem necessitatibus molestias, consequuntur natus.
                Eum nihil similique enim.
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

          <ul className="col-span-1 md:col-span-2 border flex flex-col justify-center">
            <li className="flex justify-start items-center gap-2">
              <MdHexagon className="h-10 w-10 text-jazzberry-jam-900"/>
            </li>

            <li className="flex justify-start items-center gap-2">
              <MdHexagon className="h-10 w-10 text-jazzberry-jam-900"/>
              <MdHexagon className="h-10 w-10 text-jazzberry-jam-800"/>
            </li>

            <li className="flex justify-start items-center gap-2">
              <MdHexagon className="h-10 w-10 text-jazzberry-jam-900"/>
              <MdHexagon className="h-10 w-10 text-jazzberry-jam-800"/>
              <MdHexagon className="h-10 w-10 text-jazzberry-jam-700"/>
            </li>

            <li className="flex justify-start items-center gap-2">
              <MdHexagon className="h-10 w-10 text-jazzberry-jam-900"/>
              <MdHexagon className="h-10 w-10 text-jazzberry-jam-800"/>
              <MdHexagon className="h-10 w-10 text-jazzberry-jam-700"/>
              <MdHexagon className="h-10 w-10 text-jazzberry-jam-600"/>
            </li>

            <li className="flex justify-start items-center gap-2">
              <MdHexagon className="h-10 w-10 text-jazzberry-jam-900"/>
              <MdHexagon className="h-10 w-10 text-jazzberry-jam-800"/>
              <MdHexagon className="h-10 w-10 text-jazzberry-jam-700"/>
            </li>

            <li className="flex justify-start items-center gap-2">
              <MdHexagon className="h-10 w-10 text-jazzberry-jam-900"/>
              <MdHexagon className="h-10 w-10 text-jazzberry-jam-800"/>
            </li>

            <li className="flex justify-start items-center gap-2">
              <MdHexagon className="h-10 w-10 text-jazzberry-jam-900"/>
            </li>

          </ul>

          <div className="col-span-1 md:col-span-2 border flex-col justify-start hidden lg:block">
            2
          </div>

          <ul className="col-span-1 md:col-span-2 flex flex-col justify-start">
            <li className="flex justify-end items-center gap-2 border-y-2">
              <p>React</p>
            </li>

            <li className="flex justify-end items-center gap-2 border-y-2">
              <p>Java</p>
            </li>

            <li className="flex justify-end items-center gap-2 border-y-2">
              <p>Tailwindcss</p>
            </li>

            <li className="flex justify-end items-center gap-2 border-y-2">
              <p>MySQL</p>
            </li>

          </ul>

        </div>

      </section>

      <section id="proyects" className="h-auto py-4">
        <h3 className="mx-auto max-w-7xl flex justify-center items-center py-2 text-2xl font-bold"><span className="gradient-text-t">My&nbsp;</span>Proyects</h3>
        <div className="mx-auto max-w-7xl h-72 justify-center items-center grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 md:gap-3 gap-4 place-items-center my-2 px-4 lg:px-0">

          <div className="w-full h-[300px] md:w-full md:h-[300px] gradient-border rounded-lg col-span-2 select-none">
            <div className="content h-full w-full flex flex-col justify-between gap-2 blur-filter">
              <img src={Img} alt="" className="object-center object-cover h-40 rounded-t-md" />

              <div className="flex flex-col py-2 px-1">
                <div className="flex justify-start items-center py-2 gap-2">
                  <img src={Img} alt="#" className="w-10 h-10 object-center object-cover rounded-full bg-jazzberry-jam-600" />
                  <div className="flex flex-col">
                    <p className=" font-semibold">Cursos Marinos</p>
                    <p className="text-jazzberry-jam-200/50">Landing Page</p>
                  </div>
                </div>
                <a href="#" className="bg-jazzberry-jam-800 rounded-lg hover:bg-jazzberry-jam-700 duration-200 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white focus:ring-4 focus:outline-none">
                  <div className='w-full flex justify-center items-center gap-2'>
                    Visit
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>

        </div>

      </section>

      <section id="contact" className="bg-gradient bg-gradient-to-t from-black from-50% via-black/50 to-jazzberry-jam-600/20 py-4 h-auto">
        <h2 className="mx-auto max-w-7xl flex justify-center items-center py-2 text-2xl font-bold"><span className="gradient-text-t">My&nbsp;</span>Contact</h2>

        <div className="mx-auto max-w-7xl h-full grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 md:gap-3 gap-4 my-2 px-4 lg:px-0 place-content-center place-items-center">

          <div className="w-full md:w-full h-full rounded-lg col-span-4 select-none flex flex-col justify-center items-center bg-jazzberry-jam-800">
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
