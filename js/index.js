navigator.geolocation.getCurrentPosition(result=> {
    console.log(result.coords.latitude);
    console.log(result.coords.longitude);
    console.log(result.coords.accuracy)
},error=>{
    error.code
});