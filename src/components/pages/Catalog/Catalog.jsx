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
  Container,
  LearnMoreBtn,
  Line,
  ListInfoItem,
  LoadMoreBtn,
  Model,
  Topic,
  TopicMake,
  Wrapper,
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
            accessories,
            functionalities,
          }) => {
            const trimedString = address.split(',')[1]?.trim();

            return (
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
                <div>
                  {' '}
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
                      {trimedString} <Line />
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
                    <ListInfoItem>{accessories[2]}</ListInfoItem>
                  </Wrapper>
                  <LearnMoreBtn type="button" onClick={handleModalOpen}>
                    Learn more
                  </LearnMoreBtn>
                </div>
              </AdvertItem>
            );
          }
        )}
      </AdvertList>

      <LoadMoreBtn type="button" onClick={handleLoadMore}>
        Load more
      </LoadMoreBtn>

      {selectedCar && <Modal car={selectedCar} close={handleModalClose} />}
    </>
  );
};
