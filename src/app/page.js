'use client'

import React, { useState, useCallback } from 'react';
import TokenInput from 'react-customize-token-input'

const Example = () => {
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
