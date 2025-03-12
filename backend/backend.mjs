import PocketBase from "pocketbase";
const pb = new PocketBase("http://127.0.0.1:8090");

export async function allPartenaires() {
    const records = await pb.collection('Partenaires').getFullList() ;
    return records ;
    }

    export async function SortallPartenaires() {
        const records = await pb.collection('Partenaires').getFullList({sort: 'nom_partenaires'}) ;
        return records ;
        }
