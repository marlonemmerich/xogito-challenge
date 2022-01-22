import React from 'react'

const snackbarHOC = (SnackbarComponent) => (props) => {
    return (
        <SnackbarComponent
            message={props.message}
            open={props.open}
        />
    )
}

export default snackbarHOC