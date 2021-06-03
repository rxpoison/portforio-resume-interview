import React from "react";

// reactstrap components
import { Container } from "reactstrap";
//js
import react from "assets/img/dev-logo/react.svg"
import nodeJS from "assets/img/dev-logo/node-js.svg"
import javascript from "assets/img/dev-logo/javascript.svg"

//php
import laravel from "assets/img/dev-logo/laravel.svg"
import lumen from "assets/img/dev-logo/lumen.svg"
import codeigniter from "assets/img/dev-logo/codeigniter.svg"

//etc
import matUI from "assets/img/dev-logo/mat-ui.svg"
import bootstrap from "assets/img/dev-logo/bootstrap-4.svg"
import sass from "assets/img/dev-logo/sass.svg"
import googleCloud from "assets/img/dev-logo/google-cloud.svg"
import digitalOcean from "assets/img/dev-logo/digitalocean.svg"
import linux from "assets/img/dev-logo/linux.svg"
import docker from "assets/img/dev-logo/docker.png"
import github from "assets/img/dev-logo/github.png"
import nginx from "assets/img/dev-logo/nginx.svg"

function ProfilePageHeader(data) {
  const profile = data.data
  const pageHeader = React.createRef()
  const canvasRef = React.createRef()
  let canvas
  let ctx
  let fontSize = 10
  let columns
  const lettersEn = 'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ'
  // const letterJP = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンあいうえおかきくけこがぎぐげごさしすせそざじずぜぞたちつてとだぢづでどなにぬねのはひふへほばびぶべぼぱぴぷぺぽまみむめもやゆよらりるれろわゑを'
  var letters = lettersEn
  let drops = []

  const loadTheMath = () => {
    canvas = canvasRef.current
    ctx = canvas.getContext('2d')
   
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    
    columns = canvas.width / fontSize
    letters = letters.split('')
    
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }
   setInterval(draw, 33)
  }

  React.useEffect(() => {
    loadTheMath()
  })

  const draw = () => {
     ctx.font = "10px Montserrat";
    ctx.fillStyle = 'rgba(0, 0, 0, .1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < drops.length; i++) {
      var text = letters[Math.floor(Math.random() * letters.length)];
      ctx.fillStyle = '#0f0';
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      drops[i]++;
      if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
        drops[i] = 0;
      }
    }
  }
  
  return (
    <>
      <div
        className="page-header clear-filter page-header-small"
        filter-color="blue"
      >
        <div
          className="page-header-image"
          ref={pageHeader}
        >
          <canvas ref={canvasRef}>
            
          </canvas>
        </div>
        <Container>
          <div className="photo-container">
            <img alt="..." src={require("assets/img/chammy-profile.jpeg").default}></img>
          </div>
          <h3 className="title">{profile.fullname}</h3>
          <p className="category">{profile.position}</p>
          <div className="content">
            <ul className="content-dev-skill d-flex justify-content-center">
              <li>
                <img className="dev-logo" src={react} alt="react logo" />
              </li>
              <li>
                <img className="dev-logo" src={nodeJS} alt="node js logo" />
              </li>
              <li>
                <img className="dev-logo" src={javascript} alt="javascript logo" />
              </li>
              <li>
                <img className="dev-logo" src={laravel} alt="laravel logo" />
              </li>
              <li>
                <img className="dev-logo" src={lumen} alt="lumen logo" />
              </li>
              <li>
                <img className="dev-logo" src={codeigniter} alt="codeigniter logo" />
              </li>
            </ul>
            <ul className="content-dev-skill d-flex justify-content-center">
              <li>
                <img className="dev-logo" src={matUI} alt="matUI logo" />
              </li>
              <li>
                <img className="dev-logo" src={bootstrap} alt="bootstrap logo" />
              </li>
              <li>
                <img className="dev-logo" src={sass} alt="sass logo" />
              </li>
              <li>
                <img className="dev-logo" src={googleCloud} alt="googleCloud logo" />
              </li>
              <li>
                <img className="dev-logo" src={digitalOcean} alt="digitalOcean logo" />
              </li>
            </ul>
            <ul className="content-dev-skill d-flex justify-content-center">
              <li>
                <img className="dev-logo" src={github} alt="github logo" />
              </li>
              <li>
                <img className="dev-logo" src={linux} alt="linux logo" />
              </li>
              <li>
                <img className="dev-logo" src={docker} alt="docker logo" />
              </li>
              <li>
                <img className="dev-logo" src={nginx} alt="nginx logo" />
              </li>
            </ul>
          </div>
        </Container>
      </div>
    </>
  );
}

export default ProfilePageHeader;
