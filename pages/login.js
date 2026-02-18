import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { authenticate } from '../lib/auth';
import styles from '../styles/Login.module.css';

export default function Login() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const isAuth = localStorage.getItem('thailand-auth');
    if (isAuth === 'authenticated') {
      router.push('/');
    }
  }, [router]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    setTimeout(() => {
      if (authenticate(password)) {
        router.push('/');
      } else {
        setError('Incorrect password. Please try again.');
        setPassword('');
      }
      setLoading(false);
    }, 300);
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <div className={styles.header}>
          <h1>🇹🇭</h1>
          <h2>Thailand Adventure 2026</h2>
          <p>Enter password to view the complete itinerary</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className={styles.input}
              disabled={loading}
              autoFocus
            />
          </div>

          {error && <div className={styles.error}>{error}</div>}

          <button
            type="submit"
            className={styles.button}
            disabled={loading}
          >
            {loading ? 'Checking...' : 'View Dashboard'}
          </button>
        </form>

        <div className={styles.footer}>
          <p>Shirin & Zeel's Trip to Thailand</p>
          <p className={styles.dates}>April 3-17, 2026</p>
        </div>
      </div>
    </div>
  );
}
