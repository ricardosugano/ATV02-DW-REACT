import { useState } from 'react';
import styles from './CreateContent.module.css';

const CreateContent = ({ onCreatePost }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !body) {
      alert('Preencha todos os campos');
      return;
    }
    
    const newPost = {
      title,
      body,
      userId: 1,
      id: Date.now()
    };
    
    onCreatePost(newPost);
    setSuccess(true);
    setTitle('');
    setBody('');
    
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className={styles.createContainer}>
      <div className={styles.createCard}>
        <div className={styles.createHeader}>
          <h2>✏️ Criar Novo Post</h2>
          <p>Compartilhe suas ideias com a comunidade</p>
        </div>
        
        {success && (
          <div className={styles.successMessage}>
            ✅ Post criado com sucesso!
          </div>
        )}
        
        <form onSubmit={handleSubmit} className={styles.createForm}>
          <div className={styles.inputGroup}>
            <label>Título</label>
            <input
              type="text"
              placeholder="Digite o título do post..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          
          <div className={styles.inputGroup}>
            <label>Conteúdo</label>
            <textarea
              placeholder="Digite o conteúdo do post..."
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows={8}
              required
            />
          </div>
          
          <button type="submit" className={styles.createButton}>
            Publicar Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateContent;