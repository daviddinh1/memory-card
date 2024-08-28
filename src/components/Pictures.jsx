import {useState} from 'react';

export default function Pictures({ data }) {
 const [currScore, setCurrScore] = useState(0);
 function handleClick(){
  setCurrScore(currScore + 1);
 }
  return (
     <div>
      <div>{currScore}</div>
      {data.map((gifData, index) => {
        console.log('Mapping URL:', gifData.images.original.url); // Log each URL
        return <img src={gifData.images.original.url} alt={`Image ${index}`} key={index} onClick={handleClick} />;
      })}
    </div>
  );
}
