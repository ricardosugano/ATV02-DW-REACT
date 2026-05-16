#  CineClássicos - ATV02-DW-REACT

![React](https://img.shields.io/badge/React-18.3.1-blue)
![Next.js](https://img.shields.io/badge/Next.js-14.2.5-black)
![Node.js](https://img.shields.io/badge/Node.js-20.x-green)
![API](https://img.shields.io/badge/API-TMDb-purple)

##  Sobre o Projeto

Projeto desenvolvido para a disciplina de **Desenvolvimento Web III** da **Fatec Registro**.

O CineClássicos é uma aplicação web que consome a API do **TMDb (The Movie Database)** para exibir uma seleção de filmes clássicos do cinema, abrangendo as décadas de 1960 a 1990. O sistema permite visualizar uma lista de filmes, filtrar por década, buscar por título e ver detalhes completos de cada produção.

##  Funcionalidades

-  Listagem de filmes clássicos (1960-1990)
-  Filtro por década (Anos 70 e Anos 80)
-  Busca de filmes por título
-  Visualização de detalhes completos do filme
-  Paginação infinita ("Carregar Mais")
-  Interface responsiva e moderna
-  Design componentizado com CSS Modules

##  Tecnologias Utilizadas

### Frontend
| Tecnologia | Versão | Finalidade |
|------------|--------|------------|
| React | 18.3.1 | Biblioteca principal |
| Next.js | 14.2.5 | Framework React |
| Axios | 1.7.2 | Requisições HTTP |
| CSS Modules | - | Estilização componentizada |

### Backend
| Tecnologia | Versão | Finalidade |
|------------|--------|------------|
| Node.js | 20.x | Runtime JavaScript |
| Express | 4.18.2 | Framework web |
| Axios | 1.5.0 | Requisições à API TMDb |
| CORS | 2.8.5 | Compartilhamento de recursos |

### API Externa
- **TMDb (The Movie Database)** - API gratuita de filmes e séries

##  Estrutura do Projeto
ATV02-DW-REACT/
├── api/ # Backend
│ ├── server-movies.js # Servidor Express
│ └── package.json # Dependências do backend
│
├── frontend/ # Frontend
│ ├── components/ # Componentes React
│ │ ├── Container/ # Layout principal
│ │ ├── Menu/ # Menu de navegação
│ │ ├── Footer/ # Rodapé
│ │ ├── Loading/ # Tela de carregamento
│ │ ├── MovieCard/ # Card do filme
│ │ └── MovieDetail/ # Detalhes do filme
│ ├── pages/ # Páginas Next.js
│ │ ├── index.js # Página principal
│ │ └── _app.js # Configuração global
│ ├── styles/ # Estilos globais
│ │ └── globals.css # CSS global
│ └── package.json # Dependências do frontend
│
└── README.md # Documentação

text

##  Como Executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) (gerenciador de pacotes)
- [Conta no TMDb](https://www.themoviedb.org/signup) (para obter API Key)

### Passo a Passo

#### 1. Clone o repositório

```bash
git clone https://github.com/SEU_USUARIO/ATV02-DW-REACT.git
cd ATV02-DW-REACT
2. Configure a API Key do TMDb
Acesse TMDb API Settings

Clique em "Create" ou "Request an API Key"

Preencha o formulário:

Application Name: CineClássicos

Application URL: http://localhost:3000

Type: Desktop Application

Copie a API Key (v3 auth)

No arquivo api/server-movies.js, substitua:

javascript
const TMDB_API_KEY = 'sua_api_key_aqui';
3. Execute o Backend
bash
cd api
npm install
node server-movies.js
Resultado esperado:

text
 Servidor rodando na porta 3001
 Teste: http://localhost:3001/api/test
 Clássicos: http://localhost:3001/api/movies/classics
4. Execute o Frontend
Abra um novo terminal e execute:

bash
cd frontend
npm install
npm run dev
Resultado esperado:

text
▲ Next.js 14.2.5
- Local: http://localhost:3000
✓ Ready in 1.3s
5. Acesse a aplicação
Abra o navegador em: http://localhost:3000

 Como Usar
Navegação
Clássicos - Exibe os melhores filmes de 1960-1990

Anos 70 - Filtra filmes da década de 1970

Anos 80 - Filtra filmes da década de 1980

Busca - Pesquise filmes por título

Interação
Clique no card do filme para ver detalhes completos

Clique em "Voltar" para retornar à lista

Clique em "Carregar Mais" para ver mais resultados (paginação)

 Responsividade
Dispositivo	Layout
Desktop (1200px+)	4-5 cards por linha
Tablet (768px-1200px)	2-3 cards por linha
Mobile (até 768px)	1-2 cards por linha
 Endpoints da API
Endpoint	Método	Descrição
/api/test	GET	Testa se a API está rodando
/api/movies/classics	GET	Retorna filmes clássicos (1960-1990)
/api/movies/decade/1970	GET	Retorna filmes dos anos 70
/api/movies/decade/1980	GET	Retorna filmes dos anos 80
/api/movies/search/:query	GET	Busca filmes por título
/api/movies/:id	GET	Retorna detalhes de um filme
 Screenshots
Página Principal
text
┌─────────────────────────────────────────────────────────────┐
│                     🎬 CineClássicos                        │
│              Os melhores filmes do cinema clássico          │
├─────────────────────────────────────────────────────────────┤
│ [🎞️ Clássicos] [📀 Anos 70] [📼 Anos 80]  [🔍 Buscar...]    │
├─────────────────────────────────────────────────────────────┤
│ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐           │
│ │ Poster  │ │ Poster  │ │ Poster  │ │ Poster  │           │
│ │Título   │ │Título   │ │Título   │ │Título   │           │
│ │📅 1972  │ │📅 1975  │ │📅 1980  │ │📅 1985  │           │
│ │⭐ 8.7   │ │⭐ 8.5   │ │⭐ 8.8   │ │⭐ 8.3   │           │
│ └─────────┘ └─────────┘ └─────────┘ └─────────┘           │
├─────────────────────────────────────────────────────────────┤
│              [🎬 Carregar Mais Filmes]                      │
└─────────────────────────────────────────────────────────────┘
Detalhes do Filme
text
┌─────────────────────────────────────────────┐
│  ← Voltar para lista                         │
├─────────────────────────────────────────────┤
│  ┌──────┐                                   │
│  │Poster│   O Poderoso Chefão               │
│  │      │   📅 1972 ⭐ 8.7 🎬 22890 votos   │
│  └──────┘                                   │
│                                             │
│  Sinopse                                    │
│  Em 1945, Don Corleone é o chefe de uma    │
│  mafiosa família italiana de Nova York...  │
│                                             │
│  Gêneros                                    │
│  [Drama] [Crime]                           │
└─────────────────────────────────────────────┘
✅ Requisitos da Atividade
Requisito	Status
Projeto em React e Next.js	✅ Implementado
Consumo de API pública	✅ TMDb API
UI componentizada	✅ 6 componentes
CSS Modules	✅ 7 módulos CSS
CSS Global	✅ globals.css
useState e useEffect	✅ Ambos utilizados
Props entre componentes	✅ MovieCard e MovieDetail
Lista de registros	✅ Grade de filmes
Registro único	✅ Detalhes do filme
🐛 Possíveis Problemas e Soluções
Erro 401 - API Key inválida
Solução: Verifique se a API Key no server-movies.js está correta e ativa.

Erro "movies is not defined"
Solução: Certifique-se de que o backend está rodando na porta 3001.

Erro de CORS
Solução: O backend já está configurado com CORS, verifique se está usando node server-movies.js.

📄 Licença
Este projeto foi desenvolvido para fins educacionais como parte do curso de Desenvolvimento de Software Multiplataforma da Fatec Registro.

 Autor
Ricardo Sugano

GitHub: @rsugano

Disciplina: Desenvolvimento Web III

Professor: Diego Max

Fatec Registro - DSM

 Agradecimentos
TMDb pela API gratuita

Next.js pelo framework

Fatec Registro pelo curso

