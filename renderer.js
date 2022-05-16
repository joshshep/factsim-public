"use strict";
const mapStates = {
    "states": [
        {
            "tick": 0,
            "entities_add": [
                {
                    "loc": [
                        0,
                        0
                    ],
                    "sprite-url": "sprites/straight_belt.png",
                    "rotate": 1
                },
                {
                    "loc": [
                        0,
                        1
                    ],
                    "sprite-url": "sprites/straight_belt.png",
                    "rotate": 1
                }
            ],
            "items_update": [
                {
                    "id": 1000,
                    "sprite-url": "sprites/items/iron_plate.png",
                    "loc": [
                        0.25,
                        0.25
                    ]
                }
            ]
        },
        {
            "tick": 1,
            "entities_rm": [
                [
                    0,
                    1
                ]
            ],
            "items_update": [
                {
                    "id": 1000,
                    "loc": [
                        0.5,
                        0.25
                    ]
                }
            ]
        }
    ]
};
// This feels too simple
function castExists(thing) {
    return thing;
}
const el = castExists(document.getElementById('tablee')).getElementsByTagName('tbody')[0];
el.insertRow();
el.insertRow();
const svgg = castExists(document.getElementById('svgg'));
svgg.innerHTML += '<image x="0" y="0" width="275" height="95" xlink:href="sprites/straight_belt.png" />';
