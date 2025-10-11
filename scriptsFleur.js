/* v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v= */
/* VUE FETCH   VUE FETCH   VUE FETCH   VUE FETCH      */
/* v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v= */

const appli = Vue.createApp({
    data() {
        return {
            projets: [],  // array vide qui sera rempli avec les projets dans le fetch
            idProjet: 0, // index du projet à afficher
            etat: "loading"  // état du fetch (définit à loading au chargement), relié à un <p> dans le html pour accessib.
        };
    },
    computed: {
        projetActuel() {
            return this.projets[this.idProjet]; // récupère l'id du projet dans le array
        }
    },
    mounted() {
        console.log("L'app Vue a été créée et montée au DOM (mounted) !"); 
            let wrapper = document.querySelector('.projet-wrapper');
    this.idProjet = parseInt(wrapper.dataset.index)
        fetch('./assets/projects.json')
            .then(response => response.json())
            .then(data => {
                this.projets = data.projets;  // récupère les données json des projets et les mets dans l'array
                this.etat = "ready"; // change l'état quand fetch réussi
            })
            .catch(error => {
                console.error(error); // log l'erreur dans la console
                this.etat = "error";  // fetch échoué
            });
    }
});

const vm = appli.mount('.projet-wrapper');

/* ^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^= */
/* VUE FETCH   VUE FETCH   VUE FETCH   VUE FETCH      */
/* ^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^= */