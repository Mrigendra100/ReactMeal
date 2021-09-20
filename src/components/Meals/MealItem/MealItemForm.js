import React, { useRef ,useState } from 'react'
import Input from '../../UI/Input';

import classes from './MealItemForm.module.css';


const MealItemForm = (props) =>{

    const [amountIsValid, setAmountIsValid] = useState(true);

    const amountInputRef = useRef();
  
    const submitHandler = (event) => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;
        
        if(
            enteredAmount.trim().length === 0 ||
            enteredAmountNumber <1 ||
            enteredAmountNumber >10 

        ){
            setAmountIsValid(false)
            return;
        }
        
        props.onAddToCart(enteredAmountNumber);

    };

   
    return ( 
    <form className={classes.form}  
     onSubmit = {submitHandler}
    >
        <Input ref={amountInputRef} label="Amount" input={{
            
            id: 'amount',
            type: 'number',
            min:'1',
            max: '10',
            step: '1',
            defaultValue: '1',
        }} />
        <button> + ADD </button>
        {!amountIsValid && <p>Please enter a valid amount. </p>}
    </form>
    );

};

export default MealItemForm;