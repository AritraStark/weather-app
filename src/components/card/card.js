import React from 'react'

function Card(props) {
    let obj = props.obj;
    return (
        <div>
            <div className="cardc">
                <div class="c">
                    <div class="c1">
                        <div class="c1-1">
                            <h2>{obj.name}</h2>
                        </div>
                        
                        <div class="c1-2">
                            <h3>MAX</h3>
                            <p>{obj.main.temp_max}&#8451; </p>
                            <h3>MIN</h3>
                            <p>{obj.main.temp_min}&#8451; </p>
                        </div>
                    </div>
                    <div class="c2">
                            <h2>{obj.weather.main}</h2>
                            <img src={obj.icon} alt=""/> 
                    </div>
                </div>
                <div class="b">
                    <h1>{obj.main.temp}&#8451; </h1>
                    <div class="b1">
                        <h2>Feels Like </h2>
                        <p>{obj.main.feels_like}&#8451; </p>
                    </div>
                </div>
                <div class="a">
                    <div class="b1">
                        <h3>Visibility</h3>
                        <p>{obj.vis}</p>
                    </div>
                    <div class="b1">
                        <h3>Wind Speed</h3>
                        <p>{obj.wind.speed}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
