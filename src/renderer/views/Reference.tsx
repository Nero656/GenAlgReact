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
        <Title>Справка</Title>
        <Paragraph>
          Генетический алгоритм
        </Paragraph>
        <Paragraph>
          алгоритм поиска, используемый для решения задач оптимизации и моделирования путём случайного подбора, комби-
          нирования и вариации искомых параметров с использованием механизмов,
          аналогичных естественному отбору в природе. Генетические алгоритмы не являются гарантированно точными или
          оптимальными, но достаточны для решения поставленной задачи <br/>
          <Text strong>
            Задача генетического алгоритма формализуется таким образом, чтобы
            её решение могло быть закодировано в виде вектора («генотипа») генов, где
            каждый ген может быть неким объектом. В классических реализациях гене-
            тического алгоритма предполагается, что генотип имеет фиксированную
            длину.
          </Text>
        </Paragraph>
        критерий остановки алгоритма
        <Text>
          <Paragraph>
            <ul>
              <li>
                нахождение глобального решения,
              </li>
              <li>
                исчерпание времени, отпущенного на эволюцию,
              </li>
              <li>
                 исчерпание времени на улучшение предыдущего результата
              </li>
            </ul>
          </Paragraph>
        </Text>
      </Typography>
    </div>
  );
}
