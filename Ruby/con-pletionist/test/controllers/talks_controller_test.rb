require 'test_helper'

class TalksControllerTest < ActionDispatch::IntegrationTest
  setup do
    @talk = talks(:one)
  end

  test "should get index" do
    get talks_url, as: :json
    assert_response :success
  end

  test "should create talk" do
    assert_difference('Talk.count') do
      post talks_url, params: { talk: { conferences_id: @talk.conferences_id, end_time: @talk.end_time, speaker_name: @talk.speaker_name, start_time: @talk.start_time, title: @talk.title } }, as: :json
    end

    assert_response 201
  end

  test "should show talk" do
    get talk_url(@talk), as: :json
    assert_response :success
  end

  test "should update talk" do
    patch talk_url(@talk), params: { talk: { conferences_id: @talk.conferences_id, end_time: @talk.end_time, speaker_name: @talk.speaker_name, start_time: @talk.start_time, title: @talk.title } }, as: :json
    assert_response 200
  end

  test "should destroy talk" do
    assert_difference('Talk.count', -1) do
      delete talk_url(@talk), as: :json
    end

    assert_response 204
  end
end
