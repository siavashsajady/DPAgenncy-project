import React from 'react';
import tw from 'twin.macro';

const QuoteContainer = tw.div`
    w-full
    h-96
    bg-white
    mt-10
    mb-20
    ml-10
    mr-10
    flex
    pt-6
    pl-2
    pr-2
    lg:pt-14
    lg:pr-16
    lg:pl-16
    text-gray-700
    items-center
    flex-col
    border
    border-t-gray-300
    border-l-0
    border-r-0
    border-b-0
    border-solid
`;

const AuthorContainer = tw.div`
    w-full
    h-96
    mt-5
    mb-10
    flex
    font-size[large]
    text-2xl
    
`;

const Quote = (props) => {
  return (
    <QuoteContainer>
      <h2>"{props.text}"</h2>

      <AuthorContainer>
        <span>
          {props.name} - {props.position}
        </span>
      </AuthorContainer>
    </QuoteContainer>
  );
};

export default Quote;
