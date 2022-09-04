import React, {useState} from 'react'
import '../css/App.css';
import {Categories} from './Categories';

const Category = () => {
    const[data, setData] = useState(Categories);

    const filterResult = (catItem) => {
        const result = Categories.filter((curDate) => {
            return curDate.category === catItem;
        });
        setData(result);
    };

  return (
    <>
        <div className="container">
            <div className="wrapper">
                <button className='btn' onClick={() => setData(Categories)}>All</button>
                <button className='btn' onClick={() => filterResult("Websites")}>Websites</button>
                <button className='btn' onClick={() => filterResult("Flayers")}>Flayers</button>
                <button className='btn' onClick={() => filterResult("Business Cards")}>Business Cards</button>
            </div>
            <div className="pojects projects__grid">
                {data.map((values) => {
                    const{img} = values;
                    return (
                        <>
                            <div className="pjojects__item">
                                <img src={img} alt="" />
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    </>
  )
}

export {Category};