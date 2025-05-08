import { useParams } from 'react-router-dom';
import { GetPatternRouteParams } from '../../lib/routes';
import { trpc } from '../../lib/trpc';
import css from './index.module.scss';

export const PatternPage = () => {
  const { patternId } = useParams() as GetPatternRouteParams;

  const { data, error, isLoading, isFetching, isError } = trpc.getPattern.useQuery({
    patternId,
  });

  

  console.log('data', data);

  if (isLoading || isFetching) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  if (!data) {
    return <span>Pattern not found</span>;
  }

  return (
    <div>
      <h1 className={css.title}>
        <span>{data.pattern.name}</span>
        <span> ({data.pattern.englishName})</span>
      </h1>
      
      <p className={css.description}>{data.pattern.description}</p>

      <div className={css.wrap}>
        <a className={css.item} href="#">
          read book
        </a>
        <a className={css.item} href="#">
          view video
        </a>
      </div>
    </div>
  );
};
