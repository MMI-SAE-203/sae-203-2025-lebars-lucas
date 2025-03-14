import PocketBase from 'pocketbase';

const pb = new PocketBase("https://sae203.lucas-lebars.fr:443");

    async function SortallPartenaires() {
        let records = await pb.collection('Partenaires').getFullList({sort: 'nom_partenaires'}) ;
        records = records.map(Partenaires => {
            Partenaires.imgUrl = pb.files.getURL(Partenaires, Partenaires.logo_partenaires);
        return Partenaires ;
        }
        );
        return records ;
        }

        async function SortallFilms() {
            let records = await pb.collection('Films').getFullList({sort: 'Titre_film'}) ;
            records = records.map(Films => {
                Films.imgUrl = pb.files.getURL(Films, Films.img_film);
            return Films ;
            }
            );
            return records ;
            }

            async function Sortallactivite() {
                let records = await pb.collection('Activites').getFullList({sort: 'date_activite'}) ;
                return records ;
                }

                async function Sortinvites() {
                    let records = await pb.collection('Invite').getFullList({sort: 'nom_prenom_invite'}) ;
                    return records ;
                    }

        async function getOneEvent(id) {
            try {
                let event = await pb.collection("Films").getOne(id);
                event.img = pb.files.getURL(event, event.img_film);
                return event;
            } catch (error) {
                console.log(error);
                
                return null;
            }
        }

        async function getOneEventinvite(id) {
            try {
                let invit = await pb.collection("Invite").getOne(id);
                invit.img = pb.files.getURL(invit, invit.image_invite);
                return invit;
            } catch (error) {
                console.log(error);
                
                return null;
            }
        }

export { Sortallactivite as S, getOneEventinvite as a, Sortinvites as b, SortallFilms as c, SortallPartenaires as d, getOneEvent as g };
