function binSearch(arr, target){
    let high = arr.length
    let low = 0

    let found = undefined


    while(!found){
        let mid = Math.floor((high + low )/2)

        if (arr[mid] == target){
            found = mid+1
            break
        }else if( arr[mid] < target){
            low = mid+1
        }else{
            high = mid-1
        }
        if (low > high){
            break
        }
    }

    return found
}


