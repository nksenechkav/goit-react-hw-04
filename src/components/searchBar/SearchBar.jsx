import css from './SearchBar.module.scss';
  
  
const SearchBar = () => {

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(evt);
      };
  
    return (
        <header>
           <form className={css.form} onSubmit={handleSubmit}>
                <input className={css.field}
                type="text"
                // autocomplete="off"
                // autofocus
                placeholder="Search images and photos"
                />
                <button className={css.btn} type="submit">Search</button>
            </form>
        </header>
    );
  }
  export default SearchBar;