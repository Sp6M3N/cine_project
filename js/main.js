var section = document.querySelector("section");

for (var i = 0; i < movies.length; i++) {
  var myArticle = document.createElement("article");
  var myH2 = document.createElement("h2");
  var myPoster = document.createElement("img");
  var myPara1 = document.createElement("p");

  var myDiv = document.createElement("div");
  var myDiv2 = document.createElement("div");

  myArticle.classList.add("card", "row");
  myDiv2.classList.add("row", "col-12");
  myPoster.classList.add("col-4", "img-fluid", "mx-auto");
  myDiv.classList.add("myDiv","col-8");

  myH2.textContent = movies[i].Title;
  myPoster.src = movies[i].Poster;
  myPara1.innerHTML = "<strong><U>Year:</U></strong> " + movies[i].Year + "<br>" +
                      "<strong><U>Released:</U></strong> " + movies[i].Released + "<br>" + 
                      "<strong><U>Genre:</U></strong> " + movies[i].Genre + "<br>" +
                      "<strong><U>Director:</U></strong> " + movies[i].Director + "<br>" +
                      "<strong><U>Writer:</U></strong> " + movies[i].Writer + "<br>" +
                      "<strong><U>Actors:</U></strong> " + movies[i].Actors + "<br>" +
                      "<strong><U>Plot:</U></strong> " + movies[i].Plot + "<br>" +
                      "<strong><U>Language:</U></strong> " + movies[i].Language + "<br>" +
                      "<strong><U>Country:</U></strong> " + movies[i].Country + "<br>" +
                      "<strong><U>Awards:</U></strong> " + movies[i].Awards + "<br>" +
                      "<strong><U>Metascore:</U></strong> " + movies[i].Metascore + "<br>" +
                      "<strong><U>imdbRating:</U></strong> " + movies[i].imdbRating + "<br>" +
                      "<strong><U>Type:</U></strong> " + movies[i].Type;

  myArticle.appendChild(myH2);
  myArticle.appendChild(myDiv2);
  myArticle.appendChild(myPoster);
  myArticle.appendChild(myDiv);

  myDiv2.appendChild(myPoster);
  myDiv2.appendChild(myDiv);

  myDiv.appendChild(myPara1);
  
  section.appendChild(myArticle);
}

console.log(movies);
