import Banner from "../components/ui/banner"
import Img from "../images/cursosmarinos.png"

function Home() {

  return (
    <>
      <Banner></Banner>

      <section id="info" className="">
        <h3 className="mx-auto max-w-7xl flex justify-center items-center py-2 text-2xl font-bold"><span className="gradient-text-t">My&nbsp;</span>Info</h3>

        <div className="mx-auto max-w-7xl h-72 flex justify-center items-center">
          <div></div>
          <div></div>
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
                <img src={Img} alt="" className="object-center object-cover h-40 rounded-t-md"/>

                <div className="flex flex-col py-2 px-1">
                  <div className="flex justify-start items-center py-2 gap-2">
                    <img src={Img} alt="#" className="w-10 h-10 object-center object-cover rounded-full bg-jazzberry-jam-600"/>
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
