import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import './search.css';
import Cardh from '../cardh/cardh';
import { Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';



function Searchhist() {
    const [scr1, setScr] = useState("");
    const [scrc1, setScrc] = useState("");
    
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
        setScrc(scr1);
    }
    return (
        <div>
            <div className="search">
                <TextField
                    id="outlined-helperText"
                    label="Search"
                    defaultValue=" "
                    helperText="Weather Forecast"
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
                {scrc1&&<Cardh title={scrc1}/>}

            </div>
        </div>
    )
}

export default Searchhist;
