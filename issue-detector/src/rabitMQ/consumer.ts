import amqp from 'amqplib';

const consumeRabbitMQ = async () => {
  try {
    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();
    await channel.assertQueue('taskQueue', { durable: true });

    channel.consume(
      'taskQueue',
      (message) => {
        if (message) {
          const task = JSON.parse(message.content.toString());
          console.log('Received task:', task);
          channel.ack(message);
        }
      },
      { noAck: false }
    );

    console.log('Listening for messages in RabbitMQ...');
  } catch (error) {
    console.error('Error consuming RabbitMQ messages:', error);
  }
};

consumeRabbitMQ();
