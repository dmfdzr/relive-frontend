import PropTypes from 'prop-types';

const Column = ({ alignment, nama, pesan }) => {
  return (
    <div className={`flex flex-col ${alignment} space-y-2`}>
      <p className="text-black font-medium">{nama}</p>
      <div className="bg-green-200 p-3 rounded-lg max-w-xs md:max-w-md lg:max-w-lg">{pesan}</div>
    </div>
  );
};

Column.propTypes = {
  alignment: PropTypes.string,
  nama: PropTypes.string,
  pesan: PropTypes.string,
};

Column.defaultProps = {
  alignment: 'items-start',
  nama: 'nama',
  pesan: 'pesan',
};

export default Column;
