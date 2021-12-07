import React, { useMemo } from "react";
import queryString from "query-string";
import { useForma } from "../../hooks/useForm";
import { HeroCard } from "../heroes/HeroCard";
import { useLocation } from "react-router-dom";
import { getHeroesByName } from "../../selectors/getHeroesByName";

export const SearchScreen = ({ history }) => {
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const [formValues, handleInputChange] = useForma({
    searchText: q,
  });

  const { searchText } = formValues;

  const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

  const handleSubmit = (e) => {
    e.preventDefault();

    history.push(`?q=${searchText}`);
  };

  return (
    <>
      <h1>Search Screen</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Find your hero"
              className="form-control"
              name="searchText"
              value={searchText}
              onChange={handleInputChange}
              autoComplete="off"
            />

            <button
              type="submit"
              className="btn m-1 btn-block btn-outline-primary"
            >
              Search...
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Result</h4>
          <hr />
          {q === "" && <div className="alert alert-info">Search a hero</div>}

          {q !== "" && heroesFiltered.length === 0 && (
            <div className="alert alert-danger">
              There is no a hero with {q}
            </div>
          )}

          {heroesFiltered.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
