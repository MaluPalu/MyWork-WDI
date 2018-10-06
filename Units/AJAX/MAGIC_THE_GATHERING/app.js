$(document).ready(function() {

  $.ajax({
    type: "GET",
    url: "https://api.magicthegathering.io/v1/cards?setName=Kaladesh&colors=green|red"
  })

  .then(function(mtgCards){
    let newHTML;
    let $cardImg = $("#cardImg")
      mtgCards.cards.forEach(function(card){
        if (typeof card.text == "string") {
      if (card.cmc < 8 && card.text.includes("{E}")) {
      console.log(card.name);
      newHTML = `<img id="cardImg" src=${card.imageUrl}>`
      $cardImg.append(newHTML);
    };
  };
    });

  })
});
