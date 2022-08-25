import { StarIcon } from 'assets';
import { Node } from 'types';
import styles from './item.module.scss';
const RepositoryItme = (props: Node) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{`${props.owner.login} / ${props.name}`}</p>
      <span className={styles.repoOpt}>
        <span>
          <StarIcon />
          {props.stargazerCount}
        </span>
        <span>{props.updatedAt.toString()}</span>
      </span>
    </div>
  );
};
export default RepositoryItme;
