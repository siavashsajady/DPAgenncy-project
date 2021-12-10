import React from 'react';
import './SocialMedias.css';
import arrow from '../../../icons/icon-dropdown.svg';

export function SocilaMedia(props) {
  const medias = [
    { title: 'FACEBOOK' },
    { title: 'TWITTER' },
    { title: 'INSTAGRAM' },
    { title: 'LINKEDIN' },
  ];

  const mediaList = medias.map((media) => {
    return (
      <div className='social-item'>
        <img className='social-arrow' src={arrow} alt='arrow' key='arrow' />
        <p>{media.title}</p>
      </div>
    );
  });

  return <div className='social-media-container'>{mediaList}</div>;
}
