import { createContext } from "react";
import { loremIpsum } from "lorem-ipsum";

const lorem = {
    count: 10, // Number of "words", "sentences", or "paragraphs"
    format: "plain", // "plain" or "html"
    paragraphLowerBound: 3, // Min. number of sentences per paragraph.
    paragraphUpperBound: 7, // Max. number of sentences per paragarph.
    random: Math.random, // A PRNG function
    sentenceLowerBound: 5, // Min. number of words per sentence.
    sentenceUpperBound: 15, // Max. number of words per sentence.
    suffix: "\r\n", // Line ending, defaults to "\n" or "\r\n" (win32)
    units: "paragraphs" // paragraph(s), "sentence(s)", or "word(s)"
};

const imagesPath = "/static/images/posts/";

const posts = [
    {
        id: 1,
        title: "How Does the Development Mode Work?",
        date: "August 4, 2019",
        image: `${imagesPath}1.jpg`,
        content: `${loremIpsum(lorem)}`
    },
    {
        id: 2,
        title: "Algebraic Effects for the Rest of Us",
        date: "August 4, 2019",
        image: `${imagesPath}2.jpg`,
        content: loremIpsum(lorem)
    },
    {
        id: 3,
        title: "How Does the Development Mode Work?",
        date: "August 4, 2019",
        image: `${imagesPath}3.jpg`,
        content: loremIpsum(lorem)
    },
    {
        id: 4,
        title: "Name It, and They Will Come",
        date: "August 4, 2019",
        image: `${imagesPath}4.jpg`,
        content: loremIpsum(lorem)
    },
    {
        id: 5,
        title: "Writing Resilient Components",
        date: "August 4, 2019",
        image: `${imagesPath}5.jpg`,
        content: loremIpsum(lorem)
    },
    {
        id: 6,
        title: "How Are Function Components Different from Classes?",
        date: "August 4, 2019",
        image: `${imagesPath}6.jpg`,
        content: loremIpsum(lorem)
    }
];

console.log("Inside BlogContext");
export const BlogContext = createContext();

export const BlogProvider = props => {
    return (
        <BlogContext.Provider value={posts}>
            {props.children}
        </BlogContext.Provider>
    );
};
