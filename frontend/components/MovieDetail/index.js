import styles from './MovieDetail.module.css';

const MovieDetail = ({ movie, onBack }) => {
  const year = movie.release_date?.split('-')[0] || 'Ano desconhecido';
  
  const posterUrl = movie.poster_path 
    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`  // Tamanho médio
    : null;

  return (
    <div className={styles.detailContainer}>
      <button className={styles.backButton} onClick={onBack}>
        ← Voltar para lista
      </button>
      
      <div className={styles.content}>
        {posterUrl ? (
          <div className={styles.posterWrapper}>
            <img src={posterUrl} alt={movie.title} className={styles.poster} />
          </div>
        ) : (
          <div className={styles.iconPlaceholder}>
            🎬
          </div>
        )}
        
        <div className={styles.info}>
          <h1>{movie.title}</h1>
          
          <div className={styles.meta}>
            <span>📅 {year}</span>
            <span>⭐ {movie.vote_average?.toFixed(1)}/10</span>
            <span>🎬 {movie.vote_count} votos</span>
          </div>
          
          <div className={styles.section}>
            <h3>Sinopse</h3>
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;