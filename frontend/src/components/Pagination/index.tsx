import {ReactComponent as Arrow} from '../../assets/img/flecha.svg'
import './estilos.css'

function Pagination() {
    return (
        <div className="dsfilme-pagination-container">
            <div className="dsfilme-pagination-box">
                <button className="dsfilme-pagination-button" disabled={true} >
                    <Arrow />
                </button>
                <p>{`${1} de ${3}`}</p>
                <button className="dsfilme-pagination-button" disabled={false} >
                    <Arrow className="dsfilme-flip-horizontal" />
                </button>
            </div>
        </div>
    );
}

export default Pagination;