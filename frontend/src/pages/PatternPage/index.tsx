import { useParams } from 'react-router-dom';
import { GetPatternRouteParams } from '../../lib/routes';
import { trpc } from '../../lib/trpc';
import css from './index.module.scss';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { Informer } from '../../components/Informer';
import React from 'react';

export const PatternPage = () => {
  const { patternId } = useParams() as GetPatternRouteParams;

  const [upReadPatterns, setUpReadPatterns] = React.useState([]);

  const { data, error, isLoading, isFetching, isError } = trpc.getPattern.useQuery({
    patternId,
  });

  let getReadPatterns: string[] = [];
  if (!getReadPatterns.length) {
    // toDo: обработка ошибок, показ статус загрузки
    getReadPatterns = trpc.getReadPatterns.useQuery().data?.readPatterns;
  }

  // Изучен
  const markStudiedMutation = trpc.postReadPattern.useMutation();

  const markStudied = () => {
    markStudiedMutation.mutate(
      { patternId },
      {
        onSuccess: ({ readPatterns }) => {
          setUpReadPatterns(readPatterns);
        },
      }
    );
  };

  // Повторить
  const markToStudyMutation = trpc.deleteReadPattern.useMutation();

  const markToStudy = () => {
    markToStudyMutation.mutate(
      { patternId },
      {
        onSuccess: ({ readPatterns }) => {
          setUpReadPatterns(readPatterns);
        },
      }
    );
  };

  const checkIsRead = () => {
    return upReadPatterns.length
            ? upReadPatterns.includes(patternId)
            : getReadPatterns && getReadPatterns.includes(patternId)
  };

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
          {checkIsRead() && <span> *Изучен*</span>}
        </>
      }
      description={data.description}
    >
      <div className={css.wrapBtn}>
        <Button type="button" click={markStudied} loading={markStudiedMutation.isPending} disabled={checkIsRead()}>
          Изучен
        </Button>
        {markStudiedMutation.error && <Informer color="red">Что-то пошло не так</Informer>}
        <Button type="button" click={markToStudy} loading={markToStudyMutation.isPending} disabled={!checkIsRead()}>
          Повторить
        </Button>
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
