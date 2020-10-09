import React from 'react'
import Link from 'next/link'


const SignUp = ()=>{
    return(
        <> 
            <button className="btn-signup">
                <Link href="/">
                    <a>
                        Sign Up
                    </a>
                </Link>
            </button>
        </>
    )
}

export default SignUp;