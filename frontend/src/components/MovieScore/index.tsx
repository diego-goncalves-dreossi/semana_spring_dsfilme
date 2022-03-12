import MovieStars from '../MovieStars';
import './estilos.css';

type Props = {
    score:number,
    count:number
}

function MovieScore({score,count}:Props) {
    
    return (
        <div className="dsfilme-score-container">
            <p className="dsfilme-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <MovieStars score={score}/>
            <p className="dsfilme-score-count">{count} avaliações</p>
        </div>
    );
}

export default MovieScore;