import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';

import PaperSquareSVG from 'components/svg/PaperSquareSVG';

describe('PaperSquareSVG suite', () => {
  it('both <svg> and <rect> has same height and width', () => {
    const width = '180px';
    const height = '200px';

    const { container } = render(<PaperSquareSVG />);
    const SVGElement = container.querySelector('svg');
    const rectElement = SVGElement?.querySelector('rect');

    expect(SVGElement).toHaveAttribute('width', width);
    expect(SVGElement).toHaveAttribute('height', height);
    expect(rectElement).toHaveAttribute('width', width);
    expect(rectElement).toHaveAttribute('height', height);
  });
});
