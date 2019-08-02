import React from "react";

const RecipeList = (props) => (
    <div style={props.style}>
       <h2>Recipes</h2>
        <ul>
            <li>
                <span>Halloween cupcakes</span>
                <span>Dessert</span>
            </li>
            <li>
                <span>Blueberry cakes</span>
                <span>Dessert</span>
            </li>
            <li>
                <span>Pork cooker</span>
                <span>Meat</span>
            </li>
        </ul>
    </div>
);

export default RecipeList;
