/**
 * Validates input
 * @param {string} input The input to validate.
 */
const isRequired = (input) => {
  return input.trim() === ""
    ? "This value is requierd"
    : true;
};

module.exports = { isRequired };
