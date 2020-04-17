import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CountUp from 'react-countup';

import classes from './India.module.css';
import Loader from '../../Loader/Loader';

function India() {
    const [newConfirmed, setNewConfirmed] = useState(0); 
    const [totalConfirmed, setTotalConfirmed] = useState(0); 
    
    const [newRecovered, setNewRecovered] = useState(0);
    const [totalRecovered, setTotalRecovered] = useState(0);
    
    const [newDeaths, setNewDeaths] = useState(0);
    const [totalDeaths, setTotalDeaths] = useState(0);
    
    const [date, setDate] = useState('0')
    
    const [loader, setLoader] = useState(false);
    
    useEffect(  () => {
        setLoader(true);
       axios.get('https://api.covid19api.com/summary').then( response => {
           const data = response.data['Countries'][101];
           setLoader(false);
           // for confirmed cases
           setNewConfirmed(data.NewConfirmed);
           setTotalConfirmed(data.TotalConfirmed)
           
           // for recovered cases
           setNewRecovered(data.NewRecovered);
           setTotalRecovered(data.TotalRecovered)
           
           //for deaths cases 
           setNewDeaths(data.NewDeaths);
           setTotalDeaths(data.TotalDeaths);
           
           //for last updat
           setDate(data.Date);
       }
       ).catch( () => {
           alert('Something went wrong!');
           setLoader(false);
       }) ; 
        
    }, []);
    
    return (
        <div className={classes.Container}>
            <div>
            <h1 className={classes.Heading}>India</h1>
            <h1 className={classes.Date}>Last Updated On: {new Date(date).toDateString()}</h1>
            </div>
       { 
            ////////////////////////////////////////////////////////////////////////
        }
            <div className={classes.Confirm}>
                <div className={classes.NewConfirmed}>
                    <h2 className={classes.NcH}>New Confirmed</h2>
                    {loader ? <Loader /> : <p className={classes.NcP}><CountUp 
                        start={0} 
                        end={newConfirmed} 
                        duration={5}
                        seprator=","/></p>
                    }
                </div>
                <div className={classes.Confirmed}>
                    <h2 className={classes.TcH}>Total Confirmed</h2>
                    {loader ? <Loader /> : <p className={classes.NcP}><CountUp 
                        start={0} 
                        end={totalConfirmed} 
                        duration={5}
                        seprator=","/></p>
                    }
                </div>
            </div>
        {
            ////////////////////////////////////////////////////////////////////////
        }
            <div className={classes.Recover}>
                <div className={classes.NewRecovered}>
                    <h2 className={classes.NrH}>New Recovered</h2>
                    {loader ? <Loader /> : <p className={classes.NcP}><CountUp 
                        start={0} 
                        end={newRecovered} 
                        duration={5}
                        seprator=","/></p>
                    }
                </div>
                <div className={classes.Recovered}>
                    <h2 className={classes.TrH}>Total Recovered</h2>
                    {loader ? <Loader /> : <p className={classes.NcP}><CountUp 
                        start={0} 
                        end={totalRecovered} 
                        duration={5}
                        seprator=","/></p>
                    }
                </div>
            </div>
        {
            ////////////////////////////////////////////////////////////////////////
        }
            <div className={classes.Death}>
                <div className={classes.NewDeaths}>
                    <h2 className={classes.NdH}>New Deaths</h2>
                    {loader ? <Loader /> : <p className={classes.NcP}><CountUp 
                        start={0} 
                        end={newDeaths} 
                        duration={5}
                        seprator=","/></p>
                    }
                </div>
                <div className={classes.Deaths}>
                    <h2 className={classes.TdH}>Total Deaths</h2>
                    {loader ? <Loader /> : <p className={classes.NcP}><CountUp 
                        start={0} 
                        end={totalDeaths} 
                        duration={5}
                        seprator=","/></p>
                    }
                </div>
            </div>
        {
            /////////////////////////////////////////////////////////////////////////
        }
            
        
        </div>
    );
};


export default India;