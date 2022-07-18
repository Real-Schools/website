import React from "react";
import Icofont from "react-icofont";
import dataSocial from "../../data/Social/social-footer.json";

const FooterCopyright = () => (
  <div className="footer-copyright">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-xs-12">
          <ul className="social-media">
            {dataSocial
              .filter((v, i) => i < 5)
              .map((item) => (
                <li key={item.id}>
                  <a href={item.link}>
                    <Icofont icon={item.icon} />
                  </a>
                </li>
              ))}
          </ul>
        </div>
        <div className="col-md-6 col-xs-12">
          <div className="copy-right text-right">
            &copy; {new Date().getFullYear()} Real Schools
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default FooterCopyright;
