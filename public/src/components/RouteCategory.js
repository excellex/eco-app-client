import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Blic from './Blic'
import Tires from './Tires/Tires'
import Clothing from './Clothing/Clothing'
import Products from './Products/Products'
import Plastic from './Plastic/Plastic'
import Tetrapac from './Tetrapac/Tetrapac'
import Glass from './Glass/Glass'
import Flakon from './Plastic/Flakon'
import Plasticbottle from './Plastic/Plasticbottle'
import Styrofoam from './Plastic/Styrofoam'
import Metal from './Metal/Metal'
import Paper from './Paper/Paper'
import Lightbulbs from './Lightbulbs/Lightbulbs'
import Batteries from './Batteries/Batteries'
import Hazardouswaste from './Hazardouswaste/Hazardouswaste'
import Glasscontainer from "./Glass/Glasscontainer";
import Glassglassbreak from "./Glass/Glassglassbreak";

function RouteCategory(props) {
  return (
    <div>
    <Switch>
      <Route path='/blic'>
      <Blic />
      </Route>
        <Route path='/tires'>
         <Tires />
       </Route>
        <Route path='/clothing'>
      <Clothing />
        </Route>
        <Route path='/products'>
      <Products />
        </Route>
        <Route path='/plastic/flakon'>
      <Flakon />
        </Route>
        <Route path='/plastic/plasticbottle'>
      <Plasticbottle />
        </Route>
        <Route path='/plastic/styrofoam'>
      <Styrofoam />
        </Route>
        <Route path='/plastic'>
      <Plastic />
        </Route>
        <Route path='/tetrapac'>
      <Tetrapac />
      </Route>
        <Route path='/glass/glassbreak'>
      <Glassglassbreak/>
        </Route>
        <Route path='/glass/container'>
      <Glasscontainer />
         </Route>
        <Route path='/glass'>
      <Glass />
       </Route>
        <Route path='/metal'>
      <Metal />
        </Route>
        <Route path='/paper'>
      <Paper />
        </Route>
        <Route path='/lightbulbs'>
      <Lightbulbs />
        </Route>
        <Route path='/batteries'>
      <Batteries />
        </Route>
        <Route path='/hazardouswaste'>
      <Hazardouswaste />
        </Route>
    </Switch>
    </div>
  );
}

export default RouteCategory;
