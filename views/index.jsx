var React = require("react");
var DefaultLayout = require("./layouts/default");

function Index(props) {
  return (
    <DefaultLayout title = {"index"}>
      <div className="container mt-5 text-center">
        <h1 className="mb-4 red-color">Welcome!</h1>
        <img
              src={"public/images/welcome-cartoon-png.png"}
              alt="welcome-cartoon"
            />
        {props.userId ? (
          <div className="container my-5">
            <a className="btn btn-primary" href="/home" role="button">Home</a>
            <p className="m-3">or</p>
            <form method="post" action="/logout">
            <button className="btn btn-danger">Logout</button>
            </form>
            </div>
        ) : (
            <div className="container my-5">
            <a className="btn btn-primary" href="/login" role="button">Login</a>
            <p className="m-3">or</p>
            <a className="btn btn-secondary" href="/register" role="button">Register</a>
            </div>
        )}
      </div>
    </DefaultLayout>
  );
}

module.exports = Index;
