import axios from './axios';
import React,{useEffect, useState} from 'react'
import TinderCard from 'react-tinder-card'
function TinderCards() {
  const [people, setPeople] = useState([]);
  useEffect(()=>{
    const fetchData = async()=>{
    const req = await axios.get('/tinder/cards');
    setPeople(req.data)
    }
    fetchData()
  },[])
  const swiped = (direction, nameToDelete) =>{
    console.log('removing: ' + nameToDelete)
    // setLastDirection(direction)
  };
  const outOfFrame = (name) =>{
    console.log(name + " left the screen")
  }
  return (
    <div>
      <div className="flex justify-center mt-[10vh]">
      {people.map((person, index)=>(
        <TinderCard className='absolute' key={index} onSwipe={(dir)=> swiped(dir, person.name)} preventSwipe={['up', 'down']} onCardLeftScreen={()=> outOfFrame(person.name)}>
          <div style={{backgroundImage: `url(${person.url})`}} className="relative shadow-md drop-shadow-lg bg-white w-[600px] p-[20px] rounded-[20px] bg-cover bg-center max-w-[85vw] h-[50vh]">
            <h1 className="absolute bottom-0 m-[10px] text-white">{person.name}</h1> 
          </div>
        </TinderCard>
      ))}
      </div>
    </div>
  )
}

export default TinderCards