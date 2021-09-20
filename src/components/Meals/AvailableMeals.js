import React from "react";
import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from "./MealItem/Mealitem"; 

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

const AvailableMeals = () => {
 
    const mealsList = DUMMY_MEALS.map((m) => 
      <MealItem key={m.id}
       name={m.name}
       id ={m.id} 
       description={m.description}
       price={m.price} 
       />
          
      
    );

    return <section className={classes.meals} >
      <Card>
        <ul>
            {mealsList}
        </ul>
        </Card>
    </section>




};

export default AvailableMeals;