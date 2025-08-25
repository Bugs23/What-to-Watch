import { Link } from "react-router-dom";

import EmptyPage from "../components/EmptyPage/EmptyPage";
import { IoAddCircle } from "react-icons/io5";

export default function WatchlistPage() {
  return (
    <EmptyPage>
      <h2 className="empty-page__message">
        Your watchlist is looking a little empty...
      </h2>
      <Link to="/" className="link">
        <div className="empty-page__sub-message">
          <IoAddCircle size={"30px"} />
          <h3 className="empty-page__sub-message__message">
            Let’s add some movies!
          </h3>
        </div>
      </Link>
    </EmptyPage>
  );
}
