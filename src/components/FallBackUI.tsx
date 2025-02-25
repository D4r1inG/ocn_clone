import React from 'react';
import { useRouter } from 'next/router';

interface Props {
  error: Error;
  setError: () => void;
}

const FallBackUI: React.FC<Props> = ({ error, setError }) => {
  const router = useRouter();

  return (
    <div>
      <h1>Something went wrong</h1>
      <p>{error.message}</p>
      <button onClick={() => setError()}>Try again</button>
      <button onClick={() => router.push('/')}>Go to Home</button>
    </div>
  );
};

export default FallBackUI;
