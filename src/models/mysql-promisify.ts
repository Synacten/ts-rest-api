import { connection } from './connect';


export const promiseQuery = (dbQuery: string, args: Array<string | number>): Promise<any> => new Promise((resolve, reject) => {
  connection.query(dbQuery, args || [], (err, result): void => {
    if (err) {
      return reject();
    }
    return resolve(result);
  });
});
