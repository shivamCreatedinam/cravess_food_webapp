import { Link } from 'react-router-dom'

import css from './SmallCard.module.css';

let SmallCard = ({ imgSrc, text, link, subtext }) => {
    return <Link to={link} className={css.card}>
        <div className={css.imgBox} >
            <img src={imgSrc} alt="card image" className={css.img} />
        </div>
        <div className={css.txtBx}>
            <div className={css.txt}>{text}</div>
        </div>
        <div>{subtext}</div>
        
    </Link>
}

export default SmallCard;