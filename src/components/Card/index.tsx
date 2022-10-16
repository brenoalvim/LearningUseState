import { useEffect } from 'react'
import { Div } from './styles'

interface cardProps {
  name: string
  github: string
  local: string
  instagram: string
}

export default function Card(props: cardProps) {
  return (
    <>
      <Div>
        <div className="outer-div">
          <div className="inner-div">
            <div className="front">
              <div className="front__bkg-photo">
                {/* <img src={`https://github-readme-stats.vercel.app/api/top-langs?username=${props.github}&show_icons=true&locale=en&layout=compact&hide_border=true&theme=react&langs_count=10`} alt="" /> */}
              </div>
              <div className="front__face-photo">
                <img src={`https://github.com/${props.github}.png`} alt="" />
              </div>
              <div className="front__text">
                <h3 className="front__text-header">{props.name}</h3>
                <p className="front__text-para">
                  <i className="fas fa-map-marker-alt front-icons"></i>
                  {props.local}
                </p>

                <span className="front__text-hover">Hover to Find Me</span>
              </div>
            </div>
            <div className="back">
              <div className="social-media-wrapper">
                <a
                  href={`https://github.com/${props.github}`}
                  target="_blank"
                  className="social-icon"
                >
                  <i className="fab fa-github-square" aria-hidden="true"></i>
                </a>
                <a
                  href={`https://instagram.com/${props.instagram}`} target="_blank"
                  className="social-icon"
                >
                  <i className="fab fa-instagram" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Div>
    </>
  )
}
