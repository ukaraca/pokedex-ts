import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import VisibilitySensor from 'react-visibility-sensor';
import { spriteEndpoint } from '../../services/consts';
import { AppContextProps, Stat } from '../../types/pokemon';
import { Img } from '../Img';
import { AppContext } from '../../hooks/usePokemonListAPI';
import Container from './style';
interface Pokemon {
  data: Stat;
}

export const Pokemon = ({ data }: Pokemon) => {
  const history = useHistory();
  const useCtx = useContext<AppContextProps | undefined>(AppContext);
  const [visible, setVisible] = useState(false);

  return (
    <VisibilitySensor partialVisibility onChange={setVisible}>
      <Container className="m1 p1">
        {visible && (
          <>
            <Img src={spriteEndpoint(data.id)} alt={data.name} />
            <span className="nes-text is-primary">{data.name}</span>
            <div className="mb1">
              <span
                className="mr3"
                onClick={() => history.push(`/pokemon/${data.id.toString()}`)}
              >
                <i className="nes-pointer nes-icon trophy" />
              </span>
              <span
                onClick={() =>
                  useCtx?.addPokemon({ id: data.id, name: data.name })
                }
              >
                <i className="nes-pointer nes-icon heart" />
              </span>
            </div>
          </>
        )}
      </Container>
    </VisibilitySensor>
  );
};
