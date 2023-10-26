import {
  useForm,
  SubmitHandler,
  FieldError,
  UseFormRegisterReturn,
} from 'react-hook-form';
import { Hotel } from '../components/HotelCard';
import styled from 'styled-components';
import { useHotelData } from '../hooks/network/useHotelData';

export function CreateHotel() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Hotel>();
  const { mutation } = useHotelData();

  const onSubmit: SubmitHandler<Hotel> = (data) => {
    console.log(data);
    mutation.mutate(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder="address1"
        register={{ ...register('address1', { required: true }) }}
        error={errors.address1}
      />

      <Input
        placeholder="countryCode"
        register={{ ...register('countryCode', { required: true }) }}
        error={errors.countryCode}
      />

      <Input
        placeholder="shortDescription"
        register={{ ...register('shortDescription', { required: true }) }}
        error={errors.shortDescription}
      />

      <button type="submit">Submit</button>
    </Form>
  );
}

interface InputProps {
  error: FieldError | undefined;
  register: UseFormRegisterReturn<string>;
  placeholder: string;
}

function Input({ placeholder, register, error }: InputProps) {
  return (
    <>
      <InputStyle placeholder={placeholder} {...register} />
      {error && <Error>This field is required</Error>}
    </>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputStyle = styled.input`
  padding: 15px 10px;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 1px solid #d0d0d0;
`;

const Error = styled.span`
  color: red;
`;
