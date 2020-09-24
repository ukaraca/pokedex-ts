import React from 'react';
import Container from './style';
import { useParams } from 'react-router-dom';
import useFetchPokemon from '../../hooks/useFetchPokemon';
import Loading from '../Loading';
import { LeftPanel } from './LeftPanel';
import { RightPanel } from './RightPanel';

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

  console.log(data);

  return (
    <Container className="flex items-center">
      <div className="nes-container is-rounded with-title">
        <a className="nes-badge title is-splited ">
          <span className="is-dark" style={{ width: '75%' }}>
            {data?.name}
          </span>
          <span className="is-warning" style={{ width: '25%' }}>
            #{data.id}
          </span>
        </a>
        <div className="inner-container nes-container flex-wrap is-rounded">
          <LeftPanel data={data} descriptions={descriptions} />
          <RightPanel evolutions={evolutions} pokemon={data} />
        </div>
      </div>
    </Container>
  );
};
