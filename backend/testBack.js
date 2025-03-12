import {allPartenaires, SortallPartenaires} from './backend.mjs';

try {
    const records = await allPartenaires() ;
    console.log(JSON.stringify(records, null, 2)) ;
    } catch (e) {
    console.error(e) ;
    }

