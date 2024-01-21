import { useDispatch } from 'react-redux';
import {
  Label,
  Form,
  Wrapper,
  Select,
  Option,
  BtnSearch,
} from './Filters.styled';

import { searchValueFilter } from 'components/redux/advert/filtersSlice';

export const Filters = () => {
  const makes = [
    'Buick',
    'Volvo',
    'HUMMER',
    'Subaru',
    'Mitsubishi',
    'Nissan',
    'Lincoln',
    'GMC',
    'Hyundai',
    'MINI',
    'Bentley',
    'Mercedes-Benz',
    'Aston Martin',
    'Pontiac',
    'Lamborghini',
    'Audi',
    'BMW',
    'Chevrolet',
    'Mercedes-Benz',
    'Chrysler',
    'Kia',
    'Land',
  ];

  const prices = Array.from({ length: 31 }, (_, index) => index * 10);

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(searchValueFilter(e.target.makes.value));
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        {' '}
        <Wrapper>
          <Label htmlFor="makes">Car brand</Label>

          <Select name="makes" id="makes">
            <option value="">Enter the text</option>
            {makes.map((el, idx) => (
              <Option key={idx} value={el}>
                {el}
              </Option>
            ))}
          </Select>
        </Wrapper>
        <Wrapper>
          <Label htmlFor="price">Price/ 1 hour</Label>

          <Select name="price" id="price">
            <option value="">To $</option>
            {prices.map((price, idx) => (
              <Option value={price} key={idx}>
                {price}
              </Option>
            ))}
          </Select>
        </Wrapper>
        <Wrapper>
          <Label htmlFor="mileage">Сar mileage / km</Label>

          <Select name="mileage" id="mileage">
            <option value=""> To $</option>
            {prices.map((price, idx) => (
              <Option value={price} key={idx}>
                {price}
              </Option>
            ))}
          </Select>
          <BtnSearch type="submit">Search</BtnSearch>
        </Wrapper>
      </Form>
    </>
  );
};
