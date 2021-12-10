import React from 'react';
import './Countries.css';
import arrow from '../../../icons/icon-dropdown.svg';

export function Countries() {
  const countries = [
    { title: 'GLOBAL' },
    { title: 'NEDERLAND' },
    { title: 'UNITED STATES' },
    { title: 'IRELAND' },
    { title: 'UNITED KINGDOM' },
    { title: 'DEUTSCHLAND' },
    { title: 'SCHWEIZ' },
  ];

  const countryList = countries.map((country) => {
    return (
      <div className='country-item'>
        <img className='country-arrow' src={arrow} alt='arrow' key='arrow' />
        <p>{country.title}</p>
      </div>
    );
  });

  return <ul className='country-container'>{countryList}</ul>;
}
