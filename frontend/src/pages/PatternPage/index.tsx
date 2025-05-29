import { useParams } from 'react-router-dom';
import { GetPatternRouteParams } from '../../lib/routes';
import { trpc } from '../../lib/trpc';
import css from './index.module.scss';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { Informer } from '../../components/Informer';
import React from 'react';

export const PatternPage = () => {
  const [upReadPatterns, setUpReadPatterns] = React.useState([]);

  const { patternId } = useParams() as GetPatternRouteParams;

  const { data, error, isLoading, isFetching, isError } = trpc.getPattern.useQuery({
    patternId,
  });

  let getReadPatterns: string[] = [];
  if (!getReadPatterns.length) {
    // toDO обработка ошибок статус загрузки
    getReadPatterns = trpc.getReadPatterns.useQuery().data?.readPatterns;
  }

  const markStudiedMutation = trpc.postReadPattern.useMutation();

  const markStudied = () => {
    markStudiedMutation.mutate(
      { patternId },
      {
        onSuccess: ({ readPatterns }) => {
          getReadPatterns = readPatterns;
          setUpReadPatterns(readPatterns);
        },
      }
    );
  };

  // ToDo мутацию для кнопки к прочтению, использовать существующий стейт

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
    <Section
      title={
        <>
          <span>{data.name}</span>
          <span> ({data.englishName})</span>
          {(upReadPatterns.length
            ? upReadPatterns.includes(patternId)
            : getReadPatterns && getReadPatterns.includes(patternId)) && <span> *Изучен*</span>}
        </>
      }
      description={data.description}
    >
      <div className={css.wrapBtn}>
        <Button type="button" click={markStudied} loading={markStudiedMutation.isPending}>
          Изучен
        </Button>
        {markStudiedMutation.error && <Informer color="red">Что-то пошло не так</Informer>}
        <Button type="button">Повторить</Button>
      </div>

      <div className={css.wrap}>
        <a className={css.item} href="#">
          read book
        </a>
        <a className={css.item} href="#">
          view video
        </a>
      </div>
    </Section>
  );
};
