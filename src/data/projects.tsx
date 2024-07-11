import CursosMarinos from "../../src/images/cursosmarinos.png"
import Blogpage from "../../src/images/blog.png"
import AgroPage from "../../src/images/Agroymas.png"
type Projects = {
    id:string,
    name:string,
    description:string,
    img_url:string,
    link:string
}

export const data: Projects[] = [
    {
        id:"1",
        name:"Cursos Marinos",
        description:"Landing Page for PMTS",
        img_url:CursosMarinos,
        link:"https://cmarinos.vercel.app/es/"
    },
    {
        id:"2",
        name:"Blog Page",
        description:"Landing Page Template",
        img_url:Blogpage,
        link:"https://blogtemplate-three.vercel.app/"
    },
    {
        id:"3",
        name:"Agro & Mas",
        description:"Landing Page for Agro & Mas",
        img_url:AgroPage,
        link:"https://agroymas.vercel.app/"
    },
]