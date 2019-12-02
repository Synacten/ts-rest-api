import { Request, Response } from 'express';
import { escape } from 'mysql';
import { promiseQuery } from '../models/mysql-promisify';

export const findUser = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const query = await promiseQuery(`SELECT * FROM userAuth WHERE id = ${escape(id)};`, []);
    res.send(query);
  } catch (e) {
    res.status(400).send('Bad request');
  }
};