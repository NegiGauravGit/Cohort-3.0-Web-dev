function counter(){
    var count = 0;
    setInterval(function(){
        count++;
        console.log(count);
    },1000);
}
counter();
