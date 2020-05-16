import 'date-fns';
import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  DateTimePicker,
  DatePicker
} from '@material-ui/pickers';


const CustomDateTimePicker = (props) => {
  // const [isOpen, setIsOpen] = useState(false);
  const { isOpen, setIsOpen, onDatePickerClose } = props;
  const [selectedDate, handleDateChange] = useState("2018-01-01T00:00:00.000Z");

  return (
    <div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DateTimePicker
          open={isOpen}
          onOpen={() => setIsOpen(true)}
          onClose={() => { onDatePickerClose() }}
          value={selectedDate}
          onChange={handleDateChange}
          TextFieldComponent={() => null}
        />
      </MuiPickersUtilsProvider>
    </div>
  );
}

export default CustomDateTimePicker;