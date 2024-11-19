'use client';

import Picture from './Picture';

export default function Gallery() {
  const pictures = [{ id: Math.random().toString(36), alt: 'lorem ipsum' }, { id: Math.random().toString(36), alt: 'dolor sit' }];
  return (
    <div>
      {pictures.map((picture) => <Picture key={picture.id} picture={picture} />)}
    </div>
  );
}
