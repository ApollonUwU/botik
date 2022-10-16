import React from 'react';
import Navbar from '../navbar/Navbar';
import '../styles/app.css';
import '../styles/list.css'


function App() {

  return (
    <div className='App'>
      <div className='Navbar'>
        <React.Fragment>
          <Navbar />
        </React.Fragment>
      </div>
      <body className='wrapper'>
        <div className='content'>
          <main className='0' id='0'>
            <h1>Ми компанія - Botik</h1>
            <h2>
              Ми українська аутсорс компанія, основною спеціалізацією якої розробка чат-ботів.
              Botik-це професійна розробка ботів для вашого бізнесу.
              Нам довіряють більше 20 успішних брендів серед яких є такі гіганти, як Нова Пошта, Смсклаб, Кроно, Будмайстер
              і дуже багато інших.
            </h2>
          </main>
          <div className='w-back'>
            <div className='1' id='1'>
              <div className='quote'>
                <h2>
                  Чому саме Ми?
                </h2>
              </div>
              <ul>
                <b><li>Ми працюємо на результат 👍</li></b>
                <b><li>Нам довіряють Великі бренди 🧐</li></b>
                <b><li>Швидкість реагування 🤳</li></b>
                <b><li>Гнучкість в оплаті 👛</li></b>
              </ul>
            </div>
            <div className='3' id='3'>
              <div className='quote'>
                <h2>Причини зробити бота 🦾🤖</h2>
                <h3 >
                  85% користувачів відкривають повідомлення в месенджерах, що в 10 разів частіше, ніж в e-mail і SMS!
                </h3>
                <h3>
                  Чому б не скористатися цим вже зараз?
                </h3>
              </div>
              <ul>
                <b><li>Чат боти спрощують взаємодію клієнтів з компанією, залишаючи спілкування з клієнтом в зручному для нього мессенджері 🤖🙂</li></b>
                <b><li>Коштує значно дешевше за мобільний додаток 👛👌</li></b>
                <b><li>Чат бот легко підключається до будь-якої CRM системи 👍</li></b>
                <b><li>Надають новий, більш прямий і особистий канал комунікації, утримуючи клієнтів в базі після звернення 😎</li></b>
                <b><li>Чат боти легко допрацьовувати в залежності від поведінки клієнтів 🛠⚙️</li></b>
                <b><li>Для роботи з ним не потрібно мати швидкий інтернет або дорогий смартфон 📱</li></b>
              </ul>
            </div>
            <div className='4' id='4'>
              <div className='quote'>
                <h2>Наші послуги</h2>
              </div>
              <ul>
                <b><li>розробка чат-ботів</li></b>
                <b><li>розробка скриптів під певні задачі</li></b>
                <b><li>оцінка розробки чат-ботів</li></b>
              </ul>

            </div>
            <div className='5' id='5'>
              <div className='quote'>
                <h2>
                  Наші контакти
                </h2>
                <h3>
                  📱+380999999999   📧smth@gmail.com
                </h3>
                <h3>
                  Консультація безкоштовна!
                </h3>
              </div>
            </div>
          </div>
        </div>
      </body>

    </div>

  );
}

export default App;