import React, { Component, Fragment } from 'react';
import './style.css'
import logo from './images/site-logo.svg';
import yandexIcon from './images/yandex.svg';
import logInIcon from './images/logIn.svg';
import cartIcon from './images/cartIcon.svg';
import siteImg from './images/siteImg.png'
export class Main extends Component {
  render(){
    return (
      <Fragment> 
        <div className="page-top">
          <div className="header-top">
            <div className="header-top-left">
              <select className='select-city'>
                <option value="Санкт-Петербург">Санкт-Петербург</option>
                <option value="Москва">Москва</option>
              </select>
              <span>+7 (812) 613-58-38</span>
              <span>Пн–пт 10:00–19:00, сб-вс 10:00–17:00</span>
            </div>
            <div className="header-top-right">
              <span>Напишите нам</span>
              <span>Свяжитесь с директором</span>
              <span className='header-top-right-icons'>
                <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.282729 6.71437L3.96945 8.09037L5.39644 12.6795C5.48774 12.9735 5.84716 13.0821 6.08572 12.8871L8.14076 11.2118C8.35617 11.0362 8.663 11.0275 8.88812 11.1909L12.5947 13.8819C12.8499 14.0674 13.2114 13.9276 13.2754 13.6192L15.9907 0.558373C16.0605 0.221519 15.7296 -0.059494 15.4088 0.0645593L0.278409 5.90141C-0.0949774 6.04541 -0.0917241 6.57405 0.282729 6.71437ZM5.16646 7.35789L12.3717 2.92019C12.5012 2.84067 12.6344 3.01576 12.5232 3.11891L6.57681 8.64637C6.3678 8.84093 6.23297 9.10131 6.19478 9.38392L5.99222 10.885C5.9654 11.0855 5.68385 11.1054 5.62854 10.9114L4.8495 8.17405C4.76028 7.86184 4.8903 7.52835 5.16646 7.35789Z" fill="black"/>
                </svg>

                <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.3638 8.48624C17.4918 8.03101 17.5599 7.55846 17.5599 7.0735C17.5599 3.43737 13.7699 0.48958 9.09472 0.48958C8.60116 0.48958 8.11756 0.52276 7.64704 0.5859C6.8905 0.21518 5.99542 0 5.0353 0C2.32402 0 0.12616 1.70963 0.12616 3.81808C0.12616 4.52293 0.3727 5.18261 0.80092 5.74938C0.68866 6.17713 0.62968 6.61985 0.62968 7.07345C0.62968 10.7096 4.41958 13.6574 9.09472 13.6574C9.62428 13.6574 10.1423 13.6192 10.6448 13.5469C11.3358 13.8358 12.126 14 12.9654 14C15.6768 14 17.8745 12.2906 17.8745 10.1819C17.8745 9.57259 17.6901 8.99719 17.3638 8.48624ZM13.4363 10.2199C13.0446 10.6509 12.4661 10.9925 11.7164 11.2349C10.974 11.4749 10.0841 11.5966 9.07114 11.5966C7.8553 11.5966 6.83596 11.4303 6.04036 11.102C5.47162 10.863 5.0026 10.5394 4.64662 10.1401C4.28704 9.73663 4.10464 9.33632 4.10464 8.95034C4.10464 8.70907 4.22344 8.49991 4.4578 8.32874C4.6897 8.15906 4.98688 8.0731 5.34124 8.0731C5.63212 8.0731 5.88298 8.14105 6.08698 8.27507C6.2818 8.4035 6.44902 8.59353 6.58336 8.83895C6.73336 9.10616 6.89692 9.33179 7.06966 9.5095C7.23568 9.68044 7.47454 9.82413 7.77958 9.93627C8.08648 10.0493 8.50018 10.1066 9.00904 10.1066C9.70882 10.1066 10.2826 9.99035 10.7142 9.76113C11.1357 9.53727 11.3406 9.26856 11.3406 8.93961C11.3406 8.67967 11.2337 8.47541 11.0137 8.31511C10.7833 8.14753 10.4795 8.0171 10.1104 7.92764C9.72568 7.83435 9.20338 7.73374 8.55736 7.62855C7.6822 7.48277 6.93826 7.30982 6.34576 7.11433C6.34348 7.11363 6.34114 7.11289 6.33886 7.11209C5.73184 6.91129 5.2426 6.63283 4.8847 6.28441C4.52116 5.93059 4.33696 5.48669 4.33696 4.96491C4.33696 4.46754 4.53034 4.01921 4.91176 3.63249C5.2903 3.24847 5.84314 2.95003 6.55486 2.74526C7.2574 2.54319 8.09308 2.44081 9.03862 2.44081C9.79462 2.44081 10.4593 2.50871 11.0141 2.64287C11.572 2.77802 12.0424 2.96053 12.412 3.18509C12.7843 3.41133 13.0612 3.65339 13.2351 3.90479C13.4108 4.1587 13.4999 4.4114 13.4999 4.65584C13.4999 4.89109 13.383 5.10487 13.1526 5.29121C12.9209 5.47862 12.6284 5.57377 12.2832 5.57377C11.9697 5.57377 11.7244 5.51427 11.5541 5.39695C11.3957 5.28803 11.2314 5.11821 11.0489 4.87387C10.8378 4.56195 10.5824 4.31606 10.2893 4.14279C10.0049 3.97451 9.52936 3.88906 8.87602 3.88906C8.26924 3.88906 7.77574 3.98379 7.40932 4.17065C7.05622 4.35069 6.88468 4.55714 6.88468 4.80172C6.88468 4.95175 6.93988 5.0771 7.05346 5.18499C7.17376 5.29928 7.34344 5.39966 7.55794 5.4831C7.78042 5.57009 8.00968 5.6392 8.23936 5.68853C8.47462 5.7393 8.86936 5.81453 9.41068 5.91178C9.98104 6.00703 10.5122 6.11193 10.9958 6.22421C11.0929 6.24675 11.1889 6.26957 11.282 6.29272C11.8457 6.43305 12.3329 6.60613 12.7301 6.80708C13.1356 7.01246 13.4567 7.27622 13.6845 7.59108C13.9129 7.90706 14.0286 8.29724 14.0286 8.75047C14.0285 9.29297 13.8292 9.78726 13.4363 10.2199Z" fill="black"/>
                </svg>

                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0)">
                  <path d="M13.6866 6.71405C13.7059 4.45825 11.7846 2.39027 9.40381 2.10431C9.35646 2.0987 9.30488 2.09015 9.25027 2.08111C9.13241 2.06158 9.01052 2.0415 8.88754 2.0415C8.39959 2.0415 8.26916 2.38426 8.23482 2.58868C8.20143 2.78744 8.23328 2.95435 8.32933 3.08498C8.49092 3.30471 8.77524 3.34372 9.00361 3.37497C9.07055 3.38421 9.1337 3.39281 9.18657 3.40468C11.3256 3.88265 12.0459 4.6341 12.3979 6.75494C12.4064 6.80677 12.4103 6.87062 12.4144 6.93835C12.4298 7.19186 12.4618 7.71932 13.0289 7.71932H13.0289C13.0761 7.71932 13.1268 7.71524 13.1797 7.70719C13.7077 7.62694 13.6912 7.14481 13.6832 6.91316C13.681 6.84791 13.6788 6.7862 13.6844 6.74516C13.6859 6.73482 13.6866 6.72444 13.6866 6.71405Z" fill="black"/>
                  <path d="M8.74907 1.27642C8.81243 1.28099 8.8724 1.28537 8.92234 1.29302C12.4348 1.83319 14.0502 3.49739 14.4979 7.03737C14.5055 7.09754 14.5066 7.17093 14.5079 7.24865C14.5124 7.52522 14.5216 8.10057 15.1394 8.1125L15.1586 8.1127C15.3524 8.1127 15.5066 8.05426 15.6168 7.93888C15.8092 7.73769 15.7957 7.43881 15.7849 7.19861C15.7823 7.13968 15.7797 7.08417 15.7804 7.03558C15.8251 3.41511 12.6911 0.132075 9.07389 0.00998758C9.05889 0.00949068 9.04458 0.0102857 9.03012 0.012323C9.02301 0.0133665 9.00984 0.0146584 8.98728 0.0146584C8.95121 0.0146584 8.90684 0.0115279 8.85978 0.00834783C8.80289 0.00447205 8.73839 0 8.673 0C8.09695 0 7.98743 0.409441 7.97342 0.653516C7.94112 1.21759 8.48681 1.25729 8.74907 1.27642Z" fill="black"/>
                  <path d="M14.3285 11.6127C14.2538 11.5556 14.1766 11.4966 14.1043 11.4384C13.7208 11.1297 13.3128 10.8453 12.9182 10.5701C12.8364 10.5131 12.7545 10.456 12.6729 10.3988C12.1674 10.0437 11.713 9.8712 11.2837 9.8712C10.7055 9.8712 10.2013 10.1907 9.78523 10.8207C9.60088 11.1 9.37723 11.2358 9.1016 11.2358C8.93862 11.2358 8.75342 11.1893 8.55124 11.0975C6.91979 10.3577 5.75482 9.2234 5.08863 7.72611C4.76659 7.00243 4.87099 6.52939 5.43775 6.14439C5.75959 5.92596 6.35864 5.5193 6.31621 4.74057C6.26816 3.85624 4.31695 1.19542 3.49484 0.893213C3.14677 0.765213 2.78105 0.76402 2.4059 0.890232C1.4608 1.20795 0.782593 1.76591 0.444407 2.5037C0.117599 3.21659 0.132357 4.05366 0.48709 4.92442C1.51258 7.44198 2.95437 9.63696 4.77256 11.4483C6.55223 13.2214 8.73961 14.6738 11.2739 15.7651C11.5023 15.8633 11.7419 15.917 11.9169 15.9561C11.9765 15.9695 12.028 15.9809 12.0655 15.9912C12.0861 15.9968 12.1074 15.9998 12.1287 16L12.1487 16.0001C12.1488 16.0001 12.1487 16.0001 12.1488 16.0001C13.3408 16.0001 14.772 14.911 15.2115 13.6692C15.5966 12.5819 14.8935 12.0445 14.3285 11.6127Z" fill="black"/>
                  <path d="M9.27653 4.15229C9.07245 4.15746 8.64776 4.16799 8.49874 4.60054C8.42902 4.80268 8.43737 4.97818 8.52358 5.12218C8.65009 5.33346 8.89248 5.39821 9.11295 5.43373C9.9125 5.56203 10.3231 6.00417 10.4053 6.82504C10.4434 7.2078 10.7012 7.47508 11.0321 7.47508H11.0322C11.0566 7.47508 11.0816 7.47364 11.1065 7.47061C11.5045 7.42325 11.6974 7.13083 11.68 6.60154C11.6864 6.04914 11.3973 5.42201 10.9056 4.92248C10.4122 4.42141 9.8175 4.13922 9.27653 4.15229Z" fill="black"/>
                  </g>
                </svg>
              </span>
            </div>
          </div>
          <header className='page-header'>
            <div className="header-elems">
              <img src={logo} alt="logo"/>
              <span className="logo-desc">Ваш эксперт<br/>на рынке <span className='logo-desc-item'>3D</span>-техники</span>
              <img className='yandex-icon' src={yandexIcon} alt="yandexIcon"/>
              <div className="search-block">
                <input className='search-block-input' type="search"/>
                <button className='search-block-btn'>Найти</button>
              </div>
              <a href="#" className='log-in-link'>
                <img className='log-in-icon' src={logInIcon} alt="loginIcon"/>
                <span>Войти</span>
              </a>
              <a href="#" className="cart-btn">
                <img className='cart-icon' src={cartIcon} alt="cartIcon"/>
                <span>Корзина пуста</span>
              </a>
            </div>
            <nav>
              <ul  className="nav">
              <li><a className='nav-item' href="#">Акции</a></li>
              <li><a className='nav-item' href="#">О нас</a></li>
              <li><a className='nav-item' href="#">Мероприятия</a></li>
              <li><a className='nav-item' href="#">Оплата и доставка</a></li>
              <li><a className='nav-item' href="#">Что с моим заказом?</a></li>
              <li><a className='nav-item' href="#">Гос. закупки</a></li>
              <li><a className='nav-item' href="#">Блог</a></li>
              <li><a className='nav-item' href="#">Мастер-классы</a></li>
              <li><a className='nav-item' href="#">Контакты</a></li>
              </ul>
            </nav>
          </header>
          <hr/>
          <ul className="services">
            <li><select className='services-item' name="printer" id="">
              <option value="3D-принтеры">3D-принтеры</option>
              <option value="Тип 1">Тип 1</option>
              <option value="Тип 1">Тип 2</option>
            </select></li>
            <li><select className='services-item' name="scaner" id="">
              <option value="3D-сканеры">3D-сканеры</option>
              <option value="Тип 1">Тип 1</option>
              <option value="Тип 1">Тип 2</option>
            </select></li>
            <li><select className='services-item' name="Machine tools" id="">
              <option value="Станки">Станки</option>
              <option value="Тип 1">Тип 1</option>
              <option value="Тип 1">Тип 2</option>
            </select></li>
            <li><select className='services-item' name="robots" id="">
              <option value="Роботы">Роботы</option>
              <option value="Тип 1">Тип 1</option>
              <option value="Тип 1">Тип 2</option>
            </select></li>
            <li><select className='services-item' name="education" id="">
              <option value="Образование">Образование</option>
              <option value="Тип 1">Тип 1</option>
              <option value="Тип 1">Тип 2</option>
            </select></li>
            <li><select className='services-item' name="dantists" id="">
              <option value="Стоматологам">Стоматологам</option>
              <option value="Тип 1">Тип 1</option>
              <option value="Тип 1">Тип 2</option>
            </select></li>
            <li><select className='services-item' name="gadjets" id="">
              <option value="Гаджеты">Гаджеты</option>
              <option value="Тип 1">Тип 1</option>
              <option value="Тип 1">Тип 2</option>
            </select></li>
            <li><select className='services-item' name="materials" id="">
              <option value="Материалы">Материалы</option>
              <option value="Тип 1">Тип 1</option>
              <option value="Тип 1">Тип 2</option>
            </select></li>
            <li><select className='services-item' name="software" id="">
              <option value="ПО">ПО</option>
              <option value="Тип 1">Тип 1</option>
              <option value="Тип 1">Тип 2</option>
            </select></li>
            <li><select className='services-item' name="solutions" id="">
              <option value="Решения">Решения</option>
              <option value="Тип 1">Тип 1</option>
              <option value="Тип 1">Тип 2</option>
            </select></li>
            <li><select className='services-item' name="study-center" id="">
              <option value="Учебный центр">Учебный центр</option>
              <option value="Тип 1">Тип 1</option>
              <option value="Тип 1">Тип 2</option>
            </select></li>
            <li><select className='services-item' name="services" id="">
              <option value="Услуги">Услуги</option>
              <option value="Тип 1">Тип 1</option>
              <option value="Тип 1">Тип 2</option>
            </select></li>
          </ul>
        </div>
        <main className="services-description">
          <img className='services-desc-img' src={siteImg} alt=""/>
          <div className="services-description-elems">
            <div className="services-description-left">
              <p className="services-description-left-text">Твоя работа в крупнейшем интеграторе цифрового производства</p>
              <a href="#" className="send-summary">Отправить резюме</a>
              <span className="terms">Нажимая кнопку, вы соглашаетесь на обработку персональных данных</span>
            </div>
            <div className="services-description-right">
              <p className='services-description-right-item'>
                Top 3D Shop – лидер по продажам 3D-оборудования в России и странах СНГ. 
                В 2018 мы стали лучшим интегратором 3D оборудования по аддитивным технологиям и цифровому производству по версии 3D Print Awards. 
              </p>
              <p className='services-description-right-item'>
                За 6 лет работы более 10 000 клиентов по всей России и СНГ выбрали Top 3D Shop. 
                В 2018 наш оборот составил 600 млн. рублей, в компании работает более 100 сотрудников.
              </p> 
              <p className='services-description-right-item'>
                Новая цель: 1 млрд торгового оборота в этом году и выход на международные рынки. 
                Если вы — целеустремленный специалист, готовый учиться новым навыкам и учить других, мыслите не просто как исполнитель, а как владелец своего направления, то нам по пути!
              </p>
            </div>
          </div>
          <div className="after-desc-block">
            <span className='after-desc-block-text'>Лучше один раз увидеть:</span>
            <div className='after-desc-line-block'><hr/></div>
          </div>
          <ul className="about-company-links">
            <li>
              <a className='about-company-link' href="#">
                <span className='about-company-link-text'>Как устроена наша компания изнутри</span> 
                <svg className='about-company-link-arrow' width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.999999 9L5 5L1 1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
            </li>
            <li>
              <a className='about-company-link' href="#">
                <span className='about-company-link-text'>Как создавалась компания - необычная история</span>
                <svg className='about-company-link-arrow' width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.999999 9L5 5L1 1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
            </li>
            <li>
              <a className='about-company-link' href="#">
                <span className='about-company-link-text'>Читай о нас на 3D Today</span>
                <svg className='about-company-link-arrow' width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.999999 9L5 5L1 1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
            </li>
          </ul>
        </main>
        <footer className="page-footer">
          <div className="footer-head">
            <span className='footer-head-text'>Видео о нас</span>
            <div className='footer-head-btns'>
              <button className='footer-head-btn'>
                <svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 1L1 9.5L10 18" stroke="#4D4D4D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <button className='footer-head-btn'>
                <svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.999998 18L10 9.5L0.999999 0.999999" stroke="#4D4D4D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
          <div className="footer-videos">
            <div className="footer-videos-left"></div>
            <div className="footer-videos-right"></div>
          </div>
        </footer>
      </Fragment>
    )
  }
}