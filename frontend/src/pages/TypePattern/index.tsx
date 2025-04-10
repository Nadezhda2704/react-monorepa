import { Link, useParams } from 'react-router-dom';
import { getPatternRoute, GetTypePatternRouteParams } from '../../lib/routes';
import { trpc } from '../../lib/trpc';
import type { TrpcRouter } from '@ideanick/backend/src/trpc';

export const PatternTypePage = () => {
  const { patternType } = useParams() as GetTypePatternRouteParams;

  const TypesPatternsData = trpc.getTypesPatterns.useQuery();
  const PatternsData = trpc.getPatterns.useQuery();

  const isLoading = TypesPatternsData.isLoading || PatternsData.isLoading; ;
  const isFetching = TypesPatternsData.isFetching || PatternsData.isFetching;
  const isError = TypesPatternsData.isError || PatternsData.isError;
  const error = TypesPatternsData.error || PatternsData.error;

  console.log('TypesPatternsData', TypesPatternsData);

  let patternTypeInfo = null;
  if (TypesPatternsData.data) {
    patternTypeInfo = TypesPatternsData.data.PatternsTypes.filter((item) => item.type === patternType)[0];
  }

  let patternsTypeList = [];
  if (TypesPatternsData.data) {
    patternsTypeList = PatternsData.data?.patterns.filter((item) => item.type === patternType);
  }

//   console.log('patternTypeInfo', patternTypeInfo);

  if (isLoading || isFetching) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error?.message}</span>;
  }

  if (!patternType) {
    return <span>Something get wrong</span>;
  }

  return (
    <div>
      <h1>
        <span>{patternTypeInfo?.name}</span>
        <span>({patternTypeInfo?.type})</span>
      </h1>
      <p>{patternTypeInfo?.description}</p>

      <div>

        {patternsTypeList.map((pattern) => (
          <div key={pattern.id}>
            <Link to={getPatternRoute({ patternId: pattern.id })}>
              <h2>
                <span>{pattern.name}</span>
                <span> ({pattern.englishName})</span>
              </h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
