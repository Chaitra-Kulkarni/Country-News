const ArticlesListPage = (props) => {
    return(
        <div className="container">
        <div className="row m-5">
          {props.newsArticles.map((value, index) => {
            return (
              <div key={index} className="col-4 border border-info">
                <h5>{value.title}</h5>
                <img src={value.urlToImage} style={{ width: "20rem" }} />
                <p>{value.author}</p>
                <a href={value.url} target="_blank" className="btn btn-info mb-2">
                  Click Here!
                </a>
              </div>
            );
          })}
        </div>
      </div>
    )
}

export default ArticlesListPage;