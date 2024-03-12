import { Banner } from "../components/Banner";
import cardFilmes from "../assets/card-filmes.png";
import cardSeries from "../assets/card-series.png";
import { Link } from "react-router-dom";


export function Home() {
    return (
        <>

            <Banner 
                titulo ="Filmes & Séries"
                subtitulo="Lista de filmes e séries baseada na API The Movie DB. Confira as produções mais populares do mundo." />

            <div className="max-w-[850px] mx-auto px-2 flex flex-col gap-y-4  items-center justify-between relative top-[-30px] md:flex-row">
              <Link to="/filmes">  <img src={cardFilmes} alt="" /> </Link>
              <Link to="/series">  <img src={cardSeries} alt="" /> </Link>
            </div>

        </>
    )
}