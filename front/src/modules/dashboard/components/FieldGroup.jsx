import PropTypes from "prop-types";
import { entryValidationSchema } from "../schemas/validationSchemas";

export const FieldGroup = ({ data, setData }) => {
  const handleChange = async (index, field, value) => {
    const updatedEntries = [...data];

    if (!updatedEntries[index]) {
      console.error("Entrada no válida en el índice:", index);
      return;
    }

    updatedEntries[index][field] = value;

    try {
      await entryValidationSchema.validateAt(field, { [field]: value });
      updatedEntries[index].errors[field] = "";
    } catch (validationError) {
      updatedEntries[index].errors = {
        ...updatedEntries[index].errors,
        [field]: validationError.message,
      };
    }

    setData(updatedEntries);
  };

  const handleAddField = () => {
    if (data.length < 8) {
      setData([
        ...data,
        { id: data.length + 1, title: "", date: "", amount: "", errors: {} },
      ]);
    }
  };

  return (
    <div>
      {data.map((entry, index) => (
        <>
          <div key={entry.id} className="flex flex-row gap-5 w-full pt-4">
            <div className="w-60 justify-start">{entry.id}</div>
            <div className="w-60 justify-start">
              <input
                type="text"
                placeholder="Título"
                value={entry.title}
                onChange={(e) => handleChange(index, "title", e.target.value)}
              />
              {entry.errors?.title && (
                <p style={{ color: "red" }}>{entry.errors.title}</p>
              )}
            </div>
            <div className="w-60 justify-start">
              <input
                type="date"
                value={entry.date}
                onChange={(e) => handleChange(index, "date", e.target.value)}
              />
              {entry.errors?.date && (
                <p style={{ color: "red" }}>{entry.errors.date}</p>
              )}
            </div>
            <div className="w-60 justify-start">
              <span>$ </span>
              <input
                type="text"
                placeholder="Monto"
                value={entry.amount}
                onChange={(e) => handleChange(index, "amount", e.target.value)}
              />
              {entry.errors?.amount && (
                <p style={{ color: "red" }}>{entry.errors.amount}</p>
              )}
            </div>
          </div>
          <hr className="border-b border-gray-200" />
        </>
      ))}
      {data.length < 8 && (
        <button className="pt-4" type="button" onClick={handleAddField}>
          +
        </button>
      )}
    </div>
  );
};
FieldGroup.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      date: PropTypes.string,
      amount: PropTypes.string,
      errors: PropTypes.object,
    })
  ).isRequired,
  setData: PropTypes.func.isRequired,
};
