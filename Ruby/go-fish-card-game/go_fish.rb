
class PlayingCard
attr_reader :rank, :suit
def initialize(card_info)
  @rank = card_info[:rank]
  @suit = card_info[:suit]
end

def face
  "#{@rank}#{@suit}"
end

def to_s
  self.face
end
end # PlayingCard

RANKS = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
SUITS = ["C", "D", "H", "S"]
SORTED_CARDS = [
    "AC", "AD", "AH", "AS", "2C", "2D", "2H", "2S", "3C", "3D", "3H", "3S",
    "4C", "4D", "4H", "4S", "5C", "5D", "5H", "5S", "6C", "6D", "6H", "6S",
    "7C", "7D", "7H", "7S", "8C", "8D", "8H", "8S", "9C", "9D", "9H", "9S",
    "10C", "10D", "10H", "10S", "JC", "JD", "JH", "JS", "QC", "QD", "QH", "QS",
    "KC", "KD", "KH", "KS"
]

class CardDeck
  @cards
  def cards
    @cards
  end

  def initialize(shuffle = true)
    @cards = SORTED_CARDS.map { |card_str|
      PlayingCard.new({rank: card_str.length > 2 ? card_str[0..1] : card_str[0], suit: card_str[-1]}) }
    if shuffle
      @cards.shuffle!
    end
  end

  def shuffle()
    @cards.shuffle!
  end
  def draw(how_many_cards_to_draw = 1)
    if how_many_cards_to_draw > @cards.length
      how_many_cards_to_draw = @cards.length
    end
    @cards.slice!(how_many_cards_to_draw * -1, how_many_cards_to_draw)
  end

  def draw_one()
    @cards.slice!(-1)
  end

  def push(*playing_cards)
    @cards += playing_cards
  end
end # CardDeck

class HandOfCards < CardDeck
  def initialize(hand = nil)
    @cards = hand
  end
  def to_s
    @cards.join(" ")
  end
  def any?(rank: "", suit: "")
    @cards.any? {|card| card.rank == rank || card.suit == suit}
  end
end #HandOfCards

class CardPlayer
  # initialize
end

$deck = CardDeck.new()
puts "Returned drawn cards = " + $deck.draw(3).to_s

# Driver Code
if __FILE__ == $0
  puts "This will only print if you run `ruby go_fish.rb`"
  # deck = CardDeck.new
  # # # puts "cards: #{deck.cards}"
  # # # puts "cards: #{deck}"
  # # # puts "shuffled: #{deck.shuffle}"
  # # puts "one drawn card: #{deck.draw_one}"
  # # puts "two drawn cards: #{deck.draw(2)}"

  # cards1 = deck.draw(5)
  # cards2 = deck.draw(5)
  # # # puts "cards1: #{cards1.join(" ")}"
  # # # puts "cards2: #{cards2.join(" ")}"

  # h1 = HandOfCards.new(cards1)
  # h2 = HandOfCards.new(cards2)

  # puts "hand1: #{h1}"
  # puts "hand2: #{h2}"

  # p1 = CardPlayer.new(hand: h1)
  # p2 = CardPlayer.new(hand: h2)

  # puts "Hands: [ #{p1.hand} ], [ #{p2.hand} ] (before)"

  # ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
  # ranks.each do |rank|
  #   print "p1, do you have any... #{rank}'s?"
  #   if p1.hand.any?(rank: rank)
  #     cards = p1.hand.take!(rank: rank)
  #     print " -- YES: [ #{ cards.join(" ") } ]\n"
  #     p2.hand.push(*cards)
  #     break
  #   end
  #   print " -- NO!\n"
  # end

  # puts "Hands: [ #{p1.hand} ], [ #{p2.hand} ] (after)"
end
