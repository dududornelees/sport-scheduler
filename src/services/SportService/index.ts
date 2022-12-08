import { db } from "services";
import { collection, query, getDocs } from "firebase/firestore";

export const SportService = {
    async getSports() {
        const q = query(collection(db, "sports"));
        const querySnapshot = await getDocs(q);

        let sports: Sport[] | any = [];
        querySnapshot.forEach((doc) => sports.push(doc.data()));

        return sports;
    }
};
