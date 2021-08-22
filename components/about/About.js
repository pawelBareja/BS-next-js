// import Image from 'next/image';
import styles from './About.module.css';

export const About = () => {
  return (
    <div id={'about'} className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.container__first}>
          <div className={styles.container__text}>
            <p className={styles.container__subtitle}>My competences</p>
            <h3>About me</h3>
          </div>
        </div>

        <div className={styles.container__second}>
          <div>
            <p>
              So, you want to get your busines seen on the net. How to achieve that visibility?
            </p>
            <p>
              The answer is... you do not need a pink as a leading color accent on
              your site. It is distictive for sure, but I just used it because I
              think it's cool to have Giro'd Italia theme color on the page as
              Giro is my favorite cycling race, and cycling is my passion. Ok, so
              that was a personal bit of information about me.</p>
          </div>
        </div>

        <div className={styles.container__third}>
          <div>

              
              <p>Now let's get to
              business - how to get visiblity on the Internet? The simplest way is to trust someone who
              will create your site technicaly flawless and will not forget about the SEO requirements.</p><p> Last thing you need to remember is that one never can achive
              excelence, that is why you will need the analytics tools integrated. It is crucial
              to measure the performance of the site, track users behaviour and
              respond to their needs so you can achieve maximum efficiency of your site.
            </p>
       <p>I would be happy to support you on your project developement.</p>
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
    </div>
  );
};
