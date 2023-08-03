import { Button, Checkbox, DatePicker, Form, Input, Select } from "antd";
import React from "react";
import "./style.css";
const App = () => {

  const validatePassword = (_, value) => {
    if (value && value.includes("A")) {
      return Promise.reject(new Error('Password must be at least 8 characters long'));
    }
    return Promise.resolve();
  };
  

  return (
    <div className="mainDiv">
      <header>
        <Form className="form" labelCol={{ span: 10 }} wrapperCol={{ span: 8 }}>
          <Form.Item
            name="fullName"
            label="FullName"
            rules={[
              {
                required: true,
                message: "Please enter a name",
              },
              {
                min: 6,
                message: "Please enter at least 6 characters",
              },
              {
                whitespace: true,
                message: "Empty space is not allowed",
              },
            ]}
            hasFeedback
          >
            <Input className="formInput" placeholder="Enter Your Name" />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                message: "Please enter a email",
              },
              {
                type: "email",
                message: "Please enter valid email",
              },
            ]}
            hasFeedback
          >
            <Input className="formEmail" placeholder="Enter Your Email" />
          </Form.Item>
          <Form.Item
            label="Password"
            labelCol={{ span: 10 }}
            wrapperCol={{ span: 8 }}
            name="password"
            rules={[
              {
                validator: validatePassword
              
              }
            ]}
            hasFeedback
           
          >
            <Input.Password className='formPassword' placeholder='Enter Your password' />
          </Form.Item>
          <Form.Item name="conFirmPassword" label="ConFirm Password"
          dependencies={['password']}
           rules={[
            {
              required: true,
              message: "Please enter a strong password",
            },
              ({getFieldValue})=>({validator(_,value){
                if(!value||getFieldValue('password')===value){
                  return Promise.resolve()
                }
                return Promise.reject("please recheck the password")
              }})
          ]}
          hasFeedback
        > 
            <Input.Password
              className="formConfirmPassword"
              placeholder="Enter Your conFirm Password"
            />
          </Form.Item>
          <Form.Item className="formGender" name="gender" label="Gender"
          requiredMark="optional"
          >
            <Select className="formOption" >
              <Select.Option value="male">Male</Select.Option >
              <Select.Option value="female">FeMale</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name="dob" label="D.O.B"
          rules={[{
            required: true,
            message:"Please select your date of birth"
          }]} hasFeedback>
            <DatePicker
              picker="date"
              style={{ width: "100%" }}
              className="formDatePicker"
              placeholder="Select D.O.B"
            />
          </Form.Item>
          <Form.Item name="url" label="WebSite" 
          rules={[{
            required: true,
            message:"Please enter a URL"
          },{
            type:'url',
            message:"Please enter a valid URL"
          }]} hasFeedback>
            <Input className="formWebSite" placeholder="Enter Your URL" />
          </Form.Item>
          <Form.Item
            className="formCheckBox"
            name="agreement"
            wrapperCol={{ span: 24 }}
            // valuePropName="checked"
            rules={[
              // {
              //   validator:(_,value)=>{
              //     value? Promise.resolve(): Promise.reject("Please agree to terms and conditions")
              //   }
              // },
              {
              required: true,
              message:"please agree to terms and conditions"
            }]}
          >
            <Checkbox >
              {""}
              Agree to our <a href="#">Terms & Condition</a>
            </Checkbox>
          </Form.Item>
          <Form.Item className="formButton" wrapperCol={{ span: 24 }}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </header>
    </div>
  );
};

export default App;
