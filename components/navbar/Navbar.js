import Link from 'next/link';
import { useState, useEffect } from 'react';
import Navigation from './Navigation';

export default function Navbar() {
  const [navFixed, setNavFixed] = useState(true);

  const toggleMenu = () => {
    let distanceFromTop = window.pageYOffset;

    return function () {
      let newDistanceFromTop = window.pageYOffset;
      if (newDistanceFromTop < 50 || distanceFromTop >= newDistanceFromTop) {
        setNavFixed(true);
      } else {
        setNavFixed(false);
      }
      distanceFromTop = newDistanceFromTop;
    };
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleMenu());
    return window.removeEventListener('scroll', toggleMenu());
  }, []);

  return (
    <>
      <nav className={navFixed ? 'nav' : 'nav hide'}>
        <Link href="/">
          <img
            className={'nav__image jello-diagonal-2'}
            src="/images/logo.png"
            width={60}
            height={60}
            alt={'logo bareja studio'}
          />
        </Link>
        <Navigation />
      </nav>

      <style jsx>
        {`
          .nav {
            z-index: 10;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            position: fixed;
            top: 0;
            left: 0;
            width:calc(100vw - 30px);
            height: 60px;
            margin:0 auto;
            background: #fff;
            transition: 1s;
          }

          @media (min-width: 769px) {
          .nav__image{
            padding-left:50px;
          }
        }

          @media (max-width:692px){
            .nav {
             width:100vw;
             margin:0 15px;
            }
}

          .hide {
            transform: translateY(-60px);
          }
          main {
            margin-top:80px;
            }
          }
          .jello-diagonal-2:hover {
            -webkit-animation: jello-diagonal-2 0.8s both;
                    animation: jello-diagonal-2 0.8s both;
          }
          @-webkit-keyframes jello-diagonal-2 {
            0% {
              -webkit-transform: skew(0deg 0deg);
                      transform: skew(0deg 0deg);
            }
            30% {
              -webkit-transform: skew(-25deg -25deg);
                      transform: skew(-25deg -25deg);
            }
            40% {
              -webkit-transform: skew(15deg, 15deg);
                      transform: skew(15deg, 15deg);
            }
            50% {
              -webkit-transform: skew(-15deg, -15deg);
                      transform: skew(-15deg, -15deg);
            }
            65% {
              -webkit-transform: skew(5deg, 5deg);
                      transform: skew(5deg, 5deg);
            }
            75% {
              -webkit-transform: skew(-5deg, -5deg);
                      transform: skew(-5deg, -5deg);
            }
            100% {
              -webkit-transform: skew(0deg 0deg);
                      transform: skew(0deg 0deg);
            }
          }
          @keyframes jello-diagonal-2 {
            0% {
              -webkit-transform: skew(0deg 0deg);
                      transform: skew(0deg 0deg);
            }
            30% {
              -webkit-transform: skew(-25deg -25deg);
                      transform: skew(-25deg -25deg);
            }
            40% {
              -webkit-transform: skew(15deg, 15deg);
                      transform: skew(15deg, 15deg);
            }
            50% {
              -webkit-transform: skew(-15deg, -15deg);
                      transform: skew(-15deg, -15deg);
            }
            65% {
              -webkit-transform: skew(5deg, 5deg);
                      transform: skew(5deg, 5deg);
            }
            75% {
              -webkit-transform: skew(-5deg, -5deg);
                      transform: skew(-5deg, -5deg);
            }
            100% {
              -webkit-transform: skew(0deg 0deg);
                      transform: skew(0deg 0deg);
            }
          }
        `}
      </style>
      <style global jsx>
        {`
          ul {
            padding-left: 0;
            list-style-type: none;
          }
        `}
      </style>
    </>
  );
}
