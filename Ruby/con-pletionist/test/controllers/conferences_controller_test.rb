require 'test_helper'

class ConferencesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @conference = conferences(:one)
  end

  test "should get index" do
    get conferences_url, as: :json
    assert_response :success
  end

  test "should create conference" do
    assert_difference('Conference.count') do
      post conferences_url, params: { conference: { location: @conference.location, title: @conference.title } }, as: :json
    end

    assert_response 201
  end

  test "should show conference" do
    get conference_url(@conference), as: :json
    assert_response :success
  end

  test "should update conference" do
    patch conference_url(@conference), params: { conference: { location: @conference.location, title: @conference.title } }, as: :json
    assert_response 200
  end

  test "should destroy conference" do
    assert_difference('Conference.count', -1) do
      delete conference_url(@conference), as: :json
    end

    assert_response 204
  end
end
