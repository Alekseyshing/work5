import { useRouteError } from "react-router-dom";
import './error.css'

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Упс!</h1>
      <p>Извините, произошла неожиданная ошибка</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}