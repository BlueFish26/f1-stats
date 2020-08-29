import React, { Fragment, useEffect } from 'react';
import Constructor from '../components/Constructor';
import { useF1Context } from '../contexts/F1Context';
import { getConstructors } from '../reducers/f1Actions';

const Teams = () => {
  const [{ constructors }, dispatch] = useF1Context();

  useEffect(() => {
    async function loadConstructors() {
      await getConstructors(dispatch);
    }
    console.log('Loading Constructors...');
    loadConstructors();
  }, [dispatch]);

  return (
    <Fragment>
      <div className="team-header">
        <h1>F1 2020 Championship</h1>
      </div>
      {constructors &&
        constructors.map((constructor) => {
          return (
            <Constructor
              key={constructor.Constructor.constructorId}
              constructor={constructor}
            />
          );
        })}
    </Fragment>
  );
};

export default Teams;
