import React from "react";
import Box from "../atoms/Box";
import PropTypes from "prop-types";

interface Props {
  icon: any,
  title: any,
  footer: any,
  value: any
  color: string,
}

const StatsCard: React.FC<Props> = ({icon, title, value, footer, color = 'primary'}) => {

  return (
    <Box rounded type={'paper'} elevation={'1'}>
      <div className='flex p-5'>
        {icon
          ? <div className={`flex p-3 bg-${color}-500 rounded-lg items-center justify-center mr-6`}>
            {icon}
          </div>
          : null}
        <div>
          <h6 className='text-gray-600 leading-none mb-2 truncate'>{title}</h6>
          <h4 className="font-bold leading-none truncate">{value}</h4>
        </div>
      </div>
      <div className='bg-gray-100 py-3 px-5 truncate rounded-b-lg'>
        {footer}
      </div>
    </Box>
  );
}

StatsCard.propTypes = {
  icon: PropTypes.any,
  title: PropTypes.any,
  value: PropTypes.any,
  footer: PropTypes.any,
  color: PropTypes.string.isRequired
}

StatsCard.defaultProps = {
  color: 'primary'
}


export default StatsCard
