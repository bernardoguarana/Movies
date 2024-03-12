import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'

export function Header() {
    return (
        <header className='bg-rm-blue-900 flex flex-col gap-y-6 justify-between items-center p-6 md:flex-row'>
            <img src={logo} alt="" />

            <nav className='text-white flex gap-x-20  text-center flex-row'  >
                <Link to='/' href='' className='hover:text-rm-blue-200'>Início</Link>
                <Link to='/filmes'className='hover:text-rm-blue-200'>Filmes</Link>
                <Link to='/series'className='hover:text-rm-blue-200'>Séries</Link>
            </nav>

        </header>
    )
}