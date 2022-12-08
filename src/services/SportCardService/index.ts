import { db } from "services";
import { collection, query, getDocs } from "firebase/firestore";

export const SportCardService = {
    async getSportsCards() {
        const q = query(collection(db, "sports"));
        const querySnapshot = await getDocs(q);

        let sportsCards: SportCard[] | any = [];
        querySnapshot.forEach((doc) => sportsCards.push(doc.data()));

        return sportsCards;
    }
};
