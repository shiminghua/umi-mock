import React, { Component } from 'react';
import { connect } from 'dva';
import router from 'umi/router';
import Link from 'umi/link';

import { Button, WhiteSpace, WingBlank, List } from 'antd-mobile';

// import styles from './index.css';
@connect()
class IndexPage extends Component {

  static propTypes = {
  };

  goToShopIncome = () => {
    router.push('/sparrow_shop_statistics/shopIncome');
  };
  goToShopRefund = () => {
    router.push('/sparrow_shop_statistics/shopRefund');
  };
  goToflashSalesDelivery = () => {
    router.push('/sparrow_flashsale/deliver');
  };
  goToflashSalesRefund = () => {
    router.push('/sparrow_flashsale/refund');
  };
  goToTest = () => {
    router.push('/test');
  };


  render() {
    return (
      <List>
        <List.Item>
          <Link to='/context'>react-context</Link>
        </List.Item>
        <List.Item>
          <Link to='/404'>404</Link>
        </List.Item>
        {/* <List.Item>
          <Button type="primary" onClick={this.goToTest}>test</Button>
        </List.Item> */}
      </List>
    );
  }
}


export default IndexPage;
