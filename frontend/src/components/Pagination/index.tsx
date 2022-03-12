import {ReactComponent as Arrow} from '../../assets/img/flecha.svg'
import { MoviePage } from '../../types/movie';
import './estilos.css'

type Props = {
    page: MoviePage
    onChange: Function;
}

function Pagination({page,onChange}:Props) {

    
    return (
        <div className="dsfilme-pagination-container">
            <div className="dsfilme-pagination-box">
                <button className="dsfilme-pagination-button" disabled={page.first} onClick={()=> onChange(page.number - 1)}>
                    <Arrow />
                </button>
                <p>{`${page.number + 1} de ${page.totalPages}`}</p>
                <button className="dsfilme-pagination-button" disabled={page.last} onClick={()=> onChange(page.number + 1)}>
                    <Arrow className="dsfilme-flip-horizontal" />
                </button>
            </div>
        </div>
    );
}

export default Pagination;