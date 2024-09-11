import React, {useState} from 'react';

const MyForm = () =>{
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });
    const handleChange = (event)=>{
        const {name, value} = event.target;
        setFormData({...formData, [name]:value

        });
    };
    const handleSubmit = (event)=>{
        event.preventDefault();
        console.log('form data: ', formData);
    };
    return (
        <form onSubmit={handleSubmit}>
             <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
        </form>
    );
}

export default MyForm;
