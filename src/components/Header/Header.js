import { useState } from "react";
import { useDispatch } from 'react-redux';
import { loadProductSearch, loadProduct } from './../../store/products'

import magnifying_glass from "../../assets/images/magnifying_glass.png";
import magnifying_close from "../../assets/images/x-lg.svg";
import "./styles.scss";

const Header = ({ product }) => {

  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const goToProduct = () => {
    if (product && product.length > 0) {
      var productFilter = product.filter(p => { return p.title.indexOf(search) > -1 })
      dispatch(
        loadProductSearch(productFilter)
      )
    }
  };

  const goToClear = () => {
    setSearch("")
    dispatch(
      loadProduct()
    )
  }

  return (
    <div>
      <div className="header-container">

        <div className="header-logo">
          <svg focusable="false" aria-hidden="true" class="ui-inline-svg" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 856 143" preserveAspectRatio="xMinYMid meet"><path fill="#95BF46" d="M107.33 27.153c-.096-.7-.71-1.09-1.216-1.13-.507-.043-11.218-.837-11.218-.837s-7.44-7.385-8.255-8.202c-.81-.817-2.41-.57-3.03-.387l-4.16 1.286C76.96 10.73 72.58 4.16 64.86 4.16c-.212 0-.432.01-.652.022C62.014 1.28 59.296.02 56.948.02c-17.972 0-26.56 22.467-29.25 33.884-6.985 2.163-11.946 3.702-12.58 3.9-3.898 1.224-4.02 1.347-4.532 5.02C10.2 45.604 0 124.484 0 124.484l79.48 14.89 43.062-9.315S107.425 27.85 107.33 27.15zM75.052 19.24c-1.996.62-4.264 1.32-6.724 2.082.002-.474.003-.94.003-1.45 0-4.444-.61-8.022-1.6-10.858 3.98.498 6.63 5.022 8.33 10.227zM61.794 9.895c1.104 2.77 1.824 6.744 1.824 12.107 0 .275-.002.527-.004.78l-13.89 4.3C52.4 16.76 57.41 11.776 61.794 9.895zm-5.34-5.053c.776 0 1.557.264 2.306.78C53 8.33 46.825 15.155 44.218 28.787l-10.98 3.4C36.293 21.787 43.545 4.84 56.454 4.84z"></path><path fill="#5F8E3E" d="M106.113 26.022c-.507-.042-11.218-.836-11.218-.836s-7.44-7.385-8.255-8.202c-.305-.305-.717-.46-1.148-.528l-6.01 122.92 43.06-9.315s-15.12-102.2-15.214-102.9c-.096-.7-.71-1.09-1.217-1.13z"></path><path fill="#FFF" d="M64.86 49.817l-5.31 15.796S54.9 63.13 49.196 63.13c-8.36 0-8.78 5.246-8.78 6.568 0 7.214 18.804 9.978 18.804 26.875 0 13.294-8.432 21.856-19.802 21.856-13.643 0-20.62-8.5-20.62-8.5l3.653-12.07s7.18 6.16 13.23 6.16c3.96 0 5.56-3.12 5.56-5.39 0-9.41-15.43-9.83-15.43-25.3 0-13.02 9.34-25.61 28.2-25.61 7.27 0 10.86 2.08 10.86 2.08zm107.883 29.61c-4.294-2.33-6.503-4.294-6.503-6.994 0-3.436 3.068-5.644 7.853-5.644 5.575 0 10.554 2.33 10.554 2.33l3.927-12.03s-3.61-2.82-14.235-2.82c-14.79 0-25.04 8.46-25.04 20.37 0 6.75 4.78 11.9 11.16 15.58 5.15 2.94 6.99 5.03 6.99 8.1 0 3.19-2.58 5.76-7.37 5.76-7.13 0-13.87-3.68-13.87-3.68l-4.17 12.02s6.22 4.17 16.69 4.17c15.21 0 26.13-7.49 26.13-20.99 0-7.24-5.52-12.4-12.15-16.2zm60.62-25.277c-7.485 0-13.376 3.558-17.915 8.958l-.246-.123 6.503-33.99H204.77l-16.442 86.51h16.934l5.644-29.574c2.208-11.16 7.976-18.03 13.376-18.03 3.803 0 5.276 2.58 5.276 6.26 0 2.33-.246 5.15-.736 7.49l-6.38 33.87h16.934l6.626-34.97c.735-3.68 1.227-8.1 1.227-11.04 0-9.57-5.04-15.34-13.87-15.34zm52.153 0c-20.37 0-33.868 18.406-33.868 38.898 0 13.13 8.098 23.682 23.314 23.682 20.002 0 33.5-17.915 33.5-38.898 0-12.15-7.118-23.682-22.946-23.682zm-8.345 49.573c-5.76 0-8.22-4.91-8.22-11.043 0-9.694 5.03-25.524 14.24-25.524 6.02 0 7.98 5.154 7.98 10.185 0 10.44-5.03 26.39-13.99 26.39zm74.61-49.573c-11.43 0-17.91 10.062-17.91 10.062h-.24l.98-9.08h-14.97c-.73 6.135-2.08 15.46-3.43 22.455l-11.78 61.968h16.94l4.67-25.033h.368s3.48 2.208 9.94 2.208c19.88 0 32.89-20.37 32.89-40.985 0-11.41-5.03-21.595-17.423-21.595zm-16.19 49.818c-4.39 0-6.99-2.453-6.99-2.453l2.83-15.83c1.97-10.553 7.49-17.548 13.38-17.548 5.15 0 6.75 4.786 6.75 9.325 0 10.923-6.5 26.506-15.95 26.506zm57.8-74.115c-5.4 0-9.69 4.295-9.69 9.817 0 5.03 3.19 8.467 7.98 8.467h.25c5.28 0 9.82-3.56 9.94-9.817 0-4.908-3.31-8.467-8.46-8.467zm-23.68 85.65h16.94L398.17 55.5h-17.06m60.126-.123h-11.78l.613-2.822c.98-5.767 4.41-10.92 10.06-10.92 3.01 0 5.4.857 5.4.857l3.31-13.253s-2.95-1.48-9.21-1.48c-6.02 0-12.03 1.72-16.57 5.64-5.77 4.91-8.47 12.02-9.82 19.14l-.49 2.82h-7.85l-2.46 12.76h7.85l-8.96 47.36h16.93l8.96-47.37h11.66l2.33-12.76zm25.4 41.353h-.245c-.32-4.688-4.17-41.232-4.17-41.232h-17.79l10.19 55.097c.25 1.227.13 1.964-.37 2.822-1.96 3.804-5.27 7.486-9.2 10.184-3.19 2.34-6.75 3.81-9.57 4.79l4.66 14.36c3.44-.73 10.56-3.56 16.57-9.2 7.73-7.24 14.85-18.4 22.21-33.62l20.74-44.42h-17.67s-10.58 26.67-15.34 41.23zm80.414-41.958c-7.932 0-15.368 5.08-20.697 13.262h-.248l1.86-12.02h-5.082c-.743 5.452-1.86 12.64-3.347 20.45l-11.898 63.33h5.33l4.71-25.655h.247c2.23 1.23 6.073 2.6 11.898 2.6 18.963 0 32.72-22.56 32.72-42.64 0-9.79-4.215-19.34-15.493-19.34zm-16.73 57.26c-4.835 0-8.8-1.24-11.527-3.348l3.842-20.45c3.347-17.97 14.377-28.753 22.804-28.753 8.8 0 11.52 7.94 11.52 15 0 15.25-10.91 37.56-26.65 37.56zm37.796-13.387c0 10.658 5.453 18.094 14.5 18.094 7.808 0 15.37-4.09 22.185-17.23h.25c-.86 6.69-1.61 12.39-1.48 15.99h5.21c-.25-6.32.5-15.87 2.6-27.02l6.32-31.98c-3.1-1.12-7.8-1.74-12.02-1.74-23.05 0-37.55 23.54-37.55 43.87zm39.164-16.483c-2.85 15.368-13.757 29.87-23.423 29.87-8.056 0-10.287-6.94-10.163-14.75.124-18.715 13.51-37.8 30.612-37.8 3.718 0 5.825.372 7.188.867l-4.214 21.81zm29.37-13.137h-.248c.744-5.205 1.24-9.17 1.61-13.013h-4.833c-.5 5.205-1.37 11.898-2.86 19.458l-7.56 40.032h5.33l5.7-30.24c2.48-13.014 11.15-24.788 18.96-24.788.86 0 1.48 0 1.98.124l1.11-5.7c-.62 0-1.49-.125-2.23-.125-7.44 0-13.39 6.32-16.98 14.252zm35.69 42.882c-3.72 0-5.33-2.107-5.33-5.577 0-3.223.496-6.32 1.24-10.287l6.567-35.446h14.005l.99-4.586H675.81l2.6-13.01-5.95 2.36-1.982 10.66h-8.675l-.867 4.59h8.552l-6.692 35.45c-.99 4.59-1.363 7.69-1.363 10.91 0 4.96 2.727 9.67 9.79 9.67 2.107 0 4.215-.37 5.826-.87l-.38-4.33c-1.12.38-2.36.5-4.34.5zm51.058-57.135c-8.18 0-15.616 4.71-20.82 13.386h-.25l1.736-12.145h-5.08c-.497 4.586-1.24 10.41-2.603 17.475l-7.93 42.014h5.33l5.83-31.604c2.6-14.377 13.88-24.292 21.82-24.292 7.31 0 9.79 4.462 9.79 10.658 0 3.1-.37 5.95-.86 8.676l-6.94 36.56h5.33l6.82-36.56c.62-3.223 1.12-6.197 1.12-9.17 0-11.28-7.434-14.998-13.26-14.998zm50.934 0c-16.98 0-29 22.432-29 39.535 0 11.402 4.834 22.308 18.715 22.308 7.436 0 13.137-2.354 16.236-4.462l-1.61-4.214c-2.728 1.61-7.19 3.96-13.758 3.96-6.32 0-10.906-3.35-13.013-10.04-1.24-4.34-1.115-12.15-.496-14.87 19.458.12 36.81-4.09 36.81-19.21-.004-6.69-4.094-13.02-13.884-13.02zm8.303 13.262c0 11.774-14.872 14.377-30.364 14.253 3.72-12.89 11.9-22.804 21.07-22.804 5.58 0 9.3 2.975 9.3 8.428v.13zm40.525-7.437l1.114-5.7c-.62 0-1.487-.125-2.23-.125-7.436 0-13.385 6.32-16.98 14.253h-.247c.743-5.205 1.24-9.17 1.61-13.013h-4.833c-.496 5.205-1.363 11.898-2.85 19.458l-7.56 40.032h5.328l5.7-30.24c2.48-13.014 11.155-24.788 18.964-24.788.868 0 1.488 0 1.983.123zm22.43-1.115c3.47 0 6.567 1.363 8.427 2.478L856 57.374c-1.735-1.363-5.7-2.602-9.79-2.602-10.536 0-18.095 7.56-18.095 16.855 0 5.577 3.223 10.906 9.17 14.75 5.578 3.593 8.057 7.187 8.057 13.136 0 6.816-5.33 12.393-13.137 12.393-4.338 0-8.304-1.735-10.41-3.347l-2.107 4.46c1.983 1.61 6.692 3.59 12.02 3.59 10.288 0 19.087-6.57 19.087-18.59 0-6.08-3.47-11.53-9.17-15.37-4.835-3.35-8.057-6.45-8.057-12.02 0-6.07 4.833-11.16 12.02-11.16z"></path></svg>
        </div>

        <div>
          <p>Ayuda</p>
        </div>
      </div>
      <div className="header-form">

        <div className="padding-div">
          <h1>Indicá el nombre del producto</h1>
        </div>

        <div className="input-container padding-div">
          <div className="flex-input">
            <button
              data-testid="search-button_0"
              className="header-button"
              type="submit"
              onClick={goToProduct}
            >
              <img
                className="header-icon"
                src={magnifying_glass}
                alt="magnifying glass"
              />
            </button>
            <input
              value={search}
              onChange={({ target }) => setSearch(target.value)}
              className="header-input"
              type="text"
              placeholder="Ej: dawn snow"
              data-testid="header-input"
            />
            <button
              data-testid="search-button_1"
              className="header-button btn-right"
              type="submit"
              onClick={goToClear}
            >
              <img
                className="header-icon"
                src={magnifying_close}
                alt="magnifying glass"
              />
            </button>
          </div>

          <div className="">
            <button
              data-testid="search-button_2"
              className="search-button"
              type="submit"
              onClick={goToProduct}
            >
              Buscar
            </button>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Header;
