import { login, logout } from "../../actions/auth";

test("should generate login action object", () => {
  const action = login("123");
  expect(action).toEqual({
    type: "LOGIN",
    uid
  });
});

test("should generate login action object", () => {
  const action = logout();
  expect(action).toEqual({
    type: "LOGOUT"
  });
});
