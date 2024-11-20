import { PicturesSchema } from '@/models/Pictures';

export default async function fetchPictures(url: string) {
  try {
    if (!process.env.NEXT_PUBLIC_PEXELS_API_KEY)
      throw new Error('Missing environment variable');

    const response = await fetch(url, {
      headers: {
        Authorization: process.env.NEXT_PUBLIC_PEXELS_API_KEY
      }
    });

    const responseJSON = await response.json();

    const parsedResponse = PicturesSchema.parse(responseJSON);

    return parsedResponse;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
    return null;
  }
}
