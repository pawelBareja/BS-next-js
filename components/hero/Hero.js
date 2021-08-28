// import Image from "next/image";

import { TextBlock } from './TextBlock';
import { ScrollDown } from './scrollDown/ScrollDown';

export const Hero = () => {
  return (
    <div className={'hero'}>
      <div className={'hero__image'}>
        {/* <Image src="/images/hero2.png" width={600} height={400} alt="hero" />
         */}
        <img src="/images/hero2.png" width={600} height={400} alt="" />
      </div>
      <TextBlock />
      <ScrollDown />
      <style jsx>
        {`
          .hero {
            position: relative;
            display: flex;
            flex-direction:row;
            justify-content:flex-start;
            align-items:center;
            width: 100%;
            height: calc(100vh - 180px);
            min-height:400px;
            max-height:700px;
            margin:100px auto 40px;
             border-radius: var(--border-radius-basic);
            display: flex;
            background-color: green;
            // background-image: linear-gradient(120deg, #ffa4c1 0%, #ffa4c1 100%);
            background-color:#fff0f5;
            padding-bottom:50px;
          }
          @media (max-width: 768px) {
            .hero {
              width: calc(100vw - 60px);
              height: calc(100vh - 180px);
            }
          }

          .hero__image {
            height:100%;
            width:100%;
            display:flex;
            flex-direction:column;
            justify-content:flex-end;
            align-items:flex-end;
          }

          .hero__image img {
            max-width:100vw;
            margin-bottom:-30px;
            height:auto;
          }
          }
        `}
      </style>
    </div>
  );
};
