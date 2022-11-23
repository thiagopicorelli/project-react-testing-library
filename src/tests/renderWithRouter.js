import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';

const renderWithRouter = (component, pathname) => {
  const history = createMemoryHistory();
  if (pathname !== undefined) {
    history.push({ pathname });
  }
  return ({
    ...render(<Router history={ history }>{component}</Router>), history,
  });
};
export default renderWithRouter;
