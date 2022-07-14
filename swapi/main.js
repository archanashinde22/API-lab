const button = document.querySelector("button");
const nameContainer = document.createElement("div");
const buttonClick = () => {
  axios
    .get("https://swapi.dev/api/planets/?search=Tatooine")
    .then((res) => {
      nameContainer.textContent = "";
      for (let i = 0; i < res.data.results[0].residents.length; i++) {
        axios
          .get(res.data.results[0].residents[i])
          .then((response) => {
            const residentMovies = response.data.films;

            //console.log(response.data);
            // console.log(residentMovies);
            const resident = document.createElement(`p`);
            //resident.textContent='';
            resident.innerHTML = `<h2> ${response.data.name} Movies :</h2>`;
            nameContainer.appendChild(resident);
            for (let j = 0; j < residentMovies.length; j++) {
              axios
                .get(residentMovies[j])
                .then((resMovie) => {
                  const residentMovies = document.createElement("h6");

                  residentMovies.textContent = resMovie.data.title;
                  resident.appendChild(residentMovies);
                })
                .catch((error) => console.log(error));
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    })
    .catch((error) => {
      console.log(error);
    });
  document.body.appendChild(nameContainer);
};
button.addEventListener("click", buttonClick);
