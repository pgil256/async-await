$(function() {
    let URL = 'https://deckofcardsapi.com/api/deck';
  
    async function card() {
      let data = await $.getJSON(`${baseURL}/new/draw/`);
      let { suit, value } = data.cards[0];
      console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
    }
    card();

    async function cards() {
      let card1 = await $.getJSON(`${baseURL}/new/draw/`);
      let deckId = card1.deck_id;
      let card2 = await $.getJSON(`${baseURL}/${deckId}/draw/`);
      [card1, card2].forEach(card => {
        let { suit, value } = card.cards[0];
        console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
      });
    }
    cards();

    async function makeDeck() {
      let $button = $('button');
      let $cardDiv = $('#card-div');
  
      let deckData = await $.getJSON(`${URL}/new/shuffle/`);
      $button.show().on('click', async function() {
        let cardData = await $.getJSON(`${URL}/${deckData.deck_id}/draw/`);
        let cardSrc = cardData.cards[0].image;
        $cardDiv.append(
          $('<img>', {
            src: cardSrc,
          })
        );
        if (cardData.remaining === 0) $btn.remove();
      });
    }
    makeDeck();
  });