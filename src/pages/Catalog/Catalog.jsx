import { useEffect, useState } from "react";
import { Header } from "../../common/Header/Header";
import "./Catalog.css";
import { getCatalog } from "../../services/apiCalls";

export const Catalog = () => {
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    if (catalog.length === 0) {
      retrieveCatalog();
    }
  }, []);
  const retrieveCatalog = async () => {
    try {
      const newCatalog = await getCatalog();
      setCatalog(newCatalog);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Header />
      <div className="catalogDesign">
        {catalog.length !== 0 &&
          catalog.map((tattoo, index) => {
            if (index !== 0) {
              return (
                <div className="catalogCard">
                  <div className="container" key={index}>
                    <div className="catalogTitle">{tattoo.tattooName}</div>
                    <img src={tattoo.urlImage} alt={tattoo.tattooName} />
                  </div>
                </div>
              );
            }
          })}
      </div>
    </>
  );
};
