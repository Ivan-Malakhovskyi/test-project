import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { animateScroll as scroll } from 'react-scroll';
import { serviceAdverts } from 'components/redux/advert/advert-operations';
import { AdvertList, LoadMoreBtn } from './Catalog.styled';
import { CatalogAdvertList } from './CatalogAdvertList/CatalogAdvertList';
import {
  selectAdverts,
  selectIsLoading,
} from 'components/redux/advert/selectors';
import toast, { Toaster } from 'react-hot-toast';
import { Loader } from 'components/loader/Loader';
import { Filters } from './Filters/Filters';

export const Catalog = () => {
  const [page, setPage] = useState(1);
  const [isLastPage, setIsLastPage] = useState(false);
  const dispatch = useDispatch();

  const cars = useSelector(selectAdverts);
  const loading = useSelector(selectIsLoading);

  const handleLoadMore = () => {
    setPage(page + 1);

    scroll.scrollToBottom(268 * 2, {
      duration: 250,
      smooth: 'easeInOutQuint',
    });
  };

  useEffect(() => {
    dispatch(serviceAdverts({ page, limit: 12 }));
  }, [dispatch, page]);

  useEffect(() => {
    if (cars.length % 12 !== 0) {
      setIsLastPage(true);
      toast.success('You have reached the end of the list of images found');
    }
  }, [cars]);

  return (
    <>
      {loading && <Loader />}

      <Filters />

      <AdvertList>
        {cars.map(car => (
          <CatalogAdvertList key={car.id} car={car} />
        ))}
      </AdvertList>

      {!isLastPage && cars.length > 0 && (
        <LoadMoreBtn type="button" onClick={handleLoadMore}>
          Load more
        </LoadMoreBtn>
      )}

      <Toaster />
    </>
  );
};
