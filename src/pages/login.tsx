import axios from "axios";
import { useRouter } from "next/dist/client/router";
import { FormEvent } from "react";

const LoginPage = () => {

    const router = useRouter();

    async function onSubmit(event: FormEvent) {
        event.preventDefault();
        const username = (document.querySelector("#username") as HTMLInputElement).value; 
        const password = (document.querySelector("#password") as HTMLInputElement).value; 
        
        try {
            const {data} = await axios.post("http://localhost:3000/api/login", {username, password});
            router.push('/users');
        } catch (error){
            console.log(error);
            alert('Login Error')
        }
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input id="username" type="text" placeholder="Usuário"/> <br/> <br/>
                <input id="password" type="password" placeholder="Senha"/> <br/> <br/>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;