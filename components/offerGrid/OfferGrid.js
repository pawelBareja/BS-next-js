import Image from 'next/image';
import Link from 'next/link'
import styles from './OfferGrid.module.css';
import { gridItems } from './gridItems'

export const OfferGrid = () => {
  return (
    <div id={'offer'} className={styles.container}>
      <div className={styles.container__item}>
        <div className={styles.container__text}>
          <p className={styles.container__subtitle}>The offer</p>
          <h3>What can I do for you ?</h3>

        </div>
      </div>

      {gridItems.map(({ src,width,height,alt,title,subtitle,link,textLink })=>{
        return (
          <div className={styles.container__item} key={title}>
            <Image
              src={src}
              width={width}
              height={height}
              alt={alt}
            />
            <div className={styles.container__text}>
              <h4>{title}</h4>
              <p dangerouslySetInnerHTML={{ __html: subtitle }} />
              <Link href={link}>
                <a>{textLink}</a>
              </Link>
            </div>
          </div>
        )
      })}

    </div>
  );
};


