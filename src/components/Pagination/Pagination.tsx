import { useState } from 'react';
import Pagination from 'react-js-pagination';
import './pagiNation.css';

interface PagiNationProps {
  currentPage: number;
  totalCount: number;
}

const PagiNation = ({ currentPage, totalCount }: PagiNationProps) => {
  const [page, setPage] = useState(currentPage);

  const handlePageChange = (page: number) => {
    setPage(page);
  };
  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={10}
      totalItemsCount={totalCount}
      pageRangeDisplayed={10}
      prevPageText={'‹'}
      nextPageText={'›'}
      onChange={handlePageChange}
    />
  );
};
export default PagiNation;
