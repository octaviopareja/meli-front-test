/*CSS*/
import "./scss/loading.scss";

import spinnerImg from "../../assets/spinner.svg";

export default function LoadingSpinner() {
  return (
    <div className="loading">
      <img src={spinnerImg} />
    </div>
  );
}
