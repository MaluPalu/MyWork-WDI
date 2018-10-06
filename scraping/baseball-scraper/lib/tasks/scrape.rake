# Pro tip: run this with 'rake scrape:wNationalLeague'
namespace :scrape do
  desc "scrape website"
  task NationalLeague: :environment do
    # This rake task scrapes the MLB stats data and adds it to the database.
    doc = Nokogiri::HTML(open('http://www.espn.com/mlb/statistics'))
    BASE_URL = "http://www.espn.com/mlb/"
    doc.css('.tablehead').each do |player|
      oddPitcher = player.css('.oddrow').css('a').text.strip
      Player.create(NL: oddPitcher)
      # This code is an example of how you could follow individual links, if
      #   your preferred manufacturer doesn't have enough info on the main page.
      # First, find the url you want to follow; then, open that product's info,
      #   and pull out whatever you need.

      # p_url = listing.at_css('.itemIdentification').attribute('onclick').value.split('"').last
      # full_url = BASE_URL + p_url
      # product_doc = Nokogiri::HTML(open(full_url))
    end
  end
end
