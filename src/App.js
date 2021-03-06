import React, { useState, useEffect } from 'react';
import { Card, WingBlank, WhiteSpace, NavBar, Icon, Button } from 'antd-mobile';
import './App.css';


const App = (props) => {
  const [env, setEnv] = useState('')
  const [arr, setArray] = useState([])
  useEffect(() => {

  }, [])

  function toDetail(e){
    props.history.push({ pathname: e });
  }

  return (
    <div>
      <div className='demo-tit'>antd框架应用实例</div>
      <WingBlank size="lg">
        <WhiteSpace size="lg" />
        <Card onClick={(()=>{toDetail('/order')})}>
          <Card.Header
            title="订单demo"
            thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
            extra={<span>antd-mobile</span>}
          />
          <Card.Body>
            <div>内含Tabs、PullToRefresh、ListView、Carousel的实战用法</div>
          </Card.Body>
          <Card.Footer content="" extra={<div>移动端demo</div>} />
        </Card>
        <WhiteSpace size="lg" />
        <Card onClick={(()=>{toDetail('/modal')})}>
          <Card.Header
            title="弹窗demo"
            thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
            extra={<span>antd-mobile</span>}
          />
          <Card.Body>
            <div>react-hooks制作自定义弹窗的实战用法</div>
          </Card.Body>
          <Card.Footer content="" extra={<div>移动端demo</div>} />
        </Card>
        <WhiteSpace size="lg" />
      </WingBlank>
    </div>
  );
}

export default App;
