import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import './search.css';
import Cardc from '../card/card';
import { Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';



function Searchcurrent() {
    const [scr, setScr] = useState("");
    const [scrc, setScrc] = useState("");
    
    const useStyles = makeStyles((theme) => ({
        button: {
          margin: theme.spacing(1),
        },
    }));

    const classes = useStyles();

    function handleChange(e){
        setScr(e.target.value);
    }
    function handleClick(e){
        setScrc(scr);
    }
    return (
        <div>
            <div className="search">
                <TextField
                    id="outlined-helperText"
                    label="Search"
                    defaultValue=" "
                    helperText="Current Weather"
                    variant="outlined"
                    onChange={handleChange}
                />
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    startIcon={<SearchIcon />}
                    onClick={handleClick}
                />
                {scrc&&<Cardc title={scrc}/>}

            </div>
        </div>
    )
}

export default Searchcurrent;
