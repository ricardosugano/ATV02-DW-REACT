import { useState, useEffect } from 'react';
import axios from 'axios';
import Container from '../components/Container';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import MovieCard from '../components/MovieCard';
import MovieDetail from '../components/MovieDetail';

const API_URL = 'http://localhost:3001/api';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [activeCategory, setActiveCategory] = useState('classics');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  // Buscar filmes
  const fetchMovies = async (category, pageNum = 1, isLoadMore = false) => {
    if (isLoadMore) {
      setLoadingMore(true);
    } else {
      setLoading(true);
      setMovies([]);
    }
    
    try {
      let url;
      if (category === 'search') {
        url = `${API_URL}/movies/search/${encodeURIComponent(searchTerm)}?page=${pageNum}`;
      } else if (category === '1970') {
        url = `${API_URL}/movies/decade/1970?page=${pageNum}`;
      } else if (category === '1980') {
        url = `${API_URL}/movies/decade/1980?page=${pageNum}`;
      } else {
        url = `${API_URL}/movies/classics?page=${pageNum}`;
      }
      
      const response = await axios.get(url);
      
      // Verifica se a resposta tem a estrutura correta
      const results = response.data.results || response.data;
      const total = response.data.total_results || results.length;
      const pages = response.data.total_pages || 1;
      
      if (isLoadMore) {
        setMovies(prev => [...prev, ...results]);
      } else {
        setMovies(results);
      }
      
      setTotalResults(total);
      setTotalPages(Math.min(pages, 100));
      setCurrentPage(pageNum);
      
    } catch (error) {
      console.error('Erro:', error);
      setMovies([]);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  // Carregar mais filmes
  const loadMore = () => {
    if (currentPage < totalPages && !loadingMore) {
      const nextPage = currentPage + 1;
      if (activeCategory === 'search') {
        fetchMovies('search', nextPage, true);
      } else {
        fetchMovies(activeCategory, nextPage, true);
      }
    }
  };

  // Buscar por nome
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    setActiveCategory('search');
    setCurrentPage(1);
    await fetchMovies('search', 1, false);
  };

  // Mudar categoria
  const changeCategory = (category) => {
    setActiveCategory(category);
    setSearchTerm('');
    setCurrentPage(1);
    fetchMovies(category, 1, false);
  };

  // Limpar busca
  const clearSearch = () => {
    setSearchTerm('');
    changeCategory('classics');
  };

  // Carregar filmes ao mudar categoria
  useEffect(() => {
    if (activeCategory !== 'search') {
      fetchMovies(activeCategory, 1, false);
    }
  }, [activeCategory]);

  if (loading) return <Loading />;
  
  if (selectedMovie) {
    return (
      <Container>
        <Menu />
        <MovieDetail movie={selectedMovie} onBack={() => setSelectedMovie(null)} />
        <Footer />
      </Container>
    );
  }

  return (
    <Container>
      <Menu />
      
      <main style={{ maxWidth: '1200px', margin: '100px auto 0', padding: '20px', width: '100%' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h1 style={{ fontSize: '2.5rem', color: 'white', marginBottom: '10px' }}>
            🎬 CineClássicos
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.9)' }}>
            Os melhores filmes do cinema clássico
          </p>
        </div>

        {/* Botões e Busca */}
        <div style={{ 
          background: 'rgba(255,255,255,0.95)',
          padding: '15px',
          borderRadius: '12px',
          marginBottom: '20px'
        }}>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '15px' }}>
            <button
              onClick={() => changeCategory('classics')}
              style={{
                padding: '8px 16px',
                background: activeCategory === 'classics' ? '#667eea' : '#e0e0e0',
                color: activeCategory === 'classics' ? 'white' : '#333',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              🎞️ Clássicos
            </button>
            <button
              onClick={() => changeCategory('1970')}
              style={{
                padding: '8px 16px',
                background: activeCategory === '1970' ? '#667eea' : '#e0e0e0',
                color: activeCategory === '1970' ? 'white' : '#333',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              📀 Anos 70
            </button>
            <button
              onClick={() => changeCategory('1980')}
              style={{
                padding: '8px 16px',
                background: activeCategory === '1980' ? '#667eea' : '#e0e0e0',
                color: activeCategory === '1980' ? 'white' : '#333',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              📼 Anos 80
            </button>
          </div>

          <form onSubmit={handleSearch} style={{ display: 'flex', gap: '8px' }}>
            <input
              type="text"
              placeholder="🔍 Buscar filmes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                flex: 1,
                padding: '8px 12px',
                border: '2px solid #ddd',
                borderRadius: '6px',
                fontSize: '0.9rem'
              }}
            />
            <button type="submit" style={{
              padding: '8px 16px',
              background: '#764ba2',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer'
            }}>
              Buscar
            </button>
            {activeCategory === 'search' && (
              <button type="button" onClick={clearSearch} style={{
                padding: '8px 16px',
                background: '#999',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer'
              }}>
                Limpar
              </button>
            )}
          </form>
        </div>

        {/* Info */}
        <div style={{ marginBottom: '15px' }}>
          <p style={{ color: 'white', fontSize: '0.85rem' }}>
            {activeCategory === 'search' && (
              <>🔍 {totalResults} filmes encontrados para "{searchTerm}"</>
            )}
            {activeCategory === 'classics' && (
              <>🎞️ Mostrando {movies.length} de {totalResults} clássicos</>
            )}
            {activeCategory === '1970' && (
              <>📀 Mostrando {movies.length} de {totalResults} filmes dos anos 70</>
            )}
            {activeCategory === '1980' && (
              <>📼 Mostrando {movies.length} de {totalResults} filmes dos anos 80</>
            )}
          </p>
        </div>

        {/* Grade de Filmes - LADO A LADO */}
        {movies.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px', background: 'white', borderRadius: '12px' }}>
            <p>🎬 Nenhum filme encontrado</p>
            <p style={{ fontSize: '0.8rem', color: '#666', marginTop: '10px' }}>
              Clique em "Clássicos" ou "Anos 70/80" para carregar os filmes
            </p>
          </div>
        ) : (
          <>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap: '20px',
              marginTop: '20px'
            }}>
              {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} onClick={setSelectedMovie} />
              ))}
            </div>

            {/* Botão Carregar Mais */}
            {currentPage < totalPages && (
              <div style={{ textAlign: 'center', marginTop: '30px' }}>
                <button
                  onClick={loadMore}
                  disabled={loadingMore}
                  style={{
                    padding: '12px 30px',
                    background: '#667eea',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: loadingMore ? 'not-allowed' : 'pointer',
                    opacity: loadingMore ? 0.6 : 1,
                    fontSize: '1rem',
                    fontWeight: 'bold'
                  }}
                >
                  {loadingMore ? '🔄 Carregando...' : `🎬 Carregar Mais Filmes (${currentPage}/${totalPages})`}
                </button>
              </div>
            )}
          </>
        )}
      </main>

      <Footer />
    </Container>
  );
}