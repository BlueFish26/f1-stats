import { Fragment, useEffect } from 'react';
import ConstructorCard from '../components/ConstructorCard';
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
        <h1>F1 2021 Championship</h1>
      </div>

      <div className="grid-container-3-col">
        {constructors &&
          constructors.map((constructor) => {
            return (
              <div
                className="grid-item"
                key={constructor.Constructor.constructorId}
              >
                <ConstructorCard constructor={constructor} />
              </div>
            );
          })}
      </div>
    </Fragment>
  );
};

export default Teams;
