import React, { useState } from 'react';

function BinarySearch() {

  const startingLength = 10;
  const [arrayLength, setArrayLength] = useState(startingLength);
  const [x, setX] = useState(5);
  const [valueIndex, setValueIndex] = useState(0);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(startingLength - 1);
  const [generatedArray, setGeneratedArray] = useState([]);

  const returnArray = (targetLength) => {
      let arr = [];
      while (arr.length < targetLength){
          
          const newValue = Math.floor(Math.random() * (targetLength *2));
          console.log(`checking for presence of ${newValue} in array...`);
          if (arr.indexOf(newValue) === -1) arr.push(newValue);
      }
      console.log(arr);
      return arr;

  }

    const binarySearch = (a, x) => { 
        const arr = a.sort((a, b) => a - b);
        setGeneratedArray(arr);
   
        let start=0;
        let end=arr.length-1; 
        setStart(start);
        setEnd(end);
              
        // Iterate while start not meets end 
        while (start <= end){ 
      
            // Find the mid index 
            let mid=Math.floor((start + end)/2); 
       
            // If element is present at mid, return True 
            if (arr[mid]===x) return mid; 
      
            // Else look in left or right half accordingly 
            else if (arr[mid] < x)  {
                 start = mid + 1; 
                 console.log(`new start = ${start}`);
                 setStart(start);
                }   
            else{
                 end = mid - 1; 

                 console.log(`new end = ${end}`);
                 setEnd(end);}
        } 
       
        return -1; 
    } 

    const printArray = () => {
        const items = generatedArray.map((val, i) => {
            return <span className={`${i === valueIndex && 'correct'} ${i <start && 'excluded'}  ${i > end && 'excluded'}`} key={`binary-span-${i}`} >
                {`${val}, `}
            </span>
        })
        return( <p>{items}</p>);
    }
       
    return( 
        <div id="binary-search">   
            <h1>{'Binary Search'}</h1>
            <p>Length of array:</p>
            <input value={arrayLength} onChange={(e) => {
                setArrayLength(e.target.value);
                setEnd(e.target.value - 1);
                }}></input>
            <p>Value to search for:</p>
            <input value={x} onChange={(e) => {setX(e.target.value)}}></input>
            <p></p>
            <button onClick={() => {setValueIndex(binarySearch(returnArray(arrayLength), x))}}>Search</button>
            <p>generated array:</p>
            {printArray()}
            <p>{`Index of target value is ${valueIndex}`}</p>
        </div>
    )
}

export default BinarySearch;