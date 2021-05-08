import { useState, useEffect } from "react";
import Navigation from "./Navigation"

export default function Navbar() {

    const [navFixed, setNavFixed] = useState(true);

    const toggleMenu = () => {
        let distanceFromTop = window.pageYOffset

        return function () {
            let newDistanceFromTop = window.pageYOffset
            if (newDistanceFromTop < 50 || distanceFromTop >= newDistanceFromTop) {
                setNavFixed(true)
            } else {
                setNavFixed(false)
            }
            distanceFromTop = newDistanceFromTop
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", toggleMenu())
        return window.removeEventListener("scroll", toggleMenu())
    }, [])

    return (
        <>
            <nav className={navFixed ? "nav" : "nav hide"}>
                <img src="/images/logo.svg" width={100} height={50} alt={"logo bareja studio"} />
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
            width: 100%;
            height: 60px;
            margin: 0 auto;
            padding: 0 10px;
            background: #fff;
            box-shadow: 0 3px 10px 0 rgba(93, 110, 139, 0.2);
            transition: 1s;
          }
          .hide {
            transform: translateY(-60px);
          }
          main {
            margin-top:80px;
            }
          }
        `}
            </style>
            <style global jsx>
                {`
          ul{
            padding-left:0;
            list-style-type:none;
          }
        `}
            </style>
        </>
    );
}
