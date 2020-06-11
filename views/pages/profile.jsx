var React = require("react");
var DefaultLayout = require("../layouts/default");

function Profile() {
  return (
    <DefaultLayout title = {"Profile"}>
    <div className="container border border-secondary rounded mt-5 p-4 w-25 bg-light">
      <h1 className="mb-4">Ændre din profil</h1>
        <form className="mb-5" method='post' action='/changeprofile'>
        <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type='text' name='name' placeholder='Name' required defaultValue={props.user.name} className="form-control" aria-describedby="name"/>
        </div>
        <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type='email' name='email' placeholder='Email' required defaultValue={props.user.email} className="form-control" aria-describedby="email"/>
        </div>
        <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type='password' name='password' placeholder='Password' required defaultValue={props.user.password} className="form-control" aria-describedby="password"/>
        </div>
        <button type="submit" className="btn btn-success">Indsend</button>
        </form>
        <a href='/home'>Home</a>
      </div>
    </DefaultLayout>
  );
}

module.exports = Profile;
