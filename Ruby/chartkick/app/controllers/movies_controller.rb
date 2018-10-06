class MoviesController < ApplicationController

  def index
    search = params[:term].present? ? params[:term] : nil
    if search
      @movies = Movie.search(search)
    else
      @movies = Movie.all
    end
  end

  def autocomplete
    render json: Movie.search(params[:query], {
      fields: ["title", "plot"]
      }).map(&:title)
  end

  def new
    @movie = Movie.new
  end

  def create
    @movie = Movie.create(movie_params)
    redirect_to '/movies'
  end


  private

  def movie_params
    params.require(:movie).permit(:title, :year_released, :runtime, :plot)
  end

end
