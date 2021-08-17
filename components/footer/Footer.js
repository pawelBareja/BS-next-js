import React from 'react';
import Copyright from './Copyright';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { menu_items } from '../../data/menu_items';
import { projectItems } from '../../components/projectGrid/projectItems';
import { company_data } from '../../data/company_data';

const menuList = menu_items.map((item) => (
  <li key={item.page}>
    <Link href={`/${item.path}`}>{item.page}</Link>
  </li>
));

const projectList = projectItems.map((item) => (
  <li key={item.name}>
    <Link href={`/projects/${item.link}`}>{item.name}</Link>
  </li>
));

const contactItems = company_data.map((item) => (
  <li key={item.name}>{item.name}</li>
));

const Footer = () => {
  const router = useRouter();
  console.log(router.asPath);
  return (
    <>
      <div className="footer">
        <div className="footer__grid">
          <div className="footer__item">
            <Link href="/">
              <img
                src="/images/logo.png"
                width={100}
                height={50}
                alt={'logo bareja studio'}
              />
            </Link>
          </div>
          <div className="footer__item">
            <h3>Quick Menu</h3>
            <ul>{menuList}</ul>
          </div>
          <div className="footer__item">
            <h3>Favorite Projects</h3>
            <ul>{projectList}</ul>
          </div>
          <div className="footer__item">
            <h3>Quick Contact</h3>
            <ul>{contactItems}</ul>
          </div>
        </div>

        <Copyright />
      </div>
      <style jsx>
        {`
          .footer {
            padding-top: 10px;
            margin-top: 50px;
          }
          .footer__grid {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            flex-wrap: wrap;
            padding: 20px 0 5px;
            border: 1px solid #222;
            border-left: none;
            border-right: none;
          }
          @media (max-width: 768px) {
            .footer__grid {
              flex-direction: column;
              justify-content: flex-start;
              align-items: flex-start;
            }
          }
          .footer__item {
            flex-grow: 1;
            padding: 5px;
          }
          .footer_item ul li a {
            text-transform: capitalise;
            color: #222;
          }
          h3 {
            font-size: 14px;
            text-transform: uppercase;
          }
        `}
      </style>
    </>
  );
};

export default Footer;
