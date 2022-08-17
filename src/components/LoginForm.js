import React,{useState} from 'react';

function LoginForm({ Login, error }) {
    const [details, setDetails] = useState({name:"", email:"", password:""})

    const submitHandler = e =>{
        e.preventDefault();
        Login(details);
    }

    return (
        <form onSubmit={submitHandler} className="w-50">  
            <div className=' form-control bg-dark text-light text-opacity-75 p-5'>
                <h2 className='display-3 text-primary pb-4'>Login</h2>
                {(error != "") ? (<div className='text-danger'>{error}</div>) : ""}
                <div className='form-group mb-3'>
                    <label htmlFor='name' className='formlabel'>Name:</label>
                    <input type="text" name="name" id="name" className="form-control" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}></input>
                </div>
                <div className='form-group mb-3'>
                    <label htmlFor='email' className='formlabel'>Email:</label>
                    <input type="email" name="email" id="email" className="form-control" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}></input>
                </div>
                <div className='form-group' className='formlabel'>
                    <label htmlFor='password'>Password:</label>
                    <input type="password" name="password" id="password" className="form-control" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}></input>
                </div>

                <input type="submit" value="LOGIN" class="btn btn-primary mt-4"></input>
            </div>
        </form>
    );
}

export default LoginForm;