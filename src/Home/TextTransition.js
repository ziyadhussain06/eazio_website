import React from 'react';
import TextTransition, { presets } from 'react-text-transition';

const TEXTS = ['HR Solutions', 'Simplicity' , 'Eazio'];

const Texteffect = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
      <TextTransition className="main-heading" inline="true" springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
  );
};

export default Texteffect