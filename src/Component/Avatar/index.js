import React from 'react';
const Avatar = ({ name, imageUrl }) => {
  return (
    <>
      <div className='avatarcontainer'>
        {imageUrl && (
          <img className='avatarImage' alt="avatar" src={imageUrl} />
        )}
        {imageUrl === undefined && name !== "" && (
          <div className='avatatext'>{name.substring(0, 2)}</div>
        )}
      </div>
    </>
  );
};

export default Avatar;
