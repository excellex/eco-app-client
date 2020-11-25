import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Blic from './Blic'
import Tires from './Tiles/Tires/Tires'
import Clothing from './Tiles/Clothing/Clothing'
import Products from './Tiles/Products/Products'
import Plastic from './Tiles/Plastic/Plastic'
import Tetrapac from './Tetrapac/Tetrapac'
import Glass from './Tiles/Glass/Glass'
import Flakon from './Tiles/Plastic/Flakon'
import Plasticbottle from './Tiles/Plastic/Plasticbottle'
import Styrofoam from './Tiles/Plastic/Styrofoam'
import Metal from './Tiles/Metal/Metal'
import Paper from './Tiles/Paper/Paper'
import Lightbulbs from './Tiles/Lightbulbs/Lightbulbs'
import Batteries from './Tiles/Batteries/Batteries'
import Hazardouswaste from './Tiles/Hazardouswaste/Hazardouswaste'
import Glasscontainer from "./Tiles/Glass/Glasscontainer";
import Glassglassbreak from "./Tiles/Glass/Glassglassbreak";

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
