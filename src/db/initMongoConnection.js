import mongoose from 'mongoose';

export const initMongoConnection = async () => {
  try {
    console.log('Mongo connection successfully established!');
  } catch (error) {
    console.log('Error while connection to MongoDB', error);
    throw error;
  }
};
