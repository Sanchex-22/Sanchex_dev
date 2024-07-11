import React from "react"

type Projects = {
    id:string,
    name:string,
    description:string,
    img_url:string,
    link:string
}

interface CardProps{
    key:number;
    data:Projects;
}

const Card: React.FC<CardProps> = ({data}) => {
    return(
        <div className="w-full h-[300px] md:w-full md:h-[300px] gradient-border rounded-lg col-span-2 select-none">
        <div className="content h-full w-full flex flex-col justify-between gap-2 blur-filter">
          <img src={data.img_url} alt="" className="object-center object-cover h-40 rounded-t-md" />

          <div className="flex flex-col py-2 px-1">
            <div className="flex justify-start items-center py-2 gap-2">
              <img src={data.img_url} alt="#" className="w-10 h-10 object-center object-cover rounded-full bg-jazzberry-jam-600" />
              <div className="flex flex-col">
                <p className=" font-semibold">{data.name}</p>
                <p className="text-jazzberry-jam-200/50">{data.description}</p>
              </div>
            </div>
            <a href={data.link} className="bg-jazzberry-jam-800 rounded-lg hover:bg-jazzberry-jam-700 duration-200 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white focus:ring-4 focus:outline-none">
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
    )
}
export default Card