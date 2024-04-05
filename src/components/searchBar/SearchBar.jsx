import css from './SearchBar.module.scss';
  
  
export const SearchBar = ({ onSearch }) => {
  
	const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
	  const query = form.elements.query.value;
    if(form.elements.query.value.trim() === "") {
    alert("Please enter search term!")
    return;
  }
    onSearch(query);
    form.reset();

  };
  
    return (
        <header>
           <form className={css.form} onSubmit={handleSubmit}>
                <input className={css.field}
                type="text"
                name="query"
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