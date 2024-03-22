import sprite from '../icons/sprite.svg';

export const SvgIcon = ({ id, style, ...props }) => {
    return (
      <svg style={style}>
        <use xlinkHref={`${sprite}#icon-${id}`} />
      </svg>
    );
};


