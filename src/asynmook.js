import { useHref } from "react-router-dom";

const products = [
    {
        id: "1",
        name: "Labial rosa",
        price: 2000,
        category: "maquillaje",
        img: "/public/img/labial1.jpg",
        stock: 10,
        description: "Descripción labial",
    },
    {
        id: "2",
        name: "Labial rojo",
        price: 1500,
        category: "maquillaje",
        img: "/public/img/labial3.jpeg",
        stock: 15,
        description: "Descripción labial 2",
    },
    {
        id: "3",
        name: "Sombras chicas",
        price: 1200,
        category: "maquillaje",
        img: "/public/img/sombras3.jpeg",
        stock: 15,
        description: "Descripción de maquillaje",
    },
    {
        id: "4",
        name: "Fishbones arcane",
        price: 10000,
        category: "props",
        img: "/public/img/arcane2.jpg",
        stock: 2,
        description: "Descripción fishbones",
    },
    {
        id: "5",
        name: "Gauntlet arcane",
        price: 15000,
        category: "props",
        img: "/public/img/arcane1.jpg",
        stock: 5,
        description: "Descripción de gauntlet",
    },
    {
        id: "6",
        name: "Mandoble Dehya",
        price: 13000,
        category: "props",
        img: "/public/img/dehya.jpg",
        stock: 3,
        description: "Descripción de mandoble",
    },
    {
        id: "7",
        name: "Cosplay Rui",
        price: 35000,
        category: "cosplay",
        img: "/public/img/rui1.jpg",
        stock: 10,
        description: "Descripción de rui",
    },
    {
        id: "8",
        name: "Cosplay Yae Miko",
        price: 50000,
        category: "cosplay",
        img: "/public/img/yaemiko.jpg",
        stock: 10,
        description: "Descripción de yae miko",
    },
    {
        id: "9",
        name: "Cosplay Jinx",
        price: 80000,
        category: "prop",
        img: "/public/img/jinx.jpg",
        stock: 10,
        description: "Descripción de jinx",
    },
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(products), 1000);
    });
};

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(products.filter((product) => product.category === category)), 1000);
    });
};