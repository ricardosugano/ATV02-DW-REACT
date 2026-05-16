import styles from './MovieCard.module.css';

const MovieCard = ({ movie, onClick }) => {
    const posterUrl = movie.poster_path 
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : '/images/no-poster.png';
    
    const year = movie.release_date ? movie.release_date.split('-')[0] : 'Ano desconhecido';

    return (
        <div className={styles.card} onClick={() => onClick(movie)}>
            <div className={styles.poster}>
                <img src={posterUrl} alt={movie.title} />
                <div className={styles.rating}>
                    ⭐ {movie.vote_average?.toFixed(1) || 'N/A'}
                </div>
            </div>
            <div className={styles.info}>
                <h3>{movie.title}</h3>
                <p className={styles.year}>{year}</p>
                <p className={styles.overview}>
                    {movie.overview?.substring(0, 100)}...
                </p>
            </div>
        </div>
    );
};

export default MovieCard;