import React from 'react'
import Link from 'next/link'


const Login = ()=>{
    return(
        <> 
            <button className="btn-login">
                <Link href="/">
                    <a>
                        Login
                    </a>
                </Link>
            </button>
        </>
    )
}

export default Login;