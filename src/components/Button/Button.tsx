import './Button.css';
import clsx from 'clsx';
import { FaArrowRight } from 'react-icons/fa';

type Props = {
  title: string;
  className?: string;
};

export function Button({ title, className }: Props) {
  return (
    <button className={clsx('button-container', className)}>
      <span>{title}</span>
      <FaArrowRight className="button-arrow" />
    </button>
  );
}
