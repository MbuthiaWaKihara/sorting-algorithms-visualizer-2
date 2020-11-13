export default (decreasing, arr,  n) =>
    { 
          
        const  merge = (arr, l, m, r) => 
            { 
                let i, j, k; 
                let n1 = m - l + 1; 
                let n2 = r - m; 
                let subframes = [];
                
                /* create temp arrays */
                let L = []; 
                let R = []; 
                
                /* Copy data to temp arrays L[] 
                and R[] */
                for (i = 0; i < n1; i++) 
                    L[i] = arr[l + i]; 

                for (j = 0; j < n2; j++) 
                    R[j] = arr[m + 1+ j]; 
                
                /* Merge the temp arrays back into 
                arr[l..r]*/
                i = 0; 
                j = 0; 
                k = l; 
                let holder;
                while (i < n1 && j < n2) 
                { 

                    //find index of L[i] and index of R[j] in raw
                    let positionL;
                    let positionR;
                    let indexInRawL = L[i].indexInArray;
                    let indexInRawR = R[j].indexInArray;

                    //find L[i] position in the raw array;
                    for(let counter = 0; counter < arr.length; counter++){
                        if(indexInRawL === arr[counter].indexInArray) positionL = counter;
                    }
                    //find L[i] position in the raw array;
                    for(let counter = 0; counter < arr.length; counter++){
                        if(indexInRawR === arr[counter].indexInArray) positionR = counter;
                    }

                    arr[positionL].className = "inComparison";
                    arr[positionR].className = "inComparison";
                    subframes.push(JSON.parse(JSON.stringify(arr)));

                    if(decreasing){

                        if (L[i].number >= R[j].number) 
                        { 
                            arr[positionL].className = "wronglyOrdered";
                            arr[k].className = "wronglyOrdered";
                            subframes.push(JSON.parse(JSON.stringify(arr)));
                            
                            //perform a swap instead of an over right;
                            holder = arr[k]
                            arr[k] = arr[positionL];
                            arr[positionL] = holder; 
                            i++; 
                            subframes.push(JSON.parse(JSON.stringify(arr)));

                            arr[positionL].className = "initial";
                            arr[k].className = "initial";
                            subframes.push(JSON.parse(JSON.stringify(arr)));
                        } 
                        else
                        { 
                            arr[positionR].className = "wronglyOrdered";
                            arr[k].className = "wronglyOrdered";
                            subframes.push(JSON.parse(JSON.stringify(arr)));

                            //perform a swap instead of an over right;
                            holder = arr[k]
                            arr[k] = arr[positionR];
                            arr[positionR] = holder; 
                            j++; 
                            subframes.push(JSON.parse(JSON.stringify(arr)));

                            arr[positionR].className = "initial";
                            arr[k].className = "initial";
                            subframes.push(JSON.parse(JSON.stringify(arr))); 
                        }

                    }else{
                        if (L[i].number <= R[j].number) 
                        { 
                            arr[positionL].className = "wronglyOrdered";
                            arr[k].className = "wronglyOrdered";
                            subframes.push(JSON.parse(JSON.stringify(arr)));
                            
                            //perform a swap instead of an over right;
                            holder = arr[k]
                            arr[k] = arr[positionL];
                            arr[positionL] = holder; 
                            i++; 
                            subframes.push(JSON.parse(JSON.stringify(arr)));

                            arr[positionL].className = "initial";
                            arr[k].className = "initial";
                            subframes.push(JSON.parse(JSON.stringify(arr)));
                        } 
                        else
                        { 
                            arr[positionR].className = "wronglyOrdered";
                            arr[k].className = "wronglyOrdered";
                            subframes.push(JSON.parse(JSON.stringify(arr)));

                            //perform a swap instead of an over right;
                            holder = arr[k]
                            arr[k] = arr[positionR];
                            arr[positionR] = holder; 
                            j++; 
                            subframes.push(JSON.parse(JSON.stringify(arr)));

                            arr[positionR].className = "initial";
                            arr[k].className = "initial";
                            subframes.push(JSON.parse(JSON.stringify(arr))); 
                        } 
                    }


                    k++;
                    arr[positionL].className = "initial";
                    arr[k].className = "initial";
                    arr[positionR].className = "initial";
                    subframes.push(JSON.parse(JSON.stringify(arr)));  
                } 

                for(let counter = 0; counter < arr.length; counter++){
                    if(arr[counter].className !== "initial") arr[counter].className = "initial";
                }
                
                /* Copy the remaining elements of  
                L[], if there are any */
                while (i < n1) 
                { 
                    arr[k] = L[i]; 
                    i++; 
                    k++; 
                } 
                
                /* Copy the remaining elements of 
                R[], if there are any */
                while (j < n2) 
                { 
                    arr[k] = R[j];
                    
                    j++; 
                    k++; 
                } 
                subframes.push(JSON.parse(JSON.stringify(arr))); 

                return subframes;
            }
        let frames = []; 
        // For current size of subarrays to 
        // be merged curr_size varies from  
        // 1 to n/2 
        let curr_size;  
                      
        // For picking starting index of  
        // left subarray to be merged 
        let left_start; 
                          
          
        // Merge subarrays in bottom up  
        // manner. First merge subarrays  
        // of size 1 to create sorted  
        // subarrays of size 2, then merge 
        // subarrays of size 2 to create  
        // sorted subarrays of size 4, and 
        // so on. 
        for (curr_size = 1; curr_size <= n-1;  
                      curr_size = 2*curr_size) 
        { 
              
            // Pick starting point of different 
            // subarrays of current size 
            for (left_start = 0; left_start < n-1; 
                        left_start += 2*curr_size) 
            { 
                // Find ending point of left  
                // subarray. mid+1 is starting  
                // point of right 
                let mid = Math.min(left_start + curr_size - 1, n-1); 
          
                let right_end = Math.min(left_start  
                             + 2*curr_size - 1, n-1); 
          
                // Merge Subarrays arr[left_start...mid] 
                // & arr[mid+1...right_end] 
                let subframes = merge(arr, left_start, mid, right_end); 
                frames = frames.concat(subframes);
            } 
        } 

        return frames;
} 
