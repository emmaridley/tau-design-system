import { FC } from 'react';
import classNames from 'classnames';
import Gauge from './Gauge.tsx';
import StyledCharacterAvatar from './CharacterAvatar.styled.ts';

interface CharacterProgress {
  experience: string;
  level: number;
}

interface CharacterAvatarProps {
  characterImageName: string;
  characterProgress: CharacterProgress;
  characterName: string;
  isVip: boolean;
  syndicateTag: string;
}

const CharacterAvatar: FC<CharacterAvatarProps> = ({
  characterImageName,
  characterProgress,
  characterName,
  isVip,
  syndicateTag,
}) => {
  const { level, experience } = characterProgress;

  return (
    <>
      <StyledCharacterAvatar className={classNames({ vip: isVip })} variant="text">
        <div className="visuallyhidden">
          Personal I.D. {characterName}, {syndicateTag && `Syndicate: [${syndicateTag.toUpperCase()}],`} level: {level},
          Experience: {parseInt(experience)} - Open your Profile
        </div>
        <div aria-hidden="true" className="character-avatar">
          <div className="character-avatar__image">
            {Boolean(characterImageName) && <img alt="" src={`/static/images/avatar/square/${characterImageName}`} />}
            <Gauge
              className="character-avatar__experience"
              iconColor="transparent"
              increase={true}
              percent={parseInt(experience) / 100}
              percentColor={isVip ? '#f3d98f' : '#08d7ec'}
              size={108}
              thickness={4}
            />
            <div className="character-avatar__level">{level}</div>
          </div>
          <div className="character-avatar__name">
            {Boolean(syndicateTag) && `[${syndicateTag.toUpperCase()}]`} {characterName}
          </div>
        </div>
      </StyledCharacterAvatar>
    </>
  );
};

export default CharacterAvatar;
