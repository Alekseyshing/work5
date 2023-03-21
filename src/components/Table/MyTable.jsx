import React from 'react'
import { Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '../Button/Button'
import pen from '../../assets/pen.svg'
import cancel from '../../assets/cancel.svg'
import './mytable.css'

const MyTable = () => {
  return (
    <div className='mytable'>
      <Table hover borderless>
        <thead>
          <tr>
            <th className='table_th'>№</th>
            <th className='table_th'>Название</th>
            <th className='table_th'>Адрес</th>
            <th className='table_th'>Действие</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>12345</td>
            <td>Дипломная работа</td>
            <td>http://www.work5.ru/services</td>
            <td>
              <div className='mytable_buttons'>
                <Button
                  text="Редактировать"
                  svg={pen}
                  color="#55C97B"
                />
                <Button
                  text="Редактировать"
                  svg={cancel}
                  color="#B1B1B1"
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>12345</td>
            <td>Дипломная работа</td>
            <td>http://www.work5.ru/services</td>
            <td>
              <div className='mytable_buttons'>
                <Button
                  text="Редактировать"
                  svg={pen}
                  color="#55C97B"
                />
                <Button
                  text="Редактировать"
                  svg={cancel}
                  color="#B1B1B1"
                />
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default MyTable


