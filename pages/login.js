import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { authenticate } from '../lib/auth';

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
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="text-5xl md:text-6xl">🇹🇭</div>
          <h1 className="text-2xl md:text-3xl font-mono font-bold tracking-tight">THAILAND 2026</h1>
          <p className="text-neutral-400 text-xs md:text-sm">Enter password to view the dashboard</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-600 font-mono text-sm focus:outline-none focus:border-amber-500 transition-colors rounded"
            disabled={loading}
            autoFocus
          />

          {error && (
            <div className="px-4 py-3 bg-red-950 border border-red-700 text-red-300 text-xs md:text-sm font-mono rounded">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full px-4 py-3 md:py-4 bg-amber-500 text-black font-mono font-bold text-sm hover:bg-amber-600 disabled:opacity-50 transition-colors rounded active:scale-95"
          >
            {loading ? 'Checking...' : 'Login'}
          </button>
        </form>

        {/* Footer */}
        <div className="text-center space-y-2 pt-8 border-t border-neutral-800">
          <p className="text-neutral-500 text-xs md:text-sm">Shirin & Zeel's Adventure</p>
          <p className="text-neutral-600 text-xs font-mono">April 3-17, 2026</p>
        </div>
      </div>
    </div>
  );
}
