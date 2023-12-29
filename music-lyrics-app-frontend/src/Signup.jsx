export function Signup() {
  return (
    <div id="signup">
      <h1>Sign up!</h1>
      <form>
        <div>
          Name: <input type="text" />
        </div>
        <div>
          Email: <input type="email" />
        </div>
        <div>
          Password: <input type="password" />
        </div>
        <div>
          Password Confirmation: <input type="text" />
        </div>
        <button type="submit"> Sign up!</button>
      </form>
    </div>
  );
}
