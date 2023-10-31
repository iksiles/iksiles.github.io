<template>
  <router-view></router-view>
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
  background-image: url("../public/img/index/back3.jpg");
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
                        profile: require('../public/img/piloto/alonso.webp'),
                        desc: 'Fernando Alonso es conocido por combatir por el campeonato en 2005 y 2006, tambien por su polemica del 2007 y por haber sido piloto Ferrari de 2010 a 2012.'
                      },
                      {
                        nombre: 'Sebastian',
                        apellido: 'Vettel',
                        dorsal: 5,
                        nacion: 'Alemania',
                        edad: 37,
                        apodo: 'Inspector Seb',
                        profile: require('../public/img/piloto/vettel.jpg'),
                        desc: 'Sebastian Vettel es el sucesor del Kaiser, logrando 4 campeonatos seguidos con Red Bull, y posteriormente arruinando su carrera en Ferrari.'
                      },
                      {
                        nombre: 'Carlos',
                        apellido: 'Sainz Jr',
                        dorsal: 55,
                        nacion: 'España',
                        edad: 26,
                        apodo: 'Smooth Operator',
                        profile: require('../public/img/piloto/carlos.jpg'),
                        desc: 'Carlos Sainz Junior, hijo del campeón de Rally y Dakar Carlos Sainz Senior, comenzó en Toro Rosso y posteriormente pasó por Renault y McLaren. Actualmente esta en Ferrari.'
                      },
                      {
                        nombre: 'Michael',
                        apellido: 'Schumacher',
                        dorsal: 1,
                        nacion: 'Alemania',
                        edad: 47,
                        apodo: 'Kaiser',
                        profile: require('../public/img/piloto/schumi.jpg'),
                        desc: 'El Kaiser, Schumi, Ferrari. Comenzando en Jordan y despues a Benneton, logró allí 2 campeonatos y posteriormente del 2000 al 2004 logró 5 seguidos hasta ser detenido por Alonso.'
                      },
                      {
                        nombre: 'Kimi',
                        apellido: 'Raikkonen',
                        dorsal: 7,
                        nacion: 'Finlandia',
                        edad: 43,
                        apodo: 'Iceman',
                        profile: require('../public/img/piloto/raikkonen.jpg'),
                        desc: 'Al igual que Alonso, entró en 2001, y fue luchador al titulo en 2005 y 2006. En 2007 ganó el campeonato en Ferrari, y a partir de ahi no ha vuelto ha mejorar su rendimiento.'
                      },
                      {
                        nombre: 'Pedro',
                        apellido: 'De la Rosa',
                        dorsal: 344,
                        nacion: 'España',
                        edad: 46,
                        apodo: 'Nippon Ichi',
                        profile: require('../public/img/piloto/pdlr.jpg'),
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
                            foto: require('../public/img/car/r25.webp')
                          },
                          {
                            nombre: 'R26',
                            ano: 2006,
                            foto: require('../public/img/car/r26.png')
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
                            foto: require('../public/img/car/f2004.jpg')
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
          }
        },
        computed: {},
    };
</script>
