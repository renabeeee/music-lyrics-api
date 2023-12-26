require "test_helper"

class SessionsControllerTest < ActionDispatch::IntegrationTest
  test "create" do
    post "/users.json", params: { email: "test@email.com", title: "Test", artist: "test@test.com", bpm: "0", duration: "0", image_url: "test.jpg", password: "password", password_confirmation: "password" }
    post "/sessions.json", params: { email: "test@test.com", password: "password" }
    assert_response 201

  data = JSON.parse(response.body)
  assert_equal ["jwt", "email", "user_id"], data.keys
  end
end
