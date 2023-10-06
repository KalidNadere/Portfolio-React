import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';

// Content function define
function Content() {
  return (
    <main>
      {/* Switch component used to render first child "Route", that matches current location */}
      <switch>
        <Route path="/about" component={AboutMe} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
        <Redirect to="/about" />
      </switch>
    </main>
  );
}

// Content component exported for use in other parts of the app
export default Content;