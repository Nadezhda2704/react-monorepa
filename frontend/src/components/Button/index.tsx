import cn from 'classnames';
import css from './index.module.scss';

export const Button = ({
  children,
  loading = false,
  type = 'submit',
  click = () => {},
}: {
  children: React.ReactNode;
  loading?: boolean;
  type?: 'submit' | 'button' | 'reset' | undefined;
  click?: Function;
}) => {
  return (
    <button
      className={cn({ [css.button]: true, [css.disabled]: loading })}
      type={type}
      disabled={loading}
      onClick={click}
    >
      {loading ? 'Отправка...' : children}
    </button>
  );
};
