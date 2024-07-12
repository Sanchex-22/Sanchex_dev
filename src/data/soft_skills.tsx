import { RiCodeView } from "react-icons/ri";
import { ReactElement } from "react";

type Skills = {
    id: string;
    name: string;
    img: ReactElement;
}

export const data_soft_skill: Skills[] = [
    {
        id: "1",
        name: "Creative",
        img: <RiCodeView className="w-10 h-10"/>
    },
    {
        id: "2",
        name: "Teamwork",
        img: <RiCodeView className="w-10 h-10"/>
    },
    {
        id: "3",
        name: "Adaptability",
        img: <RiCodeView className="w-10 h-10"/>
    }
];
