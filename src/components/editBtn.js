import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function EditButton() {
  let history = useHistory();

  function handleBtnClick() {
    history.go(-2);
    window.scrollTo(0, 0);
  }

  return (
    <Button id='white-btn' type='button' onClick={handleBtnClick}>
      EDIT
    </Button>
  );
}

export default EditButton;
