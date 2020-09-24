import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import VisibilitySensor from 'react-visibility-sensor';
import { spriteEndpoint } from '../../services/consts';
import { Stat } from '../../types/pokemon';
import Container from './style';

interface Pokemon {
  data: Stat;
}

export const Pokemon = ({ data }: Pokemon) => {
  const [visible, setVisible] = useState(false);
  const history = useHistory();

  return (
    <VisibilitySensor partialVisibility onChange={setVisible}>
      <Container className="m1 p1">
        {visible && (
          <>
            <img src={spriteEndpoint(data.id)} alt={data.name} />
            <span className="nes-text is-primary">{data.name}</span>
            <div className="mb1">
              <span className="mr3">
                <i
                  className="nes-pointer nes-icon trophy"
                  onClick={() => history.push(data.id.toString())}
                />
              </span>
              <span>
                <i className="nes-pointer nes-icon like" />
              </span>
            </div>
          </>
        )}
      </Container>
    </VisibilitySensor>
  );
};
