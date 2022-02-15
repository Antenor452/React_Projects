
import React from 'react'
import { useEffect ,useState} from 'react';
import Tour from './tour'

const Tours = () => {
    const url = 'https://course-api.com/react-tours-project'
    const [isLoading, setLoading] = useState(true);
    const [tours, setTours] = useState([]);
    const getData = async () => {
      try {
          const res = await fetch(url);
          const data = await res.json();
          setLoading(false);
          setTours(data);
      } catch (error) {
          setLoading(false);
          console.log(error);
          
      }
        
    }
    const deleteTour = (id) => {
        const newTours = tours.filter((tour) =>tour.id !==id)
        setTours(newTours);
     
        
    }
    useEffect(() => {
        console.log('use Effect')
        getData(); 
    },[])
 
  return (
      <div>
          {
              isLoading ? <h1>Loading...</h1> :
                  <section>
                      <div className='title'>
                          <h2>Our Tours</h2>
                      <div className='underline'></div>
                      </div>
                    <div>
                          {tours.length > 0 ?
                              tours.map((place) => {
                                  const { id } = place;
                                  return <Tour place={place} key={id} deleteTour={deleteTour} />
                              }) : <main> <div className='title'>
                                  <h2>No tours left</h2>
                                  <button className='btn' onClick={()=>getData()}>Refresh</button>
                              </div></main>
                            }
                        
                          
                    </div>

                 </section>
          }
    </div>
  )
}

export default Tours