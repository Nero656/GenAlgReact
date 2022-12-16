import React from 'react';
import {Link} from 'react-router-dom';
import { Button, Divider, Typography } from 'antd';
import { RollbackOutlined } from '@ant-design/icons';
const { Title, Paragraph, Text} = Typography;

export default function AboutProgram() {
  return (
    <div className={"text_body"}>
      <Link to = "/">
        <Button> назад <RollbackOutlined/></Button>
      </Link>
      <Typography>
        <Title>Инструкция</Title>
        <Paragraph>
          Программа реализует генетический алгоритм
        </Paragraph>
        <blockquote>
          1. Для начала генерации выберете язык на котором нужно сгенерировать фразу.<br/>
          2. Введите фразу которую хотите сгенерировать.<br/>
          3. Нажмите пуск.<br/>
          4. Если генерация прошла успешно, появится уведомление о успешном решении.
        </blockquote>
      </Typography>
    </div>
  );
}
