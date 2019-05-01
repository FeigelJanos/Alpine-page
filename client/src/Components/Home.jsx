import React from 'react';
import {NavLink} from 'react-router-dom';


const Home = ()=> {

     
        return ( 
            <React.Fragment>
                <div>
                    <h1>A gyökértől a lombokig</h1>
                    <h2>A faápolás szakértői vagyunk</h2>
                    <p>Védje fáit és cserjéit az ország legtapasztaltabb fápoló csapatának segítségével.</p>
                </div>
                <div>
                    <h2>Miért a Ra-Fa?</h2>
                    <h3>Mert a fák a szenvedélyünk</h3>
                    <p>Több mint tíz éves szakértelemmel rendelkezünk a faápolás területén. Velünk biztos kezekben tudhatja 
                        növényeit.</p>
                    <h3>Képzettek vagyunk</h3>
                    <p>Szakembereink nemzetközileg elismertek és magasan képzettek. Ismerik és használják a legújabb 
                        faápolási technikákat.</p>
                    <h3>Megvannak az eszközeink</h3>
                    <p>Eszközparkunk képes a legnagyobb kihívást kínáló faápolási problémák megoldására is.
                         Alpintechnikai felszereltségünk az országban egyedülálló, igy problémáját gyorsan és hatékonyan tudjuk orvosolni.</p>
                    <h3>Megoldást kínálunk</h3>
                    <p>Faápolási problémáit mindíg az Ön igényeinek figyelembevételével, 
                        a lehető leghatékonyabban és leggyorsabban végezzük.</p>
                </div>
                <div>
                    <h2>Hogyan segítünk?</h2>
                    <h3>Fa ápolás alpintechnikával</h3>
                    <p>Alpin eszközök segítségével a fák gondozása, vagy kivágása más technológiákhoz képest 
                         gyorsabban és biztonságosabban elvégezhető. Az alpintechnika lehetővé teszi olyan nehezen hozzáférhető fák kezelését is 
                         amelyek hagyományos technológiákkal megközelíthetetlenek lennének épületbontás vagy más tereprendezés nélül.</p>
                </div>
                <div>
                    <h2>Van-e szüksége fa ápolásra?</h2>
                    <p>Lelassult növekedés? Korai levélhullás? Foltok vagy dudorok a leveleken? A szokottnál több rovar? Elhalt ágak? 
                        Ideje hívni a profikat. A rendszeres ellenőrzés a legjobb mód arra, hogy fáját egészségesen tartsa. 
                        De amikor felüti fejét a gond, a korai beavatkozás a kulcs, hogy megvédje növényeit. 
                        Ha fa ápolásról van szó, mi nem találgatunk. Addig kutatunk amíg megtaláljuk a megfelelő kezelést.</p>
                    <NavLink to="/GoodToKnow">Beteg-e a fám?</NavLink>
                </div>
                <div>
                    <h2>Méresse fel fa ápolási igényeit</h2>
                    <p>Ha fája betegség tüneteit mutatja, és kezelésre szorul. 
                        Vagy egyéb okokból szükséges a korona visszavágása, vagy a fa kivágása forduljon hozzánk bizalommal!</p>
                    <NavLink to="/Quote">Kérjen ajánlatot!</NavLink>
                </div>

            </React.Fragment>       
         );
    
}
 
export default Home;