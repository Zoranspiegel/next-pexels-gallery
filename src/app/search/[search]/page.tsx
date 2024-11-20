import Gallery from '@/components/Gallery';

export default async function searchPage({
  params
}: {
  params: Promise<{ search: string }>;
}) {
  const { search } = await params;
  return (
    <main>
      <Gallery search={search} />
    </main>
  );
}
