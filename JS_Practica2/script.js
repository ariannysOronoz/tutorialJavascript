var users = [
{
    name : 'lucy',
    gender: 'F',
    hobby: 'pets',
    avatar: 'avatar1.png'
}, 

{
    name : 'Betty',
    gender: 'F',
    hobby: 'pets',
    avatar: 'avatar2.png'
},
{
    name : 'Ronalds',
    gender: 'M',
    hobby: 'pets',
    avatar: 'avatar3.png'
},
{
    name : 'Christopher',
    gender: 'M',
    hobby: 'Sports',
    avatar: 'avatar4.png'
},

];


window.addEventListener('load', function(){
    function search() {
        //get hobby
        var hobbyField = document.getElementById('hobby').value;
        var hobby = hobbyField;
        console.log(hobby);    
        //get gender
        //obtengo campo de ocpiones
        var genderField = document.getElementById('gender');
        //var gender = genderField.options[genderField.selectedIndex].value;
        //cual es el indice de la opcion selecccionada
        var selected = genderField.selectedIndex;
        // obtengo la opcion y el valor de ella. 
        var gender = genderField.options[selected].value;
        console.log(gender);
        //mostar resultados de los usarios 
        var resultsHTML = '';
        var numbersUsers= users.length;
        var results = document.getElementById('results')

        for(var i =0 ; i< numbersUsers; i++){
            var imagen = './imagens/'+users[i].avatar;
            console.log(imagen);
            //busqueda por genero
            if(gender == 'A' || gender == users[i].gender){
                if(hobby == "" || hobby == users[i].hobby){
                    resultsHTML = resultsHTML + 
                    '<div class="person-row">'+
                        '<img src="'+imagen+'" />'+
                        '<div class="person-info">'+
                            '<div> '+ users[i].name +' </div>'+
                            '<div> '+ users[i].hobby +' </div>'+
                            '<button> Add as friend </button>'+
                        '</div>'+
                    '</div>';
                }
            }
        }
        results.innerHTML = resultsHTML;
    };
   
    var searchBtn = document.getElementById('searchBtn');
    searchBtn.addEventListener('click', search);
    //antes que hace click se haga una busqueda
    search();
});