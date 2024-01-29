'use client'

import React, { useState, useCallback } from 'react';
import dynamic from 'next/dynamic';

// https://nextjs.org/docs/pages/building-your-application/optimizing/lazy-loading#with-no-ssr
const TokenInput = dynamic(
  () => import('react-customize-token-input'),
  { ssr: false }
);

const Example = () => {
  const [values, setValues] = useState(['hello', 'world']);

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
      <TokenInput
        tokenValues={values}
        onTokenValuesChange={handleTokenValuesChange}
      />
  );
};

export default function Home() {
  return (
    <main>
	    <Example />
    </main>
  );
}
