import { trpc } from '../../lib/trpc';

export const AllPatternsPage = () => {
  // console.log('trpc.getPatterns.useQuery()', trpc.getPatterns.useQuery());
  const { data, error, isLoading, isFetching, isError } = trpc.getPatterns.useQuery();

  if (isLoading || isFetching) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div>
      <h1>All Patterns</h1>
      {data?.patterns.map((pattern) => (
        <div key={pattern.id}>
          <h2>
            <span>{pattern.name}</span>
            <span> ({pattern.englishName})</span>
          </h2>
          <p>{pattern.description}</p>
        </div>
      ))}
    </div>
  );
};
