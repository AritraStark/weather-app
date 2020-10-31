import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './cardc.css';
import Card from '../card/card';

function Cardc(props) {
    const[main, setMain] = useState({});
    const[weather, setWeather] = useState({});
    const[name, setName] = useState("");
    const[vis, setVis] = useState("");
    const[wind, setWind] = useState({});
    const title = props.title;
    
    useEffect(()=>{
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${title}&units=metric&appid=e970ddecbf479c71601d84867270656d`)
            .then(res=>{
                // console.log(res.data);
                setMain(res.data.main);
                setWeather(res.data.weather[0]);
                setName(res.data.name);
                setVis(res.data.visibility);
                setWind(res.data.wind);
            })
            .catch(err=>{
                console.log(err);
            })
    }, [title]);
    
    const icon = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`;

    let obj = {
        main:main,
        weather:weather,
        vis:vis,
        name:name,
        wind:wind,
        icon:icon
    }
    
    return (
        <div>
            <Card obj={obj}/>
        </div>
    )
}

export default Cardc;
