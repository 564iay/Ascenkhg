'use client';

import dynamic from 'next/dynamic';

const AscendCanvas = dynamic(() => import('./AscendCanvas'), {
  ssr: false,
  loading: () => null,
});

export function AscendExperience() {
  return <AscendCanvas />;
}
