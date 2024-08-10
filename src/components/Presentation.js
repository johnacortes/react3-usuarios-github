function Presentation({ userData }) {
  return (
    <div className="container-presentation">
      <img className="img-user" src={userData.avatar_url} />
      <div className="followers-location">
        <div className="container-items">
          Followers<div className="items">{userData.followers}</div>
        </div>
        <div className="container-items">
          Following<div className="items">{userData.following}</div>
        </div>
        <div className="container-items">
          Location<div className="items">{userData.location}</div>
        </div>
      </div>
      <div className="bio">
        <div className="div-bio">
          <div className="name-user">{userData.name}</div>
          <div className="bio-user">{userData.bio}</div>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
