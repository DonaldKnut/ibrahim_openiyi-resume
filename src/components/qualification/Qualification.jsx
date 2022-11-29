import React from "react";
import { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <>
      <section>
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Personal Journey</span>
      </section>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>
      </div>

      <div className="qualification__sections">
        <div className="qualification__content">
          <div className="qualification__data qualification__data-one">
            <div>
              <h3 className="qualification__title job-color"> Web Development</h3>
              <span className="qualification__subtitle">
                CustomerWorth LTD - Sierra Leone
              </span>
              <div className="qualification__calender">
                <i class="uil uil-calendar-alt"></i>
                November 2021 - June 2022
              </div>
            </div>

                <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                </div>
            </div>
            <div className="qualification__data">
                <div></div>
                <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
                </div>

                <div>
                <h3 className="qualification__title job-color">Artist</h3>
                <span className="qualification__subtitle">
                    Philia Technologioes - Nigeria
                </span>
                <div className="qualification__calender">
                    <i class="uil uil-calendar-alt"></i>
                    August 2018 - December 2020
                </div>
                </div>
            </div>
            <div className="qualification__data">
                <div>
                <div></div>
                <h3 className="qualification__title job-color">UX Designer</h3>
                <span className="qualification__subtitle">
                    Nigeria - Institute
                </span>
                <div className="qualification__calender">
                    <i class="uil uil-calendar-alt"></i>
                    January 2021 - December 2021
                </div>
                </div>

                <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
                </div>
            </div>
            <div className="qualification__data">
                <div></div>
                <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
                </div>
                <div>
                <h3 className="qualification__title job-color">Graphics Designer</h3>
                <span className="qualification__subtitle">
                    Freelance
                </span>
                <div className="qualification__calender">
                    <i class="uil uil-calendar-alt"></i>
                    May 2018 - June 2020
                </div>
                </div>
            </div>
            </div>     
        </div>
    </>)
};

export default Qualification;
