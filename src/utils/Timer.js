var x = 60
let y;

const displayHello = () =>{
    x = x-1;
    console.log(x);
    return x
}

const useTimer2 = () =>{
    y = setInterval(displayHello, 1000);
    console.log(y)
    return y;
}
    //console.log(start,countdown);

    

export default useTimer2;

