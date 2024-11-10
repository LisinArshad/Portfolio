import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


function Contact() {
  return (
    <>
    <div className=' mt-5 p-5'>
      <div className='mb-4 text-center'>
        <h1 className='fw-bold text-black'>Contact</h1>
      </div>
      <div className=''>
      <FloatingLabel controlId="floatingname" label="Your Name" className="mb-3">
        <Form.Control type="text"  />
      </FloatingLabel>
      <FloatingLabel className="mb-3" controlId="floatingPassword" label="Your Email">
        <Form.Control type="email" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingsubj" label="Subject" className="mb-3">
        <Form.Control type="text"  />
      </FloatingLabel>
      <FloatingLabel controlId="floatingTextarea2" label="Comments">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
        />
      </FloatingLabel>

      <div className='text-center mt-3'><button className='btn fw-bold rounded-5 w-50 btn-success'>Submit</button></div>
      </div>
    </div>
    </>
  )
}

export default Contact