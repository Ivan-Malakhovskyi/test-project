import React, { Suspense } from 'react';
import { BaseContainer } from './Layout.styled';
import { AppHeader } from 'components/Header/AppHeader';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <BaseContainer>
      <AppHeader />
      <main>
        <Suspense fallback={<div>Loading...👌</div>}>
          <Outlet />
        </Suspense>
      </main>
    </BaseContainer>
  );
};
