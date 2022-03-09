import {ReactComponent as StarFull} from '../../assets/img/estrelacheia.svg';
import {ReactComponent as StarHalf}  from '../../assets/img/estrelameia.svg';
import {ReactComponent as StarEmpty} from '../../assets/img/estrelavazia.svg';
import './estilos.css'

function MovieStars() {
    return (
        <div className="dsfilme-stars-container">
            <StarFull />
            <StarFull />
            <StarFull />
            <StarHalf />
            <StarEmpty />
        </div>
    );
}

export default MovieStars;