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
      <div className={styles.photo}>
        <div className={styles.evn} />
        <div className={styles.anst} />
      </div>

      <div className={styles.block}>
        <h1>
          <em className={classNames(styles.name, styles.green)}>Женя</em>
          <em className={classNames(styles.plus, styles.green)}> + </em>
          <em className={classNames(styles.name, styles.pink)}>Настя</em>
        </h1>

        <p>Дорогие родные и близкие! Мы женимся и мечтаем разделить этот день вместе с вами.</p>
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
          <p>
            Сбор гостей в домике <br />
            (подготовка к ЗАГСу и выкуп невесты)
          </p>
        </div>
        <div>
          <span style={{ fontSize: '1.5em', color: '#8f995f' }}>♥</span>
          <h2 className={styles.time}>14:30</h2>
          <p>Сбор гостей у ЗАГСа</p>
        </div>
        <div>
          <span style={{ fontSize: '1.5em', color: '#8f995f' }}>♥</span>
          <h2 className={styles.time}>15:00</h2>
          <p>
            Начало церемонии <br /> регистрации
          </p>
        </div>

        <div>
          <span style={{ fontSize: '1.5em', color: '#8f995f' }}>♥</span>
          <h2 className={styles.time}>15:30</h2>
          <p>
            Встреча с родителями жениха <br /> в отчем доме
          </p>
        </div>

        <div>
          <span style={{ fontSize: '1.5em', color: '#8f995f' }}>♥</span>
          <h2 className={styles.time}>17:30</h2>
          <p>Банкет</p>
        </div>
        <p style={{ marginTop: '1em', fontStyle: 'italic', fontSize: '0.95em' }}>
          * Дорогие гости, все этапы до банкета носят свободный характер. Самое важное – мы будем
          ждать вас на праздничном ужине в 17:30!
        </p>
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
              Мы хотим, чтобы все гости чувствовали себя комфортно, поэтому для вас будет
              организовано проживание в доме, чтобы продолжить празднование до воскресенья.
            </p>

            <span style={{ fontSize: '1.5em', color: '#8f995f' }}>♥</span>
            <h2>Развлечения</h2>
            <p>
              После завершения официальной части мероприятия в нашем распоряжении будет бассейн, а в
              пешей доступности — море. Возьмите всё необходимое для весёлого отдыха!
            </p>
          </>
        )}

        {!isLiving && (
          <>
            <span style={{ fontSize: '1.5em', color: '#8f995f' }}>♥</span>
            <h2>Транспорт</h2>
            <p>
              Мы позаботимся о вашем комфорте и закажем такси в обе стороны. Будем благодарны, если
              за день вы сообщите, к какому этапу праздника планируете присоединиться.
            </p>
          </>
        )}

        <span style={{ fontSize: '1.5em', color: '#8f995f' }}>♥</span>
        <h2>Дресс-код</h2>
        <p>
          Мы не хотим ограничивать вас в цветовой гамме, поэтому выбирайте те образы, в которых
          будете чувствовать себя на все 100!
        </p>

        <span style={{ fontSize: '1.5em', color: '#8f995f' }}>♥</span>
        <h2>Подарки</h2>
        <p>
          Мы не хотим обременять вас выбором подарка, поэтому будем очень рады любому вкладу в
          бюджет нашей молодой семьи.
        </p>

        <span style={{ fontSize: '1.5em', color: '#8f995f' }}>♥</span>
        <h2>Пожелания</h2>
        <p>
          Будем благодарны, если вы воздержитесь от криков &quot;Горько!&quot; на празднике, ведь
          поцелуй - это знак выражения чувств, и его невозможно исполнить по заказу.
        </p>
      </div>

      <div className={styles.photo}>
        <div className={styles.image} />
      </div>

      <div className={styles.block}>
        <h4 className={styles.description}>
          С любовью, <br /> Женя и Настя!
        </h4>
      </div>
    </div>
  );
}
