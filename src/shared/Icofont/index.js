import React from 'react';
import { iconsmap } from '../../utils/iconsmap';

const Icofont = ({ icon, size }) => {
  const { icon: iconName, color: iconColor } = iconsmap[icon];
  return (
    <span 
      className={
        'icofont-' + iconName
        + ' Icofont'
      } 
      style={{ fontSize: size, color: iconColor }}
    />
  )
}

Icofont.defaultProps = {
  size:   20
}

export default Icofont;
