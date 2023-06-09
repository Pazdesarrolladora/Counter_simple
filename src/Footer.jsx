import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialGoogle } from "react-icons/sl";

const Footer = () => {
  const url1 = "https://github.com/Pazdesarrolladora";
  const url2 = 'https://www.linkedin.com/in/paz-valenzuela/"';
  const url3 =
    "https://capitalhumano.emol.com/7620/los-beneficios-contratar-una-mujer-programadora/";
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="social-container text-center">
            <button className="btn btn-ligth">
              <a href={url1}>
                <AiFillGithub />{" "}
              </a>
            </button>
            <button className="btn btn-ligth">
              <a href={url2}>
                <SlSocialLinkedin />{" "}
              </a>
            </button>
            <button className="btn btn-ligth">
              <a href={url3}>
                <SlSocialGoogle />{" "}
              </a>
            </button>
            <br />
            <span className="copy small">&copy; 2023 Paz Valenzuela. Todos los derechos reservados.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
