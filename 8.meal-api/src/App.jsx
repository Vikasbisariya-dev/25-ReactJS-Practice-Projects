import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'


// useEffect = (()=>{
//    axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
//    .then((res)=>{
//      setItems(res.data.meals);
//    })
//    .catch((err)=>{
//      console.log(err);
//    });

// },[]);




function App() {

  const [items, setItems] = useState([]);

  useEffect(()=>{
    axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
    .then((res)=>{
      setItems(res.data.meals)
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])

  return (
      <div className='container'>
       {items.map(({strMeal, strMealThumb, idMeal})=>{
        return(
          <section className='container-section'  key={idMeal}>
          <img src={strMealThumb} className='thump-meal' alt='thump' />
          <section>
           <p className='name'>{strMeal}</p>
           <p className='id'>#{idMeal}</p>
          </section>
          </section>
        )
       })}
      </div>
  )

}

export default App
