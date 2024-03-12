
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

export function Detalhes() {

    //Extraindo da URL as informações do id e da categoria
    const { id } = useParams();
    const { categoria } = useParams();
    const [item, setItem] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Adicionado novo estado para controlar o carregamento

    const navigate = useNavigate();

    useEffect(() => {
        async function buscaAPI() {
            setIsLoading(true); // Inicia o carregamento
            await axios.get(`https://api.themoviedb.org/3/${categoria}/${id}`, {
                params: {
                    language: 'pt-BR',
                    api_key: '93b872e765d2e0bc708fe8fd68ea2ad0'
                }
            })
            .then(response => {
                console.log(response.data);
                setItem(response.data); //guardando em um estado o retorno da API 
            })
            .catch(error => {
                console.log(`Erro da API ${error}`);
            })
            .finally(() => {
                setIsLoading(false); // Termina o carregamento quando a chamada de API estiver completa
            });
        }

        buscaAPI(); //acionando a função

    }, [id, categoria]);

    if (isLoading) {
        return <div className="text-center">Carregando...</div>; // Renderiza a animação de carregamento se os dados estiverem carregando
    }

    // Renderiza o conteúdo quando os dados terminam de carregar
    let imageURL = `https://image.tmdb.org/t/p/w1280${item.backdrop_path}`
    let posterImageURL = `https://image.tmdb.org/t/p/w300${item.poster_path}`
    return (
        <>
            <div className={`h-[500px] bg-cover bg-center hidden md:block`} style={{ backgroundImage: `url(${imageURL})` }}></div>
    
            <div className="max-w-[850px] 
                mx-auto 
                relative 
                top-[-1px] 
                md:top-[-400px]	
                bg-black 
                bg-opacity-50 
                backdrop-blur-sm 
                p-3 
                md:p-7
                rounded-xl
                flex
                items-center
                gap-x-8 flex-col md:flex-row text-center md:text-start">
    
                <img src={posterImageURL} alt={`Poster de ${categoria == 'movie' ? item.title : item.name}`} />
    
                <div>
                    <h1 className="text-3xl font-bold mb-5">{categoria == 'movie' ? item.title : item.name}
                    </h1>
                    <ul className="list-disc list-inside mb-5">
                        <li>Ano: {item.release_date ? item.release_date.substring(0,4) : item.first_air_date ? item.first_air_date.substring(0, 4) : ''} </li>
                        <li>
                            <span className="text-yellow-400 me-2">&#9733;</span>
                         {item.vote_average}
                        </li>
                    </ul>
    
                    <p>{item.overview}</p>
    
                    <button 
                    onClick={()=> navigate(-1)}
                    className="bg-rm-blue-200 text-black py-2 px-10 rounded-lg mt-5 hover:bg-white">Voltar
                    </button>
    
                </div>
    
            </div>
        </> )
}


















