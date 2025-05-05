
// export const App = () => {
//     return (
//         <>
//         <Header title='Jogíni'/>
//     <Intro heading='Vítejte mezi Jogíny' text='Naše lekce jsou zaměřeny na potřeby klientů, kteří mají odvahu zku
//     něco nového. Cvičíme v pomalém tempu s podrobným slovním doprovode
//     Postupně se seznámíte se základními principy jógy, jak přístupovat
//     sobě i ostatním. Krok za krokem objevíte a dostanete pod kontrolu
//     svoje tělo, pocity a emoce.'/>
//     <Pose src='../../img/yoga-pose.jpg'/>
//         </>
// )
// }

import React from 'react';

import {Header} from '../Header/Header.jsx';
import {Intro} from '../Intro/index.jsx';
import {Pose} from '../Pose/index.jsx';

export const App = () => {
    return (
        <>
            <Header title="Jogíni" />
            <Intro
                heading="Vítejte mezi Jogíny"
                text={`Naše lekce jsou zaměřeny na potřeby klientů, kteří mají odvahu zkusit něco nového. 
Cvičíme v pomalém tempu s podrobným slovním doprovodem. 
Postupně se seznámíte se základními principy jógy, jak přistupovat k sobě i ostatním. 
Krok za krokem objevíte a dostanete pod kontrolu svoje tělo, pocity a emoce.`}
            />
            <Pose />
        </>
    );
};