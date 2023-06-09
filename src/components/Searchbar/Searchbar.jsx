const Searchbar = () => {
  return (
    <header>
      <form>
        <button type="submit">
          <span>Search</span>
        </button>

        <input
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;
