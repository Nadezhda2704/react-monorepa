import { useParams } from "react-router-dom";
import { GetPatternRouteParams } from '../../lib/routes';
import { trpc } from '../../lib/trpc';

export const PatternPage = () => {
    const { patternId } = useParams() as GetPatternRouteParams;

    const { data, error, isLoading, isFetching, isError } = trpc.getPattern.useQuery({
      patternId,
    });

    if (isLoading || isFetching) {
      return <span>Loading...</span>;
    }

    if (isError) {
      return <span>Error: {error.message}</span>;
    }

    if (!data.pattern) {
      return <span>Pattern not found</span>;
    }

    return (
      <div>
        <h1>
          <span>{data.pattern.name}</span>
          <span>({data.pattern.englishName})</span>
        </h1>
        <p>Type: {data.pattern.type}</p>
        <p>{data.pattern.description}</p>
        <div>
          <a href="#">read book</a>
          <a href="#">view video</a>
        </div>
      </div>
    );
}