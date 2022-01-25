import React, { FC } from 'react';

import TextSquareSVG from 'components/svg/TextSquareSVG';
import TextLineSVG from 'components/svg/TextLineSVG';

const PaperSquareSVG: FC = () => {
  return (
    <TextSquareSVG width="180px" height="200px" backgroundColor="#F1F0F0">
      <TextLineSVG x1={40} x2={140} y1={15} y2={15} strokeColor="black" />
      <TextLineSVG x1={20} x2={170} y1={35} y2={35} strokeColor="black" />
      <TextLineSVG x1={40} x2={140} y1={15} y2={15} strokeColor="black" />
      <TextLineSVG x1={20} x2={170} y1={35} y2={35} strokeColor="black" />
      <TextLineSVG x1={10} x2={110} y1={50} y2={50} strokeColor="black" />
      <TextLineSVG x1={115} x2={170} y1={50} y2={50} strokeColor="black" />
      <TextLineSVG x1={10} x2={80} y1={65} y2={65} strokeColor="black" />
      <TextLineSVG x1={20} x2={60} y1={80} y2={80} strokeColor="black" />
      <TextLineSVG x1={65} x2={140} y1={80} y2={80} strokeColor="black" />
      <TextLineSVG x1={145} x2={170} y1={80} y2={80} strokeColor="black" />
      <TextLineSVG x1={10} x2={110} y1={95} y2={95} strokeColor="black" />
      <TextLineSVG x1={115} x2={170} y1={95} y2={95} strokeColor="black" />
      <TextLineSVG x1={10} x2={140} y1={110} y2={110} strokeColor="black" />
      <TextLineSVG x1={20} x2={100} y1={125} y2={125} strokeColor="black" />
      <TextLineSVG x1={105} x2={170} y1={125} y2={125} strokeColor="black" />
      <TextLineSVG x1={10} x2={150} y1={140} y2={140} strokeColor="black" />
      <TextLineSVG x1={155} x2={170} y1={140} y2={140} strokeColor="black" />
      <TextLineSVG x1={10} x2={50} y1={155} y2={155} strokeColor="black" />
      <TextLineSVG x1={130} x2={170} y1={180} y2={180} strokeColor="black" />
    </TextSquareSVG>
  );
};

export default PaperSquareSVG;
