import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/footer/seven.scss";

// const footerLinks = ["Overview", "Features", "Pricing", "Careers", "Help", "Privacy"]

const footerLinks = [
  {
    name: "About us",
    link: "/about",
  },
  {
    name: "Privacy",
    link: "/privacy",
  },
  {
    name: "Terms of Service",
    link: "/tos",
  },
  {
    name: "Forex",
    link: "/forex",
  },
  {
    name: "Crypto",
    link: "/crypto",
  },
  {
    name: "Stocks",
    link: "/stocks",
  },
];
const FooterSeven = () => {
  return (
    <>
      {/* <div className="footer__seven__cta__container">
            <div className='footer__seven__cta__wrapper'>
                <h1 className='footer__seven__cta__title'>Open an account now</h1>
                <p className='footer__seven__cta__text'>In order to verify your identity, a government issued ID card with your photo, name, and date of birth is required. Please have the documents prepared in advance.</p>
                <span className='footer__seven__buttons'>
                    <button className="footer__seven__button__white">Learn more</button>
                    <button className="footer__seven__button__blue">Get started</button>
                </span>
            </div>


            <hr className='footer__seven__hr'/>
        </div> */}

      <div className="footer__seven__container">
        <div className="footer__seven__wrapper">
          <span className="footer__seven__brand">
            <img
              src="/logo-full.svg"
              alt="logo"
              className="footer__seven__brand__logo"
            />

            {/* <p className='footer__seven__brand__text'>Trading technology that has your back.</p> */}

            <ul className="footer__seven__brand__links">
              {footerLinks.map((link) => (
                <Link to={link.link} key={link.name}>
                  <li className="footer__seven__brand__link">
                    {" "}
                    <p>{link.name}</p>{" "}
                  </li>
                </Link>
              ))}
            </ul>
          </span>

          <span className="footer__seven__disclaimer">
            {" "}
            The risk of loss in online trading of stocks, options, futures,
            currencies, foreign equities, and fixed Income can be substantial.
            <br />
            <br />
            Before trading, clients must read the relevant risk disclosure
            statements on our Warnings and Disclosures page. Trading on margin
            is only for experienced investors with high risk tolerance. You may
            lose more than your initial investment. For additional information
            about rates on margin loans, please see Margin Loan Rates. Security
            futures involve a high degree of risk and are not suitable for all
            investors. The amount you may lose may be greater than your initial
            investment.
            <br />
            <br />
            For trading security futures, read the Security Futures Risk
            Disclosure Statement. Structured products and fixed income products
            such as bonds are complex products that are more risky and are not
            suitable for all investors. Before trading, please read the Risk
            Warning and Disclosure Statement.
          </span>

          <div style={{ color: "white", display: "grid", gap: "8px" }}>
            <p>Contact us</p>
            <a
              className="footer__seven__disclaimer"
              style={{
                fontWeight: "500",
                color: "white",
                display: "flex",
                gap: "8px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1024"
                height="1024"
                viewBox="0 0 1024 1024"
                style={{ width: "32px", height: "auto", borderRadius: "4px" }}
              >
                <path fill="#3a76f0" d="M0,0v1024h1024V0H0z" />
                <path
                  fill="#ffffff"
                  d="M427.5,170.3l7.9,32A319.6,319.6,0,0,0,347,238.9l-16.9-28.3A347.6,347.6,0,0,1,427.5,170.3Zm169,0-7.9,32A319.6,319.6,0,0,1,677,238.9l17.1-28.3A350.1,350.1,0,0,0,596.5,170.3ZM210.6,330a349.5,349.5,0,0,0-40.3,97.5l32,7.9A319.6,319.6,0,0,1,238.9,347ZM193,512a318.5,318.5,0,0,1,3.6-47.8l-32.6-5a352,352,0,0,0,0,105.5l32.6-4.9A319.5,319.5,0,0,1,193,512ZM693.9,813.3,677,785.1a317.8,317.8,0,0,1-88.3,36.6l7.9,32A350.3,350.3,0,0,0,693.9,813.3ZM831,512a319.5,319.5,0,0,1-3.6,47.8l32.6,4.9a352,352,0,0,0,0-105.5l-32.6,5A318.5,318.5,0,0,1,831,512Zm22.7,84.4-32-7.9A319,319,0,0,1,785.1,677l28.3,17A348.9,348.9,0,0,0,853.7,596.4Zm-293.9,231a319.1,319.1,0,0,1-95.6,0L459.3,860a351.3,351.3,0,0,0,105.4,0Zm209-126.2a318.1,318.1,0,0,1-67.6,67.5l19.6,26.6A355.1,355.1,0,0,0,795.4,721Zm-67.6-446a318.6,318.6,0,0,1,67.6,67.6L795.4,303A354.6,354.6,0,0,0,721,228.6Zm-446,67.6a318.6,318.6,0,0,1,67.6-67.6L303,228.6A354.6,354.6,0,0,0,228.6,303ZM813.4,330l-28.3,17a317.8,317.8,0,0,1,36.6,88.3l32-7.9A348.9,348.9,0,0,0,813.4,330ZM464.2,196.6a319.1,319.1,0,0,1,95.6,0l4.9-32.6a351.3,351.3,0,0,0-105.4,0ZM272.1,804.1,204,819.9l15.9-68.1-32.1-7.5-15.9,68.1a33,33,0,0,0,24.6,39.7,34.5,34.5,0,0,0,15,0l68.1-15.7Zm-77.5-89.2,32.2,7.4,11-47.2a316.2,316.2,0,0,1-35.5-86.6l-32,7.9a353.3,353.3,0,0,0,32.4,83.7Zm154,71.4-47.2,11,7.5,32.2,34.7-8.1a349,349,0,0,0,83.7,32.4l7.9-32a316.7,316.7,0,0,1-86.3-35.7ZM512,226c-158,.1-285.9,128.2-285.9,286.1a286.7,286.7,0,0,0,43.9,152L242.5,781.5,359.8,754c133.7,84.1,310.3,44,394.4-89.6S798.3,354.2,664.7,270A286.7,286.7,0,0,0,512,226s"
                />
              </svg>

              <p>+14523314129</p>
            </a>
          </div>

          <span className="footer__seven__bottom">
            <hr />

            <p className="footer__seven__reserved">
              © {new Date().getFullYear()} Universal Trade Market. All rights
              reserved.
            </p>
          </span>
        </div>
      </div>
    </>
  );
};

export default FooterSeven;
