import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './card.css';

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
    
    return (
        <div className="cardc">
            <div class="c">
                <div class="c1">
                    <div class="c1-1">
                        <h2>{name}</h2>
                    </div>
                    
                    <div class="c1-2">
                        <h3>MAX</h3>
                        <p>{main.temp_max}&#8451; </p>
                        <h3>MIN</h3>
                        <p>{main.temp_min}&#8451; </p>
                    </div>
                </div>
                <div class="c2">
                        <h2>{weather.main}</h2>
                        <img src={icon} alt=""/> 
                </div>
            </div>
            <div class="b">
                <h1>{main.temp}&#8451; </h1>
                <div class="b1">
                    <h2>Feels Like </h2>
                    <p>{main.feels_like}&#8451; </p>
                </div>
            </div>
            <div class="a">
                <div class="b1">
                    <h3>Visibility</h3>
                    <p>{vis}</p>
                </div>
                <div class="b1">
                    <h3>Wind Speed</h3>
                    <p>{wind.speed}</p>
                </div>
            </div>
        </div>
    )
}

export default Cardc;
