vsOilers.addEventListener('click', function(){
    document.body.classList.add('vsOilers');
    console.log('vsOilers');
    document.body.classList.remove('vsPredators');
    document.body.classList.remove('vsIslanders');
    document.body.classList.remove('vsRangers');
    document.getElementById("banner").src="images/vsOilers.webm";

})

vsPredators.addEventListener('click', function (){
    document.body.classList.add('vsPredators');
    console.log('vsPredators');
    document.body.classList.remove('vsOilers');
    document.body.classList.remove('vsIslanders');
    document.body.classList.remove('vsRangers');
    document.getElementById("banner").src="vsPredators.webm";

})


vsIslanders.addEventListener('click', function (){
    document.body.classList.add('vsIslanders');
    console.log('vsIslanders');
    document.body.classList.remove('vsOilers');
    document.body.classList.remove('vsPredators');
    document.body.classList.remove('vsRangers');
    document.getElementById("banner").src="vsIslanders.webm";

}) 

vsRangers.addEventListener('click', function(){
    document.body.classList.add('vsRangers');
    console.log('vsRangers');
    document.body.classList.remove('vsOilers');
    document.body.classList.remove('vsPredators');
    document.body.classList.remove('vsIslanders');
    document.getElementById("banner").src="Dutton's Lounge.webm";
})
