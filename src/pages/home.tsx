import Banner from "../components/ui/banner"
import Img from "../images/cursosmarinos.png"

function Home() {

  return (
    <>
      <Banner></Banner>

      <section id="info" className="h-full">
        <div className="mx-auto max-w-7xl h-full flex flex-col justify-center items-center rounded-md py-4 px-4 lg:px-0">

          <div className="h-full md:w-full flex flex-col md:flex-row justify-center items-center rounded-md">

            <div className="w-1/2 lg:w-1/3 gradient-border h-full rounded-md">
              <div className="content w-full h-full">
                <img src="" alt="" className="h-56" />
              </div>
            </div>

            <div className="w-1/2 lg:w-2/3 h-full px-2 py-2 md:py-0 flex flex-col items-start text-start gap-2">
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

        <div className="mx-auto max-w-7xl h-72 flex justify-center items-center">
          <div></div>
          <div></div>
        </div>

      </section>

      <section id="proyects" className="h-auto">
        <h3 className="mx-auto max-w-7xl flex justify-center items-center py-2 text-2xl font-bold"><span className="gradient-text-t">My&nbsp;</span>Proyects</h3>
        <div className="mx-auto max-w-7xl h-72 justify-center items-center grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 md:gap-3 gap-4 place-items-center my-2">

          <div className="w-[250px] h-[250px] md:w-[250px] md:h-[250px] gradient-border rounded-lg col-span-2">
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

      <section id="contact">
        <h2 className="mx-auto max-w-7xl flex justify-center items-center py-2 text-2xl font-bold"><span className="gradient-text-t">My&nbsp;</span>Contact</h2>

        <div className="mx-auto max-w-7xl h-72 flex justify-center items-center">
          <div></div>
          <div></div>
        </div>

      </section>
    </>
  )
}

export default Home
