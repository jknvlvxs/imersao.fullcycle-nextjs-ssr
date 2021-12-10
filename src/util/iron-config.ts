const ironConfig: { password: string, cookieName: string, cookieOptions: object } = {
    password: 'vj668dRE)Ac5a^2Ly^(mrAT=+`+czk^2',
    cookieName: 'fc-cookie',
    cookieOptions: {
        secure: process.env.NODE_ENV === 'production' ? true : false
    }
}

declare module "iron-session" {
    interface IronSessionData{
        user?: {
            id: number;
            name: string;
        };
    }
}

export default ironConfig;