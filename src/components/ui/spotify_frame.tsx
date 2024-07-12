import React from "react"

type Music = {
    id:string,
    name:string,
    url:string
}
interface SporifyFrameProps{
    data:Music;
}

export const SpotifyFrame: React.FC<SporifyFrameProps> = ({data}) => {
    return(
    <iframe 
        className="rounded-sm h-full col-span-2" 
        src={data.url} 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy">
    </iframe>
    )
}