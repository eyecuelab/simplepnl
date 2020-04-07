import React from 'react';
import Megan from '../images/megan.jpg';

const meganImage = {
    marginTop: '40px',
    width: '25%',
    borderRadius: '50%'
}

function ImMeg() {
    return (
        <div>
            <img src={Megan} style={meganImage}/>
        </div>
    );
}

export default ImMeg;