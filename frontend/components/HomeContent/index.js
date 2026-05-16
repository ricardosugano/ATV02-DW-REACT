import { useState } from 'react';
import styles from './HomeContent.module.css';

const HomeContent = ({ posts, onSync, onSelectPost, selectedPost, onBack }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (selectedPost) {
    return (
      <div className={styles.detailContainer}>
        <button className={styles.backButton} onClick={onBack}>
          ← Voltar para lista
        </button>
        <div className={styles.postDetail}>
          <h2>{selectedPost.title}</h2>
          <p className={styles.postBody}>{selectedPost.body}</p>
          <div className={styles.postMeta}>
            <p><strong>ID do Post:</strong> {selectedPost.id}</p>
            <p><strong>ID do Usuário:</strong> {selectedPost.userId}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.homeContainer}>
      <div className={styles.header}>
        <h2>📬 Posts Recentes</h2>
        <button className={styles.syncButton} onClick={onSync}>
          🔄 Sincronizar com API
        </button>
      </div>

      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="🔍 Buscar posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />
      </div>

      {posts.length === 0 ? (
        <div className={styles.emptyState}>
          <p>📭 Nenhum post encontrado</p>
          <p>Clique em "Sincronizar" para carregar os posts da API</p>
        </div>
      ) : (
        <div className={styles.postGrid}>
          {filteredPosts.map((post) => (
            <div 
              key={post.id} 
              className={styles.postCard}
              onClick={() => onSelectPost(post)}
            >
              <div className={styles.postHeader}>
                <span className={styles.postId}>#{post.id}</span>
                <span className={styles.userId}>👤 Usuário {post.userId}</span>
              </div>
              <h3 className={styles.postTitle}>{post.title}</h3>
              <p className={styles.postExcerpt}>{post.body.substring(0, 120)}...</p>
              <div className={styles.readMore}>
                <span>Ler mais →</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomeContent;