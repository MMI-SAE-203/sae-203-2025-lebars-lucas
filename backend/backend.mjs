import PocketBase from "pocketbase";
const pb = new PocketBase("http://127.0.0.1:8090");

export async function allPartenaires() {
    const records = await pb.collection('Partenaires').getFullList() ;
    return records ;
    }

    export async function SortallPartenaires() {
        let records = await pb.collection('Partenaires').getFullList({sort: 'nom_partenaires'}) ;
        records = records.map(Partenaires => {
            Partenaires.imgUrl = pb.files.getURL(Partenaires, Partenaires.logo_partenaires);
        return Partenaires ;
        }
        );
        return records ;
        }

        export async function SortallFilms() {
            let records = await pb.collection('Films').getFullList({sort: 'Titre_film'}) ;
            records = records.map(Films => {
                Films.imgUrl = pb.files.getURL(Films, Films.img_film);
            return Films ;
            }
            );
            return records ;
            }
    

        export async function allFilms() {
            const records = await pb.collection('Films').getFullList({sort: 'Titre_film'});
            return records;
        }
        
        // Retourne la liste des activités triées par date de projection
        export async function allActivites() {
            const records = await pb.collection('Activites').getFullList({sort: 'nom_activite'});
            return records;
        }
        
        // Retourne la liste de tous les acteurs / réalisateurs triés par ordre alphabétique
        export async function allActeursRealisateurs() {
            const records = await pb.collection('ActeursRealisateurs').getFullList();
            return records;
        }
        
        // Retourne les informations d'un film en donnant son id en paramètre
        export async function getFilmById(id) {
            const film = await pb.collection('Films').getOne(id);
            return film;
        }
        
        // Retourne les informations d'une activité en donnant son id en paramètre
        export async function getActiviteById(id) {
            const activite = await pb.collection('Activites').getOne(id);
            return activite;
        }
        
        // Retourne les informations d'un acteur / réalisateur en donnant son id en paramètre
        export async function getActeurRealisateurById(id) {
            const acteurRealisateur = await pb.collection('ActeursRealisateurs').getOne(id);
            return acteurRealisateur;
        }
        
        // Retourne toutes les activités d’un animateur donné par son id
        export async function allActivitesByAnimateurId(animateurId) {
            const records = await pb.collection('Activites').getFullList({
                filter: { animateurId: animateurId }
            });
            return records;
        }
        
        // Retourne toutes les activités d’un animateur donné par son nom
        export async function allActivitesByAnimateurNom(animateurNom) {
            const records = await pb.collection('Activites').getFullList({
                filter: { animateurNom: animateurNom }
            });
            return records;
        }
        
        // Permet d'ajouter ou modifier les informations d'un film, activité ou invité
        export async function addOrUpdateItem(collection, itemId, data) {
            let record;
            if (itemId) {
                // Mise à jour si l'ID est fourni
                record = await pb.collection(collection).update(itemId, data);
            } else {
                // Création d'un nouvel enregistrement
                record = await pb.collection(collection).create(data);
            }
            return record;
        }

        export async function getOneEvent(id) {
            try {
                let event = await pb.collection("Films").getOne(id);
                event.img = pb.files.getURL(event, event.img_film);
                return event;
            } catch (error) {
                console.log(error);
                
                return null;
            }
        }
