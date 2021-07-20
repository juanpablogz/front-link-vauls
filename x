import React from 'react'
import { useForm } from 'react-hook-form'
import { Row, Col } from 'antd';
import 'antd/dist/antd.css'; 
import '../../assets/form.css'

export const RegisterForm = () => {
  const { register, handleSubmit, watch, formState: { errors }} = useForm();
  const onSubmit = data => console.log(data)
  console.log(watch('example'));
  return (
    <div>
      <Row>
        <Col span={{ xs: 16, sm: 16, md: 16, lg: 16 }}>
          <form onSubmit={handleSubmit(onSubmit)}>
          <input defaultValue="test" {...register("example")} />
          
          <input {...register("exampleRequired", { required: true })} />
          {errors.exampleRequired && <span>This field is required</span>}
          
          <input type="submit" />

        </form>
        </Col>
        <Col span={{ xs: 8, sm: 8, md: 8, lg: 8 }}>
          <h1>dasdas</h1>
        </Col>
      </Row>
    </div>
  )
}
