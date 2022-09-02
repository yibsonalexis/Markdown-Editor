import styles from './styles.module.css';

interface Props {
  title: string;
}

export const Header = ({ title }: Props) => {
  return (
    <div className={styles.container}>
      <h1 data-testid="title" className={styles.title}>
        {title}
      </h1>
    </div>
  );
};
