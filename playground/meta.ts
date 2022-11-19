import { Meta } from '../src/module';

export const meta: Meta = {
  index: {
    middleware: ['sample'],
  },
  '404': {
    middleware: ['sample'],
  },
};
