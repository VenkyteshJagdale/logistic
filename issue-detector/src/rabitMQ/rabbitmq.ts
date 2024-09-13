import amqp from 'amqplib';

let channel: amqp.Channel;

export const connectRabbitMQ = async () => {
  try {
    const connection = await amqp.connect('amqp://localhost');
    channel = await connection.createChannel();
    await channel.assertQueue('taskQueue', { durable: true });
    console.log('Connected to RabbitMQ');
  } catch (error) {
    console.error('Error connecting to RabbitMQ:', error);
  }
};

export const publishToQueue = async (queueName: string, message: any) => {
  try {
    channel.sendToQueue(queueName, Buffer.from(JSON.stringify(message)), {
      persistent: true,
    });
  } catch (error) {
    console.error('Error publishing message:', error);
  }
};


