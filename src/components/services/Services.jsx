import React from "react";
import { useState } from "react";
import "./services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <>
      <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What i Offer</span>

        <div className="services__container container grid">
          <div className="services__content">
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              User Experience <br />
              Designer{" "}
            </h3>

            <span
              className="services__button"
              onClick={() => {
                toggleTab(1);
              }}
            >
              View More{" "}
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div
              className={
                toggleState === 1
                  ? "services__modal active-modal"
                  : "services__modal"
              }
            >
              <div className="services__modal-content">
                <i
                  className="uil uil-times services__modal-close"
                  onClick={() => {
                    toggleTab(0);
                  }}
                ></i>

                <h3 className="services__modal-title">
                  User Experience Designer
                </h3>
                <p className="services__modal-description">
                  Service with more than 2 years of experience.providing quality
                  works to clients and companies
                </p>
                <div className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Understand product specifications and user psychology
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      create UX element interactions
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      development of user interface
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Design mockups for company products
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Create personas through user research and data
                    </p>
                  </li>
                </div>
              </div>
            </div>
          </div>
          <div className="services__content">
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              Graphics <br />
              Designer
            </h3>

            <span
              className="services__button"
              onClick={() => {
                toggleTab(2);
              }}
            >
              View More{" "}
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div
              className={
                toggleState === 2
                  ? "services__modal active-modal"
                  : "services__modal"
              }
            >
              <div className="services__modal-content">
                <i
                  className="uil uil-times services__modal-close"
                  onClick={() => {
                    toggleTab(0);
                  }}
                ></i>

                <h3 className="services__modal-title">Graphics Designer</h3>
                <p className="services__modal-description">
                  Service with more than 4 years of experience.providing quality
                  works to clients and companies
                </p>
                <div className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Study design briefs and determine requirements
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Schedule projects and define budget constraints
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Develop illustrations, logos and other designs using
                      software or by hand
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Use the appropriate colors and layouts for each graphic
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Ensure final graphics and layouts are visually appealing
                      and on-brand
                    </p>
                  </li>
                </div>
              </div>
            </div>
          </div>
          <div className="services__content">
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">
              Web <br /> Developer
            </h3>

            <span
              className="services__button"
              onClick={() => {
                toggleTab(3);
              }}
            >
              View More{" "}
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div
              className={
                toggleState === 3
                  ? "services__modal active-modal"
                  : "services__modal"
              }
            >
              <div className="services__modal-content">
                <i
                  className="uil uil-times services__modal-close"
                  onClick={() => {
                    toggleTab(0);
                  }}
                ></i>

                <h3 className="services__modal-title">Web Developer</h3>
                <p className="services__modal-description">
                  Service with more than 2 years of experience.providing quality
                  works to clients and companies
                </p>
                <div className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Write well designed, testable, efficient code by using
                      best software development practices
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Create website layout plus user interfaces by using standard
                      HTML, CSS and Javascript practices
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Stay plugged into emerging technologies and industry trends
                      to apply principles gained from them into operations and activities
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Integrate data from various back-end services and
                      databases
                    </p>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
