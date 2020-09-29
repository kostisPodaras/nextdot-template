import TextField from '@material-ui/core/TextField';

import withForm from './withForm';
import { mapProps } from './utils';

const restrictMUIComponentProps = ({ defaultValue, ...rest }) => mapProps(rest);

export default withForm(restrictMUIComponentProps)(TextField);
