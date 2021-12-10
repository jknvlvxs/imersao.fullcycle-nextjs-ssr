import axios from "axios"
import { withIronSessionSsr } from "iron-session/next";
import { GetServerSideProps, NextPage } from "next";
import ironConfig from "../util/iron-config";

interface User {
    name: string;
    id: number;
}

interface UserPageProps {
    users: User[];
}

const UsersPage: NextPage<UserPageProps> = (props) => {
    const {users} = props;

    return (
        <div>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li> 
                ))}
            </ul>
        </div>
    );
};

export default UsersPage;



export const getServerSideProps: GetServerSideProps = withIronSessionSsr(async (context) => {
    
    const {session} = context.req;

    if(!session.user) {
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        }
    }

    const {data} = await axios.get('http://localhost:3000/api/users/list', {
        headers: {
            cookie: context.req.headers.cookie as 'string'
        }
    })

    return {
        props: {
            users: data
        }
    }
}, ironConfig);