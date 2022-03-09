import MovieStars from '../MovieStars';
import './estilos.css';

function MovieScore() {
    const score = 3.5;
    const count = 14;
    return (
        <div className="dsfilme-score-container">
            <p className="dsfilme-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <MovieStars />
            <p className="dsfilme-score-count">{count} avaliações</p>
        </div>
    );
}

export default MovieScore;