const mapState = {
    'entities': [],
    'items': [],
};

// This feels too simple
function castExists<T>(thing: T|undefined|null): T {
    return thing as T;
  }

const el = castExists(document.getElementById('tablee')).getElementsByTagName('tbody')[0];
el.insertRow();
el.insertRow();