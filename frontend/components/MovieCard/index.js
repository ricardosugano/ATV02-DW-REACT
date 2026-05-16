import styles from './MovieCard.module.css';

const MovieCard = ({ movie, onClick }) => {
  const year = movie.release_date?.split('-')[0] || 'Ano desconhecido';
  
  const posterUrl = movie.poster_path 
    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
    : null;

  return (
    <div className={styles.card} onClick={() => onClick(movie)}>
      {posterUrl ? (
        <div className={styles.poster}>
          <img src={posterUrl} alt={movie.title} />
        </div>
      ) : (
        <div className={styles.posterPlaceholder}></div>
      )}
      <div className={styles.info}>
        <h3>{movie.title}</h3>
        <div className={styles.details}>
          <span className={styles.year}>📅 {year}</span>
          <span className={styles.rating}>⭐ {movie.vote_average?.toFixed(1)}/10</span>
        </div>
        <p className={styles.overview}>{movie.overview?.substring(0, 100)}...</p>
      </div>
    </div>
  );
};

export default MovieCard;