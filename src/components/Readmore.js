import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

const Readmore = ({
  children, lines = 100, more = 'Read more', less = 'Show less',
}) => {
  const [isTruncated, setIsTruncated] = useState(true);
  const toggleLines = useCallback(() => setIsTruncated((prev) => !prev), []);

  return (
    <div>
      {isTruncated ? children.slice(0, lines) : children}
      <button type="button" onClick={toggleLines} className="text-lg text-christin-secondary font-light">
        {isTruncated ? more : less}
      </button>
    </div>
  );
};

Readmore.propTypes = {
  children: PropTypes.string.isRequired,
  lines: PropTypes.number.isRequired,
  more: PropTypes.string.isRequired,
  less: PropTypes.string.isRequired,
};
export default Readmore;
