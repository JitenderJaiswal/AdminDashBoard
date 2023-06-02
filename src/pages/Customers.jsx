import React, { useState } from "react";
import UserDetail from "../components/UserDetail";
import Search from "../components/Search";
import Footer from "../components/PaginationFooter";
import DateSearch from "../components/DateSearch";
import style from "./Customers.module.css";
import { customersData } from "../data/dummy";

function Customers(props) {
  const [users, setUsers] = useState(customersData);
  const [search, setSearch] = useState("");
  const [checkedId, setCheckedId] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [minDate, setMinDate] = useState("");
  const [maxDate, setMaxDate] = useState("");
  const [inputText, setInputText] = useState("");

  const checkedHandleChange = (event, id) => {
    const { checked } = event.target;
    if (checked) {
      checkedId.push(id);
      setCheckedId(checkedId);
    } else {
      const filterCheckedId = checkedId.filter((userId) => userId !== id);
      setCheckedId(filterCheckedId);
    }
  };
  const userFilter = (event) => {
    const { value } = event.target;
    setInputText(value);
    if (!value) {
      setSearch("");
    } else {
      const filterUser = users.filter(
        (user) => user.name.includes(value) || user.email.includes(value)
      );
      setSearch(filterUser);
      setMinDate("");
      setMaxDate("");
    }
  };
  const changeMinDate = (date) => {
    setMinDate(date);
    if (search) setSearch("");
    if (inputText) setInputText("");
  };
  const changeMaxDate = (date) => {
    setMaxDate(date);
    if (search) setSearch("");
    if (inputText) setInputText("");
  };

  const dateSearchUsers = users.filter((user) => {
    return (
      minDate &&
      user.startDate >= minDate &&
      maxDate &&
      user.startDate <= maxDate
    );
  });
  console.log(dateSearchUsers);
  const newUsers = search
    ? search
    : minDate && maxDate
    ? dateSearchUsers
    : users;
  return (
    <div className={style.parent}>
      <div style={{ display: "flex" }}>
        <DateSearch
          changeMinDate={changeMinDate}
          changeMaxDate={changeMaxDate}
          minDate={minDate}
          maxDate={maxDate}
        />
        <Search userFilter={userFilter} inputText={inputText} />
      </div>
      <div className={style.tableParent}>
        <div className={style.inputCheckBoxParent}>
          <input type="checkbox" />
        </div>
        <div className={style.text}>Name</div>
        <div className={style.text}>Email</div>
        <div className={style.text}>StartDate</div>
        <div className={style.text}>Actions</div>
      </div>
      {newUsers
        .slice(10 * (currentPage - 1), 10 * currentPage)
        .map((user, index) => {
          return (
            <UserDetail
              user={user}
              users={users}
              checkedHandleChange={checkedHandleChange}
              setUsers={setUsers}
              index={index}
            />
          );
        })}
      <Footer
        users={users}
        setUsers={setUsers}
        setCheckedId={setCheckedId}
        checkedId={checkedId}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        totalPages={
          search
            ? Math.ceil(search.length / 10)
            : minDate && maxDate
            ? Math.ceil(dateSearchUsers.length / 10)
            : Math.ceil(users.length / 10)
        }
      />
    </div>
  );
}

export default Customers;
