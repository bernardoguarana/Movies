import { useEffect } from 'react';
import star from '../assets/star.svg';
import { useState } from 'react';
import axios from 'axios'; //npm i axios
import { Link } from 'react-router-dom';

//movie ou tv
export function List({ categoria }) {

    //Estado que irá armazenar o retorno da API
    const [items, setItems] = useState([]);
    const [selected, setSelected] = useState('top_rated');
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);

    //useEffect -> 
    //Parâmetros: Calback/Função que será executada, 
    //Array de dependência/Estado que fará o useEffect ser acionado
    //Se o array estiver vazio, o useEffect só será executado uma vez
    useEffect(() => {
        //console.log('Executou o UseEffect');
        //Requisições que podem ser feitas em uma API
        //post -> enviar/inserir
        //get -> buscar
        //delete -> deletar
        //put -> atualizar

        //movie / tv

        //top_rated, popular
        axios.get(`https://api.themoviedb.org/3/${categoria}/${selected}`, {
            params: {
                page: page,
                language: 'pt-BR',
                api_key: '93b872e765d2e0bc708fe8fd68ea2ad0'
            }
        })

            .then(response => {
                console.log(response.data.results);
                setItems(response.data.results)
                setLoading(false)
            })
        //.catch()

    }, [selected, page])

    function alterarOrdem(e){
        setSelected(e.target.value);
        setPage(1);
    }

    if(loading)
{
    return<h2 className='text-3xl text-center'>Carregando...</h2>
}
    return (


        

        <div className="max-w-[1140px] mx-auto py-14">
<div className='flex flex-col items-center'>
        <select className='bm-rm-blue-900 bg-black border px-4 mb-5 'value={selected} 
        onChange={(e)=>setSelected(e.target.value)}
        
        >
            <option value="popular">Popular</option>
            <option value="top_rated">Mais avaliados</option>
        </select>

            <div className="flex flex-wrap gap-7 justify-center">

                {
                    //cotiinformatica.com.br/react/reactmovies.zip
                    items.map(item => (
                        <Link to={`/detalhes/${categoria}/${item.id}`} className='hover:translate-y-[-5px] transition'>
                            <div className="max-w-[360px] h-[200px] relative" key={item.id}>
                                <img width={360} height={200} className='rounded-lg opacity-60' src={`https://image.tmdb.org/t/p/w400${item.backdrop_path}`} alt="" />

                                <div className='absolute  bottom-8  left-3   xss:bottom-6 xs:bottom-3'>

                                    <h2 className='text-lg font-bold xs:text-2xl'>{categoria == 'movie' ? item.title : item.name}</h2>

                                    <h3 className='font-bold'>Ano: {categoria == 'movie' ? item.release_date.substring(0, 4) : item.first_air_date.substring(0, 4)}</h3>
                                    <div className='flex gap-x-3'>
                                        <img src={star} alt="" />
                                        <span className='text-rm-yellow-200'>{item.vote_average}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))
                }

            </div>
</div>

                <div className='flex gap-2 mt-5 justify-center'>
                    <button
                    onClick={()=>setPage(page-1)}
                    disabled={page==1}
                    className='bg-rm-blue-200 py-1 px-10 text-black disabled:bg-gray-400 disabled:cursor-not-allowed '>Voltar</button>
                    <button
                    onClick={()=>setPage(page+1)}
                    className='bg-rm-blue-200 py-1 px-10'>Avançar</button>
                </div>

                <div>
                    <p className='text-center mt-2' >Pagina atual: {(page)}</p>
                </div>

        </div>

    )

}