import {useState} from 'react';

export default function Pictures({ data }) {
 const [currScore, setCurrScore] = useState(0);
 const [indexArr,setIndexArr] = useState([]);
 function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}

 function handleClick(index){
  if(indexArr.includes(index)){
   setCurrScore(0);
   setIndexArr([]);
   console.log('index in array called:', index);
  }
  else{
   setCurrScore(currScore + 1);
   setIndexArr([...indexArr,index]);
   console.log('indexarr:',indexArr);
  }
  shuffle(data);
 }
  return (
     <div>
      <div>{currScore}</div>
      {data.map((gifData, index) => {
       // console.log(gifData.id);
        return <img src={gifData.images.original.url} alt={`Image ${index}`} key={gifData.id} onClick={()=>handleClick(gifData.id)} />;
      })}
    </div>
  );
}
