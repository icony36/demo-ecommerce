import React from "react";
import { BreakpointProvider } from "react-socks";
import SlideShow from "../components/home/SlideShow";
import Trending from "../components/home/Trending";
import Tutorial from "../components/home/Tutorial";
import Favourite from "../components/home/Favourite";
import FeaturedBlog from "../components/home/FeaturedBlog";
import Subscribe from "../components/home/Subscribe";

const imagesPath = "/static/images/items/";
const items = [
    {
        id: 1,
        name: "Rose Creamchese",
        price: 1.99,
        imgSrc: `${imagesPath}m1.png`,
        desc: `Macaron with rose creambase.`
    },
    {
        id: 2,
        name: "Passion Fruit",
        price: 1.99,
        imgSrc: `${imagesPath}m2.png`,
        desc: `Macaron with passion fruit.`
    },
    {
        id: 3,
        name: "Blueberry Creamchese",
        price: 1.99,
        imgSrc: `${imagesPath}m3.png`,
        desc: `Macaron with blueberry creambase.`
    },
    {
        id: 4,
        name: "Matcha",
        price: 1.99,
        imgSrc: `${imagesPath}m4.png`,
        desc: `Macaron with matcha.`
    },
    {
        id: 5,
        name: "Lavender",
        price: 1.99,
        imgSrc: `${imagesPath}m5.png`,
        desc: `Macaron with lavender.`
    },
    {
        id: 6,
        name: "Peanut Butter",
        price: 1.99,
        imgSrc: `${imagesPath}m6.png`,
        desc: `Macaron with peanut butter.`
    },
    {
        id: 7,
        name: "Black Sesame",
        price: 1.99,
        imgSrc: `${imagesPath}m7.png`,
        desc: `Macaron with black sesame.`
    },
    {
        id: 8,
        name: "Vanilla",
        price: 1.99,
        imgSrc: `${imagesPath}m8.png`,
        desc: `Macaron with vanilla.`
    },
    {
        id: 9,
        name: "Strawberry Creamchese",
        price: 1.99,
        imgSrc: `${imagesPath}m9.png`,
        desc: `Macaron with strawberry creambase.`
    }
];

const Index = props => {
    return (
        <React.Fragment>
            <SlideShow />
            <Trending items={items} />
            <Tutorial />
            <BreakpointProvider>
                <Favourite items={items} />
            </BreakpointProvider>
            <FeaturedBlog />
            <Subscribe />
        </React.Fragment>
    );
};

export default Index;
