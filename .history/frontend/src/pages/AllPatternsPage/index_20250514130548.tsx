import { Link } from 'react-router-dom';
import { trpc } from '../../lib/trpc';
import { getPatternRoute } from '../../lib/routes';
import css from './index.module.scss';
import { Segment } from '../../components/Segment';

export const AllPatternsPage = () => {
  const { data, error, isLoading, isFetching, isError } = trpc.getPatterns.useQuery();

  if (isLoading || isFetching) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <Segment title="All Patterns">
      {/* <h1 className={css.title}>All Patterns</h1> */}
      {data?.patterns.map((pattern) => (
        <div className={css.item} key={pattern.id}>
          <Link className={css.link} to={getPatternRoute({ patternId: pattern.id })}>
            <span>{pattern.name}</span>
            <span> ({pattern.englishName})</span>
          </Link>
        </div>
      ))}
    </Segment>
  );
};
