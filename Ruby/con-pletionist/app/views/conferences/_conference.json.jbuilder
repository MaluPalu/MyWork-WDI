json.extract! conference, :id, :title, :location, :created_at, :updated_at
json.url conference_url(conference, format: :json)
