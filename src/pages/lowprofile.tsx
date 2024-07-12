import Banner from "../components/ui/banner"
import { InstaPost } from "../components/ui/instagram_card"
import { SpotifyFrame } from "../components/ui/spotify_frame"
import { FotosList } from "../data/fotos"
import { MusicList } from "../data/music"
function LowProfile() {

    return (
      <>
        <Banner/>

        <section className="flex flex-col justify-center items-center">
          <h2 className="py-4 font-bold">My Galery</h2>

          <div className="max-w-7xl mx-auto h-full grid  grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 place-content-center px-4">
            {FotosList.map((foto,index)=>(
              <div className="col-span-2 w-full" key={index}>
                <InstaPost data={foto}></InstaPost>

              </div>
            ))}
          </div>

        </section>

        <section className="flex flex-col justify-center items-center">
          <h2 className="py-4 font-bold">My Favorites Songs</h2>

          <div className="max-w-7xl mx-auto h-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 place-content-center px-4">
            {MusicList.map((music,index)=>(
              <SpotifyFrame key={index} data={music}></SpotifyFrame>
            ))}
          </div>
          
        </section>
      </>
    )
  }
  
export default LowProfile