import Meta from 'antd/es/card/Meta';
import './App.css';
import { Card, Col, Row, Space } from 'antd';
import { useEffect, useState } from 'react';
import { Content } from 'antd/es/layout/layout';

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
      <Space style={{ display:'block',width: '90%',margin:'0 auto' }}>
        <Row gutter={[20, 30]}>
          <Col >
            <Card
              hoverable
              style={{
                width: "240px",
              }}
              cover={<img alt="example" src={photos.url} />}
            >
              <Meta title={photos.title} />
            </Card>
          </Col>
        </Row>
      </Space>

    ))
  )
}
export default App;
