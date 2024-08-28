async function getCats(){
 const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=xULTeFJyONWZOYgiB2UdHgDxa1mZwyWx&s=cats', {mode: 'cors'});
 const catData = await response.json();
 return catData.data.images.original.url;
}

export default function Pictures(){
 const picture = getCats();
 console.log('url: ',picture);
 return (
  <div>
   <img src={picture} alt="not showing"/>
  </div>
 )
}