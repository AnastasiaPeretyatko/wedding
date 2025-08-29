'use client';

import { useSearchParams } from 'next/navigation';
import styles from './home.module.css';
import classNames from 'classnames';
import YandexMap from './YandexMap';

export default function Home() {
  const searchParams = useSearchParams();
  const livingParam = searchParams.get('living');
  const isLiving = livingParam === 'true';

  return (
    <div className={styles.main}>
      <div className={styles.photo} />

      <div className={styles.block}>
        <h1>
          <em className={classNames(styles.name, styles.green)}>Женя</em>
          <em className={classNames(styles.plus, styles.green)}> + </em>
          <em className={classNames(styles.name, styles.pink)}>Настя</em>
        </h1>

        <p>Дорогие родные и близкие, мы женимся и мечтаем разделить этот день вместе с Вами!</p>
      </div>

      <div className={styles.block}>
        {/* Подумать на счет времени */}
        <h2 className={styles.date}>19.09.2025 в 14:00</h2>

        <div
          className={classNames(styles.calendar, {
            [styles.living]: isLiving,
          })}
        >
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Пн</th>
                <th>Вт</th>
                <th>Ср</th>
                <th>Чт</th>
                <th>Пт</th>
                <th>Сб</th>
                <th>Вс</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>15</td>
                <td>16</td>
                <td>17</td>
                <td>18</td>
                <td>19</td>
                <td>20</td>
                <td>21</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className={styles.block}>
        <h1>Тайминг</h1>
        <div>
          <span style={{ fontSize: '1.5em', color: '#8f995f' }}>♥</span>
          <h2 className={styles.time}>13:30</h2>
          <p>Сбор гостей в домике (по желанию)</p>
        </div>
        <div>
          <span style={{ fontSize: '1.5em', color: '#8f995f' }}>♥</span>
          <h2 className={styles.time}>14:30</h2>
          <p>Сбор гостей у ЗАГСа (по желанию)</p>
        </div>
        <div>
          <span style={{ fontSize: '1.5em', color: '#8f995f' }}>♥</span>
          <h2 className={styles.time}>15:00</h2>
          <p>Церемония регистрации</p>
        </div>

        <div>
          <span style={{ fontSize: '1.5em', color: '#8f995f' }}>♥</span>
          <h2 className={styles.time}>17:30</h2>
          <p>Банкет</p>
        </div>
      </div>

      <div className={styles.block}>
        <h1>Локация ЗАГСа</h1>
        <p>Ростовская область, г. Таганрог, Александровская улица, 92</p>
        <YandexMap type="registry" />
      </div>

      <div className={styles.block}>
        <h1>Локация банкета</h1>
        <p>Ростовская область, г. Таганрог, Подгорная улица, 44</p>
        <YandexMap type="house" />
      </div>

      <div className={styles.block}>
        <h1>Детали</h1>
        {isLiving && (
          <>
            <span style={{ fontSize: '1.5em', color: '#8f995f' }}>♥</span>
            <h2>Проживание</h2>
            <p>
              Мы хотим чтобы все гости чувствовали себя комфортно, поэтому для Вас будет
              организовано проживание в доме для продолжения празднования до воскресенья.
            </p>

            <span style={{ fontSize: '1.5em', color: '#8f995f' }}>♥</span>
            <h2>Развлечения</h2>
            <p>
              После завершения официальной части мероприятия в нашем распоряжении бассейн и в пешей
              доступности море, возьмите всё необходимое для веселого отдыха!
            </p>
          </>
        )}

        <span style={{ fontSize: '1.5em', color: '#8f995f' }}>♥</span>
        <h2>Дресс-код</h2>
        <p>
          Мы не хотим ограничивать Вас в цветовой гамме, поэтому выбирайте те образы, в которых
          будете чувствовавать себя на 100 баллов!
        </p>

        <span style={{ fontSize: '1.5em', color: '#8f995f' }}>♥</span>
        <h2>Подарки</h2>
        <p>
          Мы не хотим обременять Вас выбором подарка, поэтому будем очень рады вкладу в бюджет нашей
          молодой семьи.
        </p>

        <span style={{ fontSize: '1.5em', color: '#8f995f' }}>♥</span>
        <h2>Пожелания</h2>
        <p>
          Будем благодарны если Вы воздержитесь от криков &quot;Горько!&quot; на празднике, ведь
          поцелуй - это знак выражения чувств, и он не может быть исполнен по заказу.
        </p>
      </div>

      <div className={styles.photo} />

      <div className={styles.block}>
        <h1 className={styles.description}>
          С любовью. <br /> Женя и Настя!
        </h1>
      </div>
    </div>
  );
}
