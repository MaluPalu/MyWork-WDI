class Car
  attr_accessor :make, :color #getter
  attr_reader :speed

  def intitialize
    @make = "GM"
    @color = "Black"
    @speed = 120
  end
  def hit_gas
    @speed = @speed + 5
  end
  def hit_brakes
    @speed = @speed = 10
  end
  # def make(make)
  #   @make = make
  # end
  # def color(color)
  #   @color = color
end
