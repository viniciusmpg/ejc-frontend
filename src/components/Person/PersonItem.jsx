import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

export default (props) => {
    return (
        <React.Fragment>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="https://bit.ly/2ZfSBiQ" />
                </ListItemAvatar>
                <ListItemText
                    primary={props.person.name}
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                color="textPrimary"
                            >
                                Ali Connors
                            </Typography>
                            {" — I'll be in your neighborhood doing errands this slkfja dflasdjf asdlfjk aslfkasjf lsakjf laksj…"}
                        </React.Fragment>
                    }
                />
            </ListItem>
        </React.Fragment>
    );
}