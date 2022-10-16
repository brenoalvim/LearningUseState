import styled from 'styled-components'

export const Div = styled.div`
  body {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .background {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
  }

  .outer-div,
  .inner-div {
    height: 450px;
    max-width: 300px;
    margin: 0 auto;
    position: relative;
  }

  .outer-div {
    perspective: 900px;
    perspective-origin: 50% calc(50% - 18em);
  }

  .inner-div {
    margin: 0 auto;
    border-radius: 5px;
    font-weight: 400;
    color: #071011;
    font-size: 1rem;
    text-align: center;
    transition: all 0.6s cubic-bezier(0.8, -0.4, 0.2, 1.7);
    transform-style: preserve-3d;
  }
  .inner-div:hover .social-icon {
    opacity: 1;
    top: 0;
  }

  .outer-div:hover .inner-div {
    transform: rotateY(180deg);
  }

  .front,
  .back {
    position: relative;
    top: 0;
    left: 0;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .front {
    cursor: pointer;
    height: 100%;
    background: #fff;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 5px;
    box-shadow: 0 15px 10px -10px rgba(0, 0, 0, 0.5),
      0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  }

  .front__bkg-photo {
    position: relative;
    height: 150px;
    width: 300px;
    background: url('https://images.unsplash.com/photo-1511207538754-e8555f2bc187?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=88672068827eaeeab540f584b883cc66&auto=format&fit=crop&w=1164&q=80')
      no-repeat;
    background-size: cover;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    overflow: hidden;
    border-top-right-radius: 3px;
    border-top-left-radius: 3px;
  }
  .front__bkg-photo img {
    width: 100%;
    height: 100%;
  }
  .front__bkg-photo:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .front__face-photo {
    position: relative;
    top: -60px;
    height: 120px;
    width: 120px;
    margin: 0 auto;
    border-radius: 50%;
    border: 5px solid #fff;
    background-size: contain;
    overflow: hidden;
  }

  .front__face-photo img {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    border-radius: 50%;
  }

  .front__text {
    position: relative;
    top: -55px;
    margin: 0 auto;
    font-family: 'Montserrat';
    font-size: 18px;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  .front__text .front__text-header {
    font-weight: 700;
    font-family: 'Oswald';
    text-transform: uppercase;
    font-size: 20px;
  }
  .front__text .front__text-para {
    position: relative;
    top: -5px;
    color: #000;
    font-size: 14px;
    letter-spacing: 0.4px;
    font-weight: 400;
    font-family: 'Montserrat', sans-serif;
  }
  .front__text .front-icons {
    position: relative;
    top: 0;
    font-size: 14px;
    margin-right: 6px;
    color: gray;
  }
  .front__text .front__text-hover {
    position: relative;
    top: 10px;
    font-size: 10px;
    color: tomato;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.4px;
    border: 2px solid tomato;
    padding: 8px 15px;
    border-radius: 30px;
    background: tomato;
    color: #fff;
  }

  .back {
    transform: rotateY(180deg);
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #071011;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .social-media-wrapper {
    font-size: 36px;
  }
  .social-media-wrapper .social-icon {
    position: relative;
    top: 20px;
    margin-left: 5px;
    margin-right: 5px;
    opacity: 0;
    color: #fff;
    transition: all 0.4s cubic-bezier(0.3, 0.7, 0.1, 1.9);
  }
  .social-media-wrapper .social-icon:nth-child(1) {
    transition-delay: 0.6s;
  }
  .social-media-wrapper .social-icon:nth-child(2) {
    transition-delay: 0.7s;
  }
  .social-media-wrapper .social-icon:nth-child(3) {
    transition-delay: 0.8s;
  }
  .social-media-wrapper .social-icon:nth-child(4) {
    transition-delay: 0.9s;
  }

  .fab {
    position: relative;
    top: 0;
    left: 0;
    transition: all 200ms ease-in-out;
  }

  .fab:hover {
    top: -5px;
  }
`
