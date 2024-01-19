import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

import youtube01 from "../assets/img/youtube01.jpg";
import youtube02 from "../assets/img/youtube02.jpg";
import youtube03 from "../assets/img/youtube03.jpg";

import port from "../assets/img/port.jpg";
import port02 from "../assets/img/port02.jpg";
import port03 from "../assets/img/port03.jpg";

import movie from "../assets/img/movie.jpg";
import movie02 from "../assets/img/movie02.jpg";

import petpar from "../assets/img/petpar.jpg";
import petpar02 from "../assets/img/petpar02.jpg";
import petpar03 from "../assets/img/petpar03.jpg";

import quiz from "../assets/img/quiz.jpg";
import quiz02 from "../assets/img/quiz02.jpg";
import quiz03 from "../assets/img/quiz03.jpg";

const Port = () => {
  const [hoverEffects, setHoverEffects] = useState({});

  const handleMouseOver = (item, effect) => {
    setHoverEffects({ ...hoverEffects, [item]: effect });
  };

  const handleMouseOut = (item) => {
    setHoverEffects({ ...hoverEffects, [item]: null });
  };

  const getStyle = (item) => {
    const baseStyle = {
      transition: "transform 0.4s ease",
    };
    const effect = hoverEffects[item];

    switch (effect) {
      case "up":
        return { ...baseStyle, transform: "translateY(-100%)" };
      case "down":
        return { ...baseStyle, transform: "translateY(100%)" };
      default:
        return baseStyle;
    }
  };

  return (
    <section id="section05">
      <h3 className="small">portfolio</h3>
      <div className="work__wrap">
        <div className="work__item w1">
          <div className="left">
            <div className="work__text">
              <div>
                This is an abandoned animal promotion site using
                <i
                  className="green"
                  onMouseOver={() => handleMouseOver("w1", "down")}
                  onMouseOut={() => handleMouseOut("w1")}
                >
                  React
                </i>
                , where you can collect information on various shelters, and a
                chat window using
                <i
                  className="green"
                  onMouseOver={() => handleMouseOver("w1", "up")}
                  onMouseOut={() => handleMouseOut("w1")}
                >
                  socket.io
                </i>
                has also been implemented.
              </div>
              <div className="kor">
                팀프로젝트로 진행된 리액트 사이트입니다.
              </div>
            </div>
            <div className="work__info">
              <Link to="/">VIEW SITE : https://cssgrLinkdient.io/</Link>
              <Link to="https://github.com/chfhr22/petpar">
                CODE VIEW : https://github.com/chfhr22/petpar
              </Link>
            </div>
          </div>

          <div className="right">
            <div className="work__img">
              <div className="img">
                <img
                  style={getStyle("w1")}
                  src={petpar02}
                  alt="petpar위치찾기"
                />
                <img style={getStyle("w1")} src={petpar} alt="petpar메인" />
                <img style={getStyle("w1")} src={petpar03} alt="petpar정보" />
              </div>
            </div>
          </div>
        </div>

        <div className="work__item w2">
          <div className="left">
            <div className="work__text">
              <div>
                The site was built with
                <i
                  className="green"
                  onMouseOver={() => handleMouseOver("w2", "down")}
                  onMouseOut={() => handleMouseOut("w2")}
                >
                  PHP
                </i>
                and data was handled with
                <i
                  className="green"
                  onMouseOver={() => handleMouseOver("w2", "up")}
                  onMouseOut={() => handleMouseOut("w2")}
                >
                  MySQL
                </i>
                Data includes member information, quizzes, rankings, posts, etc.
              </div>
              <div className="kor">
                PHP와 MySQL을 활용한 퀴즈풀이 사이트입니다.
              </div>
            </div>
            <div className="work__info">
              <Link to="https://github.com/chfhr22/teamPHP">
                VIEW SITE : https://github.com/chfhr22/teamPHP
              </Link>
              <Link to="http://chfhrdk1.dothome.co.kr/php/home/main.php">
                CODE VIEW : http://chfhrdk1.dothome.co.kr/php/home/main.php
              </Link>
            </div>
          </div>

          <div className="right">
            <div className="work__img">
              <div className="img">
                <img style={getStyle("w2")} src={quiz02} alt="quiz" />
                <img style={getStyle("w2")} src={quiz} alt="quiz main" />
                <img style={getStyle("w2")} src={quiz03} alt="quiz comu" />
              </div>
            </div>
          </div>
        </div>

        <div className="work__item w3">
          <div className="left">
            <div className="work__text">
              <div>
                I learned how to load and distribute data using YouTube.Call the
                <i
                  className="green"
                  onMouseOver={() => handleMouseOver("w3", "down")}
                  onMouseOut={() => handleMouseOut("w3")}
                >
                  {" "}
                  YouTube API
                </i>{" "}
                and display it on the screen through a loop. It was written with
                every detail in mind.
              </div>
              <div className="kor">
                Youtube API를 활용한 요리유튜브 사이트입니다.
              </div>
            </div>
            <div className="work__info">
              <Link to="/">VIEW SITE : https://cssgrLinkdient.io/</Link>
              <Link to="https://github.com/chfhr22/youtube-project">
                CODE VIEW : https://github.com/chfhr22/youtube-project
              </Link>
            </div>
          </div>

          <div className="right">
            <div className="work__img" initial="hidden">
              <div className="img">
                <img
                  style={getStyle("w3")}
                  src={youtube02}
                  alt="youtube video"
                />
                <img
                  style={getStyle("w3")}
                  src={youtube01}
                  alt="youtube main"
                />
                <img
                  style={getStyle("w3")}
                  src={youtube03}
                  alt="youtube channel"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="work__item w4">
          <div className="left">
            <div className="work__text">
              <div>
                Developed reusable UI components using
                <i
                  className="green"
                  onMouseOver={() => handleMouseOver("w4", "down")}
                  onMouseOut={() => handleMouseOut("w4")}
                >
                  {" "}
                  Vue.js
                </i>{" "}
                component based system.This site provides various movie
                information to help you make a choice.
              </div>
              <div className="kor">
                Vue와 TMDB api를 활용한 영화 추천 사이트입니다.
              </div>
            </div>
            <div className="work__info">
              <Link to="/">VIEW SITE : https://cssgrLinkdient.io/</Link>
              <Link to="https://github.com/chfhr22/movie-project">
                CODE VIEW : https://github.com/chfhr22/movie-project
              </Link>
            </div>
          </div>
          <div className="right">
            <div className="work__img" initial="hidden">
              <div className="img">
                <img style={getStyle("w4")} src={movie02} alt="movie detail" />
                <img style={getStyle("w4")} src={movie} alt="movie main" />
                <img style={getStyle("w4")} src={movie} alt="movie main" />
              </div>
            </div>
          </div>
        </div>

        <div className="work__item w5">
          <div className="left">
            <div className="work__text">
              <div>
                This is a portfolio site created with
                <i
                  className="green"
                  onMouseOver={() => handleMouseOver("w5", "down")}
                  onMouseOut={() => handleMouseOut("w5")}
                >
                  {" "}
                  React
                </i>
                , and has a rich visual feel with various animations using
                <i
                  className="green"
                  onMouseOver={() => handleMouseOver("w5", "up")}
                  onMouseOut={() => handleMouseOut("w5")}
                >
                  {" "}
                  framer-motion and gsap
                </i>
              </div>
              <div className="kor">React를 활용한 포트폴리오 사이트입니다.</div>
            </div>
            <div className="work__info">
              <Link to="https://green-port.fly.dev/">
                VIEW SITE : https://green-port.fly.dev/
              </Link>
              <Link to="https://github.com/chfhr22/green-port">
                CODE VIEW : https://github.com/chfhr22/green-port
              </Link>
            </div>
          </div>

          <div className="right">
            <div className="work__img" initial="hidden">
              <div className="img">
                <img style={getStyle("w5")} src={port02} alt="port" />
                <img style={getStyle("w5")} src={port} alt="port" />
                <img style={getStyle("w5")} src={port03} alt="port" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Port;
