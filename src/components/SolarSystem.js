import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    const planetas = planets.map((planet, index) => {
      const { name } = planet;
      const { image } = planet;
      return <PlanetCard key={ index } planetName={ name } planetImage={ image } />;
    });
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        { planetas }
      </div>
    );
  }
}

export default SolarSystem;
