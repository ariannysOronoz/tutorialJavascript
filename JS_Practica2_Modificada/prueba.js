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

function generarDIV(
    imagen,
    nombre,
    hobby
){
    return '<div class="person-row">'+
                '<img src="'+imagen+'" />'+
                '<div class="person-info">'+
                    '<div> '+ nombre +' </div>'+
                    '<div> '+ hobby +' </div>'+
                    '<button> Add as friend </button>'+
                '</div>'+
            '</div>';
}
    
function obtenerElementoConID(id){
    return document.getElementById(id);
}

function obtenerHobby(
    valor
){
    var hobby = obtenerElementoConID(valor).value;
    console.log(hobby);
    return hobby;
}

function obtenerGender(
    valor
){
    var genderField = obtenerElementoConID(valor);
    var selected = genderField.selectedIndex;
    var gender = genderField.options[selected].value;
    console.log(gender);
    return gender;
}

function obtenerResults(
    valor
){
    var resultsHTML = '';
    var numbersUsers= users.length;
    var results = obtenerElementoConID(valor);
    for(var i =0 ; i< numbersUsers; i++){
        var imagen = './imagens/'+users[i].avatar;
        console.log(imagen);
        if(obtenerGender('gender') == 'A' || obtenerGender('gender') == users[i].gender){
            if(obtenerHobby('hobby') == "" || obtenerHobby('hobby') == users[i].hobby){
                resultsHTML = resultsHTML + generarDIV(
                    imagen,
                    users[i].name,
                    users[i].hobby
                )
            }
        }
    }
    return results.innerHTML = resultsHTML;  
}

function search() {
    obtenerHobby('hobby');    
    obtenerGender('gender');
    obtenerResults('results');
}; 

window.addEventListener('load', function(){
    var searchBtn = document.getElementById('searchBtn');
    searchBtn.addEventListener('click', search);
    search();
});