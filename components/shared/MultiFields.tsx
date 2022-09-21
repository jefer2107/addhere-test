import { ErrorMessage } from "formik";
import React, { FC } from "react";
import TextInput from "./TextInput";
import Autocomplete from "@material-ui/lab/Autocomplete";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { FormGroup, Grid } from "@material-ui/core";
import { AntSwitch } from "./SwitchField";
// import "date-fns";
// import DateFnsUtils from "@date-io/date-fns";
// import {
//   MuiPickersUtilsProvider,
//   KeyboardDatePicker,
// } from "@material-ui/pickers";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import classes from "../../styles/MultiFields.module.css";
import { IDataSource } from "../../interfaces/IDataSource";
import SelectButton from "../SelectButton";

export interface IField {
  name: string;
  type: string;
  placeholder: string;
  handleChange: any;
  handleBlur: any;
  values: any;
  errors: any;
  touched: any;
  setFieldValue: any;
  labelYes?: string;
  labelNo?: string;
  dataSource?: IDataSource[];
}

export interface ICheckField extends IField {
  checked: boolean;
}
export interface IBmiField extends IField {
  height: number;
  weight: number;
  setHeight: any;
  setWeight: any;
  setFieldValue: any;
}

export const ComponentField: FC<IField> = ({
  name,
  type,
  placeholder,
  handleChange,
  handleBlur,
  values,
  errors,
  touched,
  setFieldValue,
  labelYes,
  labelNo,
  dataSource,
}) => {
  const [checked, setChecked] = React.useState(false);
  const [height, setHeight] = React.useState(0);
  const [weight, setWeight] = React.useState(0);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    handleChange(event);
  };

  switch (type) {
    case "hidden":
      return (
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          value={values[name]}
        />
      );
    default:
    case "title":
      return (
        <TitleField
          name={name}
          type={type}
          placeholder={placeholder}
          handleChange={handleChange}
          handleBlur={handleBlur}
          values={values}
          errors={errors}
          touched={touched}
          setFieldValue={setFieldValue}
        />
      );
    case "intensity":
      return (
        <IntensityField
          name={name}
          type={type}
          placeholder={placeholder}
          handleChange={handleChange}
          handleBlur={handleBlur}
          values={values}
          errors={errors}
          touched={touched}
          setFieldValue={setFieldValue}
        />
      );
    case "text":
    case "number":
      return (
        <TxtField
          name={name}
          type={type}
          placeholder={placeholder}
          handleChange={handleChange}
          handleBlur={handleBlur}
          values={values}
          errors={errors}
          touched={touched}
          setFieldValue={setFieldValue}
        />
      );
    case "bmi":
      return (
        <BmiField
          name={name}
          type={type}
          placeholder={placeholder}
          handleChange={handleChange}
          handleBlur={handleBlur}
          values={values}
          errors={errors}
          touched={touched}
          setFieldValue={setFieldValue}
          weight={weight}
          setWeight={setWeight}
          height={height}
          setHeight={setHeight}
        />
      );
    case "check":
      return (
        <CheckField
          name={name}
          type={type}
          placeholder={placeholder}
          handleChange={onChange}
          handleBlur={handleBlur}
          values={values}
          errors={errors}
          touched={touched}
          labelYes={labelYes}
          labelNo={labelNo}
          checked={checked}
          setFieldValue={setFieldValue}
        />
      );
    case "date":
      return (
        <DateField
          name={name}
          type={type}
          placeholder={placeholder}
          handleChange={handleChange}
          handleBlur={handleBlur}
          values={values}
          errors={errors}
          touched={touched}
          setFieldValue={setFieldValue}
        />
      );
    case "select":
      return (
        <SelectField
          name={name}
          type={type}
          placeholder={placeholder}
          handleChange={handleChange}
          handleBlur={handleBlur}
          values={values}
          errors={errors}
          touched={touched}
          setFieldValue={setFieldValue}
          dataSource={dataSource.sort((a, b) => a.label.localeCompare(b.label))}
        />
      );
    case "autocomplete":
      return (
        <AutoCompleteField
          name={name}
          type={type}
          placeholder={placeholder}
          handleChange={handleChange}
          handleBlur={handleBlur}
          values={values}
          errors={errors}
          touched={touched}
          setFieldValue={setFieldValue}
          dataSource={dataSource.sort((a, b) => a.label.localeCompare(b.label))}
        />
      );
  }
};

export const CheckField: FC<ICheckField> = ({
  name,
  type,
  placeholder,
  handleChange,
  handleBlur,
  values,
  errors,
  touched,
  labelYes,
  labelNo,
  checked,
}) => {
  return (
    <>
      {/* <Checkbox
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values[name]}
        error={errors[name] && touched[name] && errors[name]}
        success={!errors[name] && touched[name] ? "Valid" : ""}
      /> */}
      <FormGroup>
        <span className="text-gray-800 font-medium text-xl pb-2 pt-4">
          {placeholder}
        </span>
        <Grid component="label" container alignItems="center" spacing={1}>
          <Grid
            item
            className={` ${
              !checked ? "text-green-700 font-semibold" : "text-gray-400"
            }`}
          >
            {labelNo}
          </Grid>
          <Grid item>
            <AntSwitch
              checked={checked}
              onChange={handleChange}
              name={name}
              onBlur={handleBlur}
              value={values[name]}
              // error={errors[name] && touched[name] && errors[name]}
              // success={!errors[name] && touched[name] ? "Válido" : ""}
            />
          </Grid>
          <Grid
            item
            className={` ${
              checked ? "text-red-700 font-semibold" : "text-gray-400"
            }`}
          >
            {labelYes}
          </Grid>
        </Grid>
      </FormGroup>
      <ErrorMessage name={name} component="div" />
    </>
  );
};

export const TitleField: FC<IField> = ({
  name,
  type,
  placeholder,
  handleChange,
  handleBlur,
  values,
  errors,
  touched,
}) => {
  return (
    <>
      <div
        className="flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3"
        role="alert"
      >
        <svg
          className="fill-current w-4 h-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" />
        </svg>
        <p>{placeholder}</p>
      </div>
    </>
  );
};

export const TxtField: FC<IField> = ({
  name,
  type,
  placeholder,
  handleChange,
  handleBlur,
  values,
  errors,
  touched,
}) => {
  return (
    <>
      {/* <Field type="check" name={name} /> */}
      <TextInput
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values[name]}
        error={errors[name] && touched[name] && errors[name]}
        success={!errors[name] && touched[name] ? "Válido" : ""}
      />
      <ErrorMessage name={name} component="div" />
    </>
  );
};

export const IntensityField: FC<IField> = ({
  name,
  type,
  placeholder,
  handleChange,
  handleBlur,
  values,
  errors,
  touched,
  setFieldValue
}) => {
  const handleClick = (e, question, score) => {
    setFieldValue(name, score);
  };
  return (
    <>
      <SelectButton
        key={name}
        title={placeholder}
        detail=""
        score={0}
        question={null}
        numOfQuestions={null}
        onClick={handleClick}
      />
      <ErrorMessage name={name} component="div" />
    </>
  );
};

export const BmiField: FC<IBmiField> = ({
  name,
  type,
  placeholder,
  handleChange,
  handleBlur,
  values,
  errors,
  touched,
  weight,
  setWeight,
  height,
  setHeight,
  setFieldValue,
}) => {
  const calculateBmi = (weight: number, strHeight: number | string) => {
    if (!strHeight) {
      return 0;
    }
    height = Number(strHeight.toString().replace(",", "."));
    if (weight <= 0 || height <= 0) {
      return 0;
    }
    height = height < 3 ? height : height / 100;
    return Math.round(weight / Math.pow(height, 2));
  };

  return (
    <>
      <InputLabel id="demo-simple-select-label">{placeholder}</InputLabel>
      <div className="inline-flex space-x-2 my-4">
        <TextInput
          type="number"
          placeholder="Peso (kg)"
          onChange={(e: any) => {
            setWeight(e.target.valueAsNumber);
            const bmi = calculateBmi(e.target.valueAsNumber, height);
            setFieldValue(name, bmi < 22);
          }}
          onBlur={(e: any) => {
            const bmi = calculateBmi(weight, height);
            setFieldValue(name, bmi < 22);
          }}
          error={errors[name] && touched[name] && errors[name]}
          success={!errors[name] && touched[name] ? "Válido" : ""}
        />
        <TextInput
          type="text"
          name={name}
          placeholder="Altura (metros)"
          onChange={(e: any) => {
            setHeight(e.target.value);
            const bmi = calculateBmi(weight, e.target.value);
            setFieldValue(name, bmi < 22);
          }}
          onBlur={(e: any) => {
            const bmi = calculateBmi(weight, height);
            setFieldValue(name, bmi < 22);
          }}
          error={errors[name] && touched[name] && errors[name]}
          success={!errors[name] && touched[name] ? "Válido" : ""}
        />
        <span
          className={`${
            calculateBmi(weight, height) < 22 ? "text-red-600" : null
          } h-2 font-bold text-blue-900 text-4xl mx-3`}
          id="demo-simple-select-label"
        >
          {calculateBmi(weight, height)}
        </span>
      </div>

      <ErrorMessage name={name} component="div" />
    </>
  );
};

export const SelectField: FC<IField> = ({
  name,
  type,
  placeholder,
  handleChange,
  handleBlur,
  values,
  errors,
  touched,
  dataSource,
}) => {
  return (
    <div className="w-full">
      <FormControl className="w-full">
        <InputLabel id="demo-simple-select-label">{placeholder}</InputLabel>
        <Select
          className={classes.select}
          name={name}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={values[name]}
          error={errors[name] && touched[name] && errors[name]}
          onBlur={handleBlur}
          onChange={handleChange}
        >
          {dataSource?.map((item, key) => (
            <MenuItem key={key} value={item.value || item.label}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <ErrorMessage name={name} component="div" />
    </div>
  );
};

export const AutoCompleteField: FC<IField> = ({
  name,
  type,
  placeholder,
  handleChange,
  handleBlur,
  values,
  errors,
  touched,
  dataSource,
  setFieldValue,
}) => {
  return (
    <div className="w-full">
      <Autocomplete
        id="combo-box-demo"
        options={dataSource}
        getOptionLabel={(option) => option.label}
        style={{ width: "100%" }}
        // onBlur={handleBlur}
        onChange={(e: any) => {
          // console.log("event", e);
          handleChange(e.target.textContent);
          setFieldValue(name, e.target.textContent);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            name={name}
            label={placeholder}
            variant="outlined"
            value={values[name]}
            error={errors[name] && touched[name] && errors[name]}
          />
        )}
      />
      <ErrorMessage name={name} component="div" />
    </div>
  );
};

export const DateField: FC<IField> = ({
  name,
  type,
  placeholder,
  handleChange,
  handleBlur,
  values,
  errors,
  touched,
  setFieldValue,
}) => {
  return (
    <div className="flex flex-col">
      <span className="text-gray-800 font-medium text-xl pb-2 pt-4">
        {placeholder}
      </span>
      <DatePicker
        className="z-50"
        name={name}
        selected={values[name]}
        dateFormat="dd/MM/yyyy"
        onChange={(date: Date) => {
          handleChange(date.toISOString());
          setFieldValue(name, date);
        }}
        peekNextMonth
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
      />

      {/* <TextField
        name={name}
        placeholder={placeholder}
        type="date"
        value={values[name]}
        onChange={handleChange}
        // onChange={(e: any) => {
        //   console.log(e);
        //   const dt = e.target.valueAsDate;
        //   setFieldValue(
        //     name,
        //     `${dt.getFullYear()}-${('0'+dt.getMonth().toString()).substr(-2)}-${('0'+dt.getDate().toString()).substr(-2)}`
        //   );
        // }}
        // className={classes.textField}
      /> */}
      {/* <Field type="date" name={name} /> */}
      {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          name={name}
          disableToolbar
          variant="inline"
          format="dd/MM/yyyy"
          margin="normal"
          id="date-picker-inline"
          label={placeholder}
          clearable
          autoOk
          onChange={(value) => {
            // handleChange(value?.toISOString());
            setFieldValue(name, value);
          }}
          value={values[name]}
          KeyboardButtonProps={{
            "aria-label": "altere a data",
          }}
          rifmFormatter={dateFormatter}
        />
      </MuiPickersUtilsProvider> */}
      {/* <DatePicker
        style={{ width: "100%" }}
        date={values[name]}
        mode="date"
        format="YYYY-MM-DD"
        minDate={Date.now.toString()}
        maxDate="2050-06-01"
        confirmBtnText="Confirmar"
        cancelBtnText="Cancelar"
        showIcon={true}
        customStyles={{
          dateInput: {
            marginLeft: 0,
            borderColor: "#fff",
          },
        }}
        onDateChange={handleChange}
        onTouch={touched}
      /> */}
      <ErrorMessage name={name} component="div" />
    </div>
  );
};

const dateFormatter = (str: any) => {
  return str;
};
