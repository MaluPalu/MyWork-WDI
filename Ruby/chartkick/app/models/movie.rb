class Movie < ApplicationRecord
  searchkick word_middle: [:title, :plot]

  def search_data
    {
      title: title,
      year_released: year_released,
      plot: plot
    }
  end

end
