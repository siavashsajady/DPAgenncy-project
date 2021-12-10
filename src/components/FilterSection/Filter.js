import React from 'react';
import styled from 'styled-components';

const FilteredList = styled.div`
  position: relative;
  top: 0;
  width: 93%;
  height: 150px;
  margin-right: 10px;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  font-size: 25px;
  font-weight: bold;
  font-family: 'Teko', sans-serif;
  text-align: right;
`;

const SectionOne = styled.span`
  font-size: 30px;
  color: #a3a3a3;
  font-family: 'Teko', sans-serif;
  display: flex;
`;

const SectionTwo = styled.select`
  font-size: 30px;
  color: #000;
  font-family: 'Teko', sans-serif;
  /* display: inline-block; */
`;

const Filter = (props) => {
  return (
    <FilteredList>
      <SectionOne>
        <p>Show me</p>
        <SectionTwo>
          <option>All work</option>
          <option>Option 2</option>
          <option>Option 3</option>
          <option>Option 4</option>
          <option>Option 5</option>
        </SectionTwo>
      </SectionOne>
      <SectionOne>
        <p> in</p>
        <SectionTwo>
          <option>All industries</option>
          <option>Option 2</option>
          <option>Option 3</option>
          <option>Option 4</option>
          <option>Option 5</option>
        </SectionTwo>
      </SectionOne>
    </FilteredList>
  );
};

export default Filter;
