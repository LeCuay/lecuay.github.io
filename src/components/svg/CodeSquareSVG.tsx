import React, { FC } from 'react';

import TextSquareSVG from 'components/svg/TextSquareSVG';
import TextLineSVG from 'components/svg/TextLineSVG';

const CodeSquareSVG: FC = () => (
  <TextSquareSVG width="180px" height="200px">
    <TextLineSVG x1={10} x2={160} y1={20} y2={20} />
    <TextLineSVG x1={10} x2={130} y1={35} y2={35} strokeColor="darkcyan" />
    <TextLineSVG x1={10} x2={80} y1={50} y2={50} strokeColor="darkcyan" />
    <TextLineSVG x1={85} x2={140} y1={50} y2={50} strokeColor="white" />
    <TextLineSVG x1={25} x2={50} y1={65} y2={65} strokeColor="white" />
    <TextLineSVG x1={55} x2={150} y1={65} y2={65} />
    <TextLineSVG x1={25} x2={50} y1={80} y2={80} strokeColor="white" />
    <TextLineSVG x1={55} x2={150} y1={80} y2={80} />
    <TextLineSVG x1={25} x2={50} y1={95} y2={95} strokeColor="white" />
    <TextLineSVG x1={55} x2={150} y1={95} y2={95} />
    <TextLineSVG x1={10} x2={60} y1={110} y2={110} strokeColor="darkcyan" />
    <TextLineSVG x1={65} x2={130} y1={110} y2={110} strokeColor="white" />
    <TextLineSVG x1={10} x2={80} y1={125} y2={125} strokeColor="darkcyan" />
    <TextLineSVG x1={85} x2={140} y1={125} y2={125} />
    <TextLineSVG x1={25} x2={150} y1={140} y2={140} strokeColor="white" />
    <TextLineSVG x1={25} x2={120} y1={155} y2={155} strokeColor="white" />
    <TextLineSVG x1={10} x2={35} y1={170} y2={170} strokeColor="darkcyan" />
    <TextLineSVG x1={40} x2={160} y1={170} y2={170} />
  </TextSquareSVG>
);

export default CodeSquareSVG;
