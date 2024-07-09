import { Link } from "react-router-dom"

export default function Footer(){
    return(
        <div className="bg-slate-100 p-4">
            <h1 className="text-center">All Rights Reserved &copy; Perfexa Advisors LLP</h1>
            
            <p className="text-center space-x-3 m-2">
            Find us on Social
            </p>
            <p className="flex justify-center space-x-6 m-2">
                <Link to='https://github.com/aatifahmad123'><img src="/github.png" alt="Github" className="w-6 h-6"/></Link>
                <Link to='https://www.linkedin.com/in/aatif-ahmad-2b8862282/'><img src="/linkedin.png" alt="Linkedin" className="w-6 h-6"/></Link>
                <Link to='https://x.com/ByteKnight18'><img src="/twitter.png" alt="twitter" className="w-6 h-6"/></Link>
            </p>
        </div>
    )
}