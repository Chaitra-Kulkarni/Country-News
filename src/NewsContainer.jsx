import axios from "axios";
import { useState, useEffect } from "react";
import Header from "./Header";
import ArticlesListPage from "./ArticlesListPage";

const NewsContainer = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [countryCode, setCountryCode] = useState("in");

  const API_URL = `https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=5804eeaec0504c818cc3508707b6cbb2`;

  useEffect(() => {
    // console.log("use effect called");
    async function getArticles () {
      try {
        let products = await axios.get(API_URL);
        setNewsArticles(products.data.articles);
      } catch (err) {
        console.log(err.message);
      }
    }
    getArticles();
  }, [countryCode]);

  const updateCountryCode = (code) => {
    setCountryCode(code);
  };

  return (
    <>
      <Header updateCountryCode={updateCountryCode}/>
      <ArticlesListPage newsArticles={newsArticles} />
    </>
  );
};
export default NewsContainer;
