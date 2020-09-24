import React from 'react';
import Container from './style';
import { useParams } from 'react-router-dom';
import useFetchPokemon from '../../hooks/useFetchPokemon';
import Loading from '../Loading';
import { LeftPanel } from './LeftPanel';

interface IdProps {
  id: string;
}

export const Details = () => {
  const { id }: IdProps = useParams();
  const {
    data,
    loading,
    species,
    evolutions,
    descriptions,
    error,
  } = useFetchPokemon(id);

  if (loading || !data) {
    return <Loading />;
  }

  if (error) {
    return <p>something went wrong!</p>;
  }
  return (
    <Container className="flex items-center">
      <div className="nes-container is-rounded with-title">
        <p className="title">{data?.name}</p>
        <div className="inner-container nes-container is-rounded">
          <LeftPanel data={data} descriptions={descriptions} />
          <div className="col-2">DIVIDER</div>

          <div className="col-5">
            <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
            <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
            <p>Good morning. Thou hast had a good night's sleep, I hope.</p>

            <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
            <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
            <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
          </div>
        </div>
      </div>
    </Container>
  );
};
