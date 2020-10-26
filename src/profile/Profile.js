import React from 'react';
import PropTypes from "prop-types"

const styleName={color: "red" , textAlign:'center'}

function Profile({fullName="houcem", bio, profession}) {
    function handleName(e){
        e.preventDefault();
        alert("Houcem trabelsi");
    }
  return (
    <div className="Profile">
      <img src="logo512.png" alt='profilPhoto'/>
  <h1 href='/'style={styleName} onClick={handleName}>{fullName}</h1>
  <h1>{bio}</h1>
  <h1>{profession}</h1>
    </div>
  );
}
Profile.propTypes = {
    bio: PropTypes.string
  };

export default Profile;