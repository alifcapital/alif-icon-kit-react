import React from 'react';
import { render } from '@testing-library/react';

import Search from '../src/SystemIcons/Search';

const IconsArr = [Search];

describe('Render', () => {
  for (const Icon of IconsArr) {
    it('should rendered', async () => {
      const { container } = render(<Icon />);

      expect(container.querySelectorAll('svg')).toHaveLength(1);
    });
  }
});

describe('Props', () => {
  for (const Icon of IconsArr) {
    it('should change height size', () => {
      const { container } = render(<Icon height="100" />);

      expect(container.querySelectorAll("[height='100']")).toHaveLength(1);
    });
    it('should change width size', () => {
      const { container } = render(<Icon width="100" />);

      expect(container.querySelectorAll("[width='100']")).toHaveLength(1);
    });
    it('should change color', () => {
      const { container } = render(<Icon color="red" />);

      const stroke = container.querySelectorAll("[stroke='red']");
      const fill = container.querySelectorAll("[fill='red']");

      if (stroke.length && fill.length) {
        return expect([...stroke, ...fill].length).not.toEqual(0);
      }
      if (stroke.length) {
        return expect(stroke.length).not.toEqual(0);
      }
      if (fill.length) {
        return expect(fill.length).not.toEqual(0);
      } else {
        console.log(Icon.name);
        expect(0).toEqual(1);
      }
    });
  }
});
