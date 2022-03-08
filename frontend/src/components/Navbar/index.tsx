import { ReactComponent as GithubIcon } from '../../assets/img/github.svg'
import './estilos.css'
function Navbar() {
    return (
        <header>
            <nav className='container'>
                <div className='dsfilme-nav-content'> 
                    <h1>DSFilme</h1>
                    <a href="https://github.com/diego-goncalves-dreossi">
                        <div className='dsfilme-contato-conteiner'>
                            <GithubIcon />
                            <p className='dsfilme-contato-link'>/diego-gonçalves-dreossi</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
//export default componente sem ()
//container (className) é uma classe do Bootstrap