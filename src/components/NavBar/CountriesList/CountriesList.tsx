import React from 'react';
import styled from 'styled-components';
import './CountriesList.css';
import arrow from '../../../icons/icon-dropdown.svg';
// import { deviceSize } from '../../responsive/index';

// const CountryContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap;

//   position: absolute;
//   width: 15%;
//   height: 20vh;
//   top: 15%;
//   left: 70px;
//   display: flex;
//   flex-direction: column;
//   color: white;
//   opacity: 1;
//   transition: 0.5s;

//   @media screen and (max-width: ${deviceSize.mobile}px) {
//     font-size: 25px;
//   }
// `;

export function CountriesList() {
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
