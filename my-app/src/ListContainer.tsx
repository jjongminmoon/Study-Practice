import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';

import axios from 'axios';
import Button from './components/Button';
import ListItem from './components/ListItem';
import ListItemLayout from './components/ListItemLayout';
import Pagination from './components/Pagination';
import OpenClosedFilters from './components/OpenClosedFilters';
import ListFilter from './components/ListFilter';

import styles from './ListContainer.module.css';
import { GITHUB_API } from './api';
import { ListItem as ListItemProps } from './model/issues';

export default function ListContainer() {
  const [inputValue, setInputValue] = useState('is:pr is:open');
  const [checked, setChecked] = useState(false);
  const [list, setList] = useState<ListItemProps[]>([]);

  const maxPage = 10;

  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get('page') ?? '1', 10);
  const state = searchParams.get('state');

  async function getData(params: URLSearchParams) {
    const data = await axios.get(`${GITHUB_API}/repos/facebook/react/issues`, {
      params,
    });
    setList(data.data);
  }

  useEffect(() => {
    getData(searchParams);
  }, [searchParams]);

  return (
    <>
      <div className={styles.listContainer}>
        <div className={styles.topSection}>
          <input
            className={styles.input}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Link to="/new" className={styles.link}>
            <Button
              style={{
                fontSize: '14px',
                backgroundColor: 'green',
                color: 'white',
              }}
            >
              New Issue
            </Button>
          </Link>
        </div>
        <OpenClosedFilters
          isOpenMode={state !== 'closed'}
          onClickMode={(mode) => setSearchParams({ mode })}
        />
        <ListItemLayout className={styles.listFilter}>
          <ListFilter
            onChangeFilter={(params) => {
              // 필터링된 요소에 맞게 데이터를 불러오기
              // const data = getData("필터링된 정보");
              setSearchParams(params);
            }}
          />
        </ListItemLayout>
        {list
        && list.map((item: ListItemProps) => (
          <ListItem
            key={item.id}
            data={item}
            checked={checked}
            onClickCheckBox={() => setChecked((c) => !c)}
          />
        ))}
      </div>
      <div className={styles.paginationContainer}>
        <Pagination
          currentPage={page}
          maxPage={maxPage}
          onClick={
            (pageNumber) => setSearchParams({ page: pageNumber.toString() })
          }
        />
      </div>
    </>
  );
}
