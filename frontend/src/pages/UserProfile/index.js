import React from 'react';
import { useParams } from 'react-router-dom';

import { Container } from './styles';

function UserProfile() {
  const { id } = useParams();
  return (
    <img
      src={`https://api.adorable.io/avatars/700/abo${id}@adorable.png`}
      alt="USER"
    />
  );
}

export default UserProfile;
