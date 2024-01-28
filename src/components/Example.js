'use client'

import React, { useEffect, useState, useCallback } from 'react';
import dynamic from 'next/dynamic'

const TI = dynamic(() => import('react-customize-token-input'), {
  ssr: false
})

export const Example = () => {
	const [values, setValues] = useState([]);

  const handleTokenValuesChange = useCallback(
    (newTokenValues) => {
      console.log(
        'tokenValues before',
        values,
        'newTokenValues',
        newTokenValues
      );
      setValues(newTokenValues);
    },
    [values]
  );
  return (
   <TI  tokenValues={values}
        onTokenValuesChange={handleTokenValuesChange}
	 />
  )
}