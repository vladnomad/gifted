import photo_1 from "../assets/img/photos/offerList_1.webp"
import photo_2 from "../assets/img/photos/offerList_2.webp"
import photo_3 from "../assets/img/photos/offerList_3.webp"
import photo_4 from "../assets/img/photos/offerList_4.webp"
import photo_5 from "../assets/img/photos/offerList_5.webp"
import photo_6 from "../assets/img/photos/offerList_6.webp"

const TAGS = {
    FASHION: "Fashion",
    BEAUTY: "Beauty",
    JEWELRY: "Jewelry",
    HOMEDECOR: "HomeDecor",
    TECH: "Tech",
    SPORT: "Sport",
    SHOES: "Shoes",
    TRAVEL: "Travel",
    ENTERTAINMENT: "Entertainment"
}

export const offers = [
    {
        title: "Pandora",
        author: "Marta Kowalczyk",
        date: "12 March 2024",
        tag: TAGS.JEWELRY,
        photo: photo_1
    },
    {
        title: "Apple",
        author: "John Davis",
        date: "7 March 2024",
        tag: TAGS.TECH,
        photo: photo_2
    },
    {
        title: "Jolyn Swimwear",
        author: "Emily Johnson",
        date: "2 March 2024",
        tag: TAGS.FASHION,
        photo: photo_3
    },
    {
        title: "AirBnB",
        author: "Leonardo Rossi",
        date: "29 February 2024",
        tag: TAGS.TRAVEL,
        photo: photo_4
    },
    {
        title: "Almond Surfboards",
        author: "John Davis",
        date: "29 February 2024",
        tag: TAGS.SPORT,
        photo: photo_5
    },
    {
        title: "Sephora",
        author: "Maria Bianchi",
        date: "17 February 2024",
        tag: TAGS.BEAUTY,
        photo: photo_6
    }
]
