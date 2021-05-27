import Link from 'next/link'
import { useRouter } from 'next/router'
import Burger from './Burger'
import { useState } from 'react'

export default function Navigation() {
  const router = useRouter()
  const [active, setActive] = useState(false)
  return (
    <>
      <Burger active={active} onClick={() => setActive(!active)} />
      <div className={'container ' + (active ? 'active' : '')}>
        <ul>
          <li>
            <Link href="/">
              <a className={router.pathname === '/offer' ? 'active' : null}>Offer</a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a
                className={
                  router.pathname.startsWith('/projects') ? 'active' : null
                }
              >
                Projects
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className={router.pathname === '/offer' ? 'active' : null}>How it works</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className={router.pathname === '/' ? 'active' : null}>about</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className={router.pathname === '/contact' ? 'active' : null}>Contact</a>
            </Link>
          </li>
        </ul>
        <style jsx>
          {`
            .container {
              width: 100vw;
              height:60px;
            }
            ul {
              position:absolute;
              left:0;
              top:0;
              margin:0;
              display:flex;
              flex-direction: column;
              justify-content:center;
              align-content:center;
              display:none;
              opacity: 0;
              transition: opacity 0.3s;
              width:100vw;
              height:100vh;
              // background:rgba(256,256,256, 0.8);
              list-style: none;
            }
            .active ul {
              background: rgba(255,255,255,0.95);
              opacity: 1;
              display:flex;
              transition: opacity 0.s;
              transform:ease-in-out 1s;
            }
            li {
              font-size: 2rem;
              text-align:center;
         
            }
            li:last-child {
              margin-bottom: 0;
            }
            .active {
              color: #ffa4c1;
            }

            @media (min-width: 769px) {
              .container {
                width:100%;
                padding-right:50px;
              }
              ul {
                padding:0;
                margin:0;
                width:100%;
                height:60px;
                opacity: 1;
                position:relative;
                display:flex;
                flex-direction:row;
                justify-content:flex-end;
                align-items:center;
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
  )
}
