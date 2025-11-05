function rest(... a){ // these three dots helps us to acces each argument written down otherwise u dont acces normally
    for (x of a){
        console.log(x+1)
    }
}
rest(10,20,30,40,50)