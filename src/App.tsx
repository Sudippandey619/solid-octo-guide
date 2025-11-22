import { useState } from 'react';
import { VideoReveal } from './components/VideoReveal';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 via-yellow-50 to-amber-200">
      <VideoReveal />
    </div>
  );
}