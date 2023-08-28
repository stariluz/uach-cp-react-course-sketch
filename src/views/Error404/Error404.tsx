import { Link } from 'react-router-dom';
import { useRouteError } from 'react-router-dom';
import styles from './Error404.module.css';

const Error404 = () => {
  const error: any = useRouteError();
  console.log(error)
  return <div className={styles.container}>
    <h1 className={styles.title}>
      {error.status} Algo salió mal :c
    </h1>
    <p>
      {error.data}
    </p>
    <Link to={'/react/ticket-master'}>
      <button className={styles.buttonBack}>
        Volver al inicio.
      </button>
    </Link>
  </div>
}

export default Error404;