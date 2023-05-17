document.addEventListener("DOMContentLoaded", function () {
  // Paginas da Pagina
  document.querySelector("#divMainPage").style.display = "none";
  document.querySelector("#divWorkout").style.display = "none";
  document.querySelector("#divVideos").style.display = "none";

  document.querySelector("#videoModal").style.display = "none";

  document
    .querySelector("#btnWorkout")
    .addEventListener("click", () => LoadWorkout());
  document
    .querySelector("#btnMainPage")
    .addEventListener("click", () => LoadMainPage());
  document
    .querySelector("#btnVideos")
    .addEventListener("click", () => LoadVideos());

  // Gym Info
  document.querySelector("#dimensoesInfoDescription").style.display = "none";
  document.querySelector("#ordinarioInfoDescription").style.display = "none";

  document
    .querySelector("#dimensoesInfoTitle")
    .addEventListener("mouseenter", () => LoadDimensoesDescription());
  document
    .querySelector("#ordinarioInfoTitle")
    .addEventListener("mouseenter", () => LoadOrdinarioDescription());

  // Videos
  document
    .querySelector("#btnVideoReviewAngelico")
    .addEventListener("click", () => LoadVideoReview("angelico"));
  document
    .querySelector("#btnVideoReviewOutro")
    .addEventListener("click", () => LoadVideoReview("outro"));
  document
    .querySelector("#btnVideoReviewQueen")
    .addEventListener("click", () => LoadVideoReview("queen"));
  document
    .querySelector("#btnVideoReviewGiga")
    .addEventListener("click", () => LoadVideoReview("giga"));
  document
    .querySelector("#btnCloseReviewVideo")
    .addEventListener("click", () => CloseVideoReview());

  LoadMainPage();
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function LoadWorkout() {
  document.querySelector("#divWorkout").style.display = "block";
  document.querySelector("#divMainPage").style.display = "none";
  document.querySelector("#divVideos").style.display = "none";

  MudaCorButaoAzul(document.querySelector("#btnWorkout"));
  MudaCorButaoPreto(document.querySelector("#btnMainPage"));
  MudaCorButaoPreto(document.querySelector("#btnVideos"));

  escreverTexto("Informações", document.querySelector("#titleWorkout"));

  var lat = Math.random() * (90 - -90 + 1) + -90;
  var long = Math.random() * (180 - -180 + 1) + -180;

  mapDiv = document.querySelector("#map");

  mapDiv.innerHTML = `<div class="flex animate-descegar w-full h-fit"><iframe id="mapIframe" class="w-full h-full" src="https://maps.google.com/maps?q=${lat},${long}+(TESTe)&amp;t=&amp;z=4&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>`;

  var localidade = document.querySelector("#infoLocalidade");
  localidade.innerHTML = "";

  fetch(`https://geocode.maps.co/reverse?lat=${lat}&lon=${long}&format=json`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if ("error" in data) {
        var erro = `<div class="flex flex-col flex-1 mt-4 w-full border rounded-lg bg-teal-400 text-white text-2xl md:text-4xl overflow-hidden">
                            <div class="m-auto my-4 text-center"><i class="fa-sharp fa-regular fa-triangle-exclamation fa-beat fa-lg"></i><div>
                            <div class="text-center my-4">Instabilidade Quantica detectada</div>
                            <div class="text-center my-4">Faça refresh para obter as nossas próximas coordenadas</div>
                        </div>`;
        localidade.innerHTML = `${erro}`;
      } else {
        var address = data.address;
        var addressList = [];

        for (var elemento in address) {
          addressList.push(address[elemento]);
        }

        addressList.forEach((address) => {
          var p = document.createElement("p");
          p.innerHTML = address;
          localidade.appendChild(p);
        });

        console.log(addressList);
      }
    });

  var telemovel = Math.random() * (999999999 - 100000000 + 1) + 100000000;
  document.querySelector("#infoTelefone").innerHTML = `${Math.round(
    telemovel
  )}`;

  fetch("./files/bible.json")
    .then((response) => response.json())
    .then((data) => {
      var livro = Math.round(Math.random() * (65 - 0) + 0);

      const nChapter = data.Book[livro].Chapter.length;
      var chapter = Math.round(Math.random() * (nChapter - 1 - 0) + 0);

      const nVerses = data.Book[livro].Chapter[chapter].Verse.length;
      var verse = Math.round(Math.random() * (nVerses - 1 - 0) + 0);

      var verso = data.Book[livro].Chapter[chapter].Verse[verse]["Verse"];
      document.querySelector("#infoEmail").innerHTML = `${verso}`;
    });

  StopVideos();
}

function LoadMainPage() {
  document.querySelector("#divWorkout").style.display = "none";
  document.querySelector("#divMainPage").style.display = "block";
  document.querySelector("#divVideos").style.display = "none";

  MudaCorButaoAzul(document.querySelector("#btnMainPage"));
  MudaCorButaoPreto(document.querySelector("#btnWorkout"));
  MudaCorButaoPreto(document.querySelector("#btnVideos"));

  escreverTexto(
    "Mais Dimensões Menos Desculpas!",
    document.querySelector("#titleMain")
  );

  StopVideos();
}

function LoadVideos() {
  document.querySelector("#divWorkout").style.display = "none";
  document.querySelector("#divMainPage").style.display = "none";
  document.querySelector("#divVideos").style.display = "block";

  MudaCorButaoAzul(document.querySelector("#btnVideos"));
  MudaCorButaoPreto(document.querySelector("#btnMainPage"));
  MudaCorButaoPreto(document.querySelector("#btnWorkout"));

  escreverTexto("Venha Conhecer-nos", document.querySelector("#titleVideos"));
  StopVideos();
}

function StopVideos() {
  var videos = document.querySelectorAll("#myVideos");

  videos.forEach((video) => {
    video.pause();
    video.currentTime = 0;
  });
}

function LoadVideoReview(x) {
  StopVideos();

  var video;

  if (x == "angelico") {
    video = "angelico.mp4";
  }
  if (x == "outro") {
    video = "outro.mp4";
  }
  if (x == "queen") {
    video = "cosmicqueen.mp4";
  }
  if (x == "giga") {
    video = "gigachad.mp4";
  }
  document.querySelector("#videoModal").style.display = "flex";

  videoDiv = document.querySelector("#reviewVideo");

  videoDiv.innerHTML = `<video id="myVideos" class="w-full max-w-full lg:max-w-2xl rounded-lg m-auto border-8 border-teal-400" controls>
                            <source src="https://github.com/DSiegfield/dimensoes/blob/master/videos/${video}?raw=true" type="video/mp4">
                            Historia do angelico
                        </video>`;
}

function CloseVideoReview() {
  document.querySelector("#videoModal").style.display = "none";
  StopVideos();
}

function LoadDimensoesDescription() {
  if (
    !document
      .querySelector("#ordinarioInfoTitle")
      .classList.contains("rounded-b-3xl")
  ) {
    document
      .querySelector("#ordinarioInfoTitle")
      .classList.add("rounded-b-3xl");
  }
  document.querySelector("#dimensoesInfoDescription").style.display = "block";
  document.querySelector("#ordinarioInfoDescription").style.display = "none";
}

function LoadOrdinarioDescription() {
  document
    .querySelector("#ordinarioInfoTitle")
    .classList.remove("rounded-b-3xl");
  document.querySelector("#dimensoesInfoDescription").style.display = "none";
  document.querySelector("#ordinarioInfoDescription").style.display = "block";
}

function MudaCorButaoAzul(butao) {
  if (butao.classList.contains("text-gray-900")) {
    butao.classList.remove("text-gray-900");
    butao.classList.add("text-teal-400");
  }
}

function MudaCorButaoPreto(butao) {
  if (butao.classList.contains("text-teal-400")) {
    butao.classList.remove("text-teal-400");
    butao.classList.add("text-gray-900");
  }
}

function escreverTexto(x, y) {
  var texto = x;
  var div = y;
  div.innerHTML = "";

  // COMO RAIO TU FUNCIONAS???!?!?!?!?!
  // DESDE QUANDO INCREMENTAR 50 * i MANTEM UMA CONSTANTE DE TEMPO!!!!
  // Obrigado ao Chat Gpt por fixar este spaghetti code mas realmente não entendo porque 50 não da e 50 + i da....

  for (var i = 0; i < texto.length; i++) {
    (function (i) {
      setTimeout(function () {
        div.innerHTML += texto.charAt(i);
      }, 50 * i);
    })(i);
  }
}
