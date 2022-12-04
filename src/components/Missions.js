import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    const missoes = missions.map((mission, index) => {
      const { name } = mission;
      const { year } = mission;
      const { country } = mission;
      const { destination } = mission;
      return (
        <MissionCard
          key={ index }
          name={ name }
          year={ year }
          country={ country }
          destination={ destination }
        />
      );
    });
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        { missoes }
      </div>
    );
  }
}

export default Missions;
