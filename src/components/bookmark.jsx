import React from 'react';
import { White, Black } from './icon/icom';

const Bookmark = ({bookmark}) => {
    return ( <>{bookmark ? White : Black}</> );
}
 
export default Bookmark;