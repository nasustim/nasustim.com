import React from 'react'
import { Link } from 'gatsby'

import TopImg from '../../components/topImg'

const LineImgList = (props) => (
  <React.Fragment>
    <div className={'line'}>
      {props.works.map((work) => (
        <section className={'img-container'} key={`line-sec--${work.linkUri}`}>
          <Link className={'link'} to={work.linkUri} key={`link--${work.linkUri}`}>
            <TopImg imgSrc={work.imgSrc} device={props.device} key={`top-img--${work.linkUri}`} title={work.title} />
          </Link>
        </section>
      ))}
    </div>
    <style jsx>{`
      .line {
        display: flex;
        width: calc(100% - 1.3px);
        flex-direction: column;
        align-items: flex-start;

        @media screen and (max-width: $max-tablet-size) {
          width: calc(100% - 2px);
        }
      }
      .img-container {
        position: relative;
        display: flex;
        width: 100%;
        margin: 1.3px 0;
        padding: 0;

        @media screen and (max-width: $max-tablet-size) {
          margin: 2px 0;
        }
      }
      .link {
        box-shadow: none;
        text-decoration: none;
      }
    `}</style>
  </React.Fragment>
)

export default LineImgList
