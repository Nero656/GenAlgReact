import React from 'react';
import Population from './Population';
import { Alert, Button, Divider, Form, Input, Radio, RadioChangeEvent } from 'antd';
import { LoadingOutlined, PlayCircleOutlined } from '@ant-design/icons';


export class Main extends React.Component<{}, { targetPhrase: string, language: number, result: string }> {
  public mutationRate: number;
  public population: Population;
  public isLaunched: boolean;
  public isFalse: boolean;
  public running: boolean;
  public populationSize: number;

  constructor() {
    super(0);

    this.state = {
      targetPhrase: '',
      language: 0,
      result: ''
    };

    this.mutationRate = 0.01;
    this.populationSize = 300;

    this.isLaunched = false;
    this.isFalse = false;
    this.running = false;


    // Initialise population
    this.population = new Population(
      this.state.targetPhrase,
      this.mutationRate,
      this.populationSize,
      this.state.language
    );

    this.handleChange = this.handleChange.bind(this);

    this.draw = this.draw.bind(this);
  }

  draw() {
    if (this.population.generations == this.populationSize - 1) {
      this.isFalse = true;
      this.running = false;
    } else
      // Generate weighed mating pool with the fittest members
      this.population.naturalSelection();

    // Generate new population of children from parents in the mating pool
    this.population.generate();

    // Calculate fitness score of the new population
    this.population.calcPopulationFitness();

    // Find the fittest member of the population and see if target is reached
    this.population.evaluate();

    // If target phrase is found, stop
    if (this.population.isFinished()) this.running = false;

    // Display best result so far
    this.setState({ result: this.population.getBest() });

    // Loop and start new generation
    if (this.running) window.requestAnimationFrame(this.draw);

  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    // No longer need to cast to any - hooray for react!
    this.setState({ targetPhrase: e.target.value });
  }

  generate = (errorInfo: any) => {
    if (this.state.targetPhrase === '') {
      this.setState({ targetPhrase: '' });
      this.onFinishFailed(errorInfo);
    } else {
      this.population = new Population(this.state.targetPhrase, this.mutationRate, this.populationSize, this.state.language);
      this.running = true;
      this.isLaunched = true;
      this.draw();
    }
  };

  onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    this.setState({ language: e.target.value });
  };

  render() {
    let statusMes = this.running ? 'Генерируется' : this.isFalse ? 'Ошибка' : 'Успешно';
    const status = this.running ? 'info' : this.isFalse ? 'error' : 'success';

    return (
      <div className={'Main myForm'}>
        <Form
          name='basic'
          initialValues={{ remember: true }}
          onFinishFailed={this.onFinishFailed}
          autoComplete='off'
        >
          <Form.Item
            label='Фраза'
            name='Phrase'
            rules={[{ required: true, message: 'Пожалуйста введите фразу!' }]}
          >
            <Input onChange={this.handleChange} />
            <p>Выберете язык на котом будет сгенерирована фраза</p>
            <Radio.Group onChange={this.onChange} value={this.state.language}>
              <Radio value={0}>Русский</Radio>
              <Radio value={1}>English</Radio>
            </Radio.Group>
          </Form.Item>
          {this.running &&
            <Button type='primary' style={{ float: 'right' }} disabled>пуск <LoadingOutlined /></Button>
          }
          {!this.running &&
            <Form.Item style={{ float: 'right' }}>
              <Button type='primary' onClick={this.generate}>пуск <PlayCircleOutlined /></Button>
            </Form.Item>
          }
        </Form>
        {this.isLaunched &&
          <div>
            <Divider orientation='left'>Генерируемая фраза</Divider>
            <Alert
              message={statusMes}
              description={
                <code>
                  {this.state.result} <br />
                  колличество поколений {this.population.generations} <br />
                  предел поколений {this.populationSize}
                </code>
              }
              type={status}
              showIcon />
          </div>
        }
      </div>
    );
  }
}

export default Main;
