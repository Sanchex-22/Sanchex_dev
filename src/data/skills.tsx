import { RiCodeView } from "react-icons/ri";
import { ReactElement } from "react";

type Skills = {
    id: string;
    name: string;
    img: ReactElement;
}

export const data_skill: Skills[] = [
    {
        id: "1",
        name: "Web Design",
        img: <RiCodeView className="w-10 h-10"/>
    },
    {
        id: "2",
        name: "Web Develop",
        img: <RiCodeView className="w-10 h-10"/>
    },
    {
        id: "3",
        name: "UX/UI",
        img: <RiCodeView className="w-10 h-10"/>
    }
];
