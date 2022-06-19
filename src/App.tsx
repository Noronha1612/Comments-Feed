import './styles/global.css';
import styles from './styles/app.module.css';

import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import { usePosts } from './hooks/usePosts';

function App() {
  const { posts } = usePosts();

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
