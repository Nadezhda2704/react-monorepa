import cn from 'classnames';
import css from './index.module.scss';

export const Button = ({
  children,
  loading = false,
  disabled = false,
  type = 'submit',
  click = () => {},
}: {
  children: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  type?: 'submit' | 'button' | 'reset' | undefined;
  click?: Function;
}) => {
  return (
    <div className={cn({ [css.wrap]: true, [css.disabled]: loading || disabled })}>
      <button
        className={cn({ [css.button]: true, [css.disabled]: loading || disabled })}
        type={type}
        disabled={loading || disabled}
        onClick={click}
      >
        {loading ? 'Отправка...' : children}
      </button>
    </div>
  );
};
