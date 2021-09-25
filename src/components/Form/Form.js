import React, { useReducer } from 'react';
import { Form as FormAntd } from 'antd';

import Input from '../Input/Input';
import Button from '../Button/Button';

const formReducer = (state, action) => {
  switch (action.type) {
    case 'set':
      return {
        ...state,
        [action.input]: action.payload,
      };
    default:
      return state;
  }
};

function Form(props) {
  const {
    formItems,
    initialState,
    buttonLabel,
    children,
    onFinish,
    ...restProps
  } = props;

  const [form, setForm] = useReducer(formReducer, initialState);

  const handleChange = e =>
    setForm({
      type: 'set',
      input: e.target.name,
      payload: e.target.value,
    });

  const loadFields = () =>
    formItems.map((item, index) => (
      <FormAntd.Item
        key={index}
        name={item.name}
        rules={[
          {
            required: true,
            message: item.ruleMessage,
          },
        ]}
      >
        <Input
          {...restProps}
          type={item.type}
          name={item.name}
          placeholder={item.placeholder}
          prefix={item.prefix}
          onChange={handleChange}
          value={form[item.name]}
        />
      </FormAntd.Item>
    ));

  return (
    <FormAntd onFinish={onFinish} {...restProps}>
      {loadFields()}
      {children}
      <Button htmlType="submit" type="primary">
        {buttonLabel}
      </Button>
    </FormAntd>
  );
}

Form.defaultProps = {
  className: 'login-form',
  buttonLabel: 'ENVIAR',
};

export default Form;
