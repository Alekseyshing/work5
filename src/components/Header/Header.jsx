import ArrowIcon from "../Icons/ArrowIcon"
import MessageIcon from "../Icons/MessageIcon"
import "./header.css"

const Header = ({ text }) => {
  return (
    <div className="header">
      <div className="header_text">
        <span>Главная</span>
        <div className="header_arrow">
          <ArrowIcon />
        </div>
        <span>{text}</span>
      </div>
      <div className="header_right">
        <button type="button" className="header_mail"><MessageIcon /></button>
        <div className="header_user">
          <div className="header_user--avatar"></div>
          <span className="header_user--name">
            Максим Добжанский
          </span>
        </div>
      </div>
    </div>
  )
}

export default Header
