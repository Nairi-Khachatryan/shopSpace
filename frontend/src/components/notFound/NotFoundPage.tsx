import s from './NotFound.module.scss';
import erorImg from '../../assets/Rocket Launching _ERROR 404_.png';

export const NotFoundPage = () => {
  return (
    <div className={s.container}>
      <div>
        <img className={s.img} src={erorImg} alt="404Error" />
      </div>
    </div>
  );
};
