<template>
<header>
    <nav class="navbar navbar-expand">
      <div class="navbar navbar-header">
        <div class="container-fluid">
          <a class="navbar-brand" href="http://localhost:8080/"><img src="../../public/img/icon/icon.png" alt="" width="80" height="40"></a>
          <div class="nav navbar-nav nav-list">
            <div class="d-flex flex-row justify-content-around">
              <!-- <a class="nav-link"  @click="pilotosEnviar">Pilotos</a> -->
              <router-link class="nav-link" to="/pilotos" @click="pilotosEnviar">Pilotos</router-link>
              <a class="nav-link" href="../public/escuderias.html" @click="escuderiasEnviar">Escuderias</a>
              <a class="nav-link" href="../public/coches.html" @click="cochesEnviar">Coches</a>
              <a class="nav-link" href="../public/circuitos.html" @click="circuitosEnviar">Circuitos</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
  <main class="d-flex flex-column bg-dark">
    <section id="titulo" class="text-center pages-content">
      <h1 class="text-light text-uppercase">Bienvenido a <img src="../../public/img/icon/logo-F1.png" alt="" width="100px" height="60px"></h1>
        <div class="card bg-danger">
          <div class="card-body">
            <h6 class="card-subtitle">"Si parpadean se lo pierden, porque esto es, la Formula 1."</h6>  
          </div>
          <div class="align-self-center">
            <video src="../../public/vid/index/f1_index.mp4" autoplay muted loop width="1680" height="980">ESTO ES LA F1</video>
          </div>
        </div>
        <div id="artTitle">
          <h3 class="text-light">Pilotos que recordaremos</h3>
        </div>
    </section>
    <div class="text-center" id="pilotos">
      <section id="pilot1" class="container flex-row">
        <article class="d-flex justify-content-around">
          <div class="card text-white bg-dark" style="width: 18rem;">
            <img :src="F1[0].piloto[0].profile" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">{{ F1[0].piloto[0].nombre }} "{{ F1[0].piloto[0].apodo }}" {{ F1[0].piloto[0].apellido }}</h5>
                  <p class="card-text" v-text="F1[0].piloto[0].desc"></p>
                <a href="#" class="btn justify-content-end btn-primary">Go somewhere</a>
            </div>
          </div>
          <div class="card text-white bg-dark" style="width: 18rem;">
            <img :src="F1[0].piloto[1].profile" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">{{ F1[0].piloto[1].nombre }} "{{ F1[0].piloto[1].apodo }}" {{ F1[0].piloto[1].apellido }}</h5>
                  <p class="card-text" v-text="F1[0].piloto[1].desc"></p>
                <a href="#" class="btn align-self-end btn-primary">Go somewhere</a>
            </div>
          </div>
          <div class="card text-white bg-dark" style="width: 18rem;">
            <img :src="F1[0].piloto[2].profile" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">{{ F1[0].piloto[2].nombre }} "{{ F1[0].piloto[2].apodo }}" {{ F1[0].piloto[2].apellido }}</h5>
                <p class="card-text" v-text="F1[0].piloto[2].desc"></p>
                <a href="#" class="btn align-self-end btn-primary">Go somewhere</a>
            </div>
          </div>
        </article>
      </section>
      <section id="pilot2" class="container flex-row">
        <article class="d-flex justify-content-around">
          <div class="card text-white bg-dark" style="width: 18rem;">
            <img :src="F1[0].piloto[3].profile" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">{{ F1[0].piloto[3].nombre }} "{{ F1[0].piloto[3].apodo }}" {{ F1[0].piloto[3].apellido }}</h5>
                <p class="card-text" v-text="F1[0].piloto[3].desc"></p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          <div class="card text-white bg-dark" style="width: 18rem;">
            <img :src="F1[0].piloto[4].profile" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">{{ F1[0].piloto[4].nombre }} "{{ F1[0].piloto[4].apodo }}" {{ F1[0].piloto[4].apellido }}</h5>
                <p class="card-text" v-text="F1[0].piloto[4].desc"></p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          <div class="card text-white bg-dark" style="width: 18rem;">
            <img :src="F1[0].piloto[5].profile" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">{{ F1[0].piloto[5].nombre }} "{{ F1[0].piloto[5].apodo }}" {{ F1[0].piloto[5].apellido }}</h5>
                <p class="card-text" v-text="F1[0].piloto[5].desc"></p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </article>
      </section>
    </div>
    <section class="d-flex flex-column">
      <div class="card text-center bg-danger">
              <div class="card-body">
                <h6 class="card-subtitle">"Tengo hambre de ganar."</h6>  
              </div>
            </div>
            <div>
              <h1 id="artTitle2" class="text-light text-center">Coches legendarios</h1>
            </div>
            <div id="carousel" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carousel" data-slide-to="0" class="active"></li>
                <li data-target="#carousel" data-slide-to="1"></li>
                <li data-target="#carousel" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img class="d-block w-100" :src="F1[1].escuderia[1].coche[0].foto" height="840" alt="First slide">
                <div class="carousel-caption d-none d-md-block">
                    <h5>{{F1[1].escuderia[1].nombre}} {{F1[1].escuderia[1].coche[0].nombre}}</h5>
                    <p>{{F1[1].escuderia[1].coche[0].ano}}</p>
                  </div>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" :src="F1[1].escuderia[0].coche[0].foto" height="840" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                    <h5>{{F1[1].escuderia[0].nombre}} {{F1[1].escuderia[0].coche[0].nombre}}</h5>
                    <p>{{F1[1].escuderia[0].coche[0].ano}}</p>
                  </div>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" :src="F1[1].escuderia[0].coche[1].foto" height="840" alt="Third slide">
                <div class="carousel-caption d-none d-md-block">
                    <h5>{{F1[1].escuderia[0].nombre}} {{F1[1].escuderia[0].coche[1].nombre}}</h5>
                    <p>{{F1[1].escuderia[0].coche[1].ano}}</p>
                  </div>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            </a>
            <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
            </a>
          </div>
    </section>
  </main>
  <footer></footer>
  </template>
  <style>
  header {
    box-shadow: 0px 10px;
  }
  #titulo {
    padding: 30px 0px;
  }
  
  #artTitle {
    padding: 30px 0px 0px;
  }
  
  #pilotos {
    background-image: url("../../public/img/index/back3.jpg");
    padding: 30px 0px;
  }
  
  #pilot1 {
    padding: 30px;
  }
  
  #pilot2 {
    padding: 30px;
  }
  
  #artTitle2 {
    padding: 35px 0px;
  }
  
  
  </style>
  <script>
  
      export default {
          mounted() {},
          data() {
              return {
                F1: [
                    {
                      newPiloto: '',
                      piloto: [
                        // {
                        //   nombre: '',
                        //   apellido: '',
                        //   dorsal: 0,
                        //   nacion: '',
                        //   edad: 0,
                        //   apodo: '',
                        //   profile: ''
                        // },
                        {
                          nombre: 'Fernando',
                          apellido: 'Alonso',
                          dorsal: 14,
                          nacion: 'España',
                          edad: 41,
                          apodo: 'Magic',
                          profile: require('../../public/img/piloto/alonso.webp'),
                          desc: 'Fernando Alonso es conocido por combatir por el campeonato en 2005 y 2006, tambien por su polemica del 2007 y por haber sido piloto Ferrari de 2010 a 2012.'
                        },
                        {
                          nombre: 'Sebastian',
                          apellido: 'Vettel',
                          dorsal: 5,
                          nacion: 'Alemania',
                          edad: 37,
                          apodo: 'Inspector Seb',
                          profile: require('../../public/img/piloto/vettel.jpg'),
                          desc: 'Sebastian Vettel es el sucesor del Kaiser, logrando 4 campeonatos seguidos con Red Bull, y posteriormente arruinando su carrera en Ferrari.'
                        },
                        {
                          nombre: 'Carlos',
                          apellido: 'Sainz Jr',
                          dorsal: 55,
                          nacion: 'España',
                          edad: 26,
                          apodo: 'Smooth Operator',
                          profile: require('../../public/img/piloto/carlos.jpg'),
                          desc: 'Carlos Sainz Junior, hijo del campeón de Rally y Dakar Carlos Sainz Senior, comenzó en Toro Rosso y posteriormente pasó por Renault y McLaren. Actualmente esta en Ferrari.'
                        },
                        {
                          nombre: 'Michael',
                          apellido: 'Schumacher',
                          dorsal: 1,
                          nacion: 'Alemania',
                          edad: 47,
                          apodo: 'Kaiser',
                          profile: require('../../public/img/piloto/schumi.jpg'),
                          desc: 'El Kaiser, Schumi, Ferrari. Comenzando en Jordan y despues a Benneton, logró allí 2 campeonatos y posteriormente del 2000 al 2004 logró 5 seguidos hasta ser detenido por Alonso.'
                        },
                        {
                          nombre: 'Kimi',
                          apellido: 'Raikkonen',
                          dorsal: 7,
                          nacion: 'Finlandia',
                          edad: 43,
                          apodo: 'Iceman',
                          profile: require('../../public/img/piloto/raikkonen.jpg'),
                          desc: 'Al igual que Alonso, entró en 2001, y fue luchador al titulo en 2005 y 2006. En 2007 ganó el campeonato en Ferrari, y a partir de ahi no ha vuelto ha mejorar su rendimiento.'
                        },
                        {
                          nombre: 'Pedro',
                          apellido: 'De la Rosa',
                          dorsal: 344,
                          nacion: 'España',
                          edad: 46,
                          apodo: 'Nippon Ichi',
                          profile: require('../../public/img/piloto/pdlr.jpg'),
                          desc: 'Gran piloto español, heroe japones, se le recordara con cariño en España. Sigue en DAZN y esta trabajando en la mision.'
                        }
                      ]
                    },
                    {
                      escuderia: [
                        {
                          nombre: 'Renault',
                          WCC: 2,
                          coche: [
                            {
                              nombre: 'R25',
                              ano: 2005,
                              foto: require('../../public/img/car/r25.webp')
                            },
                            {
                              nombre: 'R26',
                              ano: 2006,
                              foto: require('../../public/img/car/r26.png')
                            }
                          ],
                          // escudo: require()
                        },
                        {
                          nombre: 'Ferrari',
                          WCC: 16,
                          coche: [
                            {
                              nombre: 'F2004',
                              ano: 2004,
                              foto: require('../../public/img/car/f2004.jpg')
                            },
                          ],
                          // escudo: require()
                        },
                        ] 
                    },
                ]
              };
          },
          methods: {
            pilotosEnviar: function() {
              localStorage.setItem("pilotos", JSON.stringify(this.F1[0].piloto));
            },
            escuderiasEnviar: function() {
              localStorage.setItem("escuderias", JSON.stringify(this.F1[1].escuderia));
            }
          },
          computed: {},
      };
  </script>
  