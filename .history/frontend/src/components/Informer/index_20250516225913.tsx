import cn from 'classnames';
import css from './index.module.scss';

export const Informer = ({ color, children }: { color: 'red' | 'green'; children: React.ReactNode }) => {
  return <div className={cn({ [css.alert]: true, [css[color]]: true })}>{children}</div>;
};
