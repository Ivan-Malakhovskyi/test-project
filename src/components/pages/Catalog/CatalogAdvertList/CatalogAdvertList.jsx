import { AdvertItem } from '../Catalog.styled';
import { CatalogAdvertModal } from '../CatalogAdvertModal/CatalogAdvertModal';
import { useDispatch, useSelector } from 'react-redux';

import {
  AdvertImage,
  ButtonAdd,
  Container,
  LearnMoreBtn,
  Line,
  ListInfoItem,
  Model,
  TopicMake,
  Wrapper,
} from '../Catalog.styled';

import { useState } from 'react';

import { addAdvert, deleteAdvert } from 'components/redux/advert/advert-slice';
import toast from 'react-hot-toast';
import { NormalHeart } from './CatalogAdvertList.styled';
import { ActiveHeart } from './CatalogAdvertList.styled';
import { selectFavoritesAdverts } from 'components/redux/advert/selectors';

export const CatalogAdvertList = ({ car }) => {
  const {
    id,
    img,
    photoLink,
    make,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    mileage,
    accessories,
    // functionalities,
  } = car;

  const dispatch = useDispatch();

  const favorites = useSelector(selectFavoritesAdverts);

  const trimedString = address.split(',');

  const trimmedCity = trimedString[1];
  const trimmedCountry = trimedString[2];

  const [selectedCar, setSelectedCar] = useState(false);

  const handleModalClose = () => {
    setSelectedCar(false);
  };
  const isFavoriteCar = id => favorites.some(car => car.id === id);

  const handleToggle = () => {
    if (isFavoriteCar(id)) {
      dispatch(deleteAdvert(car.id));
      toast.success('Advert was deleted from favorites 🗑');
    } else {
      dispatch(addAdvert(car));
      toast.success('Advert was added 👌');
    }
  };

  const handleModalOpen = () => {
    setSelectedCar(true);
  };

  return (
    <>
      <AdvertItem>
        <AdvertImage src={img || photoLink} alt={make} />
        <ButtonAdd type="button" onClick={handleToggle}>
          {isFavoriteCar(id) ? <ActiveHeart /> : <NormalHeart />}
        </ButtonAdd>{' '}
        <Container>
          {' '}
          <TopicMake>
            {make} <Model>{model}</Model> {year}{' '}
          </TopicMake>
          <TopicMake>{rentalPrice}</TopicMake>
        </Container>
        <Wrapper>
          <ListInfoItem>
            {' '}
            {trimmedCountry} <Line />
          </ListInfoItem>

          <ListInfoItem>
            {' '}
            {trimmedCity} <Line />
          </ListInfoItem>
          <ListInfoItem>
            {rentalCompany} <Line />
          </ListInfoItem>
          <ListInfoItem>
            {type} <Line />
          </ListInfoItem>
          <ListInfoItem>
            {model} <Line />
          </ListInfoItem>
          <ListInfoItem>
            {mileage} <Line />
          </ListInfoItem>
          <ListInfoItem>{accessories[0]}</ListInfoItem>
        </Wrapper>
        <LearnMoreBtn type="button" onClick={handleModalOpen}>
          Learn more
        </LearnMoreBtn>
      </AdvertItem>

      {selectedCar && (
        <CatalogAdvertModal
          info={{ car, trimmedCity, trimmedCountry }}
          close={handleModalClose}
        ></CatalogAdvertModal>
      )}
    </>
  );
};
