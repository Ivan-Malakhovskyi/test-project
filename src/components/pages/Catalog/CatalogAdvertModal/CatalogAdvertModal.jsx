import { Line, ListInfoItem, Model, TopicMake } from '../Catalog.styled';

import {
  WrapperModalInfo,
  AddInfo,
  AddWrapper,
  Paragraph,
  ModalButton,
  ModalImage,
  RentalItem,
  RentalList,
  Rental,
  ModalContent,
} from './CatalogAdvertModal.styled';

import { Modal } from '../../../Modal/Modal';

export const CatalogAdvertModal = ({ info, close }) => {
  const {
    car: {
      img,
      photoLink,
      description,
      make,
      model,
      year,
      rentalPrice,
      rentalCompany,
      type,
      mileage,
      accessories,
      functionalities,
      rentalConditions,
      engineSize,
    },
    trimmedCountry,
    trimmedCity,
  } = info;

  const splittedRental = rentalConditions.split('\n');
  console.log(splittedRental);

  const formattedMieage = mileage
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <>
      <Modal close={close}>
        <ModalContent>
          {' '}
          <ModalImage src={img || photoLink} alt={make} />
          <TopicMake>
            {make} <Model>{model}</Model>, {year}{' '}
          </TopicMake>
          <WrapperModalInfo>
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
            <ListInfoItem>
              {engineSize} <Line />
            </ListInfoItem>

            {accessories.map(el => (
              <ListInfoItem key={el.id}>
                {el}
                <Line />
              </ListInfoItem>
            ))}
          </WrapperModalInfo>
          <AddWrapper>
            <Paragraph>{description}</Paragraph>
            <AddInfo>Accessories and functionalities:</AddInfo>
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
            {accessories.map(el => (
              <ListInfoItem key={el.id}>
                {el}
                <Line />
              </ListInfoItem>
            ))}
            <ListInfoItem>{functionalities}</ListInfoItem>
          </AddWrapper>
          <AddInfo>Rental Conditions:</AddInfo>
          <RentalList>
            {splittedRental.map(el => (
              <RentalItem key={el.id}>{el}</RentalItem>
            ))}

            <RentalItem>
              Mileage: <Rental>{formattedMieage}</Rental>
            </RentalItem>
            <RentalItem>
              Price: <Rental>{rentalPrice}</Rental>
            </RentalItem>
          </RentalList>
          <a href="tel:+380730000000">
            <ModalButton>Rental car</ModalButton>
          </a>
        </ModalContent>
      </Modal>
    </>
  );
};
