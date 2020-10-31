import React, {useState, useEffect}  from 'react';
import axios from 'axios';
import Card from '../card/card';

function Cardh(props){
    const [load, setLoad] = useState([]);
    const title = props.title;

    useEffect(()=>{
        axios
            .get(`https://api.openweathermap.org/data/2.5/forecast?q=${title}&units=metric&appid=e970ddecbf479c71601d84867270656d`)
            .then(res=>{
                // console.log(res.data.list[0]);
                let cons = res.data.list;
                cons.map(con=>
                    // console.log(con);
                    setLoad(prevLoad=>[...prevLoad,con])
                )
            })
            .catch(err=>{
                console.log(err);
            })
    }, [title]);
    //console.log(load);

    
    return(
        <div>
            {load.map((l)=>{
                console.log(l);
                let icon = `http://openweathermap.org/img/wn/${l.weather[0].icon}@2x.png`;
                let obj = {
                        main:l.main,
                        weather:l.weather[0],
                        vis:l.visibility,
                        name:title,
                        wind:l.wind,
                        icon:icon
                }
                return(
                    <Card obj={obj}/>
                )
            })}
        </div>
    )
}

export default Cardh;