<template>
    <header>
        <div>
            <h1>Estoy vivo</h1>
        </div>
    </header>
    <ul>
        <li v-for="pilotos in F1[0].piloto" v-bind:key="pilotos">{{ pilotos.nombre }} "{{ pilotos.apodo }}" ({{ pilotos.dorsal }}) {{ pilotos.apellido }}, pais procedente: {{ pilotos.nacion }}, de edad: {{ pilotos.edad }}</li>
    </ul>
    <h5>Insertar</h5>
    <form @submit.prevent="submitForm">
        <label>Nombre</label>
        <input type="text" v-model="F1[0].newPiloto.nombre" placeholder="Nombre">
        <label>Apellido</label>
        <input type="text" v-model="F1[0].newPiloto.apellido" placeholder="Apellido">
        <label>Apodo</label>
        <input type="text" v-model="F1[0].newPiloto.apodo" placeholder="Apodo">
        <label>Dorsal</label>
        <input type="number" v-model="F1[0].newPiloto.dorsal" placeholder="Dorsal">
        <label>Nacion</label>
        <input type="text" v-model="F1[0].newPiloto.nacion" placeholder="Nación">
        <label>Edad</label>
        <input type="number" v-model="F1[0].newPiloto.edad" placeholder="Edad">
    </form>
    <pre>{{ $data }}</pre>
</template>

<script>
import axios from 'axios';
    export default {
        mounted() {
            // this.getPilotos();
            this.getPilotosJSON();
        },
        data() {
            return {
                F1: [
                    {
                    newPiloto: {
                        nombre: '',
                        apellido: '',
                        dorsal: 0,
                        nacion: '',
                        edad: 0,
                        apodo: '',
                        profile: ''
                    },
                    piloto: [
                            {
                            nombre: '',
                            apellido: '',
                            dorsal: 0,
                            nacion: '',
                            edad: 0,
                            apodo: '',
                            profile: ''
                            },
                        ]
                    }
                ]
            };
        },
        methods: {
            // getPilotos() {
            //     let data = localStorage.getItem("pilotos");
            //     if (data != null) {
            //         this.F1[0].piloto = JSON.parse(localStorage.getItem("pilotos"));
            //     }
            // },
            getPilotosJSON() {
                axios.get('http://localhost:8080/js/pilotos.json').then(response => {
                    this.F1[0].piloto = response.data;
                }).catch(error => {
                    console.log(error);
                })
            },
            submitForm() {
            axios.post('http://localhost:8080/js/pilotos.json', this.newPiloto)
                .then(response => {
                console.log(response);
                })
                .catch(error => {
                console.error(error);
                })
            },
        },
        computed: {

        }
    };
</script>