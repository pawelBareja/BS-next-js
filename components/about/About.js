// import Image from 'next/image';
import styles from './About.module.css';

export const About = () => {
  return (
    <div id={'about'} className={styles.container}>
      <div className={styles.container__first}>
        <div className={styles.container__text}>
          <p className={styles.container__subtitle}>My competences</p>
          <h3>About me</h3>
        </div>
      </div>

      <div className={styles.container__second}>
        <div className={styles.container__text}>
          <h4>
            So, you want to have your busines visible on the net. How to get
            visible on the world wide web with your business?
          </h4>
        </div>
      </div>

      <div className={styles.container__third}>
        <div className={styles.container__text}>
          <p>
            The answer is... you do not need pink as a leading color accent on
            your site, it is distictive for sure but I just used it because I
            think it's cool to have Giro'd Italia theme color on the page as
            Giro is my favorite cycling race, and cycling is my hobby. Ok, so
            that was personal bit of inforamtion about me. Now let's get to
            business - how to get visible on the internet? Trust someone who
            will create your side technicaly flawless. Prepared from the
            techncal SEO point of view but remember since one never can achive
            excelence look for someone that will integtate analytics tools to
            measure the performance of the site and track users behaviour and
            respond to your site so that you can develop it and become more
            effective.
          </p>
          <p>If you think the same I could be the guy:)</p>
          {/* <Image
            className={'nav__image'}
            src="/images/signature.png"
            width={60}
            height={60}
            alt={'signature bareja'}
          /> */}
          <img
            className={'nav__image'}
            src="/images/signature.png"
            width={60}
            height={60}
            alt={'signature bareja'}
          />
        </div>
      </div>
    </div>
  );
};
