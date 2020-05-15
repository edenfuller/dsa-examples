import React, { useState } from 'react';

function BinarySearch() {


  const [arrayLength, setArrayLength] = useState(8);
  const [x, setX] = useState(5);
  const [valueIndex, setValueIndex] = useState(0)
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(7);

  const returnArray = (targetLength) => {
      let arr = [];
      while (arr.length < targetLength){
          const newValue = Math.floor(Math.random() * targetLength);
          console.log(`checking for presence of ${newValue} in array...`);
          if (arr.indexOf(newValue) === -1) arr.push(newValue);
      }
      console.log(arr);
      return arr;

  }

    const binarySearch = (arr, x) => { 
   
        let start=0;
        let end=arr.length-1; 
              
        // Iterate while start not meets end 
        while (start<=end){ 
      
            // Find the mid index 
            let mid=Math.floor((start + end)/2); 
       
            // If element is present at mid, return True 
            if (arr[mid]===x) return x; 
      
            // Else look in left or right half accordingly 
            else if (arr[mid] < x)  
                 start = mid + 1; 
            else
                 end = mid - 1; 
        } 
       
        return -1; 
    } 
       
    return(
        <div id="binary-search">   
            <h1>{'Binary Search'}</h1>
            <p>Length of array:</p>
            <input value={arrayLength} onChange={(e) => {setArrayLength(e.target.value)}}></input>
            <p>Value to search for:</p>
            <input value={x} onChange={(e) => {setX(e.target.value)}}></input>
            <p></p>
            <button onClick={() => {setValueIndex(binarySearch(returnArray(arrayLength), x))}}>Search</button>
            <p>{`Index of target value is ${valueIndex}`}</p>
        </div>
    )
}

export default BinarySearch;