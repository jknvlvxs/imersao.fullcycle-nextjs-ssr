import axios from "axios"
import { GetServerSideProps, NextPage } from "next";

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

export const getServerSideProps: GetServerSideProps = async (context) => {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')

    return {
        props: {
            users: data
        }
    }
}