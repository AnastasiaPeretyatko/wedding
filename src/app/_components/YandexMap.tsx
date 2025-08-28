const YandexMap = ({ type }: { type: 'house' | 'registry' }) => {
  return type === 'house' ? (
    <div style={{ position: 'relative', overflow: 'hidden', width: '100%' }}>
      <a
        href="https://yandex.ru/maps/971/taganrog/?utm_medium=mapframe&utm_source=maps"
        style={{
          color: '#eee',
          fontSize: '12px',
          position: 'absolute',
          top: 0,
        }}
      >
        Таганрог
      </a>
      <a
        href="https://yandex.ru/maps/971/taganrog/house/podgornaya_ulitsa_44/Z0EYfwRgTk0DQFptfX5zdHlhZw==/?ll=38.915700%2C47.225099&utm_medium=mapframe&utm_source=maps&z=14.59"
        style={{
          color: '#eee',
          fontSize: '12px',
          position: 'absolute',
          top: 14,
        }}
      >
        Подгорная улица, 44 — Яндекс Карты
      </a>
      <iframe
        src="https://yandex.ru/map-widget/v1/?ll=38.915700%2C47.225099&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NzU5NTg1MBJm0KDQvtGB0YHQuNGPLCDQoNC-0YHRgtC-0LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwg0KLQsNCz0LDQvdGA0L7Qsywg0J_QvtC00LPQvtGA0L3QsNGPINGD0LvQuNGG0LAsIDQ0IgoNILkbQhXv5jxC&z=14.59"
        width="100%"
        height="400"
        frameBorder="1"
        allowFullScreen
        style={{ position: 'relative' }}
      />
    </div>
  ) : (
    <div style={{ position: 'relative', overflow: 'hidden', width: '100%' }}>
      <a
        href="https://yandex.ru/maps/org/otdel_zags_goroda_taganroga/177769129752/?utm_medium=mapframe&utm_source=maps"
        style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: 0 }}
      >
        Отдел ЗАГС города Таганрога
      </a>
      <a
        href="https://yandex.ru/maps/971/taganrog/category/registery_office/184107242/?utm_medium=mapframe&utm_source=maps"
        style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: 14 }}
      >
        ЗАГС в Таганроге
      </a>
      <iframe
        src="https://yandex.ru/map-widget/v1/?display-text=%D0%97%D0%90%D0%93%D0%A1&ll=38.920532%2C47.215269&mode=search&oid=177769129752&ol=biz&sll=38.936699%2C47.208735&sspn=0.240326%2C0.092178&text=%7B%22text%22%3A%22%D0%97%D0%90%D0%93%D0%A1%22%2C%22what%22%3A%5B%7B%22attr_name%22%3A%22category_id%22%2C%22attr_values%22%3A%5B%22184107242%22%5D%7D%5D%7D&scroll=false&z=16.96"
        width="560"
        height="400"
        frameBorder="1"
        allowFullScreen
        style={{ position: 'relative' }}
      />
    </div>
  );
};

export default YandexMap;
