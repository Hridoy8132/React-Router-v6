
import { useSearchParams } from 'react-router-dom';

 function Filter() {
    const [searchParams,setSearchParams] = useSearchParams();
    // console.warn(searchParams.get('age'))
    // console.warn(searchParams.get('city')) 
    const age = searchParams.get('age');
    const city  = searchParams.get('city');

    console.warn(age);
  return (
    <div>
        <h1> This is Filter Page </h1>
        <h2> Age is  : {age} </h2>
        <h2> City is  : {city} </h2>
        <button onClick={()=>setSearchParams({age:40, })}> Set Age is Query Params  </button>
        
      
    </div>
  )
}
export default Filter;


