import Link from 'next/link';
import { useRouter } from 'next/router';
import Burger from './Burger';
import { useState } from 'react';

export default function Navigation() {
  const router = useRouter();
  const [active, setActive] = useState(false);

  const toggleMobileMenu = (e) => {
    setActive(!active);
  };

  return (
    <>
      <Burger active={active} onClick={toggleMobileMenu} />
      <div className={'container ' + (active ? 'active' : '')}>
        <ul>
          <li onClick={toggleMobileMenu}>
            <Link href="/#offer">
              <a className={router.asPath === '/#offer' ? 'active' : null}>
                offer
              </a>
            </Link>
          </li>
          <li onClick={toggleMobileMenu}>
            <Link href="/#projects">
              <a
                className={
                  router.asPath.startsWith('/#projects') ? 'active' : null
                }
              >
                projects
              </a>
            </Link>
          </li>
          <li onClick={toggleMobileMenu}>
            <Link href="/#about">
              <a className={router.asPath === '/#about' ? 'active' : null}>
                about
              </a>
            </Link>
          </li>
          <li onClick={toggleMobileMenu}>
            <Link href="/#contact">
              <a className={router.asPath === '/#contact' ? 'active' : null}>
                contact
              </a>
            </Link>
          </li>
        </ul>
        <style jsx>
          {`
            .container {
              width: 100%;
              max-width: 1600px;
              margin: 0 auto;
              height: 60px;
            }
            ul {
              position: absolute;
              left: 0;
              top: 0;
              margin: 0;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-content: center;
              display: none;
              opacity: 0;
              transition: opacity 0.3s;
              width: 100vw;
              height: 100vh;
              // background:rgba(256,256,256, 0.8);
              list-style: none;
            }
            .active ul {
              background: rgba(255, 255, 255, 0.95);
              opacity: 1;
              display: flex;
              transition: opacity 0s;
              transform: ease-in-out 1s;
            }
            li {
              font-size: 2rem;
              text-align: center;
            }
            li:last-child {
              margin-bottom: 0;
            }
            .active {
              color: var(--color-accent);
            }

            @media (min-width: 769px) {
              .container {
                width: 100%;
                max-width: 1600px;
              }
              ul {
                padding: 0;
                margin: 0;
                width: 100%;
                height: 60px;
                opacity: 1;
                position: relative;
                display: flex;
                flex-direction: row;
                justify-content: flex-end;
                align-items: center;
              }
              li {
                font-size: 1rem;
                padding: 0 10px;
              }
            }
          `}
        </style>
      </div>
    </>
  );
}
