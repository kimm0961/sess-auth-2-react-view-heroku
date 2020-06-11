var React = require("react");
var DefaultLayout = require("../layouts/default");

function Home(props) {
  return (
    <DefaultLayout title = {"home"}>
      <div className="container mt-5">
      <h1 className="mb-5 text-center">Home</h1>
      <div className="container">
      <div className="card mx-auto w-50 bg-light border-secondary">
  <div className="card-body">
    <h5 className="card-title">{props.user.name}</h5>
    <ul>
        <li>Email: {props.user.email} </li>
    </ul>
    <a className="btn btn-primary" href="/" role="button">Main</a>
  </div>
</div>
     
    </div>
      </div>
    </DefaultLayout>
  );
}

module.exports = Home;
