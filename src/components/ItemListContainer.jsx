// src/components/ItemListContainer.jsx
import React from 'react';

const ItemListContainer = ({ greeting }) => {
    return (
    <div style={styles.container}>
    <h2>{greeting}</h2>
    </div>
);
};

const styles = {
container: {
    textAlign: 'center',
    marginTop: '20px',
},
};

export default ItemListContainer;
