import { selectFavoritesAdverts } from 'components/redux/advert/selectors';
import React from 'react';
import { useSelector } from 'react-redux';
import { CatalogAdvertList } from '../Catalog/CatalogAdvertList/CatalogAdvertList';
import { AdvertList, Topic } from '../Catalog/Catalog.styled';
import { Container, EmptyFavorites } from './Favorite.styled';

export const Favorite = () => {
  const favorites = useSelector(selectFavoritesAdverts);

  return (
    <>
      <Topic>My favorites adverts</Topic>
      {favorites.length > 0 ? (
        <Container>
          <AdvertList>
            {favorites.map(el => (
              <CatalogAdvertList key={el.id} car={el} />
            ))}
          </AdvertList>
        </Container>
      ) : (
        <EmptyFavorites>No favorites here</EmptyFavorites>
      )}
    </>
  );
};
