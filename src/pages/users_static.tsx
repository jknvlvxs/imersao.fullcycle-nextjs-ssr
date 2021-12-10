import axios from "axios"
import { GetStaticProps, NextPage } from "next";
import Router from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";

interface User {
    name: string;
    id: number;
}

const fetcher = (url: string) => {
    return axios.get(url).then(res => res.data);
}

const UsersPage: NextPage = (props) => {
    const [users, setUsers] = useState<User[]>([]);

    const { data, error } = useSWR("http://localhost:3000/api/users/list", fetcher, {
        fallbackData: users,
        refreshInterval: 5
    });

    useEffect(() => {
        if(!data) return;

        setUsers(data);
    }, [data]);

    useEffect(() => {
        if(!error) return;

        if(error.response.status === 401){
            Router.push('/login');
        }
    }, [error]);

    return (
        data && <div>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li> 
                ))}
            </ul>
        </div>
    );
};

export default UsersPage;

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {
        }
    }
}