import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';

const Home = () => {
    const [searchText, setsearchText] = useState('');
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals));
    }, [searchText])
    const searchItem = e => {
        setsearchText(e.target.value);
    }
    return (
        <div>
            <h2>This is Home</h2>
            <p>Place for sleep</p>
            <input onChange={searchItem} type="text" name='' id='' />
            <br />
            <h3>Result Found:{meals.length}</h3>
            <div>
                {
                    meals.map(meal => <Meal
                        key={meal.idMeal}
                        meal={meal}
                    ></Meal>)
                }
            </div>
        </div>
    );
};

export default Home;