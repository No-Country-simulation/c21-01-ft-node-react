import PropTypes from "prop-types";

export const TotalCount = ({ data }) => {
  const total = data.reduce((acc, entry) => {
    const amount = parseFloat(entry.amount) || 0;
    return acc + amount;
  }, 0);

  return (
    <div className="py-1">
      <span className="font-medium font-base text-cyan-800">Monto total: </span>
      ${total.toFixed(2)}
    </div>
  );
};
TotalCount.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      date: PropTypes.string,
      amount: PropTypes.string,
      errors: PropTypes.object,
    })
  ).isRequired,
};
