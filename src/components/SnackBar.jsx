import React from 'react'
import Snackbar from '@mui/material/Snackbar';

const snackbar = (props) => {
    return (
        <div>
        <Snackbar
          open={props.open}
          autoHideDuration={6000}
          message={props.message}
        />
      </div>
    )
}

export default snackbar