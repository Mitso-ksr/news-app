export default function NewsDetailPage({ params }) {
  const newsId = params.id;
  return (
    <>
      <h1>News Detail Page</h1>
      <p>This page is {newsId} page</p>
    </>
  );
}
