async function RecipePage({ params }: { params: { id: string } }) {
  return <div>My Post: {params.id}</div>;
}

export default RecipePage;
