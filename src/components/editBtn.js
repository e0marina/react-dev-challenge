import React from 'react';
import { useHistory } from 'react-router-dom';

function EditButton() {
  let history = useHistory();

  function handleClick() {
    history.go(-2);
  }

  return (
    <button type='button' onClick={handleClick}>
      Edit
    </button>
  );
}

export default EditButton;
