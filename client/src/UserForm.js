import React from 'react';
import { Grid, Typography } from "@mui/material";

const UserForm = () => {
    return (
        <div>
            <Grid
                container
                spacing={2}
                sx={{
                    backgroundColor: "white",
                    marginBottom: "30px",
                    display: 'block'
                }}
            ></Grid>

            <Grid item xs={12}>
                <Typography component={'h1'} sx={{color: '#000000'}}>User Form</Typography>
            </Grid>

        </div>
    );
}

export default UserForm;
