import Meta from 'antd/es/card/Meta';
import './App.css';
import { Card } from 'antd';
import { useEffect, useState } from 'react';

const App = () => {
  const [supplier, setSupplier] = useState([]);
  useEffect(() => {
    fetch(" https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => {
        setSupplier(data)
      })
  }, [])


  return (
    supplier.map((photos) => (
      <Card
        hoverable
        style={{
          width: 240,
        }}
        cover={<img alt="example" src={photos.url} />}
      >
        <Meta title={photos.title} />
      </Card>

      ))
  )
    }
  export default App;
