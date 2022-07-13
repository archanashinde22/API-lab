const button = document.querySelector('button')
const nameContainer =document.createElement('div'); 
const buttonClick =() => {
    axios.get("https://swapi.dev/api/planets/?search=Alderaan")
    .then((res)=>{ 
          
        nameContainer.textContent='';
        for (let i=0 ; i < res.data.results[0].residents.length; i++)
        {  
            axios.get(res.data.results[0].residents[i]).then((res)=>
            {
                const resident = document.createElement(`h2`)
                resident.textContent='';
                resident.textContent = res.data.name;
                nameContainer.appendChild(resident)
            })
            .catch( error => {console.log(error)})
        } })
        .catch( error => {console.log(error)})
        document.body.appendChild(nameContainer);
    console.log("Button clicked");
}
button.addEventListener('click',buttonClick)
