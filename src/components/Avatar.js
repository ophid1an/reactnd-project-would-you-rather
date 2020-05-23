import React from 'react';

function Avatar({ user }) {
  return (
    <img
      width={80}
      height={80}
      className="mr-3 align-self-center rounded-circle"
      src={user.avatarURL}
      alt={`Placeholder of ${user.name}'s avatar`}
    />
  );
}

export default Avatar;