var React = require("react");
var DefaultLayout = require("../layouts/default");

function Login() {
  return (
    <DefaultLayout title = {"login"}>
      <div className="container border border-secondary rounded mt-5 p-4 w-25 bg-light">
      <h1 className="mb-4 text-center text-success">Login</h1>
      <div className="text-center my-4">
      <img
              src={"public/images/login-icon.png"}
              alt="login-icon" className="img-fluid w-50"
            />
            </div>
        <form className="mb-5" method='post' action='/login'>
        <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type='email' name='email' placeholder='Email' required className="form-control" aria-describedby="email"/>
        </div>
        <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type='password' name='password' placeholder='Password' required className="form-control" aria-describedby="password"/>
        </div>
        <button type="submit" className="btn btn-success">Indsend</button>
        </form>
        <p className="text-danger font-italic m-0">Har du ikke en profil?</p>
        <a href='/register'>Register</a>
      </div>
    </DefaultLayout>
  );
}

module.exports = Login;
