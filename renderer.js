"use strict";
const mapState = {
    'entities': [],
    'items': [],
};
// This feels too simple
function castExists(thing) {
    return thing;
}
const el = castExists(document.getElementById('tablee')).getElementsByTagName('tbody')[0];
el.insertRow();
el.insertRow();
