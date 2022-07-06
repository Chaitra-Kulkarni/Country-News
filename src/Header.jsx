const Header = (props) => {
  console.log("header props: ", props);
  const loadArticles = () => {
    // props.newsHandler();
  };

  const selectCountry = (e) => {
    let code = e.target.value;
    if (code !== "") {
      props.updateCountryCode(code);
    } 
  };

  return (
    <>
      {/* <button className="btn btn-dark" onClick={loadArticles}>Show Articles</button> */}
      <label>Choose a Country:</label>
      <select
        name="countries"
        id="countries"
        onChange={(e) => selectCountry(e)}
      >
        <option value="">Select..</option>
        <option value="in">India</option>
        <option value="us">US</option>
      </select>
    </>
  );
};

export default Header;
