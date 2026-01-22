import React from 'react'
import Cards from './components/Cards'

const App = () => {
  const cards_data = [
    {
      "rarity": "Uncommon",
      "price": "0.5 ETH",
      "title": "HAPE #67",
      "collection": "HAPE PRIME",
      "avgEarnings": "$5/h",
      "distribution": {
        "green": 80,
        "purple": 20
      },
      "imagePrompt": "https://i.pinimg.com/736x/61/1d/74/611d7498b4a2c9bf53256fe4c23e2d89.jpg"
    },
    {
      "rarity": "Uncommon",
      "price": "0.6 ETH",
      "title": "HAPE #67",
      "collection": "HAPE PRIME",
      "avgEarnings": "$5/h",
      "distribution": {
        "green": 80,
        "purple": 20
      },
      "imagePrompt": "https://i.pinimg.com/736x/d8/80/77/d88077b52cf7f73d05a0ec6d6404f8d6.jpg"
    },
    {
      "rarity": "Rare",
      "price": "1.2 ETH",
      "title": "HAPE #102",
      "collection": "HAPE PRIME",
      "avgEarnings": "$9/h",
      "distribution": {
        "green": 65,
        "purple": 35
      },
      "imagePrompt": "https://i.pinimg.com/736x/13/03/79/130379b45684200933285589490d2984.jpg"
    },
    {
      "rarity": "Epic",
      "price": "2.8 ETH",
      "title": "HAPE #245",
      "collection": "HAPE PRIME",
      "avgEarnings": "$15/h",
      "distribution": {
        "green": 50,
        "purple": 50
      },
      "imagePrompt": "https://i.pinimg.com/736x/28/35/77/2835772b4161e52e9cc2553fb703f7e3.jpg"
    },
    {
      "rarity": "Legendary",
      "price": "5.0 ETH",
      "title": "HAPE #001",
      "collection": "HAPE PRIME",
      "avgEarnings": "$30/h",
      "distribution": {
        "green": 30,
        "purple": 70
      },
      "imagePrompt": "https://i.pinimg.com/1200x/86/7a/f5/867af5571912376eaedeee1a223917e9.jpg"
    },
    {
      "rarity": "Common",
      "price": "0.2 ETH",
      "title": "HAPE #389",
      "collection": "HAPE PRIME",
      "avgEarnings": "$2/h",
      "distribution": {
        "green": 90,
        "purple": 10
      },
      "imagePrompt": "https://i.pinimg.com/1200x/95/78/02/9578028cc422d17a16bda3e2347fb692.jpg"
    },

  ]
  return (
    <div class="cards-container">
      {cards_data.map(function(elem,idex){
        return <div>
          <Cards
          imagePrompt={elem.imagePrompt}
          price={elem.price}
          title={elem.title}
          collection={elem.collection}
          avgEarnings={elem.avgEarnings}
          distribution={elem.distribution}
          />
        </div>
      })}
    </div>
  )
}

export default App
