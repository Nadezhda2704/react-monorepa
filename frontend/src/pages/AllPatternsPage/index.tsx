import { Link } from 'react-router-dom';
import { trpc } from '../../lib/trpc';
import { getPatternRoute } from '../../lib/routes';
import css from './index.module.scss';
import { Section } from '../../components/Section';

export const AllPatternsPage = () => {
  const { data, error, isLoading, isFetching, isError } = trpc.getPatterns.useQuery();

  let getReadPatterns: string[] = [];
  if (!getReadPatterns.length) {
    // toDo: обработка ошибок, показ статус загрузки
    getReadPatterns = trpc.getReadPatterns.useQuery().data?.readPatterns;
  }

  if (isLoading || isFetching) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <Section title="All Patterns">
      {data?.patterns.map((pattern) => (
        <div className={css.item} key={pattern.id}>
          <Link className={css.link} to={getPatternRoute({ patternId: pattern.id })}>
            <span>{pattern.name}</span>
            <span> ({pattern.englishName})</span>
            {getReadPatterns.length && getReadPatterns.includes(pattern.id) && <span>  **изучен**</span>}
          </Link>
        </div>
      ))}
    </Section>
  );
};
