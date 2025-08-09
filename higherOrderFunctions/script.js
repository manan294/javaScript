function divide(a,b){
    try {
        if(b == 0){
            throw new Error("koi gadbad huiiiii");//priority function
        }
        console.log(a/b);
    } catch (error) {
        console.err(error);
    }
}

divide(10,0)