import React from 'react';
import format from 'date-fns/format';
import elLocale from 'date-fns/locale/el';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

type Props = {
  popoverProps: Object,
};

class LocalizedUtils extends DateFnsUtils {
  getCalendarHeaderText(date) {
    return format(date, 'LLLL yyyy', { locale: this.locale });
  }
}

const DatePicker = ({ popoverProps, ...rest }: Props) => (
  <MuiPickersUtilsProvider utils={LocalizedUtils} locale={elLocale}>
    <KeyboardDatePicker
      {...rest}
      disableToolbar
      variant="inline"
      format="dd/MM/yyyy"
      id="date-picker-inline"
      value={rest.input.value}
      onChange={(date) => rest.input.onChange(date)}
      KeyboardButtonProps={{
        'aria-label': 'change date',
      }}
      PopoverProps={popoverProps}
    />
  </MuiPickersUtilsProvider>
);

export default DatePicker;
