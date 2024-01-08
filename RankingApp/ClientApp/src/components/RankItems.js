import React, { useState, useEffect } from 'react'

export const RankItems = () => {
  cost [items, setItems] = useState([]);
  const dataType = 1;
  
  useEffect(() => {
    fetch(`item/${dataType}`)
      .then((result) => {
        return result.json(0);
      })
      .then(data => {
        setItems(data);
      });
  }, []);

  return (
    <main>
      {
        (item !== null) ? items.map((item) => <h3>{item.title}</h3>):<div>Loading...</div>
      }
    </main>
  )
}
