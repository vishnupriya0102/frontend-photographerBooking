import React from 'react';
import { faqs } from '../../assets/data/faqs';
import FaqItems from './FaqItems';

function FaqList() {
  return (
    <div>
      <ul className="mt-[38px]">
        {faqs.map((item, index) => (
          <FaqItems item={item} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default FaqList;
