import styles from './MovieDetail.module.css';

const MovieDetail = ({ movie, onBack }) => {
    const posterUrl = movie.poster_path 
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : '/images/no-poster.png';
    
    const backdropUrl = movie.backdrop_path
        ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
        : null;

    const year = movie.release_date?.split('-')[0];
    const genres = movie.genres?.map(g => g.name).join(', ') || 'Não informado';
    const director = movie.credits?.crew?.find(p => p.job === 'Director')?.name || 'Não informado';
    const cast = movie.credits?.cast?.slice(0, 5).map(a => a.name).join(', ') || 'Não informado';

    return (
        <div className={styles.detailContainer}>
            {backdropUrl && (
                <div className={styles.backdrop}>
                    <img src={backdropUrl} alt={movie.title} />
                    <div className={styles.overlay}></div>
                </div>
            )}
            
            <button className={styles.backButton} onClick={onBack}>
                ← Voltar para lista
            </button>
            
            <div className={styles.content}>
                <div className={styles.poster}>
                    <img src={posterUrl} alt={movie.title} />
                </div>
                
                <div className={styles.info}>
                    <h1>{movie.title}</h1>
                    <p className={styles.tagline}>{movie.tagline}</p>
                    
                    <div className={styles.meta}>
                        <span>📅 {year}</span>
                        <span>⏱️ {movie.runtime} min</span>
                        <span>⭐ {movie.vote_average?.toFixed(1)}/10</span>
                    </div>
                    
                    <div className={styles.section}>
                        <h3>Sinopse</h3>
                        <p>{movie.overview}</p>
                    </div>
                    
                    <div className={styles.section}>
                        <h3>Gêneros</h3>
                        <p>{genres}</p>
                    </div>
                    
                    <div className={styles.section}>
                        <h3>Diretor</h3>
                        <p>{director}</p>
                    </div>
                    
                    <div className={styles.section}>
                        <h3>Elenco Principal</h3>
                        <p>{cast}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetail;