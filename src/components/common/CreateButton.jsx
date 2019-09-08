import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';

export default function FormDialog() {
  return (
    <div>
      <Link to='/adicionar'>
        <Button variant='contained' color='default'>
          Adicionar
          <AddIcon />
        </Button>
      </Link>
    </div>
  );
}
