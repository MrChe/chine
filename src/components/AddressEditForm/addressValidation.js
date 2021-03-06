import memoize from 'lru-memoize';
import { createValidator, maxLength } from 'utils/validation';

const addressValidation = createValidator({
  company: [maxLength(255)],
  aptFloorSuite: [maxLength(50)],
  notes: [maxLength(255)]
});
export default memoize(10)(addressValidation);

