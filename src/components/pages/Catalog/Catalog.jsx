import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAdverts, selectPage } from 'components/redux/advert/selectors';
import { ReactComponent as HeartIcon } from '../../images/heart.svg';
import { animateScroll as scroll } from 'react-scroll';
import { serviceAdverts } from 'components/redux/advert/advert-operations';
import { Modal } from './Modal';
import {
  AdvertImage,
  AdvertItem,
  AdvertList,
  ButtonAdd,
  Topic,
} from './Catalog.styled';

export const Catalog = () => {
  const cars = useSelector(selectAdverts);

  const page = useSelector(selectPage);

  const dispatch = useDispatch();

  const [selectedCar, setSelectedCar] = useState(false);

  const handleModalClose = () => {
    setSelectedCar(false);
  };

  const handleModalOpen = () => {
    setSelectedCar(true);
  };

  const handleLoadMore = () => {
    dispatch(serviceAdverts({ page: page + 1 }));

    scroll.scrollToBottom(268 * 2, {
      duration: 250,
      smooth: 'easeInOutQuint',
    });
  };

  useEffect(() => {
    dispatch(serviceAdverts({ page: 1, limit: 12 }));
  }, [dispatch]);

  return (
    <>
      <Topic>Catalog</Topic>

      <AdvertList>
        {cars.map(
          ({
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
            functionalities,
          }) => (
            <AdvertItem key={id}>
              <AdvertImage
                src={img || photoLink}
                alt={make}
                width={401}
                height={268}
              />
              <ButtonAdd type="button">
                <HeartIcon width={18} height={18} />
              </ButtonAdd>
              <h4>
                {make} : {model}
              </h4>{' '}
              : {year}
              <span>{rentalPrice}</span>
              <p>{address}</p>
              <button type="button" onClick={handleModalOpen}>
                Learn more
              </button>
            </AdvertItem>
          )
        )}
      </AdvertList>

      <button type="button" onClick={handleLoadMore}>
        Load more
      </button>

      {selectedCar && <Modal car={selectedCar} close={handleModalClose} />}
    </>
  );
};
