import React from 'react'

const Cards = (props) => {
  return (
    <div class="nft-card">

      <div class="image-section">
        <img src={props.imagePrompt} alt="" />
        <span class="price">{props.price}</span>
      </div>
      <div class="content">
        <h2>{props.title}</h2>
        <div class="brand">
          <span class="logo">H</span>
          {props.collection}
        </div>
        <div class="stats">
          <div>
            <p class="label">{props.avgEarnings}</p>
            <p class="value">{props.avgEarnings}</p>
          </div>
          <div>
            <p class="label">Distribution %</p>
            <div class="dist">
              <span class="dot green"></span>{props.distribution.green}
              <span class="divider"></span>
              {props.distribution.purple}<span class="dot purple"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
