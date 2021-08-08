// import Image from 'next/image';
import styles from "./About.module.css";

export const About = () => {
  return (
    <div id={"about"} className={styles.container}>
      <div className={styles.container__first}>
        <div className={styles.container__text}>
          <p className={styles.container__subtitle}>My competences</p>
          <h3>About me</h3>
        </div>
      </div>

      <div className={styles.container__second}>
        <div className={styles.container__text}>
          <h4>How to be visible on the net? How to be visible on the net?</h4>
        </div>
      </div>

      <div className={styles.container__third}>
        <div className={styles.container__text}>
          <p>
            The answer is you do not need pink color accent on your site. I use
            it because I think it's cool to have Giro'd Itali theme color on the
            page, Giro is my favorite race, ok, so that is personall about me,
            but you want to be noticed on the web. How to do it? Trust someone
            who will build your side exceleent from thecnical point of view.{" "}
          </p>
          <p>
            Website building need to include also analytics and seo prepared
            site, that's also me
          </p>
          {/* <Image
            className={'nav__image'}
            src="/images/signature.png"
            width={60}
            height={60}
            alt={'signature bareja'}
          /> */}
          <img
            className={"nav__image"}
            src="/images/signature.png"
            width={60}
            height={60}
            alt={"signature bareja"}
          />
        </div>
      </div>
    </div>
  );
};
