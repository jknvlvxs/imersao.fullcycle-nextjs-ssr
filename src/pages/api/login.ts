import { NextApiRequest, NextApiResponse } from "next";
import { withIronSessionApiRoute } from "iron-session/next";
import ironConfig from "../../util/iron-config";

export default withIronSessionApiRoute(login, ironConfig);

async function login(req: NextApiRequest, res: NextApiResponse) {
    const {username, password} = req.body;

    const user = { id: 1, name: 'User'};
     
    if(username === "teste@teste.com" && password === "123456"){
        req.session.user = user

        await req.session.save();
        return res.status(200).json(user);
    }

    return res.status(401).json({message: 'Unauthenticated'});
}