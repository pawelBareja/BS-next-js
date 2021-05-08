import Link from "next/link";
import { useRouter } from "next/router";
import Burger from "./Burger";
import { useState } from "react";

export default function Navigation() {
  const router = useRouter();
  const [active, setActive] = useState(false);
  return (
    <>
      <Burger active={active} onClick={() => setActive(!active)} />
      <div className={"container " + (active ? "active" : "")}>
        <ul>
          <li>
            <Link href="/">
              <a className={router.pathname === "/offer" ? "active" : null}>Offer</a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a
                className={
                  router.pathname.startsWith("/projects") ? "active" : null
                }
              >
                Projects
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className={router.pathname === "/offer" ? "active" : null}>How it works</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className={router.pathname === "/" ? "active" : null}>about</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className={router.pathname === "/contact" ? "active" : null}>Contact</a>
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
              display:flex;
              flex-direction: column;
              justify-content:center;
              align-content:center;
          
              opacity: 0;
              transition: opacity 0.3s;
              width:100vw;
              height:100vh;
              background:rgba(256,256,256, 0.8);
              list-style: none;
            }
            .active ul {
              opacity: 1;
            
              transition: opacity 0.3s;
              transform:ease-in-out 1s;
            }
            li {
              // margin-bottom: 1.75rem;
              font-size: 2rem;
              text-align:center;
              // padding: 0 1.5rem 0 0;
            }
            li:last-child {
              margin-bottom: 0;
            }
            .active {
              color: #222;
            }

            @media (min-width: 769px) {
              .container {
                width:100%;
                background-color:#fff;
                display: block;
              }
              ul {
                padding:0;
                margin:0;
                width:100%;
                height:60px;
                opacity: 1;
                position:relative;
                display: block;
                display:flex;
                flex-direction:row;
                justify-content:space-evenly;
                align-items:center;
              }
              li {
                font-size: 1rem;
                padding: 0;
              }
            }
          `}
        </style>
      </div>
    </>
  );
}