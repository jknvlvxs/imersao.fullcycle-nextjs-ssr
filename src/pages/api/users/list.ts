import axios from "axios";
import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiRequest, NextApiResponse } from "next";
import ironConfig from "../../../util/iron-config";

export default withIronSessionApiRoute(userList, ironConfig);

async function userList(req: NextApiRequest, res: NextApiResponse){
    if(!req.session.user)
        return res.status(401).json({message: "Unauthenticated"});

    const {data} = await axios.get('https://jsonplaceholder.typicode.com/users');
    res.status(200).json(data);
}