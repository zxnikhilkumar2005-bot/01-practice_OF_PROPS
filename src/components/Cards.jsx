import React from 'react'

const Cards = () => {
    return (
<div class="cards-container">

  <div class="nft-card">
    <div class="image-section">

      <img src="https://i.pinimg.com/736x/80/0c/0d/800c0da79c5963e0855b4c6b4790babd.jpg" alt="" />
      <span class="price">0.5 ETH</span>
    </div>

    <div class="content">
      <h2>HAPE #67</h2>
      <div class="brand">
        <span class="logo">H</span>
        HAPE PRIME
      </div>

      <div class="stats">
        <div>
          <p class="label">Avg earnings</p>
          <p class="value">$5/h</p>
        </div>
        <div>
          <p class="label">Distribution %</p>
          <div class="dist">
            <span class="dot green"></span>80
            <span class="divider"></span>
            20<span class="dot purple"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}

export default Cards
