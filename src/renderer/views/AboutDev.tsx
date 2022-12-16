import React from 'react';
import {Link} from 'react-router-dom';
import { Button, Avatar, Card } from 'antd';
import { RollbackOutlined } from '@ant-design/icons';
import { Meta } from 'antd/lib/list/Item';


export default function AboutDev() {
  return (
    <div>
      <Card
        style={{ width: 300 }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[
          <Link to = "/">
            назад <RollbackOutlined key="back" />,
          </Link>
        ]}
      >
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title="Бисеров Антон Гелиевич"
          description={
          <code> Студент: ТУСУР, АОИ <br/>
              Направление подготовки: 09.03.04 <br/>
              Группа: з-421П8-4  <br/>
            </code>
          }
        />
      </Card>
    </div>
  );
}
