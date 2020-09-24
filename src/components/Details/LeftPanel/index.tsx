import React, { useEffect, useState } from 'react';
import Container from './style';
import { Pokemon } from '../../../types/pokemon';
import { Description } from './Description';
import { Img } from '../../Img';

interface LeftPanelProps {
  data: Pokemon;
  descriptions: string[];
}

interface SpriteProps {
  front: boolean;
  female: boolean;
  shiny: boolean;
  [key: string]: boolean;
}

export const LeftPanel = ({ data, descriptions }: LeftPanelProps) => {
  const [imgSrc, setImgSrc] = useState<SpriteProps>({
    front: true,
    female: false,
    shiny: false,
  });
  const [src, setSrc] = useState<string | null>('');

  useEffect(() => {
    if (data.sprites) {
      const source = imageSource(imgSrc);
      setSrc(data.sprites[source]);
    }
  }, [imgSrc, data.sprites]);

  const imageSource = ({ front, shiny, female }: SpriteProps): string => {
    const position = front ? 'front' : 'back';
    const light = shiny ? '_shiny' : '_default';
    const gender = female ? '_female' : '';

    if (gender === '_female' && light === '_default') {
      return position + gender;
    }
    return position + light + gender;
  };

  const handleChange = (attribute: string) => {
    const spriteCopy = { ...imgSrc, [attribute]: !imgSrc[attribute] };
    const source = imageSource(spriteCopy);

    if (data.sprites && !data.sprites[source]) {
      return;
    }

    return setImgSrc({ ...imgSrc, [attribute]: !imgSrc[attribute] });
  };

  return (
    <Container className="col-6 flex flex-column justify-between">
      <div className="nes-container is-rounded">
        {src && <Img src={src} alt={data.name} styles="pokemon-sprite" />}
      </div>
      <div className="flex buttons justify-around mt2 mb2">
        <button
          type="button"
          className="nes-btn is-primary"
          onClick={() => handleChange('female')}
        >
          {!imgSrc.female ? 'Female' : 'Male'}
        </button>
        <button
          type="button"
          className="nes-btn is-primary"
          onClick={() => handleChange('shiny')}
        >
          Shiny
        </button>
        <button
          type="button"
          className="nes-btn is-primary"
          onClick={() => handleChange('front')}
        >
          Back
        </button>
      </div>
      <Description descriptions={descriptions} />
    </Container>
  );
};
