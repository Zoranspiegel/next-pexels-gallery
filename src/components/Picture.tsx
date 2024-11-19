import type { PictureI } from '@/models/Pictures';

export default function Picture({ picture }: { picture: PictureI }) {
  return (
    <div>
      <h2>{picture.alt}</h2>
    </div>
  );
}