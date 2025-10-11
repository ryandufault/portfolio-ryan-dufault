/* v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v= */
/* VUE FETCH   VUE FETCH   VUE FETCH   VUE FETCH      */
/* v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v= */

const appli = Vue.createApp({
    data() {
        return {
            projets: [],  // array vide qui sera rempli avec les projets dans le fetch
            idProjet: null, // index du projet à afficher
            etat: "loading"  // état du fetch (définit à loading au chargement), relié à un <p> dans le html pour accessib.
        };
    },
    computed: {
        projetActuel() {
            return this.projets[this.idProjet];  // assigne à l'array l'id du projet
        }
    },
    mounted() {
        console.log("L'app Vue a été créée et montée au DOM (mounted) !"); 
        let wrapper = document.querySelector('.projet-wrapper'); // sélectionne la section
        this.idProjet = parseInt(wrapper.dataset.index) // récupère l'index (=0) du data set dans le .projet-wrapper et l'applique à idProjet
        fetch('./assets/projects.json')
            .then(response => response.json())
            .then(data => {
                this.projets = data.projets;  // récupère les données json des projets et les mets dans l'array
                this.etat = "loaded"; // change l'état quand fetch réussi
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