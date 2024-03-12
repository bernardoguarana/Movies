export function Banner(props) {


    function background(){
        if(props.tipo == 'filmes'){
            return 'bg-banner-filmes';
        }

        else if(props.tipo == 'series'){
            return 'bg-banner-series';
        }

        else{
            
        }
        return 'bg-banner-home';

    }


    return (
        <div className={`${background()} bg-cover flex justify-center items-center py-20 2xl:py-32 text-center text-white`} >
            <div>
                <h1 className="font-bold md:text-5xl text-3xl" >{props.titulo}</h1>
                
                <p className="max-w-[400px]  md:text-lg text-base">{props.subtitulo}</p>
            </div>

        </div>
    )

}