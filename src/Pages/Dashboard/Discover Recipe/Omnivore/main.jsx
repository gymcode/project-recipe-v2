import { RECIPE_CARD } from "Components";

const recipeCategory = [
    {
        id: 1,
        title: "Mashed potatoes breakfast hash",
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo debitis quod Nemo debitis quod...",
    },
    {
        id: 2,
        title: "Mashed potatoes breakfast hash",
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo debitis quod",
    },
    {
        id: 3,
        title: "Mashed potatoes breakfast hash",
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo debitis quod Nemo debitis quod...",
    },
    {
        id: 4,
        title: "Mashed potatoes breakfast hash",
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo debitis quod Nemo debitis quod...",
    },
    {
        id: 1,
        title: "Mashed potatoes breakfast hash",
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo debitis quod Nemo debitis quod...",
    },
    {
        id: 2,
        title: "Mashed potatoes breakfast hash",
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo debitis quod",
    },
    {
        id: 3,
        title: "Mashed potatoes breakfast hash",
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo debitis quod Nemo debitis quod...",
    },
    {
        id: 4,
        title: "Mashed potatoes breakfast hash",
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo debitis quod Nemo debitis quod...",
    },
    {
        id: 1,
        title: "Mashed potatoes breakfast hash",
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo debitis quod Nemo debitis quod...",
    },
    {
        id: 2,
        title: "Mashed potatoes breakfast hash",
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo debitis quod",
    },
    {
        id: 3,
        title: "Mashed potatoes breakfast hash",
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo debitis quod Nemo debitis quod...",
    },
    {
        id: 4,
        title: "Mashed potatoes breakfast hash",
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo debitis quod Nemo debitis quod...",
    },
    {
        id: 1,
        title: "Mashed potatoes breakfast hash",
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo debitis quod Nemo debitis quod...",
    },
    {
        id: 2,
        title: "Mashed potatoes breakfast hash",
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo debitis quod",
    },
    {
        id: 3,
        title: "Mashed potatoes breakfast hash",
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo debitis quod Nemo debitis quod...",
    },
    {
        id: 4,
        title: "Mashed potatoes breakfast hash",
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo debitis quod Nemo debitis quod...",
    },
];

const OmnivoreSection = () => {
    return (
        <>
            {recipeCategory.map((data) => (
                <RECIPE_CARD data={data} />
            ))}
        </>
    )
}

export default OmnivoreSection